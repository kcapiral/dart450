$(document).ready(function() {

  //   window.requestAnimationFrame(update);
  // });
  // function update() {
  //   $('div').css({
  //     position: 'absolute',
  //     left: '+=1'
  //   });
  // window.requestAnimationFrame(update);

  // console.log($(window).width())
  // if ($(window).width() < 500) {
  //   $('body').css({
  //     backgroundColor: 'red'
  //   });
  // }

  // $(window).resize(function() {
  //   if ($(window).width() < 500) {
  //     $('body').css({
  //       backgroundColor: 'red'
  //     });
  //   } else if ($(window).width() < 800) {
  //     $('body').css({
  //       backgroundColor: 'green'
  //     });
  //   } else {
  //     $('body').css({
  //       backgroundColor: 'yellow'
  //     });
  //   }
  // });

  // $(window).resize(function() {
  //   if ($(window).width() < 500) {
  //     if ($(window).height() < 500) {
  //       $('body').css({
  //         backgroundColor: '#f00'
  //       });
  //     }
  //   }
  // });

  // $(window).resize(function() {
  //   if ($(window).width() < 500 && $(window).height() < 500) {
  //     $('body').css({
  //       backgroundColor: '#f00'
  //     });
  //   }
  // });

  // $(window).resize(function() {
  //   if ($(window).width() > 500 || $(window).height() > 500) {
  //     $('body').hide();
  //   } else {
  //     $('body').show();
  //   }
  // });

  // $('#input').keypress(function(event) {
  //   if (event.which == 115) {
  //     var newTopOffset = $('#input').offset().top + 10;
  //     $('#input').offset({
  //       top: newTopOffset
  //     });
  //   }
  // });

  // console.log(Math.random());
  // $('div').each(function() {
  //   var randomX = Math.random() * $(window).width();
  //   var randomY = Math.random() * $(window).height();
  //   $(this).css({
  //     position: 'absolute',
  //     top: randomY,
  //     left: randomX
  //   });
  // });

  var probability = Math.random();
  if (probability < 0.1) {
    $('body').text("You win!!!");
  } else {
    $('body').text("You lose.");
  }

});
