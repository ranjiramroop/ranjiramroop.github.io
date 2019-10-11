
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
        title: "Which of these cannot sustain flight?\n(a) Boeing Aircrafts\n(b) Ostrich\n(c) Eagle\n(d) Flamingo",
        choices: 
        answer: "b"
    },
    {
        title: "A group of lions is known as?\n(a) An Army\n(b) A pack\n(c) A pride\n(d) A squad",
        choices: 
        answer: "c"
    },
    {
        title: "A female deer is known as?\n(a) A jane\n(b) A doe\n(c) A buck\n(d) An antelope",
        choices: 
        answer: "b"
    },
    {
        title: "Which of the following animals have the most teeth?\n(a) Elephants\n(b) Armadillos\n(c) Blue Whales\n(d) Snakes",
        choices: 
        answer: "b"
    },
    {
        title: "Which animal has the longest neck?\n(a) Swan\n(b) Flamingo\n(c) Turtle\n(d) Giraffe",
        choices: 
        answer: "d"
    },
    {
        title: "Pumba, from Disney's The Lion King movie, is what type of animal?\n(a) Warthog\n(b) Dinner\n(c) Domestic Pig\n(d) Meerkat",
        choices: 
        answer: "a"
    }
];
var score = 0;

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









