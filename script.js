var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')
var buttonOne = document.getElementById('btn1')
var buttonTwo = document.getElementById('btn2')
var buttonThree = document.getElementById('btn3')
var buttonFour = document.getElementById('btn4')

// create var questions
var questionBootstrap = {
    question: 'What is a popular Third Party API used for styling websites?',
    answer1: 'Cats Pajamas',
    answer2: 'Bootstrap',   
    answer3: 'Strapboot',
    answer4: 'CSSSSSSSS',
}
console.log(questionBootstrap);

var questionjQuery = {
    question: 'What is a popular Third Party API used for alternate JavaScript code?',
    answer1: 'Kung Fu',
    answer2: 'Matthew McConaughey',
    answer3: 'Jay Leno',
    answer4: 'jQuery',
}

var questionCSS = {
    question: 'What is a file type used mainly only to style an HTML page?',
    answer1: 'CSS',
    answer2: 'CASS',
    answer3: 'CASSY FRASS',
    answer4: 'CIA',
}

var questionJavaScript = {
    question: 'What coding language is currently the bane of my existence?',
    answer1: 'Not JavaScript',
    answer2: 'JavaScrpt',
    answer3: 'Not JavaScript',
    answer4: 'Not JavaScript',
}

var questionAnswerArray = [questionBootstrap, questionjQuery, questionCSS, questionJavaScript];
var correctAnswerArray = [questionAnswerArray[0].answer2, questionAnswerArray[1].answer4, questionAnswerArray[2].answer1, questionAnswerArray[3].answer2];

console.log(correctAnswerArray)


// create highscores tab and time in header?

// create start button in order for the game to start
