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

  var firstRingDelay = 100;
  setTimeout(function() {
    $('.firstRing').show('shake');
  }, firstRingDelay);

  var secondRingDelay = 600;
  setTimeout(function() {
    $('.secondRing').show('shake');
  }, secondRingDelay);

  var thirdRingDelay = 1200;
  setTimeout(function() {
    $('.thirdRing').show('shake')
      .css({
        color: '#eb46f1'
      })
  }, thirdRingDelay);

  $('.thirdRing').on('click', function() {
    $('.firstGreeting').show('drop', {
      direction: 'right'
    }).css({
        color: '#8605e8'
      })
    });

  $('.firstGreeting').on('click', function() {
    $('.secondGreeting').show('drop', {
      direction: 'left'
    }, 3000);
  });

  $('.secondGreeting').on('click', function() {
    $('.thirdGreeting').show('drop', {
      direction: 'right'
    });
  });

  $('.thirdGreeting').on('click', function() {
    $('.fourthGreeting').toggle('pulsate');
  });

  $('.fourthGreeting').on('click', function() {
    $('.finalGreeting').show('drop', {
      direction: 'left'
    });

    let finalHello = "Hello"; 
    let updateInterval = 100;  
    setInterval(function() { 
      finalHello = finalHello + "o";
      $('.finalGreeting').text(finalHello); 
    }, updateInterval, );
  });

  setTimeout(function() {
    console.log("PICK UP YOUR PHONE");
  }, 1000);
  console.log("Next time...");

});
