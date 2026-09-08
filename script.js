// =====================================================
// NY REAL ESTATE PRACTICE QUIZ
// =====================================================


// -----------------------------------------------------
// EMAIL ADDRESS
// -----------------------------------------------------
// Replace this with the email address where you want
// incorrect-question reports to be sent.

const reportEmail = "hannahxlee@gmail.com";


// -----------------------------------------------------
// QUESTION DATABASE
// -----------------------------------------------------

const questions = [

    {
        question:
            "A broker receives a buyer’s earnest-money deposit and places it into the brokerage’s operating account along with the broker’s own funds. What violation has occurred?",

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
            "A 25-year-old house has a kitchen with an outdated layout that buyers find undesirable. The layout could be remodeled for $30,000, and the remodeling would increase the property's value by $45,000. How should an appraiser classify this depreciation?",

        answers: [
            "Curable physical deterioration",
            "Incurable physical deterioration",
            "Curable functional obsolescence",
            "External obsolescence"
        ],

        correct: 2,

        explanation:
            "The outdated layout is functional obsolescence. Because the cost to correct it is less than the resulting increase in value, the functional obsolescence is considered curable."
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
            "The fiduciary duty of loyalty requires an agent to put the client's interests ahead of the agent's own interests."
    },


    {
        question:
            "A real estate salesperson tells homeowners that members of a particular protected class are moving into the neighborhood and encourages the homeowners to sell. What is this practice called?",

        answers: [
            "Steering",
            "Redlining",
            "Blockbusting",
            "Puffing"
        ],

        correct: 2,

        explanation:
            "Blockbusting is the illegal practice of inducing owners to sell by suggesting that members of a protected class are moving into an area."
    },


    {
        question:
            "Which type of agent has authority to perform a specific act or a limited number of acts for a principal?",

        answers: [
            "Universal agent",
            "General agent",
            "Special agent",
            "Dual agent"
        ],

        correct: 2,

        explanation:
            "A special agent is authorized to perform a specific act or limited set of acts on behalf of a principal. A real estate broker is generally considered a special agent."
    }

];


// -----------------------------------------------------
// QUIZ VARIABLES
// -----------------------------------------------------

let currentQuestionIndex = 0;

let score = 0;

let answered = false;

let selectedAnswerIndex = null;


// -----------------------------------------------------
// GET ELEMENTS FROM THE HTML PAGE
// -----------------------------------------------------

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


// -----------------------------------------------------
// SHOW A QUESTION
// -----------------------------------------------------

function showQuestion() {

    answered = false;

    selectedAnswerIndex = null;

    feedbackElement.textContent = "";

    feedbackElement.className = "";

    answersElement.innerHTML = "";

    nextButton.style.display = "none";

    contactButton.style.display = "none";


    const currentQuestion =
        questions[currentQuestionIndex];


    questionNumberElement.textContent =
        `Question ${currentQuestionIndex + 1} of ${questions.length}`;


    scoreElement.textContent =
        `Score: ${score}`;


    questionElement.textContent =
        currentQuestion.question;


    currentQuestion.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");


            const letter =
                String.fromCharCode(65 + index);


            button.textContent =
                `${letter}. ${answer}`;


            button.classList.add(
                "answer-button"
            );


            button.addEventListener(
                "click",
                function () {

                    selectAnswer(
                        button,
                        index
                    );

                }
            );


            answersElement.appendChild(
                button
            );
        }
    );
}


// -----------------------------------------------------
// USER SELECTS AN ANSWER
// -----------------------------------------------------

