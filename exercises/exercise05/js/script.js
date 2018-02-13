$(document).ready(function() {

  let windowWidth = $(document).width();

  //MOVES TUGOWAR TO THE RIGHT ON A SET INTERVAL
  setInterval(function() {
    $('#tugowar').css('left', '+=20px');
    //CHECK IF LOSE
    if (parseInt($('#tugowar').css('left')) >= windowWidth) {
      console.log('you lost');
      $('#tugowar').hide();
      $('#gameMessage').show();
      $('#gameMessage').text("You lose!");
    };
  }, 200);

  $(document).keyup(function(e) {
    //IF USER PRESSES LEFT KEY
    if (e.keyCode === 37) {
      $('#tugowar').css('left', '-=20px');

      //CHECK IF WIN
      if (parseInt($('#tugowar').css('left')) <= 0) {
        console.log('you win');
        $('#tugowar').hide();
        $('#gameMessage').show();
        $('#gameMessage').text("You win!");
      };
    };
  });
});
