var promoSlider = new Swiper('#promoSlider', {
  loop: true,   
  parallax: true, 
  autoplay: {
    delay: 5000,
  }, 
  navigation: {
    nextEl: '.promo__wrap .swiper-button-next',
    prevEl: '.promo__wrap .swiper-button-prev',
  },
  pagination: {
    el: '.promo__wrap .swiper-pagination',
    clickable: true,
  }
}); 

var tabSlider0 = new Swiper('#tab-0', {
  slidesPerView: 4,
  spaceBetween: 10,
  loop: false,
  pagination: {
    el: '#tab-0 .swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '#tab-0 .swiper-button-next',
    prevEl: '#tab-0 .swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: false,
    },
    420: {
      slidesPerView: 2,
      spaceBetween: 10,
      loop: false,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
      loop: false,
    }
  }
});

var tabSlider1 = new Swiper('#tab-1', {
  slidesPerView: 4,
  spaceBetween: 10,
  loop: false,
  pagination: {
    el: '#tab-1 .swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '#tab-1 .swiper-button-next',
    prevEl: '#tab-1 .swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: false,
    },
    420: {
      slidesPerView: 2,
      spaceBetween: 10,
      loop: false,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
      loop: false,
    }
  }
}); 
