/**********************************************

DART 450, Winter 2018
Midterm
Kathleen Capiral

1 - On load, user can move left, right or hit spacebar using the .keydown().
2 - In the .keydown(), it detects which key value gets pressed, checks if character
is in an interactable position, displays the changeable text and (HIT SPACEBAR!!!)
and hides interactive text and doggos gif.
3 - moveLeft() and moveRight() determines by how much the character moves and allows
for the character to move to within the the game background container.
4 - doInteraction() does a unique interaction per case.
5 - isInteractivePosition() executes an interactive text within a specified
interaction range and if not in the itneraction range, does nothing.
6 - loadDoggos() randomizes dog images in the background within a set interval.
7 - randomizeChar() randomizes characters from an array in CHAR_COLLECTION.
**********************************************/

const LEFT_KEY = 37;
const RIGHT_KEY = 39;
const SPACEBAR = 32;

const OFFSET = 10;

const NINEGAG_URL = 'https://www.9gag.com/';
const FACEBOOK_URL = 'https://www.facebook.com/';
const YOUTUBE_URL = 'https://www.youtube.com/watch?v=qImUihjYZA0';
const YOUTUBE = [580, 720];
const NINEGAG = [1300, 1370];
const FACEBOOK = [1720, 1760];
const SPOTIFY = [1840, 1890];
const DOGGOS = [190, 260];
const POKEMONS = [0, 100];
const CHAR_COLLECTION = [
  'img/ditto.gif',
  'img/pikachu.gif',
  'img/shiba.gif',
  'img/raccoon.gif',
  'img/kirby.gif',
  'img/dk.gif'
];

let leftValue = 0;
let characterPos = 500;
let action = null;

let moveCharLeft = false;
let moveCharRight = false;
let audio;

$(document).ready(function() {

  $('#textContainer').hide();

  audio = new Audio('../audio/pokemon.mp3');
  audio.play();

  $(document).keydown(function(e) {
    //Detect which key is pressed
    leftValue = parseInt($('#imageBackground').css('marginLeft'));

    switch (e.keyCode) {
      case LEFT_KEY:
        moveLeft();
        break;
      case RIGHT_KEY:
        moveRight();
        break;
      case SPACEBAR:
        doInteraction();
        break;
    }

    //Check if character is in an interactable position
    if (isInteractivePosition()) {
      //Display changeable text and (HIT SPACEBAR!!!)
      $('#textContainer').show();
    } else {
      //Hide interactive text and doggos
      $('#textContainer').hide();
      $('.doggos').hide();
    }
  });

});

function moveLeft() {
  if (characterPos > 50 && characterPos <= 500) {
    $('#character').css('marginLeft', '-=' + OFFSET);
    characterPos -= OFFSET;
    console.log(characterPos);
  } else if (characterPos > 1500 && characterPos <= 1950) {
    $('#character').css('marginLeft', '-=' + OFFSET);
    characterPos -= OFFSET;
  } else if (leftValue < 0) {
    $('#imageBackground').css('marginLeft', '+=' + OFFSET);
    characterPos -= OFFSET;
  }
}

function moveRight() {
  console.log(characterPos);
  if (characterPos >= 50 && characterPos < 500) {
    $('#character').css('marginLeft', '+=' + OFFSET);
    characterPos += OFFSET;
    console.log(characterPos);
  } else if (characterPos >= 1500 && characterPos < 1950) {
    $('#character').css('marginLeft', '+=' + OFFSET);
    characterPos += OFFSET;
  } else if (leftValue > -1000) {
    $('#imageBackground').css('marginLeft', '-=' + OFFSET);
    characterPos += OFFSET;
  }
}

function doInteraction() {
  switch (action) {
    case 'YOUTUBE':
      window.open(YOUTUBE_URL);
      break;
    case 'NINEGAG':
      window.open(NINEGAG_URL);
      break;
    case 'FACEBOOK':
      window.open(FACEBOOK_URL);
      break;
    case 'SPOTIFY':
      audio.pause();
      audio.src = '../audio/made_in_abyss.mp3';
      audio.play();
      break;
    case 'DOGGOS':
      loadDoggos();
      break;
    case 'POKEMONS':
      randomizeChar();
  }
}

function isInteractivePosition() {
  if (characterPos > YOUTUBE[0] && characterPos < YOUTUBE[1]) {
    action = 'YOUTUBE';
    $('.interactiveText').text("Moon prism power, make-up!");
    return true;
  }

  if (characterPos > NINEGAG[0] && characterPos < NINEGAG[1]) {
    action = 'NINEGAG';
    $('.interactiveText').text("Go Fun The World");
    return true;
  }

  if (characterPos > FACEBOOK[0] && characterPos < FACEBOOK[1]) {
    action = 'FACEBOOK';
    $('.interactiveText').text("What's on facebook?");
    return true;
  }

  if (characterPos > SPOTIFY[0] && characterPos < SPOTIFY[1]) {
    action = 'SPOTIFY';
    $('.interactiveText').text("I'm bored of pokemon.");
    return true;
  }

  if (characterPos > DOGGOS[0] && characterPos < DOGGOS[1]) {
    action = 'DOGGOS';
    $('.interactiveText').text("DOGGOS?");
    return true;
  }

  if (characterPos > POKEMONS[0] && characterPos < POKEMONS[1]) {
    action = 'POKEMONS';
    $('.interactiveText').text("?????");
    return true;
  }

  action = null;
  return false;
}

function loadDoggos() {
  $('.doggos').show();
  setInterval(function() {
    $('.doggos').each(function() {
      let randomX = Math.random() * $(window).width();
      let randomY = Math.random() * $(window).height();
      $(this).css({
        position: 'absolute',
        top: randomY,
        left: randomX
      });
    });
  }, 500);
}

function randomizeChar() {
  let pokemon = CHAR_COLLECTION[Math.floor(Math.random()*CHAR_COLLECTION.length)];
    $('#charGif').attr('src', pokemon);
}
