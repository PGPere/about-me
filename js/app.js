'use strict';

/*next two lines are to ask the site visitor for his/her name and then say welocme*/

let user = prompt('What is your name?');

alert('Welcome '+ user + ' to my site!')

/*next lines are to ask yes or no answers to the site visitor*/

let userAnswer1 = prompt('Do I like beer? Yes or No?').toLowerCase();

if (userAnswer1 ==='yes' || userAnswer1 ==='y') {
/*console.log ('You answered correctly!'*/
  alert('You answered correctly!')
} else {
  /*console.log ('Sorry, that is incorrect')*/
  alert('Sorry, that is incorrect')
  }

let userAnswer2 = prompt('Do I like riding bycles? Yes or No?').toLowerCase();

if (userAnswer2 ==='yes' || userAnswer2 ==='y') {
/*console.log ('You answered correctly!'*/
  alert('You answered correctly!')
} else {
  /*console.log ('Sorry, that is incorrect')*/
  alert('Sorry, that is incorrect')
  }

let userAnswer3 = prompt('Do I like sky dving? Yes or No?').toLowerCase();

if (userAnswer3 ==='no' || userAnswer3 ==='n') {
/*console.log ('You answered correctly!'*/
  alert('You answered correctly!')
} else {
  /*console.log ('Sorry, that is incorrect')*/
  alert('Sorry, that is incorrect')
  }

let userAnswer4 = prompt('Do I like hunting? Yes or No?').toLowerCase();

if (userAnswer4 ==='no' || userAnswer4 ==='n') {
/*console.log ('You answered correctly!'*/
  alert('You answered correctly!')
} else {
  /*console.log ('Sorry, that is incorrect')*/
  alert('Sorry, that is incorrect')
  }

let userAnswer5 = prompt('Was my family originally from Cuba? Yes or No?').toLowerCase();

if (userAnswer5 ==='yes' || userAnswer5 ==='y') {
/*console.log ('You answered correctly!'*/
  alert('You answered correctly!')
} else {
  /*console.log ('Sorry, that is incorrect')*/
  alert('Sorry, that is incorrect')
  }

  /* next line says good bye to site visitor*/

  alert('Thank you '+ user + ' for visiting my site!')