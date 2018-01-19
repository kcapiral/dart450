$(document).ready(function() {

  // $('.circle').on('click', function() {
  //   $(this).css({backgroundColor:'blue'});
  // });

  // $('.circle').on('click', function() {
  //   $(this).slideToggle();
  // });

  $('.circle').on('click', function() {
    var circleId = $(this).attr('id');

    if (circleId == 'circle1') {
      $(this).css({
        backgroundColor: '#E4DEE0'
      }).toggle('drop');
    }

    if (circleId == 'circle2') {
      $(this).css({
        backgroundColor: '#D5BAB1'
      }).toggle('drop', {direction: 'up'});
    }

    if (circleId == 'circle3') {
      $(this).css({
        backgroundColor: '#F3391D'
      }).toggle('drop', {direction: 'down'});
    }

    if (circleId == 'circle4') {
      $(this).css({
        backgroundColor: '#FDD9CD'
      }).toggle('drop', {direction: 'right'});
    }

  });

  $('.firstLine').on('click', function() {
    $('.secondLine').show('slide', {direction: 'up'});
  });

  $('.secondLine').on('click', function() {
    $('.thirdLine').show('slide');
  });

  $('.thirdLine').on('click', function() {
    $('#header').hide();
  });

})
