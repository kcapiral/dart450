/**********************************************

DART 450, Winter 2018
Title of Project
Author

Description of what the script does...

**********************************************/

$(document).ready(function() {

  // var counter = 0; 
  // $('.counterDiv').on('click', function() { 
  //   counter = counter + 1; 
  //   $(this).text(counter); 
  // });
  //
  // var delay = 5000;  
  // setTimeout(function() { 
  //   $('#surprise').text("SURPRISE!!!"); 
  // }, delay);

  var counter = 0; 
  var updateInterval = 1;  
  setInterval(function() { 
    counter = counter + 1;
    $('#counter').text(counter); 
  }, updateInterval);

  setTimeout(function () {
  console.log("This is inside the timeout!");
  },5000);
  console.log("This is just in the main program!");

});
