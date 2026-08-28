/* =========================================================
   EXISTING WEBSITE JAVASCRIPT
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {

    const target =
      document.querySelector(link.getAttribute('href'));

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

  });
});


/* =========================================================
   PŌTAHI QUIZ
========================================================= */

const startQuizBtn =
  document.getElementById("startQuizBtn");


/* Only run quiz code on Quiz.html */

if (startQuizBtn) {


  /* =====================================================
     QUESTION BANK
  ===================================================== */

  const questionBank = [

    /* =========================
       NUMBERS
    ========================== */

    {
      category: "NUMBERS",
      question: "What does \"Tahi\" mean?",
      answers: [
        "One",
        "Two",
        "Three",
        "Four"
      ],
      correct: "One"
    },

    {
      category: "NUMBERS",
      question: "What does \"Rua\" mean?",
      answers: [
        "One",
        "Two",
        "Five",
        "Ten"
      ],
      correct: "Two"
    },

    {
      category: "NUMBERS",
      question: "What does \"Toru\" mean?",
      answers: [
        "Three",
        "Four",
        "Six",
        "Eight"
      ],
      correct: "Three"
    },

    {
      category: "NUMBERS",
      question: "What does \"Whā\" mean?",
      answers: [
        "Four",
        "Five",
        "Seven",
        "Nine"
      ],
      correct: "Four"
    },

    {
      category: "NUMBERS",
      question: "What does \"Rima\" mean?",
      answers: [
        "Three",
        "Five",
        "Six",
        "Ten"
      ],
      correct: "Five"
    },

    {
      category: "NUMBERS",
      question: "What does \"Ono\" mean?",
      answers: [
        "Four",
        "Five",
        "Six",
        "Seven"
      ],
      correct: "Six"
    },

    {
      category: "NUMBERS",
      question: "What does \"Whitu\" mean?",
      answers: [
        "Six",
        "Seven",
        "Eight",
        "Nine"
      ],
      correct: "Seven"
    },

    {
      category: "NUMBERS",
      question: "What does \"Waru\" mean?",
      answers: [
        "Seven",
        "Eight",
        "Nine",
        "Ten"
      ],
      correct: "Eight"
    },

    {
      category: "NUMBERS",
      question: "What does \"Iwa\" mean?",
      answers: [
        "Seven",
        "Eight",
        "Nine",
        "Ten"
      ],
      correct: "Nine"
    },

    {
      category: "NUMBERS",
      question: "What does \"Tekau\" mean?",
      answers: [
        "Eight",
        "Nine",
        "Ten",
        "Twenty"
      ],
      correct: "Ten"
    },


    /* =========================
       MONTHS
    ========================== */

    {
      category: "MONTHS",
      question: "Which Māori month is January?",
      answers: [
        "Kohitātea",
        "Huitanguru",
        "Poutūterangi",
        "Pipiri"
      ],
      correct: "Kohitātea"
    },

    {
      category: "MONTHS",
      question: "Which Māori month is February?",
      answers: [
        "Huitanguru",
        "Haratua",
        "Mahuru",
        "Hakihea"
      ],
      correct: "Huitanguru"
    },

    {
      category: "MONTHS",
      question: "Which Māori month is March?",
      answers: [
        "Poutūterangi",
        "Paengawhāwhā",
        "Pipiri",
        "Hōngongoi"
      ],
      correct: "Poutūterangi"
    },

    {
      category: "MONTHS",
      question: "Which Māori month is April?",
      answers: [
        "Paengawhāwhā",
        "Haratua",
        "Poutūterangi",
        "Mahuru"
      ],
      correct: "Paengawhāwhā"
    },

    {
      category: "MONTHS",
      question: "Which Māori month is May?",
      answers: [
        "Haratua",
        "Pipiri",
        "Huitanguru",
        "Here-turi-kōkā"
      ],
      correct: "Haratua"
    },

    {
      category: "MONTHS",
      question: "Which Māori month is June?",
      answers: [
        "Pipiri",
        "Hōngongoi",
        "Mahuru",
        "Haratua"
      ],
      correct: "Pipiri"
    },

    {
      category: "MONTHS",
      question: "Which Māori month is July?",
      answers: [
        "Hōngongoi",
        "Here-turi-kōkā",
        "Pipiri",
        "Hakihea"
      ],
      correct: "Hōngongoi"
    },

    {
      category: "MONTHS",
      question: "Which Māori month is August?",
      answers: [
        "Here-turi-kōkā",
        "Mahuru",
        "Whiringa-ā-nuku",
        "Hōngongoi"
      ],
      correct: "Here-turi-kōkā"
    },

    {
      category: "MONTHS",
      question: "Which Māori month is September?",
      answers: [
        "Mahuru",
        "Hakihea",
        "Haratua",
        "Whiringa-ā-rangi"
      ],
      correct: "Mahuru"
    },

    {
      category: "MONTHS",
      question: "Which Māori month is October?",
      answers: [
        "Whiringa-ā-nuku",
        "Whiringa-ā-rangi",
        "Mahuru",
        "Hakihea"
      ],
      correct: "Whiringa-ā-nuku"
    },

    {
      category: "MONTHS",
      question: "Which Māori month is November?",
      answers: [
        "Whiringa-ā-rangi",
        "Whiringa-ā-nuku",
        "Hakihea",
        "Mahuru"
      ],
      correct: "Whiringa-ā-rangi"
    },

    {
      category: "MONTHS",
      question: "Which Māori month is December?",
      answers: [
        "Hakihea",
        "Kohitātea",
        "Huitanguru",
        "Pipiri"
      ],
      correct: "Hakihea"
    },


    /* =========================
       PRONUNCIATION
    ========================== */

    {
      category: "PRONUNCIATION",
      question: "Which five letters are the Māori vowels?",
      answers: [
        "A E I O U",
        "A B C D E",
        "E I O U Y",
        "A I K O T"
      ],
      correct: "A E I O U"
    },

    {
      category: "PRONUNCIATION",
      question: "Which sequence begins the A Ha Ka Ma pattern?",
      answers: [
        "A Ha Ka Ma",
        "A Ba Ca Da",
        "A Ka Ta Fa",
        "A Ha Ga La"
      ],
      correct: "A Ha Ka Ma"
    },

    {
      category: "PRONUNCIATION",
      question: "Which word contains a macron?",
      answers: [
        "Mā",
        "Ma",
        "Me",
        "Mi"
      ],
      correct: "Mā"
    },

    {
      category: "PRONUNCIATION",
      question: "Which vowel comes after A?",
      answers: [
        "E",
        "I",
        "O",
        "U"
      ],
      correct: "E"
    },

    {
      category: "PRONUNCIATION",
      question: "Which vowel comes after I?",
      answers: [
        "A",
        "E",
        "O",
        "U"
      ],
      correct: "O"
    }

  ];


  /* =====================================================
     QUIZ VARIABLES
  ===================================================== */

  let quizQuestions = [];

  let currentQuestion = 0;

  let score = 0;

  let answered = false;


  /* =====================================================
     HTML ELEMENTS
  ===================================================== */

  const restartBtn =
    document.getElementById("restartBtn");

  const quizStart =
    document.getElementById("quiz-start");

  const quizContainer =
    document.getElementById("quiz-container");

  const quizResults =
    document.getElementById("quiz-results");

  const questionNumber =
    document.getElementById("question-number");

  const question =
    document.getElementById("question");

  const quizCategory =
    document.getElementById("quiz-category");

  const progressFill =
    document.getElementById("progress-fill");

  const answerButtons =
    document.querySelectorAll(".answer-btn");

  const answerA =
    document.getElementById("answerA");

  const answerB =
    document.getElementById("answerB");

  const answerC =
    document.getElementById("answerC");

  const answerD =
    document.getElementById("answerD");

  const feedback =
    document.getElementById("feedback");

  const feedbackTitle =
    document.getElementById("feedback-title");

  const feedbackText =
    document.getElementById("feedback-text");

  const nextBtn =
    document.getElementById("nextBtn");

  const scoreDisplay =
    document.getElementById("score");

  const scoreMessage =
    document.getElementById("score-message");


  /* =====================================================
     SHUFFLE FUNCTION
  ===================================================== */

  function shuffle(array) {

    const shuffled =
      [...array];

    for (
      let i = shuffled.length - 1;
      i > 0;
      i--
    ) {

      const j =
        Math.floor(
          Math.random() * (i + 1)
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
     CREATE NEW QUIZ
  ===================================================== */

  function createQuiz() {

    /*
      Select 10 random questions
      from the question bank.
    */

    quizQuestions =
      shuffle(questionBank)
        .slice(0, 10)
        .map((item) => {

          const shuffledAnswers =
            shuffle(item.answers);

          return {
            category: item.category,
            question: item.question,
            answers: shuffledAnswers,
            correct: item.correct
          };

        });


    currentQuestion = 0;

    score = 0;

    quizStart.classList.add("hidden");

    quizResults.classList.add("hidden");

    quizContainer.classList.remove("hidden");

    loadQuestion();

  }


  /* =====================================================
     START QUIZ
  ===================================================== */

  startQuizBtn.addEventListener(
    "click",
    createQuiz
  );


  /* =====================================================
     LOAD QUESTION
  ===================================================== */

  function loadQuestion() {

    answered = false;

    const current =
      quizQuestions[currentQuestion];


    /* Question number */

    questionNumber.textContent =
      `Question ${currentQuestion + 1} of ${quizQuestions.length}`;


    /* Category */

    quizCategory.textContent =
      current.category;


    /* Question */

    question.textContent =
      current.question;


    /* Answers */

    answerA.textContent =
      current.answers[0];

    answerB.textContent =
      current.answers[1];

    answerC.textContent =
      current.answers[2];

    answerD.textContent =
      current.answers[3];


    /* Progress */

    const progress =
      ((currentQuestion + 1)
      / quizQuestions.length)
      * 100;


    progressFill.style.width =
      `${progress}%`;


    /* Reset buttons */

    answerButtons.forEach((button) => {

      button.disabled = false;

      button.classList.remove("correct");

      button.classList.remove("wrong");

    });


    /* Hide feedback */

    feedback.classList.add("hidden");

    nextBtn.classList.add("hidden");

  }


  /* =====================================================
     CHECK ANSWER
  ===================================================== */

  answerButtons.forEach((button) => {

    button.addEventListener(
      "click",
      () => {

        if (answered) return;

        answered = true;


        const selectedAnswer =
          button
            .querySelector(
              "span:last-child"
            )
            .textContent;


        const current =
          quizQuestions[currentQuestion];


        /* Disable buttons */

        answerButtons.forEach((btn) => {

          btn.disabled = true;

        });


        /* Correct */

        if (
          selectedAnswer ===
          current.correct
        ) {

          score++;

          button.classList.add(
            "correct"
          );

          feedbackTitle.textContent =
            "Ka pai! ✓";

          feedbackText.textContent =
            "Correct! Great work.";

        }


        /* Incorrect */

        else {

          button.classList.add(
            "wrong"
          );


          answerButtons.forEach((btn) => {

            const answerText =
              btn
                .querySelector(
                  "span:last-child"
                )
                .textContent;


            if (
              answerText ===
              current.correct
            ) {

              btn.classList.add(
                "correct"
              );

            }

          });


          feedbackTitle.textContent =
            "Not quite!";


          feedbackText.textContent =
            `The correct answer is ${current.correct}.`;

        }


        feedback.classList.remove(
          "hidden"
        );

        nextBtn.classList.remove(
          "hidden"
        );

      }
    );

  });


  /* =====================================================
     NEXT QUESTION
  ===================================================== */

  nextBtn.addEventListener(
    "click",
    () => {

      currentQuestion++;


      if (
        currentQuestion <
        quizQuestions.length
      ) {

        loadQuestion();

      }

      else {

        showResults();

      }

    }
  );


  /* =====================================================
     RESULTS
  ===================================================== */

  function showResults() {

    quizContainer.classList.add(
      "hidden"
    );

    quizResults.classList.remove(
      "hidden"
    );


    scoreDisplay.textContent =
      score;


    if (score === 10) {

      scoreMessage.textContent =
        "Ka rawe! Perfect score! You really know your Te Reo Māori!";

    }

    else if (score >= 8) {

      scoreMessage.textContent =
        "Ka pai rawa atu! Excellent work!";

    }

    else if (score >= 5) {

      scoreMessage.textContent =
        "Ka pai! You are doing well. Keep practising!";

    }

    else {

      scoreMessage.textContent =
        "Good effort! Keep learning and try the quiz again!";

    }

  }


  /* =====================================================
     TRY AGAIN
  ===================================================== */

  restartBtn.addEventListener(
    "click",
    createQuiz
  );

}