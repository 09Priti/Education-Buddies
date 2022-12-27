function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}

function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}

function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Guess the phonetics. <br> <img src = 'img/AP.png' height = '200' width = '200' align = 'center' /> </br>", ["A", "N","V", "P"], "A"),

    new Question("Guess the phonetics. <br> <img src = 'img/PP.png' height = '200' width = '200' align = 'center' /> </br>", ["F", "D","M", "P"], "P"),
    
    new Question("Guess the phonetics. <br> <img src = 'img/MP.png' height = '200' width = '200' align = 'center' /> </br>", ["N", "A","M", "S"], "M"),

    new Question("Guess the phonetics. <br> <img src = 'img/RP.png' height = '200' width = '200' align = 'center' /> </br>", ["P", "Q","B", "R"], "R"),
        
    new Question("Guess the phonetics. <br> <img src = 'img/QP.png' height = '200' width = '200' align = 'center' /> </br>", ["O", "Q","D", "F"], "Q"),

    new Question("Guess the phonetics. <br> <img src = 'img/BP.png' height = '200' width = '200' align = 'center' /> </br>", ["K", "D","B", "C"], "B"),

    new Question("Guess the phonetics. <br> <img src = 'img/ZP.png' height = '200' width = '200' align = 'center' /> </br>", ["Z", "A","N", "E"], "Z"),

    new Question("Guess the phonetics. <br> <img src = 'img/XP.png' height = '200' width = '200' align = 'center' /> </br>", ["X", "R","A", "Y"], "X"),

    new Question("Guess the phonetics. <br> <img src = 'img/YP.png' height = '200' width = '200' align = 'center' /> </br>", ["F", "S","L", "Y"], "Y"),

    new Question("Guess the phonetics. <br> <img src = 'img/OP.png' height = '200' width = '200' align = 'center' /> </br>", ["U", "O","C", "V"], "O"),

    new Question("Guess the phonetics. <br> <img src = 'img/DP.png' height = '200' width = '200' align = 'center' /> </br>", ["B", "I","D", "J"], "D"),

    new Question("Guess the phonetics. <br> <img src = 'img/CP.png' height = '200' width = '200' align = 'center' /> </br>", ["D", "G","K", "C"], "C"),

    new Question("Guess the phonetics. <br> <img src = 'img/GP.png' height = '200' width = '200' align = 'center' /> </br>", ["G", "P","A", "H"], "G"),

    new Question("Guess the phonetics. <br> <img src = 'img/HP.png' height = '200' width = '200' align = 'center' /> </br>", ["M", "Z","U", "H"], "H"),

    new Question("Guess the phonetics. <br> <img src = 'img/FP.png' height = '200' width = '200' align = 'center' /> </br>", ["E", "F","X", "Y"], "F"),

    new Question("Guess the phonetics. <br> <img src = 'img/EP.png' height = '200' width = '200' align = 'center' /> </br>", ["T", "F","E", "L"], "E"),

    new Question("Guess the phonetics. <br> <img src = 'img/SP.png' height = '200' width = '200' align = 'center' /> </br>", ["H", "R","S", "U"], "S"),
    
    new Question("Guess the phonetics. <br> <img src = 'img/IP.png' height = '200' width = '200' align = 'center' /> </br>", ["L", "T","I", "X"], "I"),

    new Question("Guess the phonetics. <br> <img src = 'img/UP.png' height = '200' width = '200' align = 'center' /> </br>", ["V", "U","G", "S"], "U"),

    new Question("Guess the phonetics. <br> <img src = 'img/JP.png' height = '200' width = '200' align = 'center' /> </br>", ["K", "O","J", "P"], "M"),

    new Question("Guess the phonetics. <br> <img src = 'img/KP.png' height = '200' width = '200' align = 'center' /> </br>", ["K", "I","F", "E"], "K"),

    new Question("Guess the phonetics. <br> <img src = 'img/TP.png' height = '200' width = '200' align = 'center' /> </br>", ["P", "S","T", "N"], "T"),

    new Question("Guess the phonetics. <br> <img src = 'img/LP.png' height = '200' width = '200' align = 'center' /> </br>", ["L", "I","O", "N"], "L"),

    new Question("Guess the phonetics. <br> <img src = 'img/VP.png' height = '200' width = '200' align = 'center' /> </br>", ["U", "V","W", "X"], "V"),

    new Question("Guess the phonetics. <br> <img src = 'img/WP.png' height = '200' width = '200' align = 'center' /> </br>", ["W", "X","Y", "Z"], "W"),

    new Question("Guess the phonetics. <br> <img src = 'img/NP.png' height = '200' width = '200' align = 'center' /> </br>", ["P", "O","N", "M"], "N"),



];


var quiz = new Quiz(questions);


populate();

