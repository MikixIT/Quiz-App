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

const gameScreen = document.querySelector(".game");
const resulScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const playButton = document.querySelector(".play");

let questionIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer = 0;

const showQuestion = (qNumber) => {
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
      console.log(e.target.value);
    });
  });
};

showQuestion(questionIndex);
