$(document).ready(function(){

    var isShowing = false;

    $('.button').on('click', function() {

      if (isShowing) {
        $('div').hide();
      } else {
        $('div').show();
        isShowing = true;
      }

      });

      $('.button').on('click', function(){
        $('.button').text('ok stahp');
      });

    setInterval(function() {
      $('div').each(function(){
        var randomX = Math.random() * $(window).width();
        var randomY = Math.random() * $(window).height();
        $(this).css({
          position: 'absolute',
          top: randomY,
          left: randomX
        });
      });
    }, 1000);
});
