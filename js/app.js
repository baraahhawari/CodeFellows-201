// guessing game
'use strict';
// 1st section lab02
// in this section of the game I used the Var, Prompt, Alert and switch.
// 1.
var gistName = prompt('Hello, could U plz tell me Ur name');
// if the user insert invaled or number value, while, do and parseInt will solve the problem
while (!isNaN(parseInt(gistName)) || !gistName) {
  gistName = prompt('plz insert a valid name');
}
// console.log(gistName);
alert('Welcome' + ' ' + gistName + ' ' + 'to my portfolio');

// 2.
var gistReady = confirm(
  'Now the guessing game will satrt,' + ' ' + gistName + ' ' + ' are u ready?'
);
if (gistReady == true) {
  alert('yaay, I like Ur spirit');
} else {
  alert(
    'why, I made this game 4 U, I am sad :(, even though, The game will start..'
  );
}

// 3.
// eslint-disable-next-line no-unused-vars
var hostName = alert(
  gistName + ' ' + 'My name is Bara\'ah, I am the programmer for this page'
);

// 4.
var hostHoppy = prompt(
  gistName + ' ' + 'Do I like to watch movies?! (yes/no)'
).toLowerCase();
// if the user insert number value, while, do and parseInt will solve the problem
while (
  hostHoppy !== 'y' &&
  hostHoppy !== 'yes' &&
  hostHoppy !== 'n' &&
  hostHoppy !== 'no' &&
  hostHoppy !== 'nop' &&
  hostHoppy !== 'yup'
) {
  // using tolowercase to validate the user input value if it small or capital letter
  hostHoppy = prompt('Could U plz answer by yes or no').toLowerCase();
}
// points counter (to count how many correct answers the user do)
var yourPoints = 0;
// define the yes/y as possitive answer and no/n as negative answer
switch (hostHoppy) {
case true:
case 'y':
case 'yes':
case 'yup':
  alert('yes I do');
  alert('U have got a point, congrats');
  yourPoints += 1;
  break;
case false:
case 'no':
case 'n':
case 'nop':
  alert(
    'sorry, but yes I do like to watch movies, U will not get a point sorry'
  );
  break;
default:
  alert('yup I like watching movies');
}

// 5.
// using touppercase to validate the user input value if it small or capital letter
// eslint-disable-next-line no-redeclare
var gistReady = prompt(
  gistName + ' ' + ' Do I like watching Horror movies? (yes/no)'.toUpperCase()
);

// define the yes/y as possitive answer and no/n as negative answer
switch (gistReady) {
case true:
case 'Y':
case 'YES':
  alert('yup, I really do like watching Horror movies');
  yourPoints += 1;
  alert('U have got a point, congrats');
  break;
case false:
case 'N':
case 'NO':
  alert('wthat\'s wrong, sorry But I like watching Horror movies');
  alert('U have lost a point, sorry');
  break;
default:
  alert(' I like watching Horror movies.');
}
// -------------------------------------------------------------------------------------------------------------
// 2nd section lab03
// in this section of the game I used the If statment, for loops, functions and arrays.
// 6.
function yesNo() {
  for (let Age = 0; Age < 4; Age++) {
    var hostAge = parseInt(
      prompt(
        gistName +
          ' ' +
          'Could you please guess my age (type it in numbers), you only have 4 attempts'
      )
    );
    if (hostAge <= 10) {
      alert('too young, I\'m older than that ');
    } else if (hostAge === 26) {
      alert('you got it right, thats my real age.');
      yourPoints += 1;
      break;
    } else if (hostAge >= 30) {
      alert('too old,I am younger then that');
    } else if (20 < hostAge < 25) {
      alert('gitting close, keep rying');
    }
  }

  alert('I am 26 years old');
  // console.log(hostAge);
}
yesNo();

// arrays
var questions = [
  'am I a sea food lover? (yes/no)',
  'am I a pet lover (yes/no)',
  'am I a good friend (yes/no)'
];
var answers = ['yes I am', 'No Im not'];

for (let i = 0; i < questions.length; i++) {
  var getQuestions = questions[i];

  var questionShown = prompt(gistName + ' ' + getQuestions);

  // if the user insert number value, while, do and parseInt will solve the problem
  while (
    questionShown !== 'y' &&
    questionShown !== 'yes' &&
    questionShown !== 'n' &&
    questionShown !== 'no' &&
    questionShown !== 'nop' &&
    questionShown !== 'yup'
  ) {
    questionShown = prompt('Could U plz answer by yes or no');
  }
  var gistAnswer_3 = questionShown.toUpperCase();
  console.log(gistAnswer_3);
  switch (gistAnswer_3) {
  case 'Y':
  case 'YES':
  case 'YUP':
    alert('great answer' + ' ' + answers[0]);
    alert('U have got a point, congrats');
    yourPoints += 1;
    break;
  case 'N':
  case 'NO':
  case 'NOP':
    alert('sorry, but yes I do');
    break;
  default:
    alert('mmmm.. U dont know me well..');
  }
  // }
}

var likeCar = [
  'lincoln',
  'mercedes-Benz',
  'chevrolet',
  'audi',
  'chevrolet',
  'mazarati'
];
var gistAnswer = prompt(
  'What is My favourite Car brand?' +
      ' Lincoln, Mercedes-Benz, Chevrolet, Audi'
).toLowerCase();
for (var j = 0; j < likeCar.length; j++) {
  if (gistAnswer === likeCar[j]) {
    alert('yes, I like this brand, you will get a point');
    alert(
      'My fav car brands are Mazarati, Lexus, Porsche, Lincoln, Toyota, Mercedes-Benz, Chevrolet, Audi'
    );
    break;
  }
}
yourPoints += 1;


alert('you have owned ' + ' ' + yourPoints + ' ' + 'out of 6 Congrats !!!');
