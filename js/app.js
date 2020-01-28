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
var gistReady = prompt("Now the guessing game will satrt," + " " + gistName + " " + " are u ready?(yes/no)");
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
        alert("why, I made this game 4 U, I am sad :(, even though, The game will start..");
        break;
    default:
        alert("even though, The game will start..");
}

// 3.
var hostName = alert(gistName + " " + "My name is Bara'ah ..");

// 4.
var hostHoppy = prompt(gistName + " " + "Do I like to watch movies?! (yes/no)");
// if the user insert number value, while, do and parseInt will solve the problem
while (hostHoppy !== 'y' && hostHoppy !== 'yes' && hostHoppy !== 'n' && hostHoppy !== 'no'
    && hostHoppy !== 'nop' && hostHoppy !== 'yup') {
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
    case "yup":
        alert("yes I do");
        yourPoints += 1;
        alert("U have got a point, congrats");
        break;
    case "no":
    case "n":
    case "nop":
        alert("sorry, but yes I do like to watch movies, U will not get a point sorry");
        break;
    default:
        alert("yup I like watching movies");
}

// 5.
var gistReady = prompt(gistName + " " + " Do I like watching Horror movies? (yes/no)");
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
        alert("U have got a point, congrats");
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
// in this section of the game I used the If statment, for loops, functions and arrays.
// 6.
function yesNo() {

    for (let Age = 0; Age < 4; Age++) {
        var hostAge = prompt(gistName + " " + "Could you please guess my age (type it in numbers), you only have 4 attempts");
        if (hostAge == 26) {
            alert("you got it right, thats my real age.");
            yourPoints += 1;
            alert("U have got a point, congrats");
            // console.log(hostAge);
            break;
        } else if (hostAge < 20) {
            alert("too young, I'm older than that ");
        }
        else if (20 <= hostAge < 25) {
            alert("U are getting close");
        } else if (hostAge > 26) {
            alert("I am younger than that");
        }
    }

    alert("I am 26 years old");
    // console.log(hostAge);

    // arrays
    var questions = ['am I a sea food lover? (yes/no)', 'am I a pet lover (yes/no)', 'am I a good friend (yes/no)'];
    var answers = ['yes I am', 'No Im not'];

    for (let i = 0; i < questions.length; i++) {
        var getQuestions = questions[i];
        var getAnswers = answers[i];

        var questionShown = prompt(gistName + " " + getQuestions);

        // if the user insert number value, while, do and parseInt will solve the problem
        while (questionShown !== 'y' && questionShown !== 'yes' && questionShown !== 'n' && questionShown !== 'no'
            && questionShown !== 'nop' && questionShown !== 'yup') {
            questionShown = prompt("Could U plz answer by yes or no");
        }
        var gistAnswer_3 = questionShown.toUpperCase();
        console.log(gistAnswer_3);
        switch (gistAnswer_3) {
            case "Y":
            case "YES":
            case "YUP":
                alert("great answer" + " " + answers[0]);
                yourPoints += 1;
                alert("U have got a point, congrats");
                break;
            case "N":
            case "NO":
            case "NOP":
                alert("sorry, but yes I do");
                break;
            default:
                alert("mmmm.. U dont know me well..");
        }
    }

}
yesNo();

function favCar() {
    var likeCar = ["Mazarati", "Lexus", "Porsche", "Lincoln", "Toyota",
        "Mercedes-Benz", "Chevrolet", "Audi"];
    var gistAnswer = prompt("What is My favourite Car brand?");
    for (var i = 0; i < 2; i++) {
        if (gistAnswer == likeCar[i] ) {
            alert("yes, I like this brand, you will get a point");
            alert("My fav car brands are Mazarati, Lexus, Porsche, Lincoln, Toyota, Mercedes-Benz, Chevrolet, Audi");
            // console.log("yup");
            yourPoints += 1;
        } else {
            var animeAnswer = prompt("nop, not my fav");
            // console.log("nop");
        }
    }
}
favCar()

alert("you have owned " + " " + yourPoints + " " + "out of 7 Congrats !!!");