function selectAnswer(button, selectedIndex) {

    if (answered) {
        return;
    }


    answered = true;

    selectedAnswerIndex =
        selectedIndex;


    const currentQuestion =
        questions[currentQuestionIndex];


    const answerButtons =
        document.querySelectorAll(
            ".answer-button"
        );


    // Disable all answer buttons

    answerButtons.forEach(
        answerButton => {

            answerButton.disabled = true;

        }
    );


    // -------------------------------------------------
    // CORRECT ANSWER
    // -------------------------------------------------

    if (
        selectedIndex ===
        currentQuestion.correct
    ) {

        button.classList.add(
            "correct"
        );


        feedbackElement.className =
            "feedback-correct";


        feedbackElement.textContent =
            "✓ Correct! " +
            currentQuestion.explanation;


        score++;


        scoreElement.textContent =
            `Score: ${score}`;
    }


    // -------------------------------------------------
    // INCORRECT ANSWER
    // -------------------------------------------------

    else {

        button.classList.add(
            "incorrect"
        );


        answerButtons[
            currentQuestion.correct
        ].classList.add(
            "correct"
        );


        const correctLetter =
            String.fromCharCode(
                65 +
                currentQuestion.correct
            );


        feedbackElement.className =
            "feedback-incorrect";


        feedbackElement.textContent =
            `✗ Incorrect. The correct answer is ${correctLetter}. ${currentQuestion.explanation}`;
    }


    // Show action buttons

    nextButton.style.display =
        "inline-block";


    contactButton.style.display =
        "inline-block";
}


// -----------------------------------------------------
// NEXT QUESTION
// -----------------------------------------------------

nextButton.addEventListener(
    "click",
    function () {

        currentQuestionIndex++;


        if (
            currentQuestionIndex >=
            questions.length
        ) {

            showResults();

        }

        else {

            showQuestion();

        }

    }
);


// -----------------------------------------------------
// REPORT AN INCORRECT QUESTION
// -----------------------------------------------------

contactButton.addEventListener(
    "click",
    function () {

        const currentQuestion =
            questions[currentQuestionIndex];


        const correctLetter =
            String.fromCharCode(
                65 +
                currentQuestion.correct
            );


        let selectedAnswerText =
            "No answer recorded";


        if (
            selectedAnswerIndex !== null
        ) {

            const selectedLetter =
                String.fromCharCode(
                    65 +
                    selectedAnswerIndex
                );


            selectedAnswerText =
                `${selectedLetter}. ${currentQuestion.answers[selectedAnswerIndex]}`;
        }


        const correctAnswerText =
            `${correctLetter}. ${currentQuestion.answers[currentQuestion.correct]}`;


        const subject =
            `Real Estate Quiz Question Review - Question ${currentQuestionIndex + 1}`;


        const body =
`Hello,

I believe there may be an issue with a question in the NY Real Estate Practice Quiz.

QUESTION NUMBER:
${currentQuestionIndex + 1}

QUESTION:
${currentQuestion.question}

MY ANSWER:
${selectedAnswerText}

ANSWER CURRENTLY MARKED CORRECT:
${correctAnswerText}

CURRENT EXPLANATION:
${currentQuestion.explanation}

Please review this question.

Additional comments:

Thank you.`;


        const mailtoLink =
            `mailto:${reportEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;


        window.location.href =
            mailtoLink;

    }
);


// -----------------------------------------------------
// SHOW FINAL SCORE
// -----------------------------------------------------

function showResults() {

    questionNumberElement.textContent =
        "Quiz Complete";


    questionElement.textContent =
        `You scored ${score} out of ${questions.length}.`;


    answersElement.innerHTML = "";


    feedbackElement.className = "";


    const percentage =
        Math.round(
            (score / questions.length) * 100
        );


    feedbackElement.textContent =
        `Final Score: ${percentage}%`;


    contactButton.style.display =
        "none";


    nextButton.textContent =
        "Start Again";


    nextButton.style.display =
        "inline-block";


    nextButton.onclick =
        restartQuiz;
}


// -----------------------------------------------------
// RESTART QUIZ
// -----------------------------------------------------

function restartQuiz() {

    currentQuestionIndex = 0;

    score = 0;

    answered = false;

    selectedAnswerIndex = null;


    nextButton.textContent =
        "Next Question";


    nextButton.onclick =
        null;


    showQuestion();
}


// -----------------------------------------------------
// START QUIZ
// -----------------------------------------------------

showQuestion();