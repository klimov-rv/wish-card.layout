
// синхронизация превью и мейн слайдеров галереи товара
$(window).load(function () {
    var $galleryThumbs = ".gallery-wrapper .js-gallery-thumbs";
    var $galleryMain = ".gallery-wrapper .js-product-gallery-main";
    var galleryImages = document.getElementsByClassName("js-gallery-trigger");
    var galleryMore = document.getElementsByClassName("gallery-continuation"); 
    galleryInit($galleryThumbs, $galleryMain);
    

    if (galleryImages.length > 0) { 
        galleryMore[0].classList.remove("hide");
        galleryMore[0].innerHTML = ('<span>+' + (galleryImages.length - 4) +  '</span>');
    }
});


var releatedSlider0 = new Swiper('#carousel-0', {
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
            slidesPerView: 4,
            spaceBetween: 10,
        }
    }
});