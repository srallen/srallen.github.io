$(document).ready(function() {


  // Scroll To
  $('nav > ul').on('click', 'li', function(e) {
    e.preventDefault();
    var $this = $(this);
    var list = $('nav > ul');
    var container = $('html, body');
    var origin = $this.find('a').attr('name');
    var destination = $('#' + origin);

    list.children().removeClass('active');
    $this.addClass('active');
    container.animate({
      scrollTop: $(destination).offset().top - 125
    }, 1500)
  });

  // Back to Top
  $('.top').on('click', function(e) {
    e.preventDefault();
    var container = $('html, body');
    var list = $('nav > ul');

    container.animate({
      scrollTop: 0
    }, 1500)
    list.children().removeClass('active');
    list.children().first().addClass('active');
  });

  // Add active class while scrolling for nav
  var secPosition = [];
  $('section').each(function() {
    secPosition.push($(this).offset().top);
  });

  $(window).on('scroll', function() {
    var position = $(window).scrollTop(), index;

    for (var i=0; i<secPosition.length; i++) {
      if (position <= secPosition[i]) {
        index = i;
        break;
      }
    }

    $('nav ul li').removeClass('active');
    $('nav ul li:eq('+index+')').addClass('active');
  });

  // Figure Captions
  $('figure').hover(function() {
    var $this = $(this);
    $this.find('figcaption').slideToggle('fast');
  });

});
