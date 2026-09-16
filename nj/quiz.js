
/* Shared quiz behavior; question content remains in the original state bank. */
(() => {
    'use strict';
    const state = location.pathname.startsWith('/nj') ? 'NJ' : 'NY';
    const home = state === 'NJ' ? '/nj/' : '/';
    const categories = [...new Set(questions.map(q => q.category))];
    const requested = new URLSearchParams(location.search).get('category');
    const category = categories.includes(requested) ? requested : null;
    const bank = category ? questions.filter(q => q.category === category) : questions;
    const $ = id => document.getElementById(id);
    const question = $('question'), answers = $('answers'), feedback = $('feedback');
    if (!question || !answers) return;
    let queue = [], current, answered = 0, correct = 0, number = 0, locked = false;
    function shuffle(items) {
        const copy = [...items];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    }
    if (category) {
        $('active-filter').textContent = category;
        $('active-filter-wrap').hidden = false;
    }
    const select = $('practice-topic');
    if (select) {
        for (const name of categories) {
            const option = document.createElement('option');
            option.value = name; option.textContent = name; select.appendChild(option);
        }
        select.value = category || '';
        $('topic-form').addEventListener('submit', event => {
            event.preventDefault();
            window.lrTopicSelect?.(select.value || 'Mixed');
            location.href = home + (select.value ? '?category=' + encodeURIComponent(select.value) : '') + '#practice-quiz';
        });
    }
    function load(focus = false) {
        if (!queue.length) queue = shuffle(bank);
        current = queue.shift(); locked = false; number++;
        question.textContent = current.question;
        $('question-category').textContent = current.category;
        $('question-number').textContent = `Question ${number}`;
        feedback.textContent = ''; feedback.className = '';
        $('next-button').hidden = true; $('contact-button').hidden = true;
        answers.replaceChildren();
        for (const item of shuffle(current.answers.map((text, index) => ({text, index})))) {
            const button = document.createElement('button');
            button.type = 'button'; button.className = 'answer-button'; button.textContent = item.text;
            button.dataset.correct = String(item.index === current.correct);
            button.addEventListener('click', () => {
                if (locked) return;
                locked = true; answered++;
                const right = item.index === current.correct;
                if (right) correct++;
                for (const answer of answers.children) {
                    answer.disabled = true;
                    if (answer.dataset.correct === 'true') answer.classList.add('correct');
                }
                button.classList.add(right ? 'correct' : 'incorrect');
                feedback.textContent = right ? '✓ Correct!' : `✗ Incorrect. The correct answer is ${current.answers[current.correct]}.`;
                if (current.explanation) feedback.textContent += ' ' + current.explanation;
                feedback.className = right ? 'feedback-correct' : 'feedback-incorrect';
                $('score').textContent = `Score: ${correct} / ${answered} (${Math.round(correct / answered * 100)}%)`;
                $('practice-progress').textContent = answered < 10
                    ? `${answered} of 10 practice answers completed.`
                    : `${answered} answers completed. ${correct} correct. Keep going or try another topic.`;
                $('practice-meter').value = Math.min(answered, 10);
                $('practice-followup').hidden = answered < 10;
                $('next-button').hidden = false; $('contact-button').hidden = false;
                window.lrQuizAnswer?.({exam_state: state, practice_topic: category || 'Mixed',
                    question_topic: current.category, correct: right, answered});
            });
            answers.appendChild(button);
        }
        if (focus) question.focus();
    }
    $('next-button').addEventListener('click', () => { if (locked) load(true); });
    $('contact-button').addEventListener('click', () => {
        if (!current) return;
        const body = `Hi,\n\nPlease review this ${state} practice question.\n\nCategory: ${current.category}\nQuestion: ${current.question}\n\n${current.answers.map((a, i) => `${String.fromCharCode(65+i)}. ${a}`).join('\n')}\n\nListed correct answer: ${current.answers[current.correct]}\n\nMy comment:\n`;
        location.href = 'mailto:nyrealestatequiz@gmail.com?subject=' + encodeURIComponent('License Ready ' + state + ' — Question Review') + '&body=' + encodeURIComponent(body);
    });
    load();
    const ready = () => window.lrQuizReady?.({practice_topic: category || 'Mixed', question_count: bank.length});
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready, {once: true});
    else ready();
})();
