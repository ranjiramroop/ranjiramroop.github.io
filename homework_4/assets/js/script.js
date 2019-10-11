
// I created an Object with Arrays to hold my questions and their correct answers.
var questions = [
    {
        title: "Which of the following is the fastest 'big cat' on Earth?",
        choices: ["Lion", "Tiger", "Cougar", "Cheetah"],
        answer: "Cheetah"
    },
    {
        title: "Which of the following animals has fur?",
        choices: ["Dolphin", "Shark","Mouse", "Frog"],
        answer: "Mouse"
    },
    {
        title: "What do fish require to breathe?",
        choices: ["Oxygen", "Helium", "Freon", "Whip-its"],
        answer: "Oxygen"
    },
    {
        title: "What animal hibernates in the winter?",
        choices: ["Humans", "Lynx", "Bears", "Walrus"],
        answer: "Bears"
    },
    {
        title: "Which of these cannot sustain flight?",
        choices: ["Boeing Aircrafts", "Ostrich", "Eagle", "Flamingo"],
        answer: "Ostrich"
    },
    {
        title: "A group of lions is known as?", 
        choices: ["An Army", "A pack", "A pride", "A squad"],
        answer: "A pride"
    },
    {
        title: "A female deer is known as?",
        choices: ["A jane", "A doe", "A buck", "An antelope"],
        answer: "A doe"
    },
    {
        title: "Which of the following animals have the most teeth?",
        choices: ["Elephants", "Armadillos", "Blue Whales","Snakes"],
        answer: "Armadillos"
    },
    {
        title: "Which animal has the longest neck?",
        choices: ["Swan", "Flamingo", "Turtle", "Giraffe"],
        answer: "Giraffe"
    },
    {
        title: "Pumba, from Disney's The Lion King movie, is what type of animal?", 
        choices: ["Warthog", "Dinner", "Domestic Pig", "Meerkat"],
        answer: "Warthog"
    }
];

function correctQuestions(choices) {
    choices.preventDefault();
return choice === this.answer;
}

var score = 0;
var questionsIndex = 0;

//this is to pull out the question and display it on the screen as the questions are answered.
function getQuestionsIndex(){
    return this.questions[this.questionIndex];
}

//im trying this function to end the quiz if the index goes all the way thru - might need to modify this one.
function endOfQuiz() {
    return this.questions.length === this.questionsIndex;
}

//this function's intention is the increase the score on a correct answer
function nextQuestion(answer){
    this.questionsIndex++;

    if(this.getQuestionsIndex().correctAnswer(answer)) {
        this.score++;
    }
}



for (var i=0; i < questions.length; i++){
    var response = window.title(questions[i].title);
    if (response == questions[i].answer){
        score++;
        alert("Correct!");
    } else {
        alert ("Wrong!");
    }
}
alert("You received a " + score + " out of " + questions.length);


//15 seconds per questions = 150 seconds of game play. Incorrect answer equals 15 second time decrement.








