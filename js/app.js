'use strict';

let score = 0;

/*next two lines are to ask the site visitor for his/her name and then say welocme*/

let user = prompt('What is your name?');

alert('Welcome '+ user + ' to my site!')

/*next lines are to ask yes or no answers to the site visitor*/
function QuestionOne(){
  let userAnswer1 = prompt('Do I like beer? Yes or No?').toLowerCase();

  if (userAnswer1 ==='yes' || userAnswer1 ==='y') {
  /*console.log ('You answered correctly!'*/
    alert('You answered correctly!')
    score = score + 1
  } else {
    /*console.log ('Sorry, that is incorrect')*/
    alert('Sorry, that is incorrect')
    }
}
QuestionOne();

function QuestionTwo(){
  let userAnswer2 = prompt('Do I like riding bycles? Yes or No?').toLowerCase();

  if (userAnswer2 ==='yes' || userAnswer2 ==='y') {
  /*console.log ('You answered correctly!'*/
    alert('You answered correctly!')
    score = score + 1
  } else {
    /*console.log ('Sorry, that is incorrect')*/
    alert('Sorry, that is incorrect')
    }
}
QuestionTwo();

function QuestionThree(){
  let userAnswer3 = prompt('Do I like sky dving? Yes or No?').toLowerCase();

  if (userAnswer3 ==='no' || userAnswer3 ==='n') {
  /*console.log ('You answered correctly!'*/
    alert('You answered correctly!')
    score = score + 1
  } else {
    /*console.log ('Sorry, that is incorrect')*/
    alert('Sorry, that is incorrect')
    }
}
QuestionThree();

function QuestionFour(){
  let userAnswer4 = prompt('Do I like hunting? Yes or No?').toLowerCase();

  if (userAnswer4 ==='no' || userAnswer4 ==='n') {
  /*console.log ('You answered correctly!'*/
    alert('You answered correctly!')
    score = score + 1
  } else {
    /*console.log ('Sorry, that is incorrect')*/
    alert('Sorry, that is incorrect')
    }
}
QuestionFour();

function QuestionFive(){
  let userAnswer5 = prompt('Was my family originally from Cuba? Yes or No?').toLowerCase();

  if (userAnswer5 ==='yes' || userAnswer5 ==='y') {
  /*console.log ('You answered correctly!'*/
    alert('You answered correctly!')
    score = score + 1
  } else {
    /*console.log ('Sorry, that is incorrect')*/
    alert('Sorry, that is incorrect')
    }
}
QuestionFive();

function QuestionSix(){
  /* This session is adding a 6th Question per Lab 03 assignment*/

  alert('We are now going to play a guessing number game.')

  // /*next lines are to ask the site visitor to guess a number*/

  let secretNumber = 6;

  let attemptsLeft = 4;

  do {
  let userAnswer = parseInt(prompt('Please enter your guess of the number (Hint- # is between 0 an 10)',"0",10));
  // console.log (userAnswer);

  if (userAnswer == secretNumber) {
    alert ('You guessed the number correctly!')
    score = score + 1 
    attemptsLeft = 0;
  } else {
    if (userAnswer < secretNumber) {
    alert ('Sorry, your guess is too low!')
    } else {
    alert ('Sorry, your guess is too high!')
    }
  console.log(`${attemptsLeft - 1}`);
      attemptsLeft--;
    }
  } while (attemptsLeft > 0);
  alert ('The secret number is ' + secretNumber);
}
QuestionSix();

/* This next session is adding a 7th Question per Lab 03 assignment*/

alert ('Lets play a game. I have three favorite cities on the West Coast. Guess one of them and you win this game.');

let secretCities = ['PORTLAND', 'SAN DIEGO', 'SAN FRANCISCO'];
// console.log (secretCities)

let attemptsLeft1 = 6;

do {
if (attemptsLeft1 == 6) {
alert ('Please enter your first guess of a West Coast city at the next prompt');
} else {
alert ('Sorry, try again. You have ' + attemptsLeft1+ ' attempts left. Please enter guess at the next prompt');
}
let userAnswer = prompt("Enter").toUpperCase();

for (let i=0; i < secretCities.length; i++) {
if (userAnswer == secretCities[i]) {
  alert ('You guessed one of the cities, You won !');
  score = score + 1 
  attemptsLeft1 = 0;
}
}
// console.log (`${attemptsLeft - 1}`);
attemptsLeft1--; 
}
while (attemptsLeft1 > 0);
alert ('My favorite West Coast cities are ' + secretCities);

  /* next lines shows total score and says good bye to site visitor*/

alert(user + ' your score is '+ score + ' out of 7')  
alert('Thank you '+ user + ' for visiting my site!')