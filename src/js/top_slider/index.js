import owlCarousel from 'owl.carousel';
$(function() {
    $('.slider-carousel').owlCarousel({
      autoplay:true,
      autoplayTimeout:3000,
      loop:true,
      nav:true,
      dots: true,
      items:1,
      navText: ["<img src='images/icon/left-arrow.svg'>","<img src='images/icon/right-arrow.svg'>"]
    })
})