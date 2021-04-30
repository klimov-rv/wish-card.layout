
// 1 подсчитать элементы по классу "slider",
// 2 взять id, подставить в селектор
// 3 переместить в common.js

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