$(document).keyup(function (e) {
  if (e.keyCode === 27) { // escape key
    $('body').toggleClass('debug')
  }
});
