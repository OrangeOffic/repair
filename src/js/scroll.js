$(document).ready(function() {
  var scroll = $('#scroll');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
      scroll.addClass('scroll_active');
    } else {
      scroll.removeClass('scroll_active');
    }
  });

  scroll.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, 500);
  })

})