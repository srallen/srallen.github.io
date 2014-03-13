$(document).ready(function() {
  var list = $('nav > ul');
  var container = $('html, body');

  // Scroll To
  $('nav > ul').on('click', 'li', function(e) {
    e.preventDefault();
    var $this = $(this);
    var origin = $this.find('a').attr('name');
    var destination = $('#' + origin);
    var mobileNav = $('#mobile-nav').is(':visible');

    list.children().removeClass('active');
    $this.addClass('active');
    if (mobileNav) {
      container.animate({
        scrollTop: $(destination).offset().top - 165
      }, 1500)
    } else {
      container.animate({
        scrollTop: $(destination).offset().top - 125
      }, 1500)
    }
  });

  // Back to Top
  $('.top').on('click', function(e) {
    e.preventDefault();

    container.animate({
      scrollTop: 0
    }, 1500)
    list.children().removeClass('active');
    list.children().first().addClass('active');
  });

  // Add active class while scrolling for nav
  var secPosition = [];
  $('section').each(function() {
    if ($('#mobile-nav').is(':visible')) {
      var secTop = $(this).offset().top + 165;
    } else {
      var secTop = $(this).offset().top + 125;
    }
    secPosition.push(secTop);
  });

  $(window).on('scroll', function() {
    var position = $(window).scrollTop(), index;
    var mobileNav = $('#mobile-nav').is(':visible');

    for (var i=0; i<secPosition.length; i++) {
      if (position <= secPosition[i]) {
        index = i;
        break;
      }
    }

    if (mobileNav) {
      $('#mobile-nav li').removeClass('active');
      $('#mobile-nav li:eq('+index+')').addClass('active');
    } else {
      $('#desktop-nav li').removeClass('active');
      $('#desktop-nav li:eq('+index+')').addClass('active');
    }
  });

  // Figure Captions
  $('figure').hover(function() {
    var $this = $(this);
    $this.find('figcaption').slideToggle('fast');
  });

});
