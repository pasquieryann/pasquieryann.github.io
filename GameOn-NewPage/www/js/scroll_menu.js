$(document).ready(function() {
  

  $(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();

    $('.page-section').each(function(i) {
      if ($(this).position().top <= scrollDistance) {
        $('#menu a.active').removeClass('active');
        $('#menu a').eq(i).addClass('active');
      }
    });
  }).scroll();