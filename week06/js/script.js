$(document).ready(function() {

  // $(document).on('click',function () {
  //   var $square = $('<div></div>');
  //   var x = Math.floor(Math.random() * $(window).width());
  //   var y = Math.floor(Math.random() * $(window).height());
  //   $square.css({
  //     position: 'absolute',
  //     top: y + 'px',
  //     left: x + 'px',
  //     width: '100px',
  //     height: '100px',
  //     backgroundColor: 'red'
  //   });
  //   $('body').append($square);
  // });

  // //EXAMPLE 2: EXAMPLE 1 BUT USING FUNCTION
  // $(document).ready(setupPage);
  //
  // function setupPage() {
  //   $(document).on('click', addRedSquare);
  // }
  //
  // function addRedSquare() {
  //   var $square = $('<div></div>');
  //   var x = Math.floor(Math.random() * $(window).width());
  //   var y = Math.floor(Math.random() * $(window).height());
  //   $square.css({
  //     position: 'absolute',
  //     top: y + 'px',
  //     left: x + 'px',
  //     width: '100px',
  //     height: '100px',
  //     backgroundColor: 'red'
  //   });
  //   $('body').append($square);
  // }

  //   //EXAMPLE 3: REDUDANT CODE
  //   $(document).ready(function () {
  //   $(document).on('click',function () {
  //     var $square = $('<div></div>');
  //     var x = Math.floor(Math.random() * $(window).width());
  //     var y = Math.floor(Math.random() * $(window).height());
  //     $square.css({
  //       position: 'absolute',
  //       top: y + 'px',
  //       left: x + 'px',
  //       width: '100px',
  //       height: '100px',
  //       backgroundColor: 'red'
  //     });
  //     $('body').append($square);
  //   });
  //   $(document).on('keypress',function () {
  //     var $square = $('<div></div>');
  //     var x = Math.floor(Math.random() * $(window).width());
  //     var y = Math.floor(Math.random() * $(window).height());
  //     $square.css({
  //       position: 'absolute',
  //       top: y + 'px',
  //       left: x + 'px',
  //       width: '100px',
  //       height: '100px',
  //       backgroundColor: 'red'
  //     });
  //     $('body').append($square);
  //   });
  // });

  //EXAMPLE 4: EXAMPLE 3 BUT USING FUNCTION
  $(document).ready(function() {
    $(document).on('click', addRedSquare);
    $(document).on('keypress', addRedSquare);
  });

  function addRedSquare() {
    var $square = $('<div></div>');
    var x = Math.floor(Math.random() * $(window).width());
    var y = Math.floor(Math.random() * $(window).height());
    $square.css({
      position: 'absolute',
      top: y + 'px',
      left: x + 'px',
      width: '100px',
      height: '100px',
      backgroundColor: 'red'
    });
    $('body').append($square);
  }

});
