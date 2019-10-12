
function Question(title, choices, answer) {
    this.title = title;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer===choice;
}

function Quiz(questions){
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)){
    this.score++;
    }
    this.questionIndex++;
}

Quiz.prototype.isEnded = function(){
    return this.questionIndex === this.questions.length;
}

function populate(){
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        //show the question in the paragraph tag in HTML line 47
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().title;

        //show options to select within the buttons
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
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
    element.innerHTML = "Question " + currentQuestionNumber + " of " +
    quiz.questions.length + "<br> Current score of: " + quiz.score + " correct";
};

function showScores() {
    var gameOverHTML = "<h1>High Score! <br></h1";
    gameOverHTML+= "<h2 id='score'> Your score is: " + quiz.score + "</h2>";
    var element= document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};


// I created an Object with Arrays to hold my questions and their correct answers.
// var question = document.getElementById("question");

//this is where questionIndex comes into play
var questions = [
    new Question(
        "Which of the following is the fastest 'big cat' on Earth?",
        ["Lion", "Tiger", "Cougar", "Cheetah"],
        "Cheetah"
    ),
    new Question(
        "Which of the following animals has fur?",
        ["Dolphin", "Shark","Mouse", "Frog"],
        "Mouse"
    ),
    new Question(
        "What do fish require to breathe?",
        ["Oxygen", "Helium", "Freon", "Whip-its"],
        "Oxygen"
    ),
    new Question(
        "What animal hibernates in the winter?",
        ["Humans", "Lynx", "Bears", "Walrus"],
        "Bears"
    ),
    new Question(
        "Which of these cannot sustain flight?",
        ["Boeing Aircrafts", "Ostrich", "Eagle", "Flamingo"],
        "Ostrich"
    ),
    new Question(
        "A group of lions is known as?", 
        ["An Army", "A pack", "A pride", "A squad"],
        "A pride"
    ),
    new Question(
        "A female deer is known as?",
        ["A jane", "A doe", "A buck", "An antelope"],
        "A doe"
    ),
    new Question(
        "Which of the following animals have the most teeth?",
        ["Elephants", "Armadillos", "Blue Whales","Snakes"],
        "Armadillos"
    ),
    new Question(
        "Which animal has the longest neck?",
        ["Swan", "Flamingo", "Turtle", "Giraffe"],
        "Giraffe"
    ),
    new Question(
        "Pumba, from Disney's The Lion King movie, is what type of animal?", 
        ["Warthog", "Dinner", "Domestic Pig", "Meerkat"],
        "Warthog"
    )
];

//create quiz
var quiz = new Quiz(questions);

//display quiz
populate();

var timerEl = document.getElementById("timer");

function quizTime() {
    var timeLeft = 150;
    // will need to put this into place when i have
    // the hidden div activated// button.onclick = function() {

    var timeInterval = setInterval(function() {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
  
      if (timeLeft === -1) {
        timerEl.textContent = "Time is up!";
        showScores();
        clearInterval(timeInterval);
      }
    }, 1000);
  }
  quizTime();

//to do: 
//number one:
//I will be creating a function for the button 
//displayed on the starting div
//On click for the start button is going to 
//hide the current div and unhide the question div
//the on click will also double down on the timer and 
//start the timer countdown. 

//number two:
//create the form input ordered list function to store 
//in the session storage


//-------------------


// var score = 0;
// var questionsIndex = 0;
// var quiz = new Quiz(questions);

// function Quiz(questions){
//     this.score = 0;
//     this.questions = questions;
//     this.questionIndex = 0;
// }

// //this is to pull out the question and display it on the screen as the questions are answered.
// function getQuestionsIndex(){
//     return this.questions[this.questionIndex];
// }

//     function correctQuestions(choices) {
//         choices.preventDefault();
// return choice === this.answer;
// }



// //im trying this function to end the quiz if the index goes all the way thru - might need to modify this one.
// function endOfQuiz() {
//     return this.questions.length === this.questionsIndex;
// }

// //this function's intention is the increase the score on a correct answer
// function nextQuestion(answer){
//     this.questionsIndex++;
//     if(this.getQuestionsIndex().correctAnswer(answer)) {
//         this.score++;
//     }
// }



// function showtime(){
//     if(quiz.endOfQuiz()) {
//     //showScores();
//     }
//     else{
//         //show questions
//         var element = document.getElementById("questions");
//         element.innerHTML = quiz.getQuestionsIndex().text;
//     }
// }


// // for (var i=0; i < questions.length; i++){
// //     var response = window.title(questions[i].title);
// //     if (response == questions[i].answer){
// //         score++;
// //         alert("Correct!");
// //     } else {
// //         alert ("Wrong!");
// //     }
// // }
// // alert("You received a " + score + " out of " + questions.length);


// // //15 seconds per questions = 150 seconds of game play. Incorrect answer equals 15 second time decrement.








