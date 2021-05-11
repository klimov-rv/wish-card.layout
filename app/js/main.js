//	AOS
AOS.init({
  easing: 'ease-in-out-sine',
  once: true
});

//	Mmenu 1
var menu1 = new MmenuLight(
  document.querySelector('#mmenu1'),
  'all'
);

var navigator1 = menu1.navigation({
});

var drawer1 = menu1.offcanvas({
});

//	Mmenu 2
var menu2 = new MmenuLight(
  document.querySelector('#mmenu2'),
  'all'
);

var navigator2 = menu2.navigation({
});

var drawer2 = menu2.offcanvas({
});


$(window).load(function () {

  // mobile основное меню
  document.querySelector('a[href="#mmenu1"]')
    .addEventListener('click', evnt => {
      evnt.preventDefault();
      drawer1.open();
    });
  document.querySelector('a[href="#mmenu1-close"]')
    .addEventListener('click', evnt => {
      evnt.preventDefault();
      drawer1.close();
    });

  //mobile меню каталога
  document.querySelector('a[href="#mmenu2"]')
    .addEventListener('click', evnt => {
      evnt.preventDefault();
      drawer2.open();
    });

  document.querySelector('a[href="#mmenu2-close"]')
    .addEventListener('click', evnt => {
      evnt.preventDefault();
      drawer2.close();
    });

  // всплывахи
  $('[data-fancybox]').fancybox({
    youtube: {
      controls: 0,
      showinfo: 0
    },
    vimeo: {
      color: 'f00'
    }
  });

  //	шапка
  const headerGap = document.querySelector(".site-header").offsetHeight - 51;
  const FollowScrollMenu = menuContainer => {
    let lastScrollPosition = window.pageYOffset;
    window.addEventListener('scroll', () => {
      const currentScrollPosition = window.pageYOffset;
      const direction = Math.sign(currentScrollPosition - lastScrollPosition);
      lastScrollPosition = currentScrollPosition;
      const shouldBeCollapsed = direction > 0 && currentScrollPosition > headerGap;
      const shouldBeHidden = currentScrollPosition > headerGap;
      menuContainer.classList.toggle('site-header_collapsed', shouldBeCollapsed);
      menuContainer.classList.toggle('site-header_scrolled', shouldBeHidden);
    })
  }
  FollowScrollMenu(document.querySelector('header'));
});

// табы
if (document.getElementById("defaultOpen")) {
  document.getElementById("defaultOpen").click();
}
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  evt.preventDefault();
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// галерея на странице товаров
function galleryInit(galleryThumbs, galleryMain) {
  var $galleryThumbs = $(galleryThumbs);
  var $galleryMain = $(galleryMain);

  var galleryThumbsSlider = new Swiper(galleryThumbs, {
    loopedSlides: $(galleryThumbs + " .swiper-wrapper .swiper-slide").length,
    spaceBetween: 20,
    navigation: {
      nextEl: galleryThumbs + " .swiper-button-next",
      prevEl: galleryThumbs + " .swiper-button-prev"
    },

    pagination: {
      el: galleryThumbs + " .swiper-pagination",
      clickable: true,
    },
    speed: 200,
    loop: false,
    slidesPerView: 4,
    touchRatio: 0.2,
    slideToClickedSlide: true
  });

  var galleryTop = new Swiper(galleryMain, {
    loopedSlides: $(galleryMain + " .swiper-wrapper .swiper-slide").length,
    navigation: {
      nextEl: galleryMain + " .swiper-button-next",
      prevEl: galleryMain + " .swiper-button-prev"
    },
    speed: 200,
    loop: false,
    spaceBetween: 0,

    breakpoints: {
      0: {
        pagination: {
          el: galleryMain + "  .swiper-pagination",
          clickable: true,
        },
      },
      420: {
        pagination: {
          el: galleryMain + "  .swiper-pagination",
          clickable: true,
        },
      },
      768: {
        pagination: {
          el: galleryMain + "  .swiper-pagination",
          clickable: true,
        },
      },
      1024: {
        slidesPerView: 1,
      }
    }
  });

  galleryTop.on("transitionEnd", function (e) {
    $(".js-gallery-trigger").removeClass("is-active");
    $(".js-gallery-trigger")
      .eq(galleryTop.activeIndex)
      .addClass("is-active");
    if ($galleryThumbs[0] && $galleryThumbs[0].swiper)
      $galleryThumbs[0].swiper.slideTo(galleryTop.activeIndex);
  });

  galleryTop.params.control = galleryThumbsSlider;
  galleryThumbsSlider.params.control = galleryTop;

  $galleryThumbs.find(".js-gallery-trigger:first").addClass("is-active");
  $(document).on("click", galleryThumbs + " .js-gallery-trigger", function (
    event
  ) {
    event.preventDefault();
    var index = $(this).index();
    if ($galleryMain[0] && $galleryMain[0].swiper) {
      $galleryMain[0].swiper.slideTo(index);
    }
  });
}
// тогглит раскрывающий тег
function toggleDropDown(clickedEl, togglingClass) {
  var dropDownElements = document.getElementsByClassName(clickedEl);
  var i;
  for (i = 0; i < dropDownElements.length; i++) {
    dropDownElements[i].addEventListener('click', function (e) {
      e.stopPropagation();
      e.preventDefault();
      this.classList.toggle(togglingClass);
    });
  }
}

