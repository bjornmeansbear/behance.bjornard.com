$('button.toggle').click(function() {
  $('header ul').slideToggle();
});

$(window).resize(function() {
  ww = $(window).width();

  if (ww > 768) {
    $('header ul').show();
  } else {
    $('header ul').hide();
  };

});