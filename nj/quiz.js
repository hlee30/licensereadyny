/* Shared NY/NJ quiz behavior with user-triggered AdSense breaks every 7 answered questions. */
(() => {
    'use strict';

    const state = location.pathname.startsWith('/nj') ? 'NJ' : 'NY';
    const home = state === 'NJ' ? '/nj/' : '/';
    const categories = [...new Set(questions.map(q => q.category))];
    const requested = new URLSearchParams(location.search).get('category');
    const category = categories.includes(requested) ? requested : null;
    const bank = category ? questions.filter(q => q.category === category) : questions;
    const $ = id => document.getElementById(id);

    const question = $('question');
    const answers = $('answers');
    const feedback = $('feedback');
    const nextButton = $('next-button');
    const contactButton = $('contact-button');
    const progressMeter = $('practice-meter');
    const practiceProgress = $('practice-progress');
    const practiceFollowup = $('practice-followup');
    const adBreak = $('quiz-ad-break');

    if (!question || !answers || !nextButton || !contactButton) return;

    const AD_INTERVAL = 7;
    const AD_CLIENT = 'ca-pub-3584267014164543';
    const AD_SLOT = '8831968206';

    let queue = [];
    let current;
    let answered = 0;
    let correct = 0;
    let number = 0;
    let locked = false;
    let lastAdMilestone = 0;

    function shuffle(items) {
        const copy = [...items];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    }

    function hideAdBreak() {
        if (adBreak) adBreak.hidden = true;
    }

    function renderAdBreak() {
        if (!adBreak) return;

        const milestone = answered;
        if (
            milestone < AD_INTERVAL ||
            milestone % AD_INTERVAL !== 0 ||
            milestone === lastAdMilestone
        ) {
            return;
        }

        lastAdMilestone = milestone;
        adBreak.replaceChildren();

        const ins = document.createElement('ins');
        ins.className = 'adsbygoogle';
        ins.style.display = 'block';
        ins.setAttribute('data-ad-client', AD_CLIENT);
        ins.setAttribute('data-ad-slot', AD_SLOT);
        ins.setAttribute('data-ad-format', 'auto');
        ins.setAttribute('data-full-width-responsive', 'true');

        adBreak.appendChild(ins);
        adBreak.hidden = false;

        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (error) {
            console.warn('AdSense ad break could not initialize.', error);
        }

        window.lrQuizAdBreak?.({
            exam_state: state,
            practice_topic: category || 'Mixed',
            answer_count: milestone
        });
    }

    if (category) {
        const activeFilter = $('active-filter');
        const activeFilterWrap = $('active-filter-wrap');
        if (activeFilter) activeFilter.textContent = category;
        if (activeFilterWrap) activeFilterWrap.hidden = false;
    }

    const select = $('practice-topic');
    const topicForm = $('topic-form');

    if (select && topicForm) {
        for (const name of categories) {
            const option = document.createElement('option');
            option.value = name;
            option.textContent = name;
            select.appendChild(option);
        }

        select.value = category || '';

        topicForm.addEventListener('submit', event => {
            event.preventDefault();
            window.lrTopicSelect?.(select.value || 'Mixed');
            location.href =
                home +
                (select.value
                    ? '?category=' + encodeURIComponent(select.value)
                    : '') +
                '#practice-quiz';
        });
    }

    function load(focus = false) {
        hideAdBreak();

        if (!queue.length) queue = shuffle(bank);

        current = queue.shift();
        locked = false;
        number++;

        question.textContent = current.question;

        const categoryEl = $('question-category');
        if (categoryEl) categoryEl.textContent = current.category;

        const numberEl = $('question-number');
        if (numberEl) numberEl.textContent = `Question ${number}`;

        feedback.textContent = '';
        feedback.className = '';
        nextButton.hidden = true;
        contactButton.hidden = true;
        answers.replaceChildren();

        for (const item of shuffle(
            current.answers.map((text, index) => ({ text, index }))
        )) {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'answer-button';
            button.textContent = item.text;
            button.dataset.correct = String(item.index === current.correct);

            button.addEventListener('click', () => {
                if (locked) return;

                locked = true;
                answered++;

                const right = item.index === current.correct;
                if (right) correct++;

                for (const answer of answers.children) {
                    answer.disabled = true;
                    if (answer.dataset.correct === 'true') {
                        answer.classList.add('correct');
                    }
                }

                button.classList.add(right ? 'correct' : 'incorrect');

                feedback.textContent = right
                    ? '✓ Correct!'
                    : `✗ Incorrect. The correct answer is ${current.answers[current.correct]}.`;

                if (current.explanation) {
                    feedback.textContent += ' ' + current.explanation;
                }

                feedback.className = right
                    ? 'feedback-correct'
                    : 'feedback-incorrect';

                const score = $('score');
                if (score) {
                    score.textContent =
                        `Score: ${correct} / ${answered} ` +
                        `(${Math.round((correct / answered) * 100)}%)`;
                }

                if (practiceProgress) {
                    practiceProgress.textContent =
                        answered < 10
                            ? `${answered} of 10 practice answers completed.`
                            : `${answered} answers completed. ${correct} correct. ` +
                              'Keep going or try another topic.';
                }

                if (progressMeter) {
                    progressMeter.value = Math.min(answered, 10);
                }

                if (practiceFollowup) {
                    practiceFollowup.hidden = answered < 10;
                }

                nextButton.hidden = false;
                contactButton.hidden = false;

                window.lrQuizAnswer?.({
                    exam_state: state,
                    practice_topic: category || 'Mixed',
                    question_topic: current.category,
                    correct: right,
                    answered
                });
            });

            answers.appendChild(button);
        }

        if (focus) question.focus();
    }

    nextButton.addEventListener('click', () => {
        if (!locked) return;

        const shouldShowAd =
            answered >= AD_INTERVAL &&
            answered % AD_INTERVAL === 0 &&
            answered !== lastAdMilestone;

        load(true);

        if (shouldShowAd) {
            renderAdBreak();
        }
    });

    contactButton.addEventListener('click', () => {
        if (!current) return;

        const body =
            `Hi,\n\nPlease review this ${state} practice question.\n\n` +
            `Category: ${current.category}\n` +
            `Question: ${current.question}\n\n` +
            current.answers
                .map((a, i) => `${String.fromCharCode(65 + i)}. ${a}`)
                .join('\n') +
            `\n\nListed correct answer: ${current.answers[current.correct]}` +
            '\n\nMy comment:\n';

        location.href =
            'mailto:nyrealestatequiz@gmail.com?subject=' +
            encodeURIComponent(`License Ready ${state} — Question Review`) +
            '&body=' +
            encodeURIComponent(body);
    });

    load();

    const ready = () =>
        window.lrQuizReady?.({
            practice_topic: category || 'Mixed',
            question_count: bank.length
        });

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', ready, { once: true });
    } else {
        ready();
    }
})();