// на мобилке  
function openSearch(evt) {
  var i, searchInputs, searchOpeners;

  searchInputs = document.getElementsByClassName("mtop-links__inpt-group");
  for (i = 0; i < searchInputs.length; i++) {
    searchInputs[i].classList.add("reveal");
  }

  searchOpeners = document.getElementsByClassName("inpt-group__icon-search");
  for (i = 0; i < searchOpeners.length; i++) {
    searchOpeners[i].classList.add("hide");
  }
}
function closeSearch(evt) {
  var i, searchInputs, searchOpeners;

  searchInputs = document.getElementsByClassName("mtop-links__inpt-group");
  for (i = 0; i < searchInputs.length; i++) {
    searchInputs[i].classList.remove("reveal");
  }

  searchOpeners = document.getElementsByClassName("inpt-group__icon-search");
  for (i = 0; i < searchOpeners.length; i++) {
    searchOpeners[i].classList.remove("hide");
  }
}

// для промо-слайдера

function pausePlay() {
  this.classList.toggle("pause");
  if (this.classList.contains("pause")) {
    promoSlider.autoplay.stop();
  } else {
    promoSlider.autoplay.start();
  }
}

// аккордеон в футере на мобилке

if ($(window).width() < 768) {
  toggleDropDown("fcol__title", "open-list");
}

// кнопка открытия фильтра на мобилке
$('.filters-sm-button').on('click', function (e) {
  $('.collection-filter').toggleClass('opened');
});
$('.sort-sm-button').on('click', function (e) {
  $('.collection-sort').toggleClass('opened');
});

// из portfolio.js 

if (document.getElementById('portfolioSlider') !== null) {
  var portfolioSlider = new Swiper('#portfolioSlider', {
    loop: true,
    parallax: true,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: '.slider-controls-holder .swiper-button-next',
      prevEl: '.slider-controls-holder .swiper-button-prev',
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        pagination: {
          el: '.slider-controls-holder .swiper-pagination',
          clickable: true,
        },
        navigation: false
      },
      420: {
        slidesPerView: 1,
        pagination: {
          el: '.slider-controls-holder .swiper-pagination',
          clickable: true,
        },
        navigation: false
      },
      1024: {
        slidesPerView: 1,
      }
    }
  });
}

// из about.js 

toggleDropDown("js-accordion", "is-opened");


if (document.getElementById('about-carousel-0') !== null) {
  var aboutSlider = new Swiper('#about-carousel-0', {
    loop: true,
    parallax: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '#about-carousel-0 .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '#about-carousel-0 .swiper-button-next',
      prevEl: '#about-carousel-0 .swiper-button-prev',
    },

  });
}

