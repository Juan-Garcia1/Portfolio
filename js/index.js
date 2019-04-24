$(document).ready(function () {

  $('.slider-single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 6000,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-single',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true
  });

})