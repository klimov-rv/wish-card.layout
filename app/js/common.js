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

  document.querySelector('a[href="#mmenu1"]')
    .addEventListener('click', evnt => {
      evnt.preventDefault();
      drawer1.open();
    });

  document.querySelector('a[href="#mmenu2"]')
    .addEventListener('click', evnt => {
      evnt.preventDefault();
      drawer2.open();
    });


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
  console.log(headerGap);
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
      nextEl: ".js-gallery-thumbs .swiper-button-next",
      prevEl: ".js-gallery-thumbs .swiper-button-prev"
    },
 
    pagination: {
      el: '.js-gallery-thumbs .swiper-pagination',
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
      nextEl: ".js-product-gallery-main .swiper-button-next",
      prevEl: ".js-product-gallery-main .swiper-button-prev"
    },
    speed: 200,
    loop: false,
    spaceBetween: 0
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