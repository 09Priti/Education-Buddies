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
    new Question("Guess the Number. <br> <img src = 'img/0.png' height = '200' width = '200' align = 'center' /> </br>", ["2", "0","1", "10"], "0"),

    new Question("Guess the Number. <br> <img src = 'img/1.png' height = '200' width = '200' align = 'center' /> </br>", ["1", "10","11", "5"], "1"),
    
    new Question("Guess the Number. <br> <img src = 'img/2.png' height = '200' width = '200' align = 'center' /> </br>", ["3", "2","9", "20"], "2"),

    new Question("Guess the Number. <br> <img src = 'img/3.png' height = '200' width = '200' align = 'center' /> </br>", ["5", "13","8", "3"], "3"),
        
    new Question("Guess the Number. <br> <img src = 'img/4.png' height = '200' width = '200' align = 'center' /> </br>", ["6", "8","4", "9"], "4"),

    new Question("Guess the Number. <br> <img src = 'img/5.png' height = '200' width = '200' align = 'center' /> </br>", ["15", "5","9", "19"], "5"),

    new Question("Guess the Number. <br> <img src = 'img/6.png' height = '200' width = '200' align = 'center' /> </br>", ["6", "16","7", "1"], "6"),

    new Question("Guess the Number. <br> <img src = 'img/7.png' height = '200' width = '200' align = 'center' /> </br>", ["17", "6","7", "3"], "7"),

    new Question("Guess the Number. <br> <img src = 'img/8.png' height = '200' width = '200' align = 'center' /> </br>", ["8", "3","18", "20"], "8"),

    new Question("Guess the Number. <br> <img src = 'img/9.png' height = '200' width = '200' align = 'center' /> </br>", ["9", "7","4", "1"], "9"),

    new Question("Guess the Number. <br> <img src = 'img/10.png' height = '200' width = '200' align = 'center' /> </br>", ["11", "12","19", "10"], "10"),

    new Question("Guess the Number. <br> <img src = 'img/11.png' height = '200' width = '200' align = 'center' /> </br>", ["17", "16","11", "13"], "11"),

    new Question("Guess the Number. <br> <img src = 'img/12.png' height = '200' width = '200' align = 'center' /> </br>", ["12", "16","14", "19"], "12"),

    new Question("Guess the Number. <br> <img src = 'img/13.png' height = '200' width = '200' align = 'center' /> </br>", ["10", "20","13", "14"], "13"),

    new Question("Guess the Number. <br> <img src = 'img/14.png' height = '200' width = '200' align = 'center' /> </br>", ["4", "14","2", "12"], "14"),

    new Question("Guess the Number. <br> <img src = 'img/15.png' height = '200' width = '200' align = 'center' /> </br>", ["15", "5","6", "7"], "15"),

    new Question("Guess the Number. <br> <img src = 'img/16.png' height = '200' width = '200' align = 'center' /> </br>", ["4", "6","16", "19"], "16"),
    
    new Question("Guess the Number. <br> <img src = 'img/17.png' height = '200' width = '200' align = 'center' /> </br>", ["7", "17","5", "15"], "17"),

    new Question("Guess the Number. <br> <img src = 'img/18.png' height = '200' width = '200' align = 'center' /> </br>", ["8", "9","18", "4"], "18"),

    new Question("Guess the Number. <br> <img src = 'img/19.png' height = '200' width = '200' align = 'center' /> </br>", ["19", "9","0", "6"], "19"),

    new Question("Guess the Number. <br> <img src = 'img/20.png' height = '200' width = '200' align = 'center' /> </br>", ["2", "20","0", "10"], "20"),



];


var quiz = new Quiz(questions);


populate();

