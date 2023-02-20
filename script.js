const data = [
  {
    id: 1,
    question: "1. what was Super Mario's first real name?",
    answers: [
      { answer: "Jumpman", isCorrect: true },
      { answer: "Mega Mario", isCorrect: false },
      { answer: "Super Dario", isCorrect: false },
      { answer: "Jumpboy", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "2. what was Super Mario's first real name?",
    answers: [
      { answer: "A", isCorrect: true },
      { answer: "B", isCorrect: false },
      { answer: "C", isCorrect: false },
      { answer: "D", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "3. what was Super Mario's first real name?",
    answers: [
      { answer: "A", isCorrect: true },
      { answer: "B", isCorrect: false },
      { answer: "C", isCorrect: false },
      { answer: "D", isCorrect: false },
    ],
  },
];

//pick html elements
const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const playButton = document.querySelector(".play");

//Counters
let questionIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const playAgain = () => {
  //reset counters for new game
  let questionIndex = 0;
  let correctCount = 0;
  let wrongCount = 0;
  let total = 0;
  showQuestion(questionIndex);
};
playButton.addEventListener("click", () => {
  //Make invisible again the result screen
  resultScreen.style.display = "none";
  gameScreen.style.display = "block";
  playAgain();
});

const showResult = () => {
  resultScreen.style.display = "block";
  gameScreen.style.display = "none";

  resultScreen.querySelector(
    ".correct"
  ).textContent = `Correct Answers: ${correctCount}`;

  resultScreen.querySelector(
    ".wrong"
  ).textContent = `Wrong Answers: ${wrongCount}`;

  resultScreen.querySelector(".score").textContent = `Score: ${
    (correctCount++ - wrongCount++) * 100
  }`;
};

//function with html formatting for questions
const showQuestion = (qNumber) => {
  if (questionIndex === data.length) return showResult();
  selectedAnswer = null;
  question.textContent = data[qNumber].question;
  answersContainer.innerHTML = data[qNumber].answers
    .map(
      (item, index) =>
        `
  <div class="answer"> 
      <input name="answer" type="radio" id=${index} value=${item.isCorrect}/> 
      <label for="1">${item.answer}</label>
    </div>
    `
    )
    .join("");

  selectAnswer();
};

const selectAnswer = () => {
  answersContainer.querySelectorAll("input").forEach((el) => {
    el.addEventListener("click", (e) => {
      selectedAnswer = e.target.value;
      selectedAnswer = selectedAnswer.replace("/", ""); //Fixed the var output, i can't explain why always display the "false/", but i've fixed it.
    });
  });
};

const submitAnswer = () => {
  submit.addEventListener("click", () => {
    if (selectedAnswer !== null) {
      selectedAnswer === "true" ? correctCount++ : wrongCount++;
      questionIndex++;
      showQuestion(questionIndex);
    } else alert("Select an Answer to continue, please!");
  });
};

//Calls Function
submitAnswer();
showQuestion(questionIndex);
