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
    new Question("सही उत्तर चुनो। <br> <img src = 'img/H13.png' height = '200' width = '200' align = 'center' /> </br>", ["अ", "क","म", "फ"], "क"),

    new Question("सही उत्तर चुनो। <br> <img src = 'img/H14.png' height = '200' width = '200' align = 'center' /> </br>", ["घ", "ध","ख", "ट"], "ख"),
    
    new Question("सही उत्तर चुनो। <br> <img src = 'img/H15.png' height = '200' width = '200' align = 'center' /> </br>", ["य", "र","ग", "ष"], "ग"),

    new Question("सही उत्तर चुनो। <br> <img src = 'img/H16.png' height = '200' width = '200' align = 'center' /> </br>", ["ट", "ठ","घ", "ध"], "घ"),
        
    new Question("सही उत्तर चुनो। <br> <img src = 'img/H17.png' height = '200' width = '200' align = 'center' /> </br>", ["फ", "च","प", "म"], "च"),

    new Question("सही उत्तर चुनो। <br> <img src = 'img/H19.png' height = '200' width = '200' align = 'center' /> </br>", ["च", "छ","आ", "ज"], "ज"),

    new Question("सही उत्तर चुनो। <br> <img src = 'img/H26.png' height = '200' width = '200' align = 'center' /> </br>", ["द", "न","र", "स"], "द"),

    new Question("सही उत्तर चुनो। <br> <img src = 'img/H1.png' height = '200' width = '200' align = 'center' /> </br>", ["अ", "क","म", "त"], "अ"),

    new Question("सही उत्तर चुनो।। <br> <img src = 'img/H2.png' height = '200' width = '200' align = 'center' /> </br>", ["ट", "आ","ई", "स"], "आ"),

    new Question("सही उत्तर चुनो।। <br> <img src = 'img/H20.png' height = '200' width = '200' align = 'center' /> </br>", ["त", "य","ल", "झ"], "झ"),

    new Question("सही उत्तर चुनो। <br> <img src = 'img/H4.png' height = '200' width = '200' align = 'center' /> </br>", ["अं", "प","ष", "ई"], "ई"),

    new Question("सही उत्तर चुनो। <br> <img src = 'img/H5.png' height = '200' width = '200' align = 'center' /> </br>", ["उ", "घ","ख", "ट"], "उ"),

    new Question("सही उत्तर चुनो। <br> <img src = 'img/H24.png' height = '200' width = '200' align = 'center' /> </br>", ["क", "त","ए", "ओ"], "त"),

    new Question("सही उत्तर चुनो। <br> <img src = 'img/H6.png' height = '200' width = '200' align = 'center' /> </br>", ["ध", "ल","ऊ", "न"], "ऊ"),

    new Question("सही उत्तर चुनो। <br> <img src = 'img/H8.png' height = '200' width = '200' align = 'center' /> </br>", ["छ", "ए","त", "घ"], "ए"),

    new Question("सही उत्तर चुनो। <br> <img src = 'img/H28.png' height = '200' width = '200' align = 'center' /> </br>", ["न", "ह","क", "ग"], "न"),

    new Question("सही उत्तर चुनो। <br> <img src = 'img/H9.png' height = '200' width = '200' align = 'center' /> </br>", ["र", "न","ऐ", "ट"], "ऐ"),
    
    new Question("सही उत्तर चुनो। <br> <img src = 'img/H10.png' height = '200' width = '200' align = 'center' /> </br>", ["द", "च","ओ", "ज"], "ओ"),

    new Question("सही उत्तर चुनो। <br> <img src = 'img/H35.png' height = '200' width = '200' align = 'center' /> </br>", ["ग", "च","प", "र"], "र"),

    new Question("सही उत्तर चुनो। <br> <img src = 'img/H11.png' height = '200' width = '200' align = 'center' /> </br>", ["ह", "औ","क", "अ"], "औ"),

    new Question("सही उत्तर चुनो। <br> <img src = 'img/H12.png' height = '200' width = '200' align = 'center' /> </br>", ["अ:", "अं","ल", "ल"], "K"),

    new Question("सही उत्तर चुनो। <br> <img src = 'img/H40.png' height = '200' width = '200' align = 'center' /> </br>", ["स", "प","ए", "अ:"], "स"),

    new Question("सही उत्तर चुनो। <br> <img src = 'img/H41.png' height = '200' width = '200' align = 'center' /> </br>", ["ह", "म","स", "ब"], "ह"),


];


var quiz = new Quiz(questions);


populate();

