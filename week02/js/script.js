$(document).ready(function() {

  // $('#exampleDiv').text('Disaster');
  // $('.exampleClass').text('Disaster!');

  // $('.exampleClass').css({
  //   color: 'red',
  //   fontSize: '10em',
  //   backgroundColor: 'yellow'
  // });

  // $('.exampleClass').addClass('red');
  // $('.exampleClass').removeClass('bold');

  // $('.exampleClass').toggleClass('bold');
  //
  // $('#exampleInput').val('Hello, World!');

  // $('.exampleClass').on('click', function() {
  //   $('.exampleClass').css({
  //     color: 'red'
  //   })
  // });

  // $('.exampleClass').on('click', function() {
  //   $(this).css({
  //     color: 'red'
  //   })
  // });

  // $('#exampleButton').on('click', function() {
  //   $('#exampleDiv').text($('#exampleInput').val());
  // });
  //
  // // $('.exampleClass').hide();
  // $('.exampleClass').on('click', function() {
  //   $('.exampleClass').hide();
  // });

  // $('#exampleButton').on('click', function() {
  //   $('.exampleClass').show();
  // });

  // $('#exampleButton').on('click', function() {
  //   $('.exampleClass').toggle();
  // });

  // $('#exampleButton').on('click', function() {
  //   $('.exampleClass').slideToggle();
  // });

  // $('#exampleButton').on('click', function() {
  //   $('.exampleClass').fadeToggle();
  // });

  // $('#exampleButton').on('click', function() {
  //   $('.exampleClass').animate({
  //     fontSize: '10em'
  //   }, 1000);
  // });

  // $('#exampleButton').on('click', function() {
  //   $('.exampleClass').animate({
  //     color: 'red'
  //   }, 1000);
  // });

  // $('#exampleButton').on('click', function() {
  //   $('.exampleClass').animate({
  //     fontSize: '+=10px'
  //   }, 1000);
  // });

  // THE FOLLOWING ARE BROKEN CODES FOR CONSOLE EXAMPLES

  $('#exampleButton').on('click', function() {
    $('.exampleClass').anamate({
      fontSize: '+=1em'
    }, 1000);
  });

});
