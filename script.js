$(document).ready(function() {
    $('.image-item').hover(function() {
      $(this).find('.description').fadeIn();
    }, function() {
      $(this).find('.description').fadeOut();
    });
  });