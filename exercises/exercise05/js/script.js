$(document).ready(function() {

  let windowWidth = $(document).width();

  //MOVES TUGOWAR TO THE RIGHT ON A SET INTERVAL
  var interval = setInterval(function() {
    $('#tugowar').css('left', '+=20px');
    $('body').css({backgroundColor: '#fa3b31'});

    //CHECK IF LOSE
    if (parseInt($('#tugowar').css('left')) >= windowWidth) {
      console.log('you lost');
      $('#tugowar').hide();
      $('#gameMessage').show();
      $('#gameMessage').text("You lose!");
      $('.instruction').text("ლ(ಠ益ಠლ)");
      $('body').css({backgroundColor: '#fa3b31'});
    };
  }, 200);

  $(document).keyup(function(e) {
    //IF USER PRESSES LEFT KEY
    if (e.keyCode === 37) {
      $('#tugowar').css('left', '-=20px');
      $('body').css({backgroundColor: '#435af4'});

      //CHECK IF WIN
      if (parseInt($('#tugowar').css('left')) <= 0) {
        clearInterval(interval);
        console.log('you win');
        $('#tugowar').hide();
        $('#gameMessage').show();
        $('#gameMessage').text("You win!");
        $('.instruction').text("(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧")
        $('body').css({background: '#435af4'})
      };
    };
  });

});
