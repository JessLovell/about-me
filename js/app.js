'use strict';

//Get the user's name 
var username = prompt('Hello, I\'m Jessica, welcome to my guessing game. What is your name?');
alert('nice to have you here, ' +  username + ' these are all Yes/No questions, so feel free to answer wtih y/n or yes/no. ');

//An hash to hold questions and values 
var questions = {'Am I a Seattle native? ': 'no', 'Have I been to Vermont?': 'no', 'Is Blue Bell my favorite Ice Cream brand?': 'yes', 'Do I have any siblings?': 'yes', 'last question?': 'yes'};


for (var i = 0; i < Object.keys(questions).length; i++){
    var userInput = prompt(Object.keys(questions)[i]).toLowerCase();
    console.log(Object.values(questions)[i]);
    console.log(userInput);
    
    var values = Object.values(questions)[i];
    //check the input against the valued pair **need to get single character check*
    if (values == userInput || userInput[0] == values[0]){
        alert('Correct!');
    } 
    else{
        alert('And I thought we were friends!');
    }
}