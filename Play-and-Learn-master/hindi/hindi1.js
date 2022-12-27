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
    new Question("अक्षर पहचानो। <br> <img src = 'img/P1.png' height = '200' width = '200' align = 'center' /> </br>", ["अ", "क","म", "फ"], "क"),

    new Question("अक्षर पहचानो। <br> <img src = 'img/P2.png' height = '200' width = '200' align = 'center' /> </br>", ["घ", "ध","ख", "ट"], "ख"),
    
    new Question("अक्षर पहचानो। <br> <img src = 'img/P3.png' height = '200' width = '200' align = 'center' /> </br>", ["य", "र","ग", "ष"], "ग"),

    new Question("अक्षर पहचानो। <br> <img src = 'img/P4.png' height = '200' width = '200' align = 'center' /> </br>", ["ट", "ठ","घ", "ध"], "घ"),
        
    new Question("अक्षर पहचानो। <br> <img src = 'img/P6.png' height = '200' width = '200' align = 'center' /> </br>", ["फ", "च","प", "म"], "च"),

    new Question("अक्षर पहचानो। <br> <img src = 'img/P8.png' height = '200' width = '200' align = 'center' /> </br>", ["च", "छ","आ", "ज"], "ज"),

    new Question("अक्षर पहचानो। <br> <img src = 'img/P20.png' height = '200' width = '200' align = 'center' /> </br>", ["द", "न","र", "स"], "द"),

    new Question("अक्षर पहचानो। <br> <img src = 'img/S1.png' height = '200' width = '200' align = 'center' /> </br>", ["अ", "क","म", "त"], "अ"),

    new Question("अक्षर पहचानो। <br> <img src = 'img/S2.png' height = '200' width = '200' align = 'center' /> </br>", ["ट", "आ","ई", "स"], "आ"),

    new Question("अक्षर पहचानो। <br> <img src = 'img/P9.png' height = '200' width = '200' align = 'center' /> </br>", ["त", "य","ल", "झ"], "झ"),

    new Question("अक्षर पहचानो। <br> <img src = 'img/S4.png' height = '200' width = '200' align = 'center' /> </br>", ["अं", "प","ष", "ई"], "ई"),

    new Question("अक्षर पहचानो। <br> <img src = 'img/S5.png' height = '200' width = '200' align = 'center' /> </br>", ["उ", "घ","ख", "ट"], "उ"),

    new Question("अक्षर पहचानो। <br> <img src = 'img/P18.png' height = '200' width = '200' align = 'center' /> </br>", ["क", "त","ए", "ओ"], "त"),

    new Question("अक्षर पहचानो। <br> <img src = 'img/S6.png' height = '200' width = '200' align = 'center' /> </br>", ["ध", "ल","ऊ", "न"], "ऊ"),

    new Question("अक्षर पहचानो। <br> <img src = 'img/S7.png' height = '200' width = '200' align = 'center' /> </br>", ["छ", "ए","त", "घ"], "ए"),

    new Question("अक्षर पहचानो। <br> <img src = 'img/P22.png' height = '200' width = '200' align = 'center' /> </br>", ["न", "ह","क", "ग"], "न"),

    new Question("अक्षर पहचानो। <br> <img src = 'img/S8.png' height = '200' width = '200' align = 'center' /> </br>", ["र", "न","ऐ", "ट"], "ऐ"),
    
    new Question("अक्षर पहचानो। <br> <img src = 'img/S9.png' height = '200' width = '200' align = 'center' /> </br>", ["द", "च","ओ", "ज"], "ओ"),

    new Question("अक्षर पहचानो। <br> <img src = 'img/P29.png' height = '200' width = '200' align = 'center' /> </br>", ["ग", "च","प", "र"], "र"),

    new Question("अक्षर पहचानो। <br> <img src = 'img/S10.png' height = '200' width = '200' align = 'center' /> </br>", ["ह", "औ","क", "अ"], "औ"),

    new Question("अक्षर पहचानो। <br> <img src = 'img/S11.png' height = '200' width = '200' align = 'center' /> </br>", ["अ:", "अं","ल", "ल"], "K"),

    new Question("अक्षर पहचानो। <br> <img src = 'img/P34.png' height = '200' width = '200' align = 'center' /> </br>", ["स", "प","ए", "अ:"], "स"),

    new Question("अक्षर पहचानो।<br> <img src = 'img/S12.png' height = '200' width = '200' align = 'center' /> </br>", ["झ", "अ:","य", "म"], "अ:"),

    new Question("अक्षर पहचानो। <br> <img src = 'img/P35.png' height = '200' width = '200' align = 'center' /> </br>", ["ह", "म","स", "ब"], "ह"),


];


var quiz = new Quiz(questions);


populate();

