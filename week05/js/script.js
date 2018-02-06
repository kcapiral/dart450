$(document).ready(function() {

  // // TEST 1: Set how many divs we want to add
  // var totalDivsToAdd = 100;
   
  // // Keep track of how many we've added in the loop
  // var divsAdded = 0;
   
  //
  // // Keep running the while loop until we've added enough divs
  // while (divsAdded < totalDivsToAdd) {
  //
  //   // Create the div
  //   var $div = $('<div></div>');
  //   // Add it to the page
  //   $('body').append($div);
  //   // Make a note that we've added one (so the loop will end at the right time)
  //   divsAdded = divsAdded + 1;
  // }

  // // TEST 2: Uses setInterval to add 1 square on load
  // var timer = setInterval(function() {
  //   var $div = $('<div></div>');
  //   $('body').append($div);
  //   divsAdded = divsAdded + 1;
  //
  //   if (divsAdded > totalDivsToAdd) {
  //     clearInterval(timer);
  //   }
  // }, 500);

  // //TEST 3: Using for loop
  // var totalDivsToAdd = 10; 
  // for (var i = 0; i < totalDivsToAdd; i++) {
  //   var $div = $('<div></div>');
  //   $('body').append($div);
  // }

  //TEST 4: Using for loop with i
  var totalDivsToAdd = 10; 
  for (var i = 0; i < totalDivsToAdd; i++) {
    var $div = $('<div>' + (i+1) + '</div>');
    $('body').append($div);
  }

});
