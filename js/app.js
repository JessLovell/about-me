'use strict';

$('.detail').hide();
$('main').on('click', function () {
  if (event.target.className.match(/show/) !== null){
    $('.detail').hide();
    $('.title').show();
    $('.title').removeClass('show');
  }
  else if ('title talk-stalk' === event.target.className){ 
    $('.title.talk-stalk').addClass('show');
    $('.talk-stalk').show();
    $('.life-skills').hide();
    $('.portfolio-resume').hide();
  }
  else if ('title portfolio-resume' === event.target.className){
    $('.title.portfolio-resume').addClass('show');
    $('.talk-stalk').hide();
    $('.life-skills').hide();
    $('.portfolio-resume').show();
  }
  else if ('title life-skills' === event.target.className){
    $('.title.life-skills').addClass('show');
    $('.talk-stalk').hide();
    $('.life-skills').show();
    $('.portfolio-resume').hide();
  }
});

$('header').on('click', function () {
  $('.detail').hide();
  $('.title').show();
});

$('.talk').on('click', () => {
  if(event.target.className === 'email'){
    $('p.email').toggle();
  } else if (event.target.className === 'phone'){
    $('p.phone').toggle();
  }
});

$(document).ready(function() {
  console.log( "ready!" );
  $('p.phone').hide();
  $('p.email').hide();
  $('.detail').hide();
  $('.title').show();
});
