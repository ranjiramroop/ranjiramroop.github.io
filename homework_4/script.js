//Variables to the first part of the quiz
var startQuiz = document.querySelector("#startQuiz");
var introduction = document.querySelector(".intro");
var questionNumber = 0;
//variable to manage the user entering their score
var dontHateThePlayaHateTheGame = document.querySelector(".enter-score");
var listUsers = document.querySelector(".users");
var restart = document.querySelector(".start-over");
var initials = document.querySelector(".initials").value;
//variables related to the score
var score = "";
var totalScore = document.querySelector(".quizTitle");
var recordScore = document.querySelector(".record");
var setScore = document.querySelector(".card");
var clearScores = document.querySelector(".clear");
var finalResult = document.querySelector(".result");
//time variables
var clock = document.querySelector("#timerContainer");
var timer = 60;

//Scores and initials into an array
var items = [];
var items = {
  name: initials,
  score: score
};
if (localStorage.getItem("name")) {
  var items = JSON.parse(localStorage.getItem("name"));
} else {
  items = [];
}

var answerBtn = document.querySelectorAll(".op");
var answer1 = document.querySelector("#ques1");
var answer2 = document.querySelector("#ques2");
var answer3 = document.querySelector("#ques3");
var answer4 = document.querySelector("#ques4");

//Start quiz button is clicked to begin the quiz
startQuiz.addEventListener("click", function(event) {
  event.preventDefault();
  //decrease the time by one second intervals
  var timerInterval = setInterval(function() {
    timer--;
    clock.innerHTML = "Timer: " + timer;
    if (timer === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);

  var quizQues = questions[questionNumber].title;
  var listItem = questions[questionNumber].choices[0];
  var listItem2 = questions[questionNumber].choices[1];
  var listItem3 = questions[questionNumber].choices[2];
  var listItem4 = questions[questionNumber].choices[3];

  introduction.innerHTML = quizQues;
  answer1.innerHTML = listItem;
  answer2.innerHTML = listItem2;
  answer3.innerHTML = listItem3;
  answer4.innerHTML = listItem4;

  answer1.setAttribute("class", "op");
  answer2.setAttribute("class", "op");
  answer3.setAttribute("class", "op");
  answer4.setAttribute("class", "op");
  startQuiz.setAttribute("class", "remove");
  answer1.setAttribute(
    "style",
    "display: block; background-color: #2f4f4f; color: white; border-radius: 12px; margin-left: 320px; width: 30%;"
  );
  answer2.setAttribute(
    "style",
    "display: block; background-color: #2f4f4f; color: white; border-radius: 12px; margin-left: 320px; width: 30%;"
  );
  answer3.setAttribute(
    "style",
    "display: block; background-color: #2f4f4f; color: white; border-radius: 12px; margin-left: 320px; width: 30%;"
  );
  answer4.setAttribute(
    "style",
    "display: block; background-color: #2f4f4f;; color: white; border-radius: 12px; margin-left: 320px; margin-bottom: 20px; width: 30%;"
  );
});
//function used to check the answers, and lastly ends the quiz
function isItRight(answer) {
  if (answer) {
    finalResult.innerHTML = "Correct!";
  } else {
    finalResult.innerHTML = "Incorrect!";
    timer = timer - 10;
  }
  questionNumber++;

  if (questionNumber > 9) {
    initialsEntry();
  } else {
    console.log(questions[questionNumber]);
    var quizQues = questions[questionNumber].title;
    var listItem = questions[questionNumber].choices[0];
    var listItem2 = questions[questionNumber].choices[1];
    var listItem3 = questions[questionNumber].choices[2];
    var listItem4 = questions[questionNumber].choices[3];

    introduction.innerHTML = quizQues;
    answer1.innerHTML = listItem;
    answer2.innerHTML = listItem2;
    answer3.innerHTML = listItem3;
    answer4.innerHTML = listItem4;
  }
}
//verify the answers selected
answerBtn[0].addEventListener("click", function() {
  console.log(this.textContent);
  if (this.textContent === questions[questionNumber].answer) {
    isItRight(true);
  } else {
    isItRight(false);
  }
});

answerBtn[1].addEventListener("click", function() {
  if (this.textContent === questions[questionNumber].answer) {
    isItRight(true);
  } else {
    isItRight(false);
  }
});

answerBtn[2].addEventListener("click", function() {
  console.log(this.textContent);
  if (this.textContent === questions[questionNumber].answer) {
    isItRight(true);
  } else {
    isItRight(false);
  }
});

answerBtn[3].addEventListener("click", function() {
  console.log(this.textContent);
  if (this.textContent === questions[questionNumber].answer) {
    isItRight(true);
  } else {
    isItRight(false);
  }
});

function initialsEntry() {
  if (timer === 0) {
    score = 0;
  } else {
    score = timer;
  }
  //these attributes hide the following items
  dontHateThePlayaHateTheGame.setAttribute("class", "enter-score");
  finalResult.setAttribute("class", "remove");
  clock.setAttribute("class", "remove");
  introduction.setAttribute("class", "remove");
  //new display of scoreboard
  var scoreboard = "Your score is: " + score;
  totalScore.innerHTML = scoreboard;
  setScore.innerHTML = "Enter your initials";
}
//scores will go to local storage and post to page
recordScore.addEventListener("click", function(event) {
  event.preventDefault();
  setScore.innerHTML = "";
  totalScore.innerHTML = "High Scores";
  dontHateThePlayaHateTheGame.setAttribute("class", "remove");
  restart.setAttribute("class", "start-over");
  clearScores.setAttribute("class", "clear");
  listUsers.setAttribute("class", "users");

  var initials = document.querySelector(".initials").value;
  localStorage.setItem("name", initials + " : " + score);

  var name = {
    name: initials,
    score: score
  };
  items.push(name);
  localStorage.setItem("name", JSON.stringify(items));
  items.forEach(myFunction);
});

dontHateThePlayaHateTheGame.setAttribute("class", "remove");
listUsers.setAttribute("class", "remove");
restart.setAttribute("class", "remove");
clearScores.setAttribute("class", "remove");

function myFunction(name) {
  var liTag = document.createElement("li");
  liTag.innerHTML = name.name + " : " + name.score;
  listUsers.appendChild(liTag);
}

//Clearing local storage
clearScores.addEventListener("click", function(event) {
  event.preventDefault();
  window.localStorage.clear();
  listUsers.innerHTML = "";
});
