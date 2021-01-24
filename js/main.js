$(function () {
  $('.slider').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/services-slider__button-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/services-slider__button-next.svg" alt=""></button>',
    infinity: true,
    fade: true,
    dots: true,
    appendArrows: $('.slider__control-panel'),
    appendDots: $('.slider__control-panel'),
    responsive: [
      {
          breakpoint:425,
          settings: {
              arrows: false
          }
      },
  ]
  });

  $('.clients-slider').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/clients-slider__button-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/clients-slider__button-next.svg" alt=""></button>',
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
          breakpoint:1100,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
      },
      {
        breakpoint:801,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
      },
      {
        breakpoint:551,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
      }
    ]
  });

  $('.reviews__slider').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/clients-slider__button-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/clients-slider__button-next.svg" alt=""></button>',
    dots: true,
    responsive: [
      {
        breakpoint: 551,
          settings: {
            dots: false
          }
      }
    ]
  });
  $('.btn__menu').on('click', function(){
    $('.header__menu-list').slideToggle();
  });
});



