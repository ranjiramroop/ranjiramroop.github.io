
// I created an Object with Arrays to hold my questions and their correct answers.
var questions = [
    {
        prompt: "Which of the following is the fastest 'big cat' on Earth?\n(a) Lion\n(b) Tiger\n(c) Cougar\n(d) Cheetah",
        answer: "d"
    },
    {
        prompt: "Which of the following animals has fur?\n(a) Dolphin\n(b) Shark\n(c) Mouse\n(d) Frog",
        answer: "c"
    },
    {
        prompt: "What do fish require to breathe? \n(a) Oxygen\n(b) Helium\n(c) Freon\n(d) Whip-its",
        answer: "a"
    },
    {
        prompt: "What animal hibernates in the winter?\n(a) Humans\n(b) Lynx\n(c) Bears\n(d) Walrus",
        answer: "c"
    },
    {
        prompt: "Which of these cannot sustain flight?\n(a) Boeing Aircrafts\n(b) Ostrich\n(c) Eagle\n(d) Flamingo",
        answer: "b"
    },
    {
        prompt: "A group of lions is known as?\n(a) An Army\n(b) A pack\n(c) A pride\n(d) A squad",
        answer: "c"
    },
    {
        prompt: "A female deer is known as?\n(a) A jane\n(b) A doe\n(c) A buck\n(d) An antelope",
        answer: "b"
    },
    {
        prompt: "Which of the following animals have the most teeth?\n(a) Elephants\n(b) Armadillos\n(c) Blue Whales\n(d) Snakes",
        answer: "b"
    },
    {
        prompt: "Which animal has the longest neck?\n(a) Swan\n(b) Flamingo\n(c) Turtle\n(d) Giraffe",
        answer: "d"
    },
    {
        prompt: "Pumba, from Disney's The Lion King movie, is what type of animal?\n(a) Warthog\n(b) Dinner\n(c) Domestic Pig\n(d) Meerkat",
        answer: "a"
    }
];
var score = 0;

for (var i=0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if (response == questions[i].answer){
        score++;
        alert("Correct!");
    } else {
        alert ("Wrong!");
    }
}
alert("You received a " + score + " out of " + questions.length);









