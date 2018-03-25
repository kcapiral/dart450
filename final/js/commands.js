//Commands

function clearCommand() {
  $('.command').remove();
}

function helpCommand() {
  console.log('help command');
  $('<div class="activeText">' +
    '<div class="mainCommandDescriptionContainer">' +
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
    'ls<br>' +
    'help<br>' +
    'clear<br>' +
    'other' +
    '</div>' +
    '</div>').insertBefore('#userLine');
}

function invalidCommand() {
  console.log('invalid command');
}

function readCommand() {
  // Get the text in the div on our page
  var divText = $('div').text();

  // Say it!
  responsiveVoice.speak(divText);
}

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

function downloadCommand() {
  download("hello world", "hello", "text/plain");
}
