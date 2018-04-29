/**********************************************

DART 450, Winter 2018
Final
Kathleen Capiral

Script.js contains the codes for the user name, user line, user input, user command input
and the reverse geolocation.
**********************************************/
$(document).ready(function() {

  //Creates user name for user line.
  userName = prompt('Welcome to Terminal 20.1.8! Please enter your name.', '');
  $('<div id="userLine">' + userName + 's-MacBook-Pro:~ ' + userName + '$ <input id="userInput"type="text" autofocus/></div>').appendTo('#mainTextContainer');

  $('#userInput').keypress(function(event) {
    //Listens for enter keypress
    if (event.which == 13) {

      //Changes user line name to user userName
      if (userName != null) {
        $('#userLine').text($('#userName').val());
      }

      // Stores user's input information
      let userCommand = $('#userInput').val();

      //Insert command
      $('<div class="command">' + userName + 's' + '-MacBook-Pro:~ ' + userName + '$ ' + userCommand + '</div>').insertBefore('#userLine');
      $('#userInput').val('');

      //Check user command
      //eg. clear, help
      switch (userCommand) {
        case 'help':
          helpCommand();
          break;
        case 'status':
          statusCommand();
          break;
        case 'download':
          downloadCommand();
          break;
        case 'customize':
          customizeCommand();
          break;
        case 'clear':
          clearCommand();
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
});

//Calls for positions from geocodeLatLng()
function showPosition(position) {
  geocodeLatLng(position.coords.latitude, position.coords.longitude);
}

//Indicate if there's an error
function handleError(e) {
  console.log("ERROR %o", e);
}

//Gets user's current location address
function getLocation() {
  try {
    navigator.geolocation.getCurrentPosition(showPosition, handleError, {
      maximumAge: 0
    });
  } catch (e) {
    console.log(e);
  }
}

//Finds the user's latitude and longitude positions
function geocodeLatLng(lat, lng) {
  var geocoder = new google.maps.Geocoder;
  var latlng = {
    lat: lat,
    lng: lng
  };
  geocoder.geocode({
    'location': latlng
  }, function(results, status) {
    if (status === 'OK') {
      if (results[0]) {
        //If user mouse leaves webpage area, an alert will pop up
        $(window).mouseleave(function() {
          alert("If you leave now, \nyou'll regret it...\nBecause I know where you live...\n" +
            " \n" + results[0].formatted_address);
        });
        console.log("%o", results[0]);
      } else {
        window.alert('No results found');
      }
    } else {
      window.alert('Geocoder failed due to: ' + status);
    }
  });
}

//Google script calls initMap
function initMap() {
  getLocation();
}
