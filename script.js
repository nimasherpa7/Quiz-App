const questions = [
  {
    question:"Which contenent is Nepal in?",
    answers: [
        {text:"Europe", correct: false},
        {text:"Sount America", correct: false},
        {text:"Africa", correct: false},
        {text:"Asia", correct: true},
    ]
  },
  {
    question:"Who is the best Footballer ever?",
    answers: [
        {text:"Pele", correct: false},
        {text:"Cr7", correct: true},
        {text:"Messi", correct: false},
        {text:"Neymar", correct: false},
    ]
  },
  {
    question:"Who made Naruto?",
    answers: [
        {text:"Ben Simmons", correct: false},
        {text:"Nima", correct: false},
        {text:"Masashi Kishimoto", correct: true},
        {text:"Mikio Ikemo", correct: false},
    ]
  },
  {
    question:"What is 2+2?",
    answers: [
        {text:"21", correct: false},
        {text:"1", correct: false},
        {text:"0", correct: false},
        {text:"4", correct: true},
    ]
  },
  {
    question:"Who made microsoft?",
    answers: [
        {text:"Steve Jobs", correct: false},
        {text:"Bill Gates", correct: true},
        {text:"Jason Derulo", correct: false},
        {text:"Gordon Ramsey", correct: false},
    ]
  },
  {
    question:"What is the fasted car?",
    answers: [
        {text:"Jesko Absolut", correct: true},
        {text:"Hennesey Venom F5", correct: false},
        {text:"Bugatti Veron", correct: false},
        {text:"Rimac Nevera", correct: false},
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex=0;
  score = 0;
  nextButton.innerHTML = "Next";
  timeLeft = 60;
  showQuestions();
}

function showQuestions(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.
  question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer)
  });
}

function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }else{
    selectedBtn.classList.add("incorrect");
    timeLeft = timeLeft - 10
      }
      Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
          button.classList.add("correct");
        }
        button.disabled = true;
      });
      nextButton.style.display = "block";
  }

  function showScore(){
    resetState();
    questionElement.innerHTML = ` You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
  }

  function handelNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
      showQuestions();
    }else{
      showScore();
    }

  }

nextButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length){
    handelNextButton();
  }else{
    startQuiz();
  }
});
startQuiz();

var timeLeft = 60;

function startTimer () {
    var timerH3 = document.querySelector("#timer");

    setInterval(function() {
      timerH3.textContent = timeLeft;
      timeLeft = timeLeft - 1;
    }, 1000)
}

function begin(){
  // make the quiz appear
  var quizDiv = document.querySelector(".quiz") ;

  quizDiv.style.display = "block";

  // start the timer
  startTimer();
}

var startButton = document.querySelector("button")
startButton.addEventListener("click", begin)
