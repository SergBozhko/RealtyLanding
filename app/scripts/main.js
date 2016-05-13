'use strict';

$(function() {

  new WOW().init();

  console.log('dom ready');

  // Works slider
  var $works = $('.works-slider'),
    $about = $('.about-us-slider');

  $works.slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    focusOnSelect: false,
    pauseOnHover: false,
    cssEase: 'linear'
  });
  $about.slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    focusOnSelect: false,
    pauseOnHover: false,
    cssEase: 'linear'
  });


  // Anchor funct
  var $aLink = $('.anchor-link');
  $aLink.click(function(e) {
    e.preventDefault();

    var aLinkVal = $(this).attr('href'),
      aTarget = $(aLinkVal).offset().top;
    $('body, html').animate({
      scrollTop: aTarget
    }, 700);
  });

});
