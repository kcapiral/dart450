/**********************************************

DART 450, Winter 2018
Final
Kathleen Capiral

Description
**********************************************/

$(document).ready(function() {

  // Get the text in the div on our page
  var divText = $('div').text();

  // Say it!
  responsiveVoice.speak(divText);

});
