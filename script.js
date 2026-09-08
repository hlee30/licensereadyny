// =====================================================
// LICENSE READY NY
// ENDLESS PRACTICE QUIZ
// =====================================================


const reportEmail =
    "nyrealestatequiz@gmail.com";



// =====================================================
// QUESTION BANK
// =====================================================

const questions = [

    {
        question:
            "A broker receives a buyer's earnest-money deposit and places it into the brokerage's operating account along with the broker's own funds. What violation has occurred?",

        answers: [
            "Conversion",
            "Commingling",
            "Puffing",
            "Blockbusting"
        ],

        correct: 1,

        explanation:
            "Commingling occurs when a broker mixes client funds with the broker's own or business funds."
    },


    {
        question:
            "A 25-year-old house has a kitchen with an outdated layout. It could be remodeled for $30,000, and the remodeling would increase the property's value by $45,000. How should an appraiser classify this depreciation?",

        answers: [
            "Curable physical deterioration",
            "Incurable physical deterioration",
            "Curable functional obsolescence",
            "External obsolescence"
        ],

        correct: 2,

        explanation:
            "The outdated layout represents functional obsolescence. Because the cost to correct it is less than the resulting increase in value, it is considered curable."
    },


    {
        question:
            "Which fiduciary duty requires a real estate agent to place the client's interests above the agent's own interests?",

        answers: [
            "Accounting",
            "Disclosure",
            "Loyalty",
            "Reasonable care"
        ],

        correct: 2,

        explanation:
            "The fiduciary duty of loyalty requires an agent to place the client's interests ahead of the agent's own interests."
    },


    {
        question:
            "A salesperson tells homeowners that members of a particular protected class are moving into the neighborhood and encourages the homeowners to sell. What is this practice called?",

        answers: [
            "Steering",
            "Redlining",
            "Blockbusting",
            "Puffing"
        ],

        correct: 2,

        explanation:
            "Blockbusting involves inducing owners to sell by suggesting that members of a protected class are moving into an area."
    },


    {
        question:
            "Which type of agent has authority to perform a specific act or limited number of acts for a principal?",

        answers: [
            "Universal agent",
            "General agent",
            "Special agent",
            "Dual agent"
        ],

        correct: 2,

        explanation:
            "A special agent is authorized to perform a specific act or limited set of acts on behalf of a principal."
    },


    {
        question:
            "Which fiduciary duty requires an agent to properly safeguard and account for money or property belonging to a client?",

        answers: [
            "Obedience",
            "Accounting",
            "Loyalty",
            "Confidentiality"
        ],

        correct: 1,

        explanation:
            "The duty of accounting requires an agent to safeguard and properly account for money, documents, and property entrusted to the agent."
    },


    {
        question:
            "Which practice occurs when a real estate professional directs buyers toward or away from neighborhoods based on a protected characteristic?",

        answers: [
            "Blockbusting",
            "Steering",
            "Puffing",
            "Conversion"
        ],

        correct: 1,

        explanation:
            "Steering occurs when housing choices are influenced based on protected characteristics."
    },


    {
        question:
            "An agent represents both the buyer and seller in the same transaction with the informed consent of both parties. What type of agency exists?",

        answers: [
            "Universal agency",
            "Single agency",
            "Dual agency",
            "Subagency"
        ],

        correct: 2,

        explanation:
            "Dual agency occurs when one agent or brokerage represents both sides of a transaction with the required disclosure and consent."
    }

];



// =====================================================
// QUIZ STATE
// =====================================================

let questionNumber = 1;

let totalAnswered = 0;

let correctAnswers = 0;

let answered = false;

let selectedAnswerIndex = null;

let currentQuestion = null;

let lastQuestionIndex = -1;

let questionQueue = [];



// =====================================================
// PAGE ELEMENTS
// =====================================================

const questionElement =
    document.getElementById("question");


const answersElement =
    document.getElementById("answers");


const feedbackElement =
    document.getElementById("feedback");


const nextButton =
    document.getElementById("next-button");


const contactButton =
    document.getElementById("contact-button");


const questionNumberElement =
    document.getElementById("question-number");


const scoreElement =
    document.getElementById("score");



// =====================================================
// SHUFFLE
// =====================================================

function shuffle(array) {

    const copy =
        [...array];


    for (
        let i = copy.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() *
                (i + 1)
            );


        [
            copy[i],
            copy[j]
        ] =
        [
            copy[j],
            copy[i]
        ];

    }


    return copy;
}



// =====================================================
// QUESTION QUEUE
// =====================================================

function refillQuestionQueue() {

    const indexes =
        questions.map(
            (_, index) => index
        );


    questionQueue =
        shuffle(indexes);


    if (
        questionQueue.length > 1 &&
        questionQueue[0] === lastQuestionIndex
    ) {

        [
            questionQueue[0],
            questionQueue[1]
        ] =
        [
            questionQueue[1],
            questionQueue[0]
        ];

    }

}



