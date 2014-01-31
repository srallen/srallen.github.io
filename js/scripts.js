$(document).ready(function() {
  // Navigation
  $('nav > ul').on('click', 'li', function(e) {
    e.preventDefault();
    var $this = $(this);
    var list = $('nav > ul')
    var container = $('html, body');
    var origin = $this.find('a').attr('name');
    var destination = $('#' + origin);

    list.children().removeClass('active')
    $this.addClass('active')
    container.animate({
      scrollTop: $(destination).offset().top - 140
    }, 1500)
  });

  $('figure').hover(function() {
    $('figcaption').slideToggle('fast');
  });

});
