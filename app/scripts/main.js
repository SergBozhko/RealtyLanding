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

  // Items gallery slider
  var $igb = $('.item-gallery-big'),
    $ign = $('.item-gallery-nav');

  $igb.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.item-gallery-nav'
  });
  $ign.slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    asNavFor: '.item-gallery-big',
    dots: false,
    centerMode: false,
    arrows: true,
    focusOnSelect: true
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

  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  });

});
