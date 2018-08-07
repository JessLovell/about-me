'use strict';

//Get the user's name 
var username = prompt('Hello, I\'m Jessica, welcome to my guessing game. What is your name?');
alert('nice to have you here, ' +  username + ' these are all Yes/No questions, so feel free to answer wtih y/n or yes/no. ');

//Ask 5 yes/no questions
var answerOne = prompt('Do I have any pets?').toLowerCase();

if (answerOne == 'y' || answerOne == 'yes'){
    alert('you got it right!');
} else{
    alert('You DON\'T know me!');
}

//An hash to hold questions and values 
var questions = {'Am I a Seattle native? ': 'no', 'Have I been to Vermont?': 'no', 'Is Blue Bell my favorite Ice Cream brand?': 'yes', 'Do I have any siblings?': 'yes', 'last question?': 'yes'};

console.log(Object.values(questions)[0]);



for (var i = 0; i < Object.keys(questions).length; i++){
    var userInput = prompt(Object.keys(questions)[i]).toLowerCase();
    console.log(Object.values(questions)[i]);
    console.log(userInput);

    //check the input against the valued pair 
    if (Object.values(questions)[i] == userInput){
        alert('Correct!');
    } 
    else{
        alert('Incorrect.');
    }
}