
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
        stopQuizTime();
    }
    else {
        //show the question in the paragraph tag
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
    endGame();
};

// I created an Object with Arrays to hold my questions and their correct answers.
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

document.getElementById("startQuiz").onclick = function(){
    document.getElementById("visible").style.display = "none";
    // document.getElementById("quiz").class = ""; //this is supposed to display the hiddent div but its not
}
var timerEl = document.getElementById("timer");

function quizTime() {
    var timeLeft = 100;
    // will need to put a new function into place when i have
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


//on my last question in the array, i want that to act as the stop button on a stop watch
    
// NOTES ON STOPPING TIME: stopTime() { /* check if seconds, minutes and hours are not equal to 0 */ 
//     if ( seconds !== 0 || minutes !== 0 || hours !== 0 ) { /* display the full time before reseting the stop watch */ var fulltime = document.getElementById( "fulltime" ); 
//     //display the full time fulltime.style.display = "block"; var time = gethours + mins + secs; fulltime.innerHTML = 'Fulltime: ' + time; 
//     // reset the stop watch seconds = 0; minutes = 0; hours = 0; secs = '0' + seconds; mins = '0' + minutes + ': '; gethours = '0' + hours + ': '; 
//     /* display the stopwatch after it's been stopped */ var x = document.getElementById ("timer"); var stopTime = gethours + mins + secs; x.innerHTML = stopTime; 
//     /* display all stop watch control buttons */ var showStart = document.getElementById ('start'); showStart.style.display = "inline-block"; var showStop = document.getElementById ("stop"); showStop.style.display = "inline-block"; 
//     /* clear the stop watch using the setTimeout( ) return value 'clearTime' as ID */ clearTimeout( clearTime ); } // if () } // stopTime() /* you need to call the stopTime( ) function to terminate the stop watch */ window.addEventListener( 'load', function ( ) { var stop = document.getElementById ("stop"); stop.addEventListener( 'click', stopTime ); }); // stopwatch.js end 

//to do: 
//number one:
//I will be creating a function for the button 
//displayed on the starting div
//On click for the start button is going to 
//hide the current div and unhide the question div
//the on click will also double down on the timer and 
//start the timer countdown. 

// number 1.5
// i need to run a function to stop the clock to 
//calculate the scores with the extra time bonus
//1.75 function to calculate the score
//number two:
//create the form input ordered list function to store the calculated score
//in the session storage
//-------------------

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


