const reportEmail = "nyrealestatequiz@gmail.com";
/* =====================================================
   CATEGORY FILTER
===================================================== */

const params =
    new URLSearchParams(
        window.location.search
    );


const requestedCategory =
    params.get("category");


const validCategories =
    [...new Set(
        questions.map(
            question =>
                question.category
        )
    )];


let activeCategory = null;


if (
    requestedCategory &&
    validCategories.includes(
        requestedCategory
    )
) {

    activeCategory =
        requestedCategory;

}


const activeQuestions =
    activeCategory
        ? questions.filter(
            question =>
                question.category ===
                activeCategory
        )
        : questions;


/* =====================================================
   ELEMENTS
===================================================== */

const questionNumberElement =
    document.getElementById(
        "question-number"
    );

const scoreElement =
    document.getElementById(
        "score"
    );

const categoryElement =
    document.getElementById(
        "question-category"
    );

const questionElement =
    document.getElementById(
        "question"
    );

const answersElement =
    document.getElementById(
        "answers"
    );

const feedbackElement =
    document.getElementById(
        "feedback"
    );

const nextButton =
    document.getElementById(
        "next-button"
    );

const contactButton =
    document.getElementById(
        "contact-button"
    );

const activeFilterWrap =
    document.getElementById(
        "active-filter-wrap"
    );

const activeFilterElement =
    document.getElementById(
        "active-filter"
    );


/* =====================================================
   SHOW FILTER
===================================================== */

if (
    activeCategory &&
    activeFilterWrap &&
    activeFilterElement
) {

    activeFilterElement.textContent =
        activeCategory;

    activeFilterWrap.hidden =
        false;

}


/* =====================================================
   STATE
===================================================== */

let questionQueue = [];

let currentQuestion = null;

let currentQuestionNumber = 0;

let correctAnswers = 0;

let answeredQuestions = 0;

let questionAnswered = false;


/* =====================================================
   SHUFFLE
===================================================== */

function shuffleArray(array) {

    const shuffled =
        [...array];


    for (
        let i =
            shuffled.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() *
                (i + 1)
            );


        [
            shuffled[i],
            shuffled[j]
        ] =
        [
            shuffled[j],
            shuffled[i]
        ];

    }


    return shuffled;

}


/* =====================================================
   REFILL
===================================================== */

function refillQuestionQueue() {

    questionQueue =
        shuffleArray(
            activeQuestions.map(
                question => ({
                    ...question
                })
            )
        );

}


/* =====================================================
   SCORE
===================================================== */

function updateScore() {

    if (
        answeredQuestions === 0
    ) {

        scoreElement.textContent =
            "Score: 0 / 0";

        return;

    }


    const percentage =
        Math.round(
            (
                correctAnswers /
                answeredQuestions
            ) *
            100
        );


    scoreElement.textContent =
        `Score: ${correctAnswers} / ${answeredQuestions} (${percentage}%)`;

}


/* =====================================================
   LOAD QUESTION
===================================================== */

function loadQuestion() {

    questionAnswered =
        false;


    feedbackElement.textContent =
        "";

    feedbackElement.className =
        "";


    nextButton.style.display =
        "none";

    contactButton.style.display =
        "none";


    if (
        questionQueue.length === 0
    ) {

        refillQuestionQueue();

    }


    currentQuestion =
        questionQueue.shift();


    currentQuestionNumber++;


    questionNumberElement.textContent =
        `Question ${currentQuestionNumber}`;


    categoryElement.textContent =
        currentQuestion.category;


    questionElement.textContent =
        currentQuestion.question;


    answersElement.innerHTML =
        "";


    const answerObjects =
        currentQuestion.answers.map(
            (answer, index) => ({

                text:
                    answer,

                isCorrect:
                    index ===
                    currentQuestion.correct

            })
        );


    const shuffledAnswers =
        shuffleArray(
            answerObjects
        );


    shuffledAnswers.forEach(
        answerObject => {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "answer-button";


            button.textContent =
                answerObject.text;


            button.dataset.correct =
                answerObject.isCorrect
                    ? "true"
                    : "false";


            button.addEventListener(
                "click",
                () => {

                    selectAnswer(
                        button,
                        answerObject
                    );

                }
            );


            answersElement.appendChild(
                button
            );

        }
    );


    updateScore();

}


/* =====================================================
   ANSWER
===================================================== */

function selectAnswer(
    selectedButton,
    answerObject
) {

    if (questionAnswered) {
        return;
    }


    questionAnswered =
        true;


    answeredQuestions++;


    const buttons =
        answersElement.querySelectorAll(
            ".answer-button"
        );


    buttons.forEach(
        button => {

            button.disabled =
                true;


            if (
                button.dataset.correct ===
                "true"
            ) {

                button.classList.add(
                    "correct"
                );

            }

        }
    );


    if (
        answerObject.isCorrect
    ) {

        correctAnswers++;


        selectedButton.classList.add(
            "correct"
        );


        feedbackElement.textContent =
            "✓ Correct!";


        feedbackElement.className =
            "feedback-correct";

    }

    else {

        selectedButton.classList.add(
            "incorrect"
        );


        const correctAnswer =
            currentQuestion.answers[
                currentQuestion.correct
            ];


        feedbackElement.textContent =
            `✗ Incorrect. The correct answer is ${correctAnswer}.`;


        feedbackElement.className =
            "feedback-incorrect";

    }


    feedbackElement.textContent += " " + currentQuestion.explanation;

    updateScore();


    nextButton.style.display =
        "inline-block";


    contactButton.style.display =
        "inline-block";

}


/* =====================================================
   NEXT
===================================================== */

nextButton.addEventListener(
    "click",
    () => { loadQuestion(); questionElement.focus(); }
);


/* =====================================================
   REPORT
===================================================== */

contactButton.addEventListener(
    "click",
    () => {

        if (!currentQuestion) {
            return;
        }


        const subject =
            encodeURIComponent(
                "License Ready NJ — Question Review"
            );


        const answers =
            currentQuestion.answers
                .map(
                    (
                        answer,
                        index
                    ) =>
                        `${String.fromCharCode(
                            65 + index
                        )}. ${answer}`
                )
                .join("\n");


        const correctAnswer =
            currentQuestion.answers[
                currentQuestion.correct
            ];


        const body =
            encodeURIComponent(
`Hi,

I think this practice question may need review.

Category:
${currentQuestion.category}

Question:
${currentQuestion.question}

Answers:
${answers}

Listed correct answer:
${correctAnswer}

My comment:


Thank you.`
            );


        window.location.href =
            `mailto:${reportEmail}?subject=${subject}&body=${body}`;

    }
);


/* =====================================================
   START
===================================================== */

refillQuestionQueue();

loadQuestion();