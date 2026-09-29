(() => {
    'use strict';

    const categories = [...new Set(questions.map(q => q.category))];
    const requested = new URLSearchParams(location.search).get('category');
    const category = categories.includes(requested) ? requested : null;
    const scope = requested === '__ny' || (category && questions.find(q => q.category === category).scope === 'ny') || (!requested && document.body.dataset.quizScope === 'ny') ? 'ny' : 'general';
    document.body.dataset.quizScope = scope;
    const state = scope === 'ny' ? 'NY' : 'GENERAL';
    const home = location.pathname === '/' || location.pathname === '/index.html' ? '/' : '/practice-tests.html';
    const scoped = questions.filter(q => q.scope === scope);
    const bank = category ? scoped.filter(q => q.category === category) : scoped;
    const topicLabel = name => (questions.find(q => q.category === name).scope === 'ny' ? 'NY-specific — ' : 'General — ') + name.replace(/^NY /, '');
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
            content_scope: scope,
            practice_topic: category || 'Mixed',
            answer_count: milestone
        });
    }

    const scopeLabel = scope === 'ny' ? 'New York-specific' : 'General Real Estate · State-agnostic';
    if ($('quiz-scope-status')) $('quiz-scope-status').textContent = scopeLabel + ' · ' + bank.length + ' questions' + (category ? ' · ' + category : '');
    if (requested && requested !== '__ny' && !category && $('filter-notice')) {
        $('filter-notice').hidden = false;
        $('filter-notice').textContent = 'Topic not found. Showing ' + scopeLabel + '.';
    }
    if (category) {
        const activeFilter = $('active-filter');
        const activeFilterWrap = $('active-filter-wrap');
        if (activeFilter) activeFilter.textContent = topicLabel(category);
        if (activeFilterWrap) activeFilterWrap.hidden = false;
    }

    const select = $('practice-topic');
    const topicForm = $('topic-form');

    if (select && topicForm) {
        for (const name of categories) {
            const option = document.createElement('option');
            option.value = name;
            option.textContent = topicLabel(name);
            select.appendChild(option);
        }

        const nyOption = document.createElement('option');
        nyOption.value = '__ny';
        nyOption.textContent = 'NY-specific — All topics';
        select.insertBefore(nyOption, select.children[1]);
        select.value = category || (scope === 'ny' ? '__ny' : '');

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
        if (categoryEl) categoryEl.textContent = topicLabel(current.category);

        const numberEl = $('question-number');
        if (numberEl) numberEl.textContent = `Question ${number}`;

        feedback.textContent = '';
        feedback.className = '';
        const source = $('question-source');
        if (source) { source.hidden = true; source.removeAttribute('href'); }
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

                if (source && current.source) {
                    source.href = current.source;
                    source.hidden = false;
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
            content_scope: scope,
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
            question_count: bank.length,
            content_scope: scope,
            exam_state: state
        });

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', ready, { once: true });
    } else {
        ready();
    }
})();
