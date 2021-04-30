var aboutSlider = new Swiper('#aboutSlider', {
    loop: true,
    parallax: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '#aboutSlider .swiper-pagination',
        clickable: true,
    }, 
    navigation: {
        nextEl: '#aboutSlider .swiper-button-next',
        prevEl: '#aboutSlider .swiper-button-prev',
    },
});

toggleDropDown("js-accordion", "is-opened");

var brandSlider1 = new Swiper('#carousel-0', { 
    spaceBetween: 10,
    loop: true, 
    navigation: {
      nextEl: '#carousel-0 .swiper-button-next',
      prevEl: '#carousel-0 .swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10, 
      },
      420: {
        slidesPerView: 3,
        spaceBetween: 10, 
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 10, 
      }
    }
  });

  var portfolioSlider1 = new Swiper('#carousel-1', { 
    spaceBetween: 30,
    loop: true, 
    pagination: {
        el: '#carousel-1 .swiper-pagination',
        clickable: true,
    }, 
    navigation: {
      nextEl: '#carousel-1 .swiper-button-next',
      prevEl: '#carousel-1 .swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10, 
      },
      420: {
        slidesPerView: 2,
        spaceBetween: 30, 
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30, 
      }
    }
  });

