const data = [
  {
    id: 1,
    question: "1. What was Super Mario's first real name?",
    answers: [
      { answer: "Jumpman", isCorrect: true },
      { answer: "Mega Mario", isCorrect: false },
      { answer: "Super Dario", isCorrect: false },
      { answer: "Jumpboy", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "2. The best-selling book series of the 21st century?",
    answers: [
      { answer: "Harry Potter", isCorrect: true },
      { answer: "Don Quixote", isCorrect: false },
      { answer: "A Tale of Two Cities", isCorrect: false },
      { answer: "The Hobbit", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "3. What is the smallest country in the world?",
    answers: [
      { answer: "Northern Ireland", isCorrect: false },
      { answer: "San Marino", isCorrect: false },
      { answer: "The Vatican", isCorrect: true },
      { answer: "Iceland", isCorrect: false },
    ],
  },
  {
    id: 4,
    question: "4. How many keys are there in classical piano?",
    answers: [
      { answer: "82", isCorrect: false },
      { answer: "78", isCorrect: false },
      { answer: "88", isCorrect: true },
      { answer: "64", isCorrect: false },
    ],
  },
  {
    id: 5,
    question: "5. What city did 'the Beatles' come from?",
    answers: [
      { answer: "London", isCorrect: false },
      { answer: "Liverpool", isCorrect: true },
      { answer: "New York", isCorrect: false },
      { answer: "Chicago", isCorrect: false },
    ],
  },
  {
    id: 6,
    question: "6. When was Netflix founded?",
    answers: [
      { answer: "2018", isCorrect: false },
      { answer: "2014", isCorrect: false },
      { answer: "2006", isCorrect: false },
      { answer: "1997", isCorrect: true },
    ],
  },
  {
    id: 7,
    question: "7. Who invented the World Wide Web (WWW) and when?",
    answers: [
      { answer: "Tim Berners-Lee-Jackson, 1890", isCorrect: false },
      { answer: "Tim Berners-Lee, 1990", isCorrect: true },
      { answer: "Marc Berners-Lee, 1991", isCorrect: false },
      { answer: "Bruce Berners-Lee, 1998", isCorrect: false },
    ],
  },
  {
    id: 8,
    question: "8. What happened on July 20, 1969?",
    answers: [
      { answer: "President Kennedy dies", isCorrect: false },
      { answer: "Apollo Moon landing", isCorrect: true },
      { answer: "The first McDonald's", isCorrect: false },
      { answer: "Nothing important happens", isCorrect: false },
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
  questionIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  total = 0;
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
