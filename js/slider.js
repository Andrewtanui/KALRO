$(window).on('load', function() {
  $('.unique-flexslider').flexslider({
      animation: "slide",
      start: function(slider) {
          $('body').removeClass('loading');
      }
  });
});
