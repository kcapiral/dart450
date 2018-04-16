/**********************************************

DART 450, Winter 2018
Final
Kathleen Capiral

This file stores all the command lines the user will input.
Each command is listed here with it's respective function.
**********************************************/


// [clear]
// When user wants to 'clear' the terminal,
// fill terminal with binaries instead.


function clearCommand() {
  let updateInterval = 25;  

  let randomBinaryDiv = $('<div style="word-wrap:break-word" class="activeText">' +
    Math.floor(Math.random() * 2) +
    '</div>').insertBefore('#userLine');

  setInterval(function() { 
    randomBinaryDiv[0].textContent += Math.floor(Math.random() * 2);
  }, updateInterval, );
}

// [help]
// When user asks for help,
// return a random life pro tip or help line.


function helpCommand() {

  let lifeProTips = [
    'If you put peanut butter on the inside of both pieces of bread then the jelly, your bread won’t get soggy.<br>' +
    'Did that help? If not, ask for "help" again.',

    'If your feet are cold, just microwave your socks and then put them on. Really good feeling.<br>' +
    'Did that help? If not, ask for "help" again.',

    'Winner, winner, chicken dinner!<br>' +
    'Did that help? If not, ask for "help" again.',

    'ごろごろ煮込みチキンカレー」をセブンイレブンのうどんで食べてみた<br>' +
    'お持ち帰りで買うと、カレーとライス。ライスには漬物がのっています。<br>' +
    '松屋オリジナルカレーに、鉄板で焼き上げた大きめの鶏もも肉が入った松屋史上最強のカレー<br>' +
    '少し辛めのカレーとご飯との相性はバッチリ。<br>' +
    'この史上最強の一品をより強くするためには何が必要か。答えは一つ、うどんです。<br>' +
    'カレーの有名店でもなかなかこの味は出せません。とにかくうまい。<br>' +
    'ライスには漬物が"help"のっています。',

    'Bananas are curved because they grow towards the sun.' +
    'Did that help? If not, ask for "help" again.',

    "Whatever you do, don't leave.<br>" +
    'Did that help? If not, ask for "help" again.',

    'Was I helpful?<br>' +
    'Maybe ask again...',

    'GNU bash, version 3.2.57(1)-release (x86_64-apple-darwin16)<br>' +
    'These shell commands are defined internally.  Type `help\' to see this list.<br>' +
    'Type `help name\' to find out more about the function `name\'.<br>' +
    'Use `info bash\' to find out more about the shell in general.<br>' +
    'Use `man -k\' or `info\' to find out more about commands not in this list.<br>' +
    '</div>' +
    '<div class="mainCommandListContainer">' +
    'Type a main command:<br>' +
    // 'watchme<br>' +
    // 'listen<br>' +
    // 'read<br>' +
    // 'ls<br>' +
    'help<br>' +
    'clear<br>' +
    'exit'
    // 'other'
  ]

  let randomNumber = Math.floor(Math.random() * (lifeProTips.length));

  $('<div class="activeText">' +
    lifeProTips[randomNumber] +
    '</div>').insertBefore('#userLine');

}


// [invalid]
// If user types an invalid command,
// say one of the following strings
// using responsiveVoice.


function invalidCommand() {
  let invalidResponses = [
    'Invalid command.',
    "That's not quite right",
    'Are you stupid?',
    "Here's a tip. Type 'help'",
    'Wrong answer.',
    'Have you ever even used a terminal before!'
  ]

  let randomResponse = Math.floor(Math.random() * (invalidResponses.length));

  responsiveVoice.speak(invalidResponses[randomResponse]);
}


// [location???]
// Asks permission to locate user,
// locates the user's current coordinates,
// translates coordinates into address.


function locationCommand() {
  if ("geolocation" in navigator) { //check geolocation available
    //try to get user current location using getCurrentPosition() method
    navigator.geolocation.getCurrentPosition(function(position) {
      $('<div class="activeText">' +
        'Found your location<br>' +
        'Lat :position.coords.latitude<br>' +
        'Lang :position.coords.longitude<br>' +
        '</div>').insertBefore('#userLine');
    });
  } else {
    console.log("Browser doesn't support geolocation!");
  }
}


// [download]
// Automatically downloads files
// to user's computer.


function downloadCommand() {
  console.log('downloading');
  download('virus', 'test', 'text/plain');
}

// [exit]
// When the user tries to exit the webapge,
// open multiple windows to prevent user from leaving.


function exitCommand() {
  let myWindow = window.open('MsgWindow', '_blank', 'toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=500,width=400,height=400');
  let facebookWindow = window.open('https://www.facebook.com', '_blank', 'toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=500,width=400,height=400');
  let twitterWindow = window.open('https://www.twitter.com', '_blank', 'toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=200,width=400,height=400');
  let instagramWindow = window.open('https://www.instagram.com', '_blank', 'toolbar=yes,scrollbars=yes,resizable=yes,top=600,left=0,width=400,height=400');
  let pinterestWindow = window.open('https://www.pinterest.com', '_blank', 'toolbar=yes,scrollbars=yes,resizable=yes,top=800,left=1000,width=400,height=400');

  myWindow.document.write("<p>Please don't leave. We're not done yet.</p>");

  $('<div class="activeText">' +
    'logout<br>' +
    'Saving session...<br>' +
    '...copying shared history...<br>' +
    '...saving history...truncating history files...<br>' +
    '...completed.<br>' +
    'Broadcasting live stream...<br>' +
    'Posting session on Facebook, Twitter, Instagram, Pinterest...<br>' +
    '[Process completed]<br>' +
    '</div>').insertBefore('#userLine');

}


// [close]
// When user tries to close the tab or browser,
// show a message.

// $(window).unload(function() {
//   return "Bye now!";
// });


// [info]
// Show user information such as
// user picture, name, date of birth, location, favorite color.

function infoCommand() {
  $('<div class="activeText">' +
    'Name: <br>' +
    'Image: <br>' +
    'Date of birth: <br>' +
    'Location: <br>' +
    'Likes the color: <br>' +
    '</div>').insertBefore('#userLine');
}