// =====================================================
// GET NEXT QUESTION
// =====================================================

function getNextQuestion() {

    if (
        questionQueue.length === 0
    ) {

        refillQuestionQueue();

    }


    const questionIndex =
        questionQueue.shift();


    lastQuestionIndex =
        questionIndex;


    return questions[
        questionIndex
    ];

}



// =====================================================
// SHOW QUESTION
// =====================================================

function showQuestion() {

    answered = false;

    selectedAnswerIndex = null;


    feedbackElement.textContent =
        "";


    feedbackElement.className =
        "";


    answersElement.innerHTML =
        "";


    nextButton.style.display =
        "none";


    contactButton.style.display =
        "none";


    currentQuestion =
        getNextQuestion();


    questionNumberElement.textContent =
        `Question ${questionNumber}`;


    updateScore();


    questionElement.textContent =
        currentQuestion.question;



    const answerData =
        currentQuestion.answers.map(
            (answer, index) => {

                return {

                    text: answer,

                    originalIndex: index

                };

            }
        );


    const shuffledAnswers =
        shuffle(answerData);


    shuffledAnswers.forEach(
        (answerData, displayIndex) => {

            const button =
                document.createElement(
                    "button"
                );


            const letter =
                String.fromCharCode(
                    65 + displayIndex
                );


            button.textContent =
                `${letter}. ${answerData.text}`;


            button.classList.add(
                "answer-button"
            );


            button.dataset.originalIndex =
                answerData.originalIndex;


            button.addEventListener(
                "click",
                function () {

                    selectAnswer(
                        button,
                        answerData.originalIndex
                    );

                }
            );


            answersElement.appendChild(
                button
            );

        }
    );

}



// =====================================================
// SELECT ANSWER
// =====================================================

function selectAnswer(
    selectedButton,
    originalAnswerIndex
) {

    if (answered) {

        return;

    }


    answered = true;


    selectedAnswerIndex =
        originalAnswerIndex;


    totalAnswered++;


    const buttons =
        document.querySelectorAll(
            ".answer-button"
        );


    buttons.forEach(
        button => {

            button.disabled =
                true;

        }
    );



    if (
        originalAnswerIndex ===
        currentQuestion.correct
    ) {

        selectedButton.classList.add(
            "correct"
        );


        correctAnswers++;


        feedbackElement.className =
            "feedback-correct";


        feedbackElement.textContent =
            "✓ Correct! " +
            currentQuestion.explanation;

    }


    else {

        selectedButton.classList.add(
            "incorrect"
        );


        buttons.forEach(
            button => {

                if (
                    Number(
                        button.dataset.originalIndex
                    ) === currentQuestion.correct
                ) {

                    button.classList.add(
                        "correct"
                    );

                }

            }
        );


        feedbackElement.className =
            "feedback-incorrect";


        feedbackElement.textContent =
            "✗ Incorrect. " +
            currentQuestion.explanation;

    }


    updateScore();


    nextButton.style.display =
        "inline-block";


    contactButton.style.display =
        "inline-block";

}



// =====================================================
// SCORE
// =====================================================

function updateScore() {

    let percentage =
        0;


    if (
        totalAnswered > 0
    ) {

        percentage =
            Math.round(
                (
                    correctAnswers /
                    totalAnswered
                ) * 100
            );

    }


    scoreElement.textContent =
        `Score: ${correctAnswers} / ${totalAnswered} (${percentage}%)`;

}



// =====================================================
// NEXT QUESTION
// =====================================================

nextButton.addEventListener(
    "click",
    function () {

        questionNumber++;


        showQuestion();

    }
);



// =====================================================
// REPORT QUESTION
// =====================================================

contactButton.addEventListener(
    "click",
    function () {

        const correctAnswer =
            currentQuestion.answers[
                currentQuestion.correct
            ];


        let selectedAnswer =
            "No answer recorded";


        if (
            selectedAnswerIndex !== null
        ) {

            selectedAnswer =
                currentQuestion.answers[
                    selectedAnswerIndex
                ];

        }


        const subject =
            `License Ready NY - Question Review - Question ${questionNumber}`;


        const body =
`Hello,

I believe there may be an issue with a question on License Ready NY.

QUESTION NUMBER:
${questionNumber}

QUESTION:
${currentQuestion.question}

MY ANSWER:
${selectedAnswer}

ANSWER CURRENTLY MARKED CORRECT:
${correctAnswer}

CURRENT EXPLANATION:
${currentQuestion.explanation}

Comments:


Thank you.`;


        const mailtoLink =
            `mailto:${reportEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;


        window.location.href =
            mailtoLink;

    }
);



// =====================================================
// START
// =====================================================

showQuestion();