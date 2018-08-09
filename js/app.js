'use strict';

//Get the user's name
var username = prompt('Hello, I\'m Jessica, welcome to my guessing game. What is your name?');
alert('Nice to have you here, ' + username + ' these are all Yes/No questions, so feel free to answer wtih y/n or yes/no. ');

//An hash to hold questions and values
var questions = {'Am I a Seattle native? ': 'no', 'Have I been to Vermont?': 'no', 'Is Blue Bell my favorite Ice Cream brand?': 'yes', 'Do I have any siblings?': 'yes', 'Am I a dog lover?': 'yes', 'What is my favorite number between 0-3?': Math.floor(Math.random()*3), 'What is one of my favorite ice cream flavors?': ['cookies \'n cream', 'butter pecan', 'chocolate']};

var answerCorrect = 0;

for (var i = 0; i < Object.keys(questions).length; i++){
  var userInput = prompt(Object.keys(questions)[i]).toLowerCase();
  console.log('The user answered: ' + userInput + ' to ' + Object.keys(questions)[i]);

  var values = Object.values(questions)[i];

  switch (i) {
  case 5:
    var j = 0;
    while (j < 3){
      if(parseInt(userInput) === values){
        alert('You me better than I know myself!');
        j = 3; //exit the loop
        answerCorrect++;
      } else{
        if(parseInt(userInput) > values){
          userInput = prompt('You were too high! You have ' + (3-j) + ' more attempts.');
          j++;
        } else {
          userInput = prompt('You were too low! You have ' + (3-j) + ' more attempts.');
          j++;
        }
      }
    }
    break;
  case 6:
    j = 1;
    while (j < 6){
      var userCheck = values.indexOf(userInput);
      console.log('User Index: '+ userCheck);
      console.log(Object.values(questions)[6]);
      // var flavor = Object.values(questions[6]);

      if(userInput === values[userCheck]){
        var otherFlavor = values.slice(userInput);
        console.log(otherFlavor);
        alert('Correct! I also like ' + otherFlavor[0] + ' and ' + otherFlavor[1] + '.');
        j = 6;
        answerCorrect++;
      } else{
        userInput = prompt('That is a good flavor, but not in my top 3. You have ' + (6-j) + ' more guesses.').toLowerCase();
        j++;
      }
    }
    break;

  default:
    //check the input against the valued pair **need to get single character check*
    // if (values === userInput || userInput[0] === values[0]){
    //   alert('Correct!');
    //   answerCorrect++;
    // }
    // else{
    //   var errorMsg = ['And I thought we were friends!', 'Nope.', 'Wrong-o!'];
    //   alert(errorMsg[Math.floor(Math.random()*3)]);
    // }
  }
}

alert('You guessed ' + answerCorrect + ' out of 7 questions, correctly');