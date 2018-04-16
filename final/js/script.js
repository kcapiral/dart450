/**********************************************

DART 450, Winter 2018
Final
Kathleen Capiral

Description
**********************************************/
$(document).ready(function() {

  //Creates user name for user line.
  var userName = prompt("Welcome to TERMINAL! Please enter your name.", "");
  console.log('User name is ' + userName);

  $('#userInput').keypress(function(event) {
    //When user hits 'enter',
    // execute the download command.
    if (event.which == 13) {
      downloadCommand();

      // Set variable to current date and time
      const now = new Date();
      let show = now.toString();

      //Changes userline name to user userName
      if (userName != null) {
        $('#userLine').text($('#userName').val());
      }


      let userCommand = $('#userInput').val();

      //Insert command
      // $('<div id="mainTextContainer">' + now + '</div>');
      $('<div class="command">' + userName + 's' + '-MacBook-Pro:~ ' + userName + '$ ' + userCommand + '</div>').insertBefore('#userLine');
      $('#userInput').val('');

      //Check user command
      //eg. clear, help
      switch (userCommand) {
        case 'clear':
          clearCommand();
          break;
        case 'help':
          helpCommand();
          break;
          // case 'location':
          //   locationCommand();
          //   break;
        case 'exit':
          exitCommand();
          break;
        default:
          invalidCommand();
          break;
      }
    }
  });

  // (function pulse() {
  //   $('.cursor').delay(200).fadeOut('slow').delay(50).fadeIn('slow', pulse);
  // })();

});

// function showPosition(position) {
//   console.log("show pos %o", position);
// }
//
// function handleError(e) {
//   console.log("ERROR %o", e);
// }
//
// function getLocation() {
//   console.log('asdf');
//
//   try {
//     navigator.geolocation.getCurrentPosition(showPosition, handleError, {
//       timeout: 10000
//     });
//   } catch (e) {
//     console.log(e);
//   }
