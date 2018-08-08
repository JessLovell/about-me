'use strict';

//Get the user's name
var username = prompt('Hello, I\'m Jessica, welcome to my guessing game. What is your name?');
alert('Nice to have you here, ' + username + ' these are all Yes/No questions, so feel free to answer wtih y/n or yes/no. ');

//An hash to hold questions and values
var questions = {'Am I a Seattle native? ': 'no', 'Have I been to Vermont?': 'no', 'Is Blue Bell my favorite Ice Cream brand?': 'yes', 'Do I have any siblings?': 'yes', 'Am I a dog lover?': 'yes'};


for (var i = 0; i < Object.keys(questions).length; i++){
  var userInput = prompt(Object.keys(questions)[i]).toLowerCase();
  console.log('The user answered: ' + userInput + ' to ' + Object.keys(questions)[i]);

  var values = Object.values(questions)[i];
  //check the input against the valued pair **need to get single character check*
  if (values === userInput || userInput[0] === values[0]){
    alert('Correct!');
  }
  else{
    var errorMsg = ['And I thought we were friends!', 'Nope.', 'Wrong-o!'];
    alert(errorMsg[Math.floor(Math.random()*3)]);
  }
}