$(document).ready(function() {

  // Blast apart an element using the "word" delimiter
  $(".secretText").blast({
    delimiter: 'sentence'
  }).mouseover(reveal);

  function reveal() {
    $(this).animate({
      color: 'yellow',
    });
  }

});
