'use strict';
function mainQuestions(){
//Get the user's name
  var username = prompt('Hello, I\'m Jessica, welcome to my guessing game. What is your name?');
  alert('Nice to have you here, ' + username + ' these are all Yes/No questions, so feel free to answer wtih y/n or yes/no. ');

  //An hash to hold questions and values
  var questions = {'Am I a Seattle native? ': 'no', 'Have I been to Paris?': 'yes', 'Have I ever worked at an ice cream factory?': 'yes', 'Do I have any siblings?': 'yes', 'Do I like dogs?': 'yes', 'What is my favorite number between 0-3?': Math.floor(Math.random()*3), 'What is one of my favorite ice cream flavors?': ['cookies \'n cream', 'butter pecan', 'chocolate']};

  var answerCorrect = 0;

  //loop through the questions hash
  for (var i = 0; i < Object.keys(questions).length; i++){
    var userInput = prompt(Object.keys(questions)[i]).toLowerCase();
    console.log('The user answered: ' + userInput + ' to ' + Object.keys(questions)[i]);

    var values = Object.values(questions)[i];

    switch (i) {
    case 5: //for question #6,
      var j = 0;
      while (j <= 3){ //Give user 3 more guesses to get correct.
        if(parseInt(userInput) === values){
          alert('You know me better than I know myself!');
          j = 4; //exit the loop
          answerCorrect++;
        } else {
        //display prompts to guide the guesses
          if(j === 3) {
            alert('Nice try, my favorite number is ' + values);
            j++;
          } else if (isNaN(parseInt(userInput))){
            userInput = prompt('Enter a NUMBER! You have ' + (3-j) + ' more attempts.');
            j++;
          } else if(parseInt(userInput) > values){
            userInput = prompt('You were too high! You have ' + (3-j) + ' more attempts.');
            j++;
          } else {
            userInput = prompt('You were too low! You have ' + (3-j) + ' more attempts.');
            j++;
          }
        }
      }
      break;

    case 6: //for question #7
      j = 1;
      //this loop gives the user 6 attempts to guess my favorite flavor
      while (j <= 6){
        var userCheck = values.indexOf(userInput); //check if the input is in the array
        console.log('User Index: '+ userCheck);
        console.log(Object.values(questions)[6]);

        if(userInput === values[userCheck]){
          alert('Correct! My top three are ' + values[0] + ', ' + values[1] + ' and ' + values[2] + '.');
          j = 7;
          answerCorrect++;
        } else if (j === 6){
          alert('No more guesses! My top three are ' + values[0] + ', ' + values[1] + ' and ' + values[2] + '.');
          j++;
        } else {
          userInput = prompt('That is a good flavor, but not in my top 3. You have ' + (6-j) + ' more guesses.').toLowerCase();
          j++;
        }
      }
      break;

    default:
    //check the input against the valued pair **need to get single character check*
      if (values === userInput || userInput[0] === values[0]){
        alert('Correct!');
        answerCorrect++;
      }
      else{
        var errorMsg = ['And I thought we were friends!', 'Nope.', 'Wrong-o!'];
        alert(errorMsg[Math.floor(Math.random()*3)]);
      }
    }
  }
  //provide a count of correct answers
  alert('You guessed ' + answerCorrect + ' out of 7 questions, correctly');
}

mainQuestions();