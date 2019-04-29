$(document).ready(function () {

  // HOME PAGE

  // highlight link when user scrolls to its corresponding section
  let navController = new ScrollMagic.Controller({ globalSceneOptions: { duration: "100%" } });

  new ScrollMagic.Scene({ triggerElement: "#about" })
    .setClassToggle(".nav-link-1", "active-nav-link")
    .addTo(navController)

  new ScrollMagic.Scene({ triggerElement: "#projects" })
    .setClassToggle(".nav-link-2", "active-nav-link")
    .addTo(navController)

  new ScrollMagic.Scene({ triggerElement: "#experience" })
    .setClassToggle(".nav-link-3", "active-nav-link")
    .addTo(navController)


  // SINGLE PAGE PROJECTS SLIDER
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