const data = [
  {
    id: 1,
    question: "1. what was Super Mario's first real name?",
    answears: [
      { answear: "Jumpman", isCorrect: true },
      { answear: "Mega Mario", isCorrect: false },
      { answear: "Super Dario", isCorrect: false },
      { answear: "Jumpboy", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "2. what was Super Mario's first real name?",
    answears: [
      { answear: "A", isCorrect: true },
      { answear: "B", isCorrect: false },
      { answear: "C", isCorrect: false },
      { answear: "D", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "3. what was Super Mario's first real name?",
    answears: [
      { answear: "A", isCorrect: true },
      { answear: "B", isCorrect: false },
      { answear: "C", isCorrect: false },
      { answear: "D", isCorrect: false },
    ],
  },
];

const gameScreen = document.querySelector(".game");
const resulScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const playButton = document.querySelector(".play");
