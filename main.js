var panel = $("#quiz-area");

var countStartNumber = 30;

// Question Set
var questions = [
    {
        question: "Who was Hirohito?",
        answers: ["Japanese Axis Ruler","Philipino Dictator","Irish boss", "A Nazi Government leader"],
        correctAnswer: "Japanese Axis Ruler",
        image: "C:\Users\0274237\Desktop\Hangman Completed\assets\download.jpg"
    },

    {
        question: "What was the Russian government named under during WW2?",
        answers: ["Nazi","Republica Italiano","USSR", "MURICA"],
        correctAnswer: "USSR",
        image: "C:\Users\0274237\Desktop\Hangman Completed\assets\download.png"
    },


]

// Variable to hold our setInterval
var timer;

var game = {

    questions: questions,
    currentQuestion: 0,
    counter: countStartNumber,
    correct: 0,
    incorrect: 0,

    countdown: function() {
        game.counter--;
        $("#counter-number").html(game.counter);
        if(game.counter === 0) {
            console.log("YOU ARE TOO SLOW, GAME OVER!!!");
            game.timeUp();
        }

    },

    loadQuestion: function() {
        timer = setInterval(game.countdown, 1000);
        panel.html("<h2>" + questions[this.currentQuestion].question + "</h2>");
        for (var i = 0; i < questions[this.currentQuestion].answers.length; i++)
        {
            panel.append(" <button class='answer-button' id= 'button' data-name=' " + 
           questions[this.currentQuestion].answers[i] + ">'" +
           questions[this.currentQuestion].answers[i] + "</button>" );
        }
    },

    nextQuestion: function() {
        game.counter = countStartNumber;
        $("#counter-number").html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();
    }

    timeUp: function() {
        
    }

}