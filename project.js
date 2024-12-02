let startButton=document.getElementById("start-botton")
let startscreen=document.getElementById("fst-screen")
let quizScreen=document.getElementById("second-screen")
let resultScreen=document.getElementById("third-screen")
let timerdisplay=document.getElementById("timer")
let submitbutton=document.getElementById("submit-button")
let questiondisplay=document.getElementById("question")
let optionsContainer=document.getElementById("option")
let prevbutton=document.getElementById("previous")
let nextbutton=document.getElementById("next")
let resultdisplay=document.getElementById("result")
let restartbutton=document.getElementById("restart")

let questions = [
    { question: "What is JavaScript?", options: ["A language", "A framework", "A library", "A tool"], answer: 0 },
    { question: "Which company developed JavaScript?", options: ["Microsoft", "Apple", "Netscape", "Google"], answer: 2 },
    { question: "Which symbol is used for comments in JavaScript?", options: ["//", "/*", "#", "%%"], answer: 0 },
    { question: "Which type of language is JavaScript?", options: ["Server-side", "Client-side", "Markup", "Query"], answer: 1 },
    { question: "Which of the following is a JavaScript data type?", options: ["Number", "Style", "HTML", "Font"], answer: 0 },
    { question: "What is the correct syntax to declare a variable in JavaScript?", options: ["let", "dim", "var", "int"], answer: 0 },
    { question: "How do you create a function in JavaScript?", options: ["def myFunction()", "function myFunction()", "myFunction = func()", "function:myFunction()"], answer: 1 },
    { question: "Which operator is used for strict equality in JavaScript?", options: ["=", "==", "===", "!="], answer: 2 },
    { question: "How can you add a comment in JavaScript?", options: ["<-- comment -->", "/* comment */", "// comment", "-- comment"], answer: 2 },
    { question: "What is the output of `typeof null` in JavaScript?", options: ["object", "null", "undefined", "boolean"], answer: 0 },
    { question: "Which of the following is NOT a reserved keyword in JavaScript?", options: ["let", "class", "function", "print"], answer: 3 },
    { question: "Which method is used to find the length of a string in JavaScript?", options: ["size()", "length", "length()", "size"], answer: 1 },
    { question: "What does `NaN` stand for in JavaScript?", options: ["Not a Name", "Not a Null", "Not a Number", "New Array Node"], answer: 2 },
    { question: "Which JavaScript method converts JSON data to a JavaScript object?", options: ["JSON.stringify()", "JSON.parse()", "JSON.objectify()", "JSON.toObject()"], answer: 1 },
    { question: "What is the purpose of the `this` keyword in JavaScript?", options: ["It refers to the current object", "It is a placeholder variable", "It defines a variable", "It binds a function"], answer: 0 },
    { question: "Which JavaScript method removes the last element from an array?", options: ["pop()", "removeLast()", "delete()", "slice()"], answer: 0 },
    { question: "How can you create an array in JavaScript?", options: ["let arr = {}", "let arr = []", "let arr = ()", "let arr = <>"], answer: 1 },
    { question: "Which JavaScript keyword is used to define a constant?", options: ["var", "const", "let", "static"], answer: 1 },
    { question: "Which event is triggered when a user clicks on an HTML element?", options: ["onmouseover", "onchange", "onclick", "onhover"], answer: 2 },
    { question: "Which symbol is used for the logical AND operator in JavaScript?", options: ["||", "&&", "&", "%%"], answer: 1 },
    { question: "How do you write an IF statement in JavaScript?", options: ["if i==5 then", "if(i==5)", "if i=5", "if i=5 then"], answer: 1 },
    { question: "Which method is used to add one or more elements to the end of an array?", options: ["add()", "push()", "insert()", "append()"], answer: 1 },
    { question: "What is the correct way to write a JavaScript array?", options: ["let colors = 'red', 'green', 'blue'", "let colors = ['red', 'green', 'blue']", "let colors = (1:'red', 2:'green', 3:'blue')", "let colors = {'red', 'green', 'blue'}"], answer: 1 },
    { question: "Which JavaScript method is used to join two or more arrays?", options: ["concat()", "join()", "merge()", "append()"], answer: 0 },
    { question: "What is the output of `Boolean(0)` in JavaScript?", options: ["true", "false", "undefined", "NaN"], answer: 1 },
    { question: "Which JavaScript object is used to manipulate the HTML DOM?", options: ["Window", "Document", "Browser", "HTML"], answer: 1 },
    { question: "Which statement is used to stop a loop in JavaScript?", options: ["break", "return", "stop", "exit"], answer: 0 },
    { question: "What is the purpose of the `setTimeout` function in JavaScript?", options: ["It repeats code indefinitely", "It pauses code execution", "It executes code after a specified delay", "It stops execution"], answer: 2 },
    { question: "Which JavaScript method converts a string to uppercase?", options: ["toUpper()", "toUpperCase()", "changeCase()", "upperCase()"], answer: 1 },
    { question: "What will be the output of `2 + '2'` in JavaScript?", options: ["4", "'22'", "NaN", "Error"], answer: 1 },
    { question: "What is the correct way to write a JavaScript object?", options: ["let obj = []", "let obj = {}", "let obj = ()", "let obj = <>"], answer: 1 }
];


let currentQuestionIndex = 0;
let selectedAnswers = [];
let timeRemaining = 1800; 
let timerInterval;

function startQuiz() {
    startscreen.classList.add("hidden")
    quizScreen.classList.remove("hidden");
    loadQuestion();
    startTimer();
}

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    questiondisplay.textContent = question.question;
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-button');
        button.onclick = () => selectAnswer(index);
        if (selectedAnswers[currentQuestionIndex] === index) {
            button.classList.add('selected');
        }
        optionsContainer.appendChild(button);
    });
    updateControls();
}

function startTimer(){
    timerInterval = setInterval(() => {
        timeRemaining--;
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timerdisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        if(minutes<2){
            timerdisplay.style.color="red"
        }
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            submitQuiz();
        } 
    }, 1000);
} 

function selectAnswer(optionIndex) {
    selectedAnswers[currentQuestionIndex] = optionIndex;
    const optionButtons = document.querySelectorAll('.option-button');
    optionButtons.forEach((button, index) => {
        button.classList.remove('selected');
        if (index === optionIndex) {
            button.classList.add('selected');
        }
    });
}

function updateControls() {
    prevbutton.disabled = currentQuestionIndex === 0;
    nextbutton.disabled = currentQuestionIndex === questions.length - 1;
}

function navigateQuestion(a) {
    currentQuestionIndex +=a;
    loadQuestion();
}

function restartQuiz() {
    resultScreen.classList.add('hidden');
    startscreen.classList.remove('hidden');
    timerdisplay.textContent = "30:00"
    currentQuestionIndex = 0;
    selectedAnswers = [];
    timeRemaining = 1800;
}

function submitQuiz() {
    clearInterval(timerInterval);
    let score = 0;
    questions.forEach((q, index) => {
        if (selectedAnswers[index] === q.answer) {
            score++;
        }
    });
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    resultdisplay.textContent = `You scored ${score} out of ${questions.length}`;
}


startButton.onclick = startQuiz;
nextbutton.onclick =()=> navigateQuestion(1);
prevbutton.onclick = ()=> navigateQuestion(-1);
submitbutton.onclick = submitQuiz;
restartbutton.onclick = restartQuiz;



