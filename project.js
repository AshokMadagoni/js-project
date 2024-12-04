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
let topname = document.getElementById("username"); 
let username= localStorage.getItem("sidename"); 
topname.textContent = `${username}`;
const messageSound = new Audio('C:/Users/madag/OneDrive/Documents/10k_projects/js-project/message.mp3.wav');
const messageSound1 = new Audio('C:/Users/madag/OneDrive/Documents/10k_projects/js-project/message1.mp3.wav');
const messageSound2 = new Audio('C:/Users/madag/OneDrive/Documents/10k_projects/js-project/message2.mp3.wav');
let questions;
let pageload=localStorage.getItem("page");
let quiztitle=document.getElementById("quiztitle")
quiztitle.textContent=`${pageload} QUIZ`
if(pageload=="JAVASCRIPT"){
    document.body.style.backgroundColor = "#f0db41";
     questions = [
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
}
else if(pageload=="HTML"){
    document.body.style.backgroundColor = " #F06529";
     questions = [
        { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyperlink Text Markup Language", "Home Tool Markup Language"], answer: 0 },
        { question: "Which tag is used to define an internal style sheet in HTML?", options: ["<style>", "<script>", "<link>", "<css>"], answer: 0 },
        { question: "What is the correct HTML element for inserting a line break?", options: ["<lb>", "<br>", "<break>", "<hr>"], answer: 1 },
        { question: "Which attribute is used to specify the path to an image in HTML?", options: ["src", "href", "alt", "url"], answer: 0 },
        { question: "Which tag is used to define a hyperlink in HTML?", options: ["<link>", "<a>", "<href>", "<button>"], answer: 1 },
        { question: "Which tag is used for the largest heading in HTML?", options: ["<h1>", "<h6>", "<header>", "<head>"], answer: 0 },
        { question: "What is the purpose of the alt attribute in an image tag?", options: ["To define the image's width", "To provide a description for the image", "To specify the image's path", "To add a caption to the image"], answer: 1 },
        { question: "Which HTML tag is used to define an unordered list?", options: ["<ol>", "<ul>", "<li>", "<dl>"], answer: 1 },
        { question: "Which element is used to create a form in HTML?", options: ["<input>", "<form>", "<button>", "<textarea>"], answer: 1 },
        { question: "What is the default value of the type attribute in an input element?", options: ["button", "text", "password", "checkbox"], answer: 1 },
        { question: "What is the correct HTML element for playing video files?", options: ["<video>", "<movie>", "<media>", "<mp4>"], answer: 0 },
        { question: "Which tag is used to define a table in HTML?", options: ["<table>", "<tr>", "<td>", "<th>"], answer: 0 },
        { question: "What is the purpose of the <head> element in HTML?", options: ["To define the title and meta information", "To display the content", "To structure the page", "To add images"], answer: 0 },
        { question: "Which tag is used to define an ordered list?", options: ["<ol>", "<ul>", "<dl>", "<li>"], answer: 0 },
        { question: "Which HTML attribute is used to define the background color of a page?", options: ["color", "bgcolor", "background", "style"], answer: 1 },
        { question: "Which HTML tag is used to define a paragraph?", options: ["<p>", "<para>", "<h1>", "<text>"], answer: 0 },
        { question: "Which HTML tag is used to define the document's title?", options: ["<title>", "<head>", "<header>", "<meta>"], answer: 0 },
        { question: "What is the correct HTML element to define a text input field?", options: ["<input>", "<text>", "<textfield>", "<textarea>"], answer: 0 },
        { question: "Which HTML tag is used to define a dropdown list?", options: ["<select>", "<input>", "<option>", "<dropdown>"], answer: 0 },
        { question: "Which attribute is used to specify the destination of a link?", options: ["href", "src", "alt", "link"], answer: 0 },
        { question: "Which HTML tag is used to define a horizontal rule?", options: ["<hr>", "<rule>", "<line>", "<br>"], answer: 0 },
        { question: "Which HTML element is used to define a header in a document?", options: ["<header>", "<h1>", "<head>", "<top>"], answer: 0 },
        { question: "What is the correct HTML tag to include a background image?", options: ["<bgimage>", "<background>", "<img>", "<style>"], answer: 2 },
        { question: "What is the HTML tag for defining a footer?", options: ["<footer>", "<bottom>", "<foot>", "<end>"], answer: 0 },
        { question: "Which tag is used to define the metadata about an HTML document?", options: ["<meta>", "<head>", "<title>", "<style>"], answer: 0 },
        { question: "What does the <strong> tag do in HTML?", options: ["Defines a block of text", "Emphasizes text", "Makes text bold", "Makes text italic"], answer: 2 },
        { question: "Which HTML tag is used for inline styles?", options: ["<style>", "<css>", "<script>", "<link>"], answer: 0 },
        { question: "Which tag is used to define a list item?", options: ["<li>", "<item>", "<list>", "<ol>"], answer: 0 },
        { question: "Which tag is used to define an iframe?", options: ["<frame>", "<iframe>", "<window>", "<object>"], answer: 1 },
        { question: "What is the purpose of the <div> tag?", options: ["To group HTML elements together", "To display text", "To add a header", "To insert an image"], answer: 0 },
        { question: "Which HTML tag is used to display a quote?", options: ["<q>", "<quote>", "<blockquote>", "<text>"], answer: 2 },
        { question: "Which attribute is used to specify an image's width in HTML?", options: ["width", "size", "height", "src"], answer: 0 },
        { question: "Which HTML tag is used to display a numbered list?", options: ["<ol>", "<ul>", "<li>", "<dl>"], answer: 0 },
        { question: "What does the <meta> tag do in HTML?", options: ["Defines the title of the page", "Defines the character set", "Specifies the background color", "Includes external scripts"], answer: 1 }
    ];
    
}
else if(pageload=="CSS"){
    document.body.style.backgroundColor = "#2965f1";
     questions= [
        { question: "Which CSS property is used to change the background color?", options: ["background-color", "color", "bg-color", "background"], answer: 0 },
        { question: "What is the default value of the `position` property in CSS?", options: ["absolute", "relative", "static", "fixed"], answer: 2 },
        { question: "Which property is used to change the font of text in CSS?", options: ["font-family", "font-size", "text-style", "font-weight"], answer: 0 },
        { question: "Which CSS property is used to control the spacing between lines of text?", options: ["line-height", "letter-spacing", "word-spacing", "text-spacing"], answer: 0 },
        { question: "Which property is used to create space between the element's border and its content?", options: ["margin", "padding", "border-spacing", "space"], answer: 1 },
        { question: "What is the correct CSS syntax for selecting an element with the id 'header'?", options: ["#header", ".header", "header", "header#"], answer: 0 },
        { question: "Which CSS property is used to make text bold?", options: ["font-weight", "font-style", "text-bold", "font-size"], answer: 0 },
        { question: "What does the `z-index` property in CSS control?", options: ["The font size", "The stack order of elements", "The visibility of elements", "The background color of elements"], answer: 1 },
        { question: "Which property is used to change the font size in CSS?", options: ["font-size", "font-style", "text-size", "text-font"], answer: 0 },
        { question: "Which CSS property controls the layout of the grid?", options: ["grid-template-rows", "grid-column", "grid-template-columns", "grid-style"], answer: 2 },
        { question: "Which CSS property is used to add shadow to text?", options: ["text-shadow", "box-shadow", "shadow-text", "shadow"], answer: 0 },
        { question: "Which property is used to change the visibility of an element?", options: ["display", "visibility", "opacity", "position"], answer: 1 },
        { question: "What does the `float` property in CSS do?", options: ["Aligns elements to the left or right", "Creates a fixed layout", "Hides elements", "Adjusts margins"], answer: 0 },
        { question: "Which CSS property is used to specify the space between content and its borders?", options: ["padding", "margin", "border-spacing", "gap"], answer: 0 },
        { question: "How do you make a webpage element invisible but still occupy space?", options: ["visibility: hidden", "display: none", "opacity: 0", "position: absolute"], answer: 0 },
        { question: "Which property is used to set the background image of an element in CSS?", options: ["background-image", "background-color", "image-background", "bg-image"], answer: 0 },
        { question: "What is the purpose of the `@media` rule in CSS?", options: ["To apply styles to different screen sizes", "To define animation styles", "To create keyframes for animation", "To import external styles"], answer: 0 },
        { question: "Which CSS property is used to set the width of a border?", options: ["border-width", "border-size", "border-thickness", "border-style"], answer: 0 },
        { question: "Which CSS property is used to add rounded corners to an element?", options: ["border-radius", "corner-radius", "round-corners", "border-corner"], answer: 0 },
        { question: "What is the purpose of the `display: flex` property in CSS?", options: ["It is used for creating flexible layouts", "It sets the element's visibility", "It defines the element's width", "It controls the position of elements"], answer: 0 },
        { question: "How do you select all the `<p>` tags in a document using CSS?", options: ["p{}", "p[]", "select(p)", "all(p)"], answer: 0 },
        { question: "Which CSS property is used to set the height of an element?", options: ["height", "min-height", "max-height", "all of the above"], answer: 3 },
        { question: "What is the purpose of the `box-sizing` property in CSS?", options: ["To control the element's border size", "To include padding and borders in the element's total width/height", "To specify the size of the box model", "To set the border style"], answer: 1 },
        { question: "Which value of `position` makes an element position relative to its normal position?", options: ["relative", "absolute", "fixed", "sticky"], answer: 0 },
        { question: "Which property is used to control the space between columns in a CSS grid?", options: ["grid-column-gap", "column-gap", "grid-row-gap", "gap"], answer: 1 },
        { question: "Which property in CSS is used to control the text alignment within an element?", options: ["text-align", "align-text", "vertical-align", "text-position"], answer: 0 },
        { question: "How do you make a list not display bullets in CSS?", options: ["list-style: none;", "bullet-style: none;", "no-bullet: true;", "list-style-type: none;"], answer: 0 },
        { question: "What is the correct CSS syntax for making a list item display as a block?", options: ["display: block;", "block: true;", "list-item: block;", "list-style: block;"], answer: 0 },
        { question: "How do you apply a style to an element when hovering over it?", options: ["element:hover {}", "element:focus {}", "element:hover-effect {}", "element:hovered {}"], answer: 0 },
        { question: "Which property is used to change the font style of text?", options: ["font-style", "font-family", "font-size", "font-weight"], answer: 0 },
        { question: "Which of the following is a correct CSS syntax for a class selector?", options: [".class{}", "#class{}", "class{}", "classname{}"], answer: 0 },
        { question: "Which CSS property is used to control the size of the text?", options: ["font-size", "text-size", "text-style", "font-weight"], answer: 0 },
        { question: "What does the `white-space: nowrap` property do in CSS?", options: ["Prevents the text from wrapping to a new line", "Wraps the text within the container", "Creates an empty space between elements", "Allows the text to wrap freely"], answer: 0 },
        { question: "How do you make text italic in CSS?", options: ["font-style: italic;", "font-style: oblique;", "text-style: italic;", "text-italic: true;"], answer: 0 }
    ];
    
}
else{
    document.body.style.background = "linear-gradient(to right, #306998, #ffd43b)";
     questions = [
        { question: "Which keyword is used to define a function in Python?", options: ["def", "function", "fun", "define"], answer: 0 },
        { question: "What is the correct syntax for a while loop in Python?", options: ["while condition:", "while (condition):", "for condition:", "loop while condition:"], answer: 0 },
        { question: "Which of the following is a mutable data type in Python?", options: ["list", "tuple", "string", "int"], answer: 0 },
        { question: "What is the output of `print(3 ** 2)` in Python?", options: ["9", "6", "32", "None"], answer: 0 },
        { question: "How do you declare a variable in Python?", options: ["variable = value", "value : variable", "var = value", "let var = value"], answer: 0 },
        { question: "Which of the following is the correct way to import a module in Python?", options: ["import module", "include module", "using module", "import module()"], answer: 0 },
        { question: "What is the method to convert a string to lowercase in Python?", options: ["str.lower()", "string.toLower()", "str.to_lower()", "lower()"], answer: 0 },
        { question: "What does the `len()` function do in Python?", options: ["Returns the length of an object", "Returns the last element", "Returns the first element", "Returns the sum of numbers"], answer: 0 },
        { question: "How do you check the type of an object in Python?", options: ["type(object)", "object.type()", "check(object)", "get_type(object)"], answer: 0 },
        { question: "Which operator is used for floor division in Python?", options: ["/", "%", "//", "**"], answer: 2 },
        { question: "Which function is used to read input from the user in Python?", options: ["input()", "get_input()", "read()", "scanf()"], answer: 0 },
        { question: "What will be the output of `print(type('5'))` in Python?", options: ["int", "str", "float", "list"], answer: 1 },
        { question: "How do you define a dictionary in Python?", options: ["{}", "[]", "()", "<>"], answer: 0 },
        { question: "What will `print([1, 2, 3] + [4, 5])` output?", options: ["[1, 2, 3, 4, 5]", "[5, 4, 3, 2, 1]", "[1, 2, 3] [4, 5]", "Error"], answer: 0 },
        { question: "Which method is used to add an element to a list in Python?", options: ["add()", "append()", "insert()", "push()"], answer: 1 },
        { question: "What does the `break` statement do in Python?", options: ["Exits the loop", "Continues the loop", "Pauses the loop", "None of the above"], answer: 0 },
        { question: "Which of the following is used to define a class in Python?", options: ["class ClassName:", "def ClassName:", "function ClassName:", "object ClassName:"], answer: 0 },
        { question: "What is the default value of the `end` parameter in the `print()` function?", options: ["'\n'", "' '", "''", "'\\t'"], answer: 0 },
        { question: "Which of the following methods is used to remove an item from a list in Python?", options: ["remove()", "delete()", "pop()", "all of the above"], answer: 3 },
        { question: "What does the `continue` statement do in Python?", options: ["Skips the current iteration", "Exits the loop", "Starts a new loop", "None of the above"], answer: 0 },
        { question: "How do you define a class variable in Python?", options: ["variable = value", "self.variable = value", "ClassName.variable = value", "class.variable = value"], answer: 2 },
        { question: "Which of the following functions can be used to round a number to a given precision in Python?", options: ["round()", "ceil()", "floor()", "precision()"], answer: 0 },
        { question: "What will `print('hello'.upper())` output?", options: ["hello", "HELLO", "Hello", "None"], answer: 1 },
        { question: "Which function in Python is used to get the absolute value of a number?", options: ["abs()", "absolute()", "get_abs()", "abs_value()"], answer: 0 },
        { question: "How do you handle exceptions in Python?", options: ["try/except", "try/catch", "catch/except", "error/except"], answer: 0 },
        { question: "Which method is used to join elements of a list into a string in Python?", options: ["concat()", "merge()", "join()", "combine()"], answer: 2 },
        { question: "Which function is used to sort a list in Python?", options: ["sort()", "sorted()", "order()", "arrange()"], answer: 0 },
        { question: "What does the `is` operator do in Python?", options: ["Checks equality", "Checks identity", "Compares size", "None of the above"], answer: 1 },
        { question: "Which function is used to find the maximum element in an iterable in Python?", options: ["max()", "maximum()", "highest()", "get_max()"], answer: 0 },
        { question: "Which of the following statements is true about Python lists?", options: ["Lists are mutable", "Lists are immutable", "Lists are unordered", "Lists can't store duplicate values"], answer: 0 },
        { question: "What is the correct syntax for defining a lambda function in Python?", options: ["lambda arguments: expression", "function arguments: expression", "def lambda arguments: expression", "lambda: expression"], answer: 0 },
        { question: "Which of the following is the correct way to comment in Python?", options: ["// comment", "# comment", "/* comment */", "; comment"], answer: 1 },
        { question: "What is the correct way to declare a global variable in Python?", options: ["global variable", "global var = value", "var = value", "global var"], answer: 1 },
        { question: "Which method is used to split a string in Python?", options: ["split()", "break()", "cut()", "divide()"], answer: 0 }
    ];
    
}



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
    if (a === 1) {
        messageSound.play(); 
    }
    else{
        messageSound1.play();
    }
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
    messageSound2.play();
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    resultdisplay.textContent = `You scored ${score} out of ${questions.length}`;
}


startButton.onclick = startQuiz;
nextbutton.onclick =()=> navigateQuestion(1);
prevbutton.onclick = ()=> navigateQuestion(-1);
submitbutton.onclick = submitQuiz;
restartbutton.onclick = restartQuiz;



