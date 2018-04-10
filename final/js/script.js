/**********************************************

DART 450, Winter 2018
Final
Kathleen Capiral

Description
**********************************************/

$(document).ready(function() {

      // Set variable to current date and time
      const now = new Date();
      var show = now.toString();

      // View the output
      console.log(now);

      $('#userInput').keypress(function(event) {
        if (event.which == 13) {

          var userCommand = $('#userInput').val();

          //Insert command
          $('<div class="command">Kathleens-MacBook-Pro:~ Kathleen$ ' + userCommand + '</div>').insertBefore('#userLine');
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
            case 'read':
              readCommand();
              break;
            case 'location':
              locationCommand();
              break;
            case 'download':
              downloadCommand();
              break;
            case 'exit':
              exitCommand();
              break;
            default:
              invalidCommand();
              break;
          }

        }
      });

      (function pulse() {
        $('.cursor').delay(200).fadeOut('slow').delay(50).fadeIn('slow', pulse);
      })();

      });
