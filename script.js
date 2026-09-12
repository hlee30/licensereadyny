/* =====================================================
   LICENSE READY NY PRACTICE QUIZ
===================================================== */

const reportEmail =
    "nyrealestatequiz@gmail.com";


/* =====================================================
   QUESTION BANK
===================================================== */

const questions = [

    /* AGENCY */

    {
        category: "Agency",

        question:
            "Which fiduciary duty requires a real estate agent to place the client's interests above the agent's own interests?",

        answers: [
            "Accounting",
            "Disclosure",
            "Loyalty",
            "Reasonable Care"
        ],

        correct: 2
    },

    {
        category: "Agency",

        question:
            "Which type of agent is authorized to perform one specific act or a limited number of acts for a principal?",

        answers: [
            "Universal agent",
            "General agent",
            "Special agent",
            "Dual agent"
        ],

        correct: 2
    },

    {
        category: "Agency",

        question:
            "An agent represents both the buyer and seller in the same transaction with the informed consent of both parties. What type of agency exists?",

        answers: [
            "Universal agency",
            "Single agency",
            "Dual agency",
            "Subagency"
        ],

        correct: 2
    },

    {
        category: "Agency",

        question:
            "Which fiduciary duty requires an agent to properly safeguard and account for money or property belonging to a client?",

        answers: [
            "Obedience",
            "Accounting",
            "Loyalty",
            "Confidentiality"
        ],

        correct: 1
    },


    /* REAL ESTATE PRACTICE */

    {
        category: "Real Estate Practice",

        question:
            "A broker receives a buyer's earnest-money deposit and places it into the brokerage's operating account along with the broker's own funds. What violation has occurred?",

        answers: [
            "Conversion",
            "Commingling",
            "Puffing",
            "Blockbusting"
        ],

        correct: 1
    },

    {
        category: "Real Estate Practice",

        question:
            "A salesperson tells homeowners that members of a protected class are moving into the neighborhood and encourages the homeowners to sell. What is this practice called?",

        answers: [
            "Steering",
            "Redlining",
            "Blockbusting",
            "Puffing"
        ],

        correct: 2
    },


    /* FAIR HOUSING */

    {
        category: "Fair Housing",

        question:
            "Which practice occurs when a real estate professional directs buyers toward or away from neighborhoods based on a protected characteristic?",

        answers: [
            "Blockbusting",
            "Steering",
            "Puffing",
            "Conversion"
        ],

        correct: 1
    },

    {
        category: "Fair Housing",

        question:
            "Which of the following is protected under the federal Fair Housing Act?",

        answers: [
            "Occupation",
            "Familial status",
            "Credit score",
            "Education level"
        ],

        correct: 1
    },


    /* CONTRACTS */

    {
        category: "Contracts",

        question:
            "Under the Statute of Frauds, which agreement generally must be in writing to be enforceable?",

        answers: [
            "A contract for the sale of real property",
            "A request to schedule a showing",
            "A casual conversation about moving",
            "A verbal opinion about a property"
        ],

        correct: 0
    },

    {
        category: "Contracts",

        question:
            "What is the legal term for something of value exchanged by the parties to a contract?",

        answers: [
            "Consideration",
            "Estoppel",
            "Novation",
            "Accession"
        ],

        correct: 0
    },


    /* VALUATION */

    {
        category: "Valuation",

        question:
            "A 25-year-old house has a kitchen with an outdated layout. It could be remodeled for $30,000, and the remodeling would increase the property's value by $45,000. How should an appraiser classify this depreciation?",

        answers: [
            "Curable physical deterioration",
            "Incurable physical deterioration",
            "Curable functional obsolescence",
            "External obsolescence"
        ],

        correct: 2
    },

    {
        category: "Valuation",

        question:
            "Which appraisal principle says a buyer will not pay more for a property than the cost of acquiring a comparable substitute?",

        answers: [
            "Contribution",
            "Conformity",
            "Substitution",
            "Progression"
        ],

        correct: 2
    },

    {
        category: "Valuation",

        question:
            "An outdated floor plan that reduces a property's desirability is an example of what type of depreciation?",

        answers: [
            "Physical deterioration",
            "Functional obsolescence",
            "External obsolescence",
            "Economic appreciation"
        ],

        correct: 1
    },


    /* FINANCE */

    {
        category: "Finance",

        question:
            "A buyer purchases a home for $500,000 and obtains a $400,000 mortgage. What is the loan-to-value ratio?",

        answers: [
            "20%",
            "40%",
            "80%",
            "125%"
        ],

        correct: 2
    },

    {
        category: "Finance",

        question:
            "One discount point on a mortgage is equal to what percentage of the loan amount?",

        answers: [
            "0.1%",
            "0.5%",
            "1%",
            "10%"
        ],

        correct: 2
    },

    {
        category: "Finance",

        question:
            "Under Regulation Z, which item is used to express the cost of consumer credit as a yearly rate?",

        answers: [
            "Annual Percentage Rate",
            "Property tax rate",
            "Broker commission",
            "Seller's net proceeds"
        ],

        correct: 0
    },


    /* PROPERTY OWNERSHIP */

    {
        category: "Property Ownership",

        question:
            "Which form of ownership allows two or more people to own unequal shares of the same property without an automatic right of survivorship?",

        answers: [
            "Tenancy in common",
            "Joint tenancy",
            "Tenancy by the entirety",
            "Life estate"
        ],

        correct: 0
    },

    {
        category: "Property Ownership",

        question:
            "An easement that benefits one parcel of land and burdens another parcel is generally called what?",

        answers: [
            "Easement in gross",
            "Easement appurtenant",
            "License",
            "Encroachment"
        ],

        correct: 1
    },

    {
        category: "Property Ownership",

        question:
            "A neighbor's fence extends two feet onto another owner's property. This is an example of what?",

        answers: [
            "Easement",
            "Encroachment",
            "Variance",
            "Lien"
        ],

        correct: 1
    },


    /* COMMERCIAL */

    {
        category: "Commercial Real Estate",

        question:
            "A tenant occupies 8,000 usable square feet in an office building with a 20% load factor. Approximately how many rentable square feet does the tenant pay rent on?",

        answers: [
            "8,000 square feet",
            "9,600 square feet",
            "10,000 square feet",
            "12,000 square feet"
        ],

        correct: 1
    },

    {
        category: "Commercial Real Estate",

        question:
            "What does usable square footage generally measure in an office lease?",

        answers: [
            "The tenant's actual occupiable area",
            "The entire building including parking",
            "Only the common hallways",
            "The total land area"
        ],

        correct: 0
    },

    {
        category: "Commercial Real Estate",

        question:
            "Rentable square footage generally includes the tenant's usable area plus what?",

        answers: [
            "A share of common areas",
            "Only exterior parking",
            "The landlord's mortgage balance",
            "Only the property tax bill"
        ],

        correct: 0
    },

    {
        category: "Commercial Real Estate",

        question:
            "In a triple-net lease, the tenant typically pays base rent plus its share of which expenses?",

        answers: [
            "Taxes, insurance, and operating expenses",
            "Only utilities",
            "Only the landlord's mortgage",
            "Only depreciation"
        ],

        correct: 0
    },

    {
        category: "Commercial Real Estate",

        question:
            "What are CAM charges?",

        answers: [
            "Common area maintenance charges",
            "Commercial asset mortgage charges",
            "Capital amortization measurements",
            "Consumer appraisal management charges"
        ],

        correct: 0
    },

    {
        category: "Commercial Real Estate",

        question:
            "Which commercial property type most commonly uses percentage rent based partly on tenant sales?",

        answers: [
            "Industrial",
            "Office",
            "Retail",
            "Multifamily"
        ],

        correct: 2
    },

    {
        category: "Commercial Real Estate",

        question:
            "A commercial property has annual net operating income of $800,000 and a value of $10,000,000. What is its capitalization rate?",

        answers: [
            "5%",
            "6%",
            "8%",
            "10%"
        ],

        correct: 2
    },

    {
        category: "Commercial Real Estate",

        question:
            "Net operating income is generally calculated before deducting which expense?",

        answers: [
            "Property management expenses",
            "Insurance",
            "Debt service",
            "Property taxes"
        ],

        correct: 2
    },

    {
        category: "Commercial Real Estate",

        question:
            "A property has NOI of $600,000 and annual debt service of $450,000. What is the approximate debt service coverage ratio?",

        answers: [
            "0.75",
            "1.00",
            "1.33",
            "2.50"
        ],

        correct: 2
    },

    {
        category: "Commercial Real Estate",

        question:
            "Which industrial-building feature refers to the unobstructed vertical distance available inside a warehouse?",

        answers: [
            "Clear height",
            "Load factor",
            "Floor area ratio",
            "Expense stop"
        ],

        correct: 0
    },


    /* MATERIALS & CONSTRUCTION */

    {
        category: "Materials & Construction",

        question:
            "In a forced-air HVAC system, heated or cooled air is distributed throughout the building primarily by:",

        answers: [
            "Ductwork and supply registers",
            "Steam radiators",
            "Domestic water pipes",
            "Electrical conduit"
        ],

        correct: 0
    },

    {
        category: "Materials & Construction",

        question:
            "Which component in a forced-air furnace moves conditioned air through the duct system?",

        answers: [
            "Blower fan",
            "Expansion tank",
            "Sump pump",
            "Pressure-reducing valve"
        ],

        correct: 0
    },

    {
        category: "Materials & Construction",

        question:
            "A furnace differs from a boiler because a furnace typically heats:",

        answers: [
            "Air",
            "Water",
            "Concrete",
            "Electrical conductors"
        ],

        correct: 0
    },

    {
        category: "Materials & Construction",

        question:
            "Which statement best describes a heat pump?",

        answers: [
            "It can typically provide both heating and cooling",
            "It provides only domestic hot water",
            "It works only with steam radiators",
            "It is part of the plumbing drainage system"
        ],

        correct: 0
    },

    {
        category: "Materials & Construction",

        question:
            "Radon is a naturally occurring radioactive gas that can enter a building primarily from:",

        answers: [
            "Soil and rock beneath or around the building",
            "Household cleaning products",
            "Electrical wiring",
            "Roof shingles"
        ],

        correct: 0
    },

    {
        category: "Materials & Construction",

        question:
            "What is the most reliable way to determine whether a property has elevated radon levels?",

        answers: [
            "Inspect the roof",
            "Measure water pressure",
            "Test for radon",
            "Look for visible staining"
        ],

        correct: 2
    },

    {
        category: "Materials & Construction",

        question:
            "Which common radon mitigation method uses a fan and piping to draw soil gas from beneath a foundation and exhaust it outdoors?",

        answers: [
            "Sub-slab depressurization",
            "Forced-air ventilation",
            "Hydronic heating",
            "French drainage"
        ],

        correct: 0
    },

    {
        category: "Materials & Construction",

        question:
            "A plumbing trap below a sink is designed primarily to:",

        answers: [
            "Hold water that blocks sewer gases",
            "Increase water pressure",
            "Heat incoming water",
            "Filter electrical current"
        ],

        correct: 0
    },

    {
        category: "Materials & Construction",

        question:
            "A GFCI receptacle is designed primarily to reduce the risk of:",

        answers: [
            "Electrical shock",
            "Radon exposure",
            "Roof leakage",
            "Foundation settlement"
        ],

        correct: 0
    },

    {
        category: "Materials & Construction",

        question:
            "What is the primary purpose of flashing around a roof penetration?",

        answers: [
            "Increase insulation",
            "Direct water away from joints and penetrations",
            "Support the roof structure",
            "Vent the attic"
        ],

        correct: 1
    },

    {
        category: "Materials & Construction",

        question:
            "A foundation's primary purpose is to:",

        answers: [
            "Transfer building loads safely to the soil",
            "Distribute conditioned air",
            "Carry wastewater",
            "Generate electricity"
        ],

        correct: 0
    },

    {
        category: "Materials & Construction",

        question:
            "Floor joists are generally:",

        answers: [
            "Horizontal structural members supporting floors",
            "Vertical plumbing pipes",
            "Roof shingles",
            "Electrical conduits"
        ],

        correct: 0
    },

    {
        category: "Materials & Construction",

        question:
            "Insulation primarily reduces:",

        answers: [
            "Heat transfer",
            "Electrical grounding",
            "Water pressure",
            "Structural settlement"
        ],

        correct: 0
    },

    {
        category: "Materials & Construction",

        question:
            "A higher insulation R-value generally indicates:",

        answers: [
            "Greater resistance to heat flow",
            "Lower insulation performance",
            "Higher water pressure",
            "Lower roof slope"
        ],

        correct: 0
    },

    {
        category: "Materials & Construction",

        question:
            "Persistent condensation on cold building surfaces can contribute to:",

        answers: [
            "Mold growth and material deterioration",
            "Higher insulation value",
            "Improved indoor air quality",
            "Stronger structural framing"
        ],

        correct: 0
    },

    {
        category: "Materials & Construction",

        question:
            "Lead-based paint is most commonly associated with housing built before:",

        answers: [
            "1965",
            "1978",
            "1990",
            "2000"
        ],

        correct: 1
    },

    {
        category: "Materials & Construction",

        question:
            "Mold growth generally requires the presence of:",

        answers: [
            "Moisture",
            "High electrical voltage",
            "Low roof pitch",
            "Concrete reinforcement"
        ],

        correct: 0
    },

    {
        category: "Materials & Construction",

        question:
            "Carbon monoxide is especially dangerous because it is:",

        answers: [
            "Colorless and odorless",
            "Brightly colored",
            "Produced only by electrical appliances",
            "Easy to detect without an alarm"
        ],

        correct: 0
    }

];


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
    window.lrQuizAnswer?.({
        exam_state: "NY",
        practice_topic: activeCategory || "Mixed",
        question_topic: currentQuestion.category,
        correct: answerObject.isCorrect,
        answered: answeredQuestions
    });
    const progress = document.getElementById("practice-progress");
    if (progress) progress.textContent = answeredQuestions < 10
        ? `${answeredQuestions} of 10 practice answers — keep going.`
        : `${answeredQuestions} answers completed. Keep practicing or choose another topic.`;



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
                "License Ready NY — Question Review"
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