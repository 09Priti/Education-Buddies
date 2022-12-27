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
    new Question("Guess the Alphabet. <br> <img src = 'img/A.png' height = '200' width = '200' align = 'center' /> </br>", ["A", "N","V", "P"], "A"),

    new Question("Guess the Alphabet. <br> <img src = 'img/P.png' height = '200' width = '200' align = 'center' /> </br>", ["F", "D","M", "P"], "P"),
    
    new Question("Guess the Alphabet. <br> <img src = 'img/M.png' height = '200' width = '200' align = 'center' /> </br>", ["N", "A","M", "S"], "M"),

    new Question("Guess the Alphabet. <br> <img src = 'img/R.png' height = '200' width = '200' align = 'center' /> </br>", ["P", "Q","B", "R"], "R"),
        
    new Question("Guess the Alphabet. <br> <img src = 'img/Q.png' height = '200' width = '200' align = 'center' /> </br>", ["O", "Q","D", "F"], "Q"),

    new Question("Guess the Alphabet. <br> <img src = 'img/B.png' height = '200' width = '200' align = 'center' /> </br>", ["K", "D","B", "C"], "B"),

    new Question("Guess the Alphabet. <br> <img src = 'img/Z.png' height = '200' width = '200' align = 'center' /> </br>", ["Z", "A","N", "E"], "Z"),

    new Question("Guess the Alphabet. <br> <img src = 'img/X.png' height = '200' width = '200' align = 'center' /> </br>", ["X", "R","A", "Y"], "X"),

    new Question("Guess the Alphabet. <br> <img src = 'img/Y.png' height = '200' width = '200' align = 'center' /> </br>", ["F", "S","L", "Y"], "Y"),

    new Question("Guess the Alphabet. <br> <img src = 'img/O.png' height = '200' width = '200' align = 'center' /> </br>", ["U", "O","C", "V"], "O"),

    new Question("Guess the Alphabet. <br> <img src = 'img/D.png' height = '200' width = '200' align = 'center' /> </br>", ["B", "I","D", "J"], "D"),

    new Question("Guess the Alphabet. <br> <img src = 'img/C.png' height = '200' width = '200' align = 'center' /> </br>", ["D", "G","K", "C"], "C"),

    new Question("Guess the Alphabet. <br> <img src = 'img/G.png' height = '200' width = '200' align = 'center' /> </br>", ["G", "P","A", "H"], "G"),

    new Question("Guess the Alphabet. <br> <img src = 'img/H.png' height = '200' width = '200' align = 'center' /> </br>", ["M", "Z","U", "H"], "H"),

    new Question("Guess the Alphabet. <br> <img src = 'img/F.png' height = '200' width = '200' align = 'center' /> </br>", ["E", "F","X", "Y"], "F"),

    new Question("Guess the Alphabet. <br> <img src = 'img/E.png' height = '200' width = '200' align = 'center' /> </br>", ["T", "F","E", "L"], "E"),

    new Question("Guess the Alphabet. <br> <img src = 'img/S.png' height = '200' width = '200' align = 'center' /> </br>", ["H", "R","S", "U"], "S"),
    
    new Question("Guess the Alphabet. <br> <img src = 'img/I.png' height = '200' width = '200' align = 'center' /> </br>", ["L", "T","I", "X"], "I"),

    new Question("Guess the Alphabet. <br> <img src = 'img/U.png' height = '200' width = '200' align = 'center' /> </br>", ["V", "U","G", "S"], "U"),

    new Question("Guess the Alphabet. <br> <img src = 'img/J.png' height = '200' width = '200' align = 'center' /> </br>", ["K", "O","J", "P"], "M"),

    new Question("Guess the Alphabet. <br> <img src = 'img/K.png' height = '200' width = '200' align = 'center' /> </br>", ["K", "I","F", "E"], "K"),

    new Question("Guess the Alphabet. <br> <img src = 'img/T.png' height = '200' width = '200' align = 'center' /> </br>", ["P", "S","T", "N"], "T"),

    new Question("Guess the Alphabet. <br> <img src = 'img/L.png' height = '200' width = '200' align = 'center' /> </br>", ["L", "I","O", "N"], "L"),

    new Question("Guess the Alphabet. <br> <img src = 'img/V.png' height = '200' width = '200' align = 'center' /> </br>", ["U", "V","W", "X"], "V"),

    new Question("Guess the Alphabet. <br> <img src = 'img/W.png' height = '200' width = '200' align = 'center' /> </br>", ["W", "X","Y", "Z"], "W"),

    new Question("Guess the Alphabet. <br> <img src = 'img/N.png' height = '200' width = '200' align = 'center' /> </br>", ["P", "O","N", "M"], "N"),



];


var quiz = new Quiz(questions);


populate();

