//Declare variables that with be used to access DOM
var quizBtn = document.getElementById('quiz-btn');
var scoreBtn = document.getElementById('score-btn');
var startBtn = document.getElementById('start-btn');
var exitBtn = document.getElementById('exit-btn');
var nextBtn = document.getElementById('next-btn');
var main = document.getElementById('main');
var instructions = document.getElementById('instructions');
var questionContainer = document.getElementById('question-container');
var timerText = document.getElementById('timer-text');
var questionEl = document.getElementById('question');
var optA = document.getElementById('opt-a');
var optB = document.getElementById('opt-b');
var optC = document.getElementById('opt-c');
var optD = document.getElementById('opt-d');
var option = document.getElementsByClassName('option');
var results = document.getElementById('results');
var scoreDisplay = document.getElementById('score-display');
var initals = document.getElementById('initals');
var saveBtn = document.getElementById('save-btn');
var scoreBoard = document.getElementById('score-board');



var timerCount = 120;                       //Declared variable for timer countdown
var questionCount;                          //Declared variable for timer question count defined in start quiz function.
var score;                                  //Declared variable for timer score count defined in start quiz function.


//Function to move to instructions.
    quizBtn.addEventListener('click', function(){
    quizBtn.classList.add('hide');
    scoreBtn.classList.add('hide');
    main.classList.add('hide');
    instructions.classList.remove('hide');
    startBtn.classList.remove('hide');
    exitBtn.classList.remove('hide');
})
//function to nove to instructions end.

//function to start quiz.
startBtn.addEventListener('click', startQuiz)
function startQuiz() {                          //function to start timer.
    setInterval(function() {
    timerCount --;
    if (timerCount <= 0) {
      clearInterval(timerCount = 0);
      endQuiz();
    }
    timerText.textContent= timerCount + ' s';
    },1000);                                      //function to start timer end.
    startBtn.classList.add('hide');
    exitBtn.classList.add('hide');
    instructions.classList.add('hide');
    questionContainer.classList.remove('hide');
    questionCount = 0;                            
    score=0;
    showQuestion(0);
}
//Function to start quiz end.

//Added quiz array with questions.
var quiz = [
    {
      question: 'Which of the following is a valid type of function javascript supports?',
      options: ['named function', 'anonymous function', 'Both of the above', ' None of the above.'],
      answer: 'Both of the above'
},
    {
     question: 'Which built-in method returns the characters in a string beginning at the specified location?',
     options: ['substr()', 'getSubstring()','slice()','None of the above.'],
     answer: 'substr()'
},
    {
    question: 'Why does JavaScript and Java have similar names?',
    options: ['JavaScript is a stripped-down version of Java', "JavaScript's syntax is loosely based on Java's", 
    'They both originated on the island of Java', 'None of the above'],
    answer: "JavaScript's syntax is loosely based on Java's"
},
   {
    question: '______ tag is an extension to HTML that can enclose any number of JavaScript statements.',
    options: ['<SCRIPT>', '<BODY>', '<HEAD>','<TITLE>'],
    answer: '<SCRIPT>'
},
    {
  question: 'Using _______ statement is how you test for a specific condition.',
  options: ['Select', 'If','Switch', 'For'],
  answer: 'If'
},
   {
  question: 'Which of the following is the correct syntax to display “Code Quiz” in an alert box using JavaScript?',
  options: ['alertbox(“Code Quiz”);', 'msg(“Code Quiz”);','msgbox(“Code Quiz”);','alert(“Code Quiz”);'],
  answer:'alert(“Code Quiz”);'
},
    {
  question: 'Which of these is a correct method to create a new array?',
  options:['var myArray = ();','var myArray = [];','var myArray = new Array[];','var myArray = {};'],
  answer: 'var myArray = [];'
},
    {
  question: 'Which of these is not a logical operator?',
  options: ['!', '&', '&&','||'],
  answer: '&'
},
    {
    question: 'How do you find the number with the highest value of x and y?',
    options: ['Math.max(x, y)', 'ceil(x, y)','max(x, y)','Math.ceil(x, y)'],
    answer: 'Math.max(x, y)'
},
    {
  question: 'Which of the following is not a reserved word in JavaScript?',
  options: ['throws', 'interface','program', 'short'],
  answer: 'program' 
}
]
//Quiz array end.

//Function to show questions.
function showQuestion(index) {
    questionEl.textContent =  quiz[index].question;
    optA.textContent = quiz[index].options[0];
    optB.textContent = quiz[index].options[1];
    optC.textContent = quiz[index].options[2];
    optD.textContent = quiz[index].options[3];
    
    for (var i = 0; i< option.length; i++){
    option[i].setAttribute('onclick','answerSelected(this)')
    }
}
//Function to show questions end.

//function for next button to go through all questions.
nextBtn.addEventListener('click', function(){
    if (questionCount < quiz.length-1) {
      questionCount++;
      showQuestion(questionCount);
    } else {
     endQuiz();
    };
});
//function to check selected answer.
function answerSelected(answer) {
    var userResponse = answer.textContent;
    var correctAnswer = quiz[questionCount].answer;
if (userResponse == correctAnswer){
    score +=12; 
    nextBtn.classList.remove('hide');
} 
else{
    nextBtn.classList.remove('hide');
    timerCount -=12;
    }
}
//Function to check selected answer end.

//Function to exit question section.
function endQuiz(){
totalScore = score
questionContainer.classList.add('hide');
nextBtn.classList.add('hide');
results.classList.remove('hide');
scoreDisplay.textContent = totalScore
localStorage.setItem('totalScore', totalScore);
}
//function to end quiz.

//function to save high score
initals.addEventListener('keyup', function(){
    saveBtn.classList.remove('disable');
});
saveScore = e=> {
    e.preventDefault();
var highScores = [];
var userScore = {
        initals: initals.value,
        totalScore: totalScore,
        maxScore: maxScore
    };
    highScores.push(userScore);
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('score.html');

console.log(highScores);
};


 
 








//display score in score html

//var highScores = JSON.parse(localStorage.getItem('highScores')) || [];
// how to get the high score array?

//turn high score wth name attached as an li