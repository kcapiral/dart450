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
  // $('.command').remove();
  // $('.activeText').remove();
  $('<div class="activeText">10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '10101010100101010101010101010101011010101010010101010101010101010101<br>' +
    '</div>').insertBefore('#userLine');
}


// [help]
// When user asks for help,
// return a random life pro tip or help line.


function helpCommand() {

  var lifeProTips = [
    'If you put peanut butter on the inside of both pieces of bread then the jelly, your bread won’t get soggy.<br>' +
    'Was that help? If not, ask for "help" again.',

    'If your feet are cold, just microwave your socks and then put them on. Really good feeling.<br>' +
    'Was that help? If not, ask for "help" again.',

    'Winner, winner, chicken dinner!<br>' +
    'Was that help? If not, ask for "help" again.',

    'ごろごろ煮込みチキンカレー」をセブンイレブンのうどんで食べてみた<br>' +
    'お持ち帰りで買うと、カレーとライス。ライスには漬物がのっています。<br>' +
    '松屋オリジナルカレーに、鉄板で焼き上げた大きめの鶏もも肉が入った松屋史上最強のカレー<br>' +
    '少し辛めのカレーとご飯との相性はバッチリ。<br>' +
    'この史上最強の一品をより強くするためには何が必要か。答えは一つ、うどんです。<br>' +
    'カレーの有名店でもなかなかこの味は出せません。とにかくうまい。<br>' +
    'ライスには漬物が"help"のっています。',
    
    'GNU bash, version 3.2.57(1)-release (x86_64-apple-darwin16)<br>' +
    'These shell commands are defined internally.  Type `help\' to see this list.<br>' +
    'Type `help name\' to find out more about the function `name\'.<br>' +
    'Use `info bash\' to find out more about the shell in general.<br>' +
    'Use `man -k\' or `info\' to find out more about commands not in this list.<br>' +
    '</div>' +
    '<div class="mainCommandListContainer">' +
    'Type a main command:<br>' +
    'watchme<br>' +
    'listen<br>' +
    'read<br>' +
    'ls<br>' +
    'help<br>' +
    'clear<br>' +
    'other'
  ]

  var randomNumber = Math.floor(Math.random() * (lifeProTips.length));

  $('<div class="activeText">' +
    lifeProTips[randomNumber] +
    '</div>').insertBefore('#userLine');
}


// [invalid]
// If user types an invalid command,
// print 'Invalid command' in console.


function invalidCommand() {
  // $('<div class="activeText">'
  //   '-bash:' +
  //   userCommand +
  //   'command not found' +
  //   '</div>').insertBefore('#userLine');
  console.log('Invalid command.')
}


// [read???]
// Reads the entire webpage
// using responsiveVoice.


function readCommand() {
  // Get the text in the div on our page
  var divText = $('div').text();

  // Say it!
  responsiveVoice.speak(divText);
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
  download("hello world", "hello", "text/plain");
}

// [exit]
// When the user tries to exit the webapge,
// open multiple windows to prevent user from leaving.


function exitCommand() {
  var myWindow = window.open("", "MsgWindow", "width=1000,height=1000");
  myWindow.document.write("<p>Please don't leave. We're not done yet.</p>");
  window.open('', 'MsgWindow', 'width=500,height=500');
  window.open('', 'MsgWindow', 'width=200,height=500');
  window.open('', 'MsgWindow', 'width=100,height=500');
}
