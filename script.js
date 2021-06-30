// var answerButtonsElement = document.getElementById('answer-buttons')

// create var questions
var quizQuestions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: "all of the above"
    },
    {
      title:
        "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes"
    },
    {
      title:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log"
    }
  ];
var timeState;
var quizQuestionIndex = 0;
var time = quizQuestions.length * 10
var timerEl = document.querySelector('.timer')

var startButton = document.getElementById('start')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var submitButton = document.getElementById('submit-btn')
var answerButtonsElement = document.getElementById("answer-buttons")




// add decrement function
function decrementTime() {
    time --;
    timerEl.textContent = time
    if (time == 0) {
    console.log("quiz is over");
    }
}
function startGame() {
    var startScreen = document.getElementById('start-screen')
    startScreen.setAttribute("class", "hide")
    questionContainerElement.removeAttribute("class")
    timeState = setInterval(decrementTime, 1000);

timerEl.textContent = time;
getQuestion()

}
function getQuestion() {
    
    
    var displayQuestion = quizQuestions[quizQuestionIndex]
    questionElement.textContent = displayQuestion.title
    answerButtonsElement.innerHTML = ""
    displayQuestion.choices.forEach(function(choice){
    
    
    
    var answerChoice = document.createElement("button")
    answerChoice.setAttribute("class", "choice")
    answerChoice.setAttribute("value", choice)
    console.log(choice)
    answerChoice.textContent = choice

    // call check for answer
    answerChoice.onclick = checkForAnswer
    answerButtonsElement.appendChild(answerChoice)
    })



}
function checkForAnswer() {
    if (this.value !== quizQuestions[quizQuestionIndex].answer)
    {   time = time - 5
        console.log("incorrect")
        console.log(quizQuestions[quizQuestionIndex].answer)

    }else{
        console.log("correct")
    }
    quizQuestionIndex++
    if (quizQuestionIndex === quizQuestions.length) {
        quizEnd()
    }else{
        getQuestion()
    }
    

}
function quizEnd() {
    clearInterval(timeState)
}
// hide questions


// add/get question function
// add function to check right or wrong answer
// add quiz ending function
// add function to save to local storage / submit button / click


// create highscores tab and time in header?

// create start button in order for the game to start
startButton.onclick = startGame;