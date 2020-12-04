//Declare variables that with be used to access DOM
var playBtn = document.getElementById('play-btn');
var scoreBtn = document.getElementById('score-btn');
var startBtn = document.getElementById('start-btn');
var exitBtn = document.getElementById('exit-btn');
var nextBtn = document.getElementById('next-btn');
var main = document.getElementById('main');
var instructions = document.getElementById('instructions');
var questionContainer = document.getElementById('question-container');

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
//Quiz array end
  
