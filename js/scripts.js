$(document).ready(function() {
  $('nav > ul').on('click', 'li', function(e) {
    e.preventDefault();
    var $this = $(this);
    var container = $('html, body');
    var origin = $this.find('a').attr('name');
    var destination = $('#' + origin);
    container.animate({
      scrollTop: $(destination).offset().top - 140
    }, 1500)
  })
});
