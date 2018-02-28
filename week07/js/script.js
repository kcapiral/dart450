$(document).ready(function() {

  // responsiveVoice.speak("hello world", "UK English Male", {pitch: 2});

  var commands = {
  // annyang will capture anything after a splat (*) and pass it to the function.
  // e.g. saying "Show me Batman and Robin" will call showFlickr('Batman and Robin');
  'show me *tag': showFlickr,

  // A named variable is a one word variable, that can fit anywhere in your command.
  // e.g. saying "calculate October stats" will call calculateStats('October');
  'calculate :month stats': calculateStats,

  // By defining a part of the following command as optional, annyang will respond
  // to both: "say hello to my little friend" as well as "say hello friend"
  'say hello (to my little) friend': greeting
};

// Start listening, don't restart automatically
annyang.start({ autoRestart: false });
// Start listening, don't restart automatically, stop recognition after first phrase recognized
annyang.start({ autoRestart: false, continuous: false });

var showFlickr = function(tag) {
  var url = 'http://api.flickr.com/services/rest/?tags='+tag;
  $.getJSON(url);
}

var calculateStats = function(month) {
  $('#stats').text('Statistics for '+month);
}

var greeting = function() {
  $('#greeting').text('Hello!');
}

});