if (document.getElementById('about-carousel-1') !== null) {
  var aboutSlider1 = new Swiper('#about-carousel-1', {
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '#about-carousel-1 .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '#about-carousel-1 .swiper-button-next',
      prevEl: '#about-carousel-1 .swiper-button-prev',
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
}

// из complex.js 

if (document.getElementById('complex-card-carousel-2') !== null) {

  var complexSlider2 = new Swiper('#complex-card-carousel-2', {
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: '#complex-card-carousel-2 .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '#complex-card-carousel-2 .swiper-button-next',
      prevEl: '#complex-card-carousel-2 .swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      420: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 30,
      }
    }
  });
}
if (document.getElementById('carousel-1') !== null) {

  var carouselSlider1 = new Swiper('#carousel-1', {
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
}

// из products.js

toggleDropDown("subcategory", "is-sub-active");
toggleDropDown("js-filter-opener", "is-filter-open");
if ($(".js-range-slider").length) {
  $(".js-range-slider").ionRangeSlider({
    skin: "big",
    type: "double",
    force_edges: true,
    hide_min_max: true,
    hide_from_to: true,
    block: false
  });
}


// из towar.js

// синхронизация превью и мейн слайдеров галереи товара
$(window).load(function () {
  var $galleryThumbs = ".gallery-wrapper .js-gallery-thumbs";
  var $galleryMain = ".gallery-wrapper .js-product-gallery-main";
  var galleryImages = document.getElementsByClassName("js-gallery-trigger");
  var galleryMore = document.getElementsByClassName("gallery-continuation");
  galleryInit($galleryThumbs, $galleryMain);


  if (galleryImages.length > 0) {
    galleryMore[0].classList.remove("hide");
    galleryMore[0].innerHTML = ('<span>+' + (galleryImages.length - 4) + '</span>');
  }
});


if (document.getElementById('towar-carousel-0') !== null) {
  var releatedSlider0 = new Swiper('#towar-carousel-0', {
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: '#towar-carousel-0 .swiper-button-next',
      prevEl: '#towar-carousel-0 .swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      360: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
      }
    }
  });
}

// из index.js

if (document.getElementById('promoSlider') !== null) {
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
}

if (document.getElementById('index-carousel-0') !== null) {
  var carouselSlider0 = new Swiper('#index-carousel-0', {
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: '#index-carousel-0 .swiper-pagination',
    },
    navigation: {
      nextEl: '#index-carousel-0 .swiper-button-next',
      prevEl: '#index-carousel-0 .swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      360: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
      }
    }
  });
}

if (document.getElementById('index-carousel-1') !== null) {
  var carouselSlider1 = new Swiper('#index-carousel-1', {
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: '#index-carousel-1 .swiper-pagination',
    },
    navigation: {
      nextEl: '#index-carousel-1 .swiper-button-next',
      prevEl: '#index-carousel-1 .swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      360: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
      }
    }
  });
}

if (document.getElementById('index-carousel-2') !== null) {
  var brandSlider1 = new Swiper('#index-carousel-2', {
    spaceBetween: 100,
    loop: true,
    autoplay: {
      delay: 7000,
    },
    navigation: {
      nextEl: '#index-carousel-2 .swiper-button-next',
      prevEl: '#index-carousel-2 .swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 100,
      },
      481: {
        slidesPerView: 3,
        spaceBetween: 100,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 100,
      }
    }
  });
}

if (document.getElementById('index-carousel-mobile-0') !== null) {
  var mobileSlider0 = new Swiper('#index-carousel-mobile-0', {
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '#index-carousel-mobile-0 .swiper-pagination',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      420: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    }
  });
}

// scroll to Top 

if (document.getElementById('top-anchor') !== null) {
  var toTop = document.querySelector('#top-anchor');
  document.getElementById('js-scroll_top').addEventListener('click', function (e) {
    e.preventDefault();
    toTop.scrollIntoView({ behavior: 'smooth' });
  });
}