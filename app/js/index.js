var promoSlider = new Swiper('#promoSlider', {
  loop: true,
  parallax: true,
  autoplay: {
    delay: 7000,
  },
  pagination: {
    el: '.promo__wrap .swiper-pagination',
    clickable: true,
  }
});

 
document.getElementById("swiper-autoplay-control").addEventListener("click", pausePlay);

function pausePlay() {
  this.classList.toggle("pause");
  if (this.classList.contains("pause")) {
    promoSlider.autoplay.stop();
  } else {
    promoSlider.autoplay.start();
  } 
}

var carouselSlider0 = new Swiper('#carousel-0', { 
  spaceBetween: 10,
  loop: false,
  pagination: {
    el: '#carousel-0 .swiper-pagination', 
  },
  navigation: {
    nextEl: '#carousel-0 .swiper-button-next',
    prevEl: '#carousel-0 .swiper-button-prev',
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
      slidesPerView: 4,
      spaceBetween: 10,
      loop: false,
    }
  }
});

var carouselSlider1 = new Swiper('#carousel-1', { 
  spaceBetween: 10,
  loop: false,
  pagination: {
    el: '#carousel-1 .swiper-pagination', 
  },
  navigation: {
    nextEl: '#carousel-1 .swiper-button-next',
    prevEl: '#carousel-1 .swiper-button-prev',
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
      slidesPerView: 4,
      spaceBetween: 10,
      loop: false,
    }
  }
});



var brandSlider1 = new Swiper('#carousel-2', { 
  spaceBetween: 10,
  loop: true, 
  navigation: {
    nextEl: '#carousel-2 .swiper-button-next',
    prevEl: '#carousel-2 .swiper-button-prev',
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