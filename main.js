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
            panel.append("<button class='answer-button' id= 'button' data-name='" + 
           questions[this.currentQuestion].answers[i] + ">'" +
           questions[this.currentQuestion].answers[i] + "</button>" );
        }
    },

    nextQuestion: function() {
        game.counter = countStartNumber;
        $("#counter-number").html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();
    },

    timeUp: function() {

        clearInterval(timer);

        $("#counter-number").html(game.counter);

        panel.html("<h2>OUT OF TIME!</h2>");
        panel.append("<h3>The Correct Answer Was: " + questions[this.currentQuestion].correctAnswer);
        panel.append("<img src='" + questions[this.currentQuestion].image);

        if (game.currentQuestion === questions.length -1)
        {
            setTimeout(game.results, 3 * 1000);
        }
        else{
            setTimeout(game.nextQuestion, 3 * 1000);
        }

    },

    results: function() {

        clearInterval(timer);

        panel.html("<h2>All done, here are your results!!!!!!!!!!!</h2>");
        $("counter-number").html(game.counter);

        panel.append("<h3>Correct Answers: " + game.correct + "</h3>");
        panel.append("<h3>Incorrect Answers: " + game.incorrect + "</h3>");
        panel.append("<h3>Unanswered: " + (questions.length - (game.correct + game.incorrect)));
        panel.append("<br><button id= 'start-over'>Start Over?")

    },

    clicked: function(e) {
        
        clearInterval(timer);

        if ($(e.target).attr("data-name") === questions[this.currentQuestion].correctAnswer)
        {
            this.answeredCorrectly();
        }
        else{
            this.answeredIncorrectly();
        }

    },

    answeredIncorrectly: function(){

        game.incorrect++;

        clearInterval(timer);

        panel.html("<h2>NO U YOUR WRONG!!!!</h2>");
        panel.append("<h3>The Correct Answer Was: " + questions[game.currentQuestion].correctAnswer + "</h3>");
        panel.append("<img src= '" + questions[game.currentQuestion].image + "'/>");

        if (game.currentQuestion === questions.length -1)
        {
            setTimeout(game.results, 3 * 1000);
        }
        else{
            setTimeout(game.nextQuestion, 3 * 1000);
        }

    },

    answeredCorrectly: function() {
       
        clearInterval(timer);
        
        game.correct++;

        panel.html("<h2>CORRECT YOUR SMART!!!!</h2>");
        panel.append("<img src= '" + questions[game.currentQuestion].image + "'/>");

        if (game.currentQuestion === questions.length -1)
        {
            setTimeout(game.results, 3 * 1000);
        }
        else{
            setTimeout(game.nextQuestion, 3 * 1000);
        }

    },

    reset: function() {

        this.currentQuestion = 0;
        this.counter = countStartNumber;
        this.correct = 0;
        this.incorrect = 0;
        this.loadQuestion();

    }

};


// CLICK EVENTS
//--------------------------------------------------------------------------------------------
$(document).on("click", "#start-over", function() {
    game.reset();
});

$(document).on("click", ".answer-button", function(e){
game.clicked(e);
});

$(document).on("click", "#start", function(){
    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id= 'counter-number'>30 </span> Seconds</h2>");
    game.loadQuestion();
});
