// guessing game
'use strict';
// 1st section lab02 
// in this section of the game I used the Var, Prompt, Alert and switch.
// 1.
var gistName = prompt("Hello, could U plz tell me Ur name");
// if the user insert invaled or number value, while, do and parseInt will solve the problem
while (!isNaN(parseInt(gistName)) || (!gistName)) {
    gistName = prompt("plz insert a valid name");
}
// console.log(gistName);
alert("Welcome" + " " + gistName + " " + "to my portfolio");

// // 2.
var gistReady = prompt("Now the guessing game will satrt," + " " + gistName + " " + " are u ready?");
// if the user insert number value, while, do and parseInt will solve the problem
while (!isNaN(parseInt(gistReady)) || (!gistReady)) {
    gistReady = prompt("Could U plz answer by yes or no");
}
// using touppercase to validate the user input value if it small or capital letter
var gistAnswer_1 = gistReady.toUpperCase();
// define the yes/y as possitive answer and no/n as negative answer
switch (gistAnswer_1) {
    case "Y":
    case "YES":
        alert("yaay, I like Ur spirit");
        // counter for the right answers
        break;
    case "N":
    case "NO":
        alert("why, I made this game 4 U, I am sad :(");
        break;
    default:
        alert("even though, The game will start..");
}

// 3.
var hostCountry = prompt(gistName + " " + "can U plz tell me where I'm living?(plz type a country name)");
// if the user insert number value which is not valid for a country input 
// while, do and parseInt will solve the problem
while (!isNaN(parseInt(hostCountry)) || (!hostCountry)) {
    hostCountry = prompt("plz insert a valid country");
}
// console.log(hostCountry);
alert("yup! I live in" + " " + hostCountry);

// 4.
var hostHoppy = prompt(gistName + " " + "Do I like to watch movies?!");
// if the user insert number value, while, do and parseInt will solve the problem
while (!isNaN(parseInt(hostHoppy)) || (!hostHoppy)) {
    hostHoppy = prompt("Could U plz answer by yes or no");
}

// points counter (to count how many correct answers the user do)
var yourPoints = 0;
// using tolowercase to validate the user input value if it small or capital letter
var gistAnswer_2 = hostHoppy.toLowerCase();
// define the yes/y as possitive answer and no/n as negative answer
switch (gistAnswer_2) {
    case "y":
    case "yes":
        alert("yes I do");
        yourPoints += 1;
        break;
    case "no":
    case "n":
        alert("sorry, but yes I do like to watch movies");
        break;

    default:
        alert("Who knows..");
}

// 5.
var gistReady = prompt(gistName + " " + " Do I like watching Horror movies?");
// if the user insert number value, while, do and parseInt will solve the problem
while (!isNaN(parseInt(gistReady)) || (!gistReady)) {
    gistReady = prompt("Could U plz answer by yes or no");
}
// using touppercase to validate the user input value if it small or capital letter
var gistAnswer_1 = gistReady.toUpperCase();
// define the yes/y as possitive answer and no/n as negative answer
switch (gistAnswer_1) {
    case "Y":
    case "YES":
        alert("yup, I really do like watching Horror movies");
        yourPoints += 1;
        break;
    case "N":
    case "NO":
        alert("wthat's wrong, sorry But I like watching Horror movies");
        break;
    default:
        alert("even though, I like watching Horror movies.");
}
// -------------------------------------------------------------------------------------------------------------
// 2nd section lab03
// in this section of the game I used the If statment, for loops and arrays.
// 6.
for (let Age = 0; Age < 4; Age++) {
    var hostAge = prompt(gistName + " " + "Could you please guess my age (type it in numbers)");
    if (hostAge == 26) {
        alert("you got it right, thats my real age.");
        yourPoints += 1;
        // console.log(hostAge);
        break;
    } else if (hostAge < 26) {
        alert("I am oldar than that");
    } else {
        alert("I am younger than that");
    }
}
alert("yup, I am 26 years old");
// console.log(hostAge);

var questions = ['am I a sea food lover?', 'am I a pet lover', 'am I a good friend'];
var answers = ['yes I am', 'No Im not'];

for (let i = 0; i < questions.length; i++) {
    var getQuestions = questions[i];
    var getAnswers = answers[i];

    var questionShown = prompt(gistName + " " + getQuestions);

    // if the user insert number value, while, do and parseInt will solve the problem
    while (!isNaN(parseInt(questionShown)) || (!questionShown)) {
        questionShown = prompt("Could U plz answer by yes or no");
    }
    var gistAnswer_3 = questionShown.toUpperCase();
    console.log(gistAnswer_3);
    switch (gistAnswer_3) {
        case "Y":
        case "YES":
            alert("great answer" + " " + answers[0]);
            yourPoints += 1;
            break;
        case "N":
        case "NO":
            alert("sorry, but yes I do");
            break;
        default:
            alert("Who knows..");
    }
}
alert("you have owned " + " " + yourPoints + " " + "out of 6 Congrats !!!")
// console.log(yourPoints);