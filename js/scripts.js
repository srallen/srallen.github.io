$(document).ready(function() {
  $('nav > ul').on('click', 'li', function(e) {
    e.preventDefault();
    var $this = $(this);
    var destination = $this.find('a').attr('href');
    $('html, body').animate({
      scrollTop: $(destination).offset().top
    }, 2000)
  })
});
