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

