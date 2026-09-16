/* Small, explicit events. No email addresses, question text or form contents. */
(() => {
    'use strict';
    const examState = /^\/nj(?:\/|$)/.test(location.pathname) ? 'NJ' : 'NY';
    const send = (name, fields = {}) => {
        if (typeof window.gtag === 'function') {
            window.gtag('event', name, {send_to: 'G-8SNVD5ZVG4', exam_state: examState, ...fields});
        }
    };
    let readySent = false;
    window.lrQuizReady = details => {
        if (readySent) return;
        readySent = true;
        send('quiz_ready', details);
        const target = document.getElementById('question');
        if (target && 'IntersectionObserver' in window) {
            const observer = new IntersectionObserver(entries => {
                if (entries.some(entry => entry.isIntersecting) && document.visibilityState === 'visible') {
                    send('quiz_view', {practice_topic: details.practice_topic});
                    observer.disconnect();
                }
            }, {threshold: 0.5});
            observer.observe(target);
        }
    };
    window.lrTopicSelect = topic => send('practice_topic_click', {practice_topic: topic, selection_method: 'quiz_picker'});
    let quizStarted = false;
    let leadSent = false;
    window.lrQuizAnswer = details => {
        const fields = {exam_state: details.exam_state, practice_topic: details.practice_topic};
        if (!quizStarted) {
            quizStarted = true;
            send('quiz_start', fields);
        }
        send('quiz_answer', {...fields, question_topic: details.question_topic, answer_correct: details.correct ? 1 : 0, question_number: details.answered});
        if (details.answered === 10) send('quiz_practice_10', fields);
    };
    // Called only by MailerLite's existing success callback, never a submit click.
    window.lrTrackLead = () => {
        if (leadSent) return;
        leadSent = true;
        send('generate_lead', {lead_source: 'daily_practice_form'});
    };
    document.addEventListener('click', event => {
        const link = event.target.closest('a[href]');
        if (!link) return;
        const url = new URL(link.href, location.href);
        if (url.hostname === 'payhip.com' && url.pathname === '/b/AzSap') {
            send('practice_pack_click', {item_id: 'AzSap'});
        } else if (url.origin === location.origin) {
            const category = url.searchParams.get('category');
            const knownTopics = ['Agency', 'Contracts', 'Valuation', 'Real Estate Practice', 'Fair Housing', 'Finance', 'Commercial Real Estate', 'Materials & Construction', 'Property Ownership', 'Property Characteristics', 'Legal Descriptions', 'Property Math', 'Space Measurement', 'Fixtures and Personal Property'];
            if (category && knownTopics.includes(category)) send('practice_topic_click', {practice_topic: category, destination_state: url.pathname.startsWith('/nj/') ? 'NJ' : 'NY'});
            if (url.pathname === '/ny-exam-tips.html') send('exam_tips_click', {destination_state: 'NY'});
        }
    });
})();
