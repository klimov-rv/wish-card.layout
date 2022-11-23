$(window).load(function() {

    //	AOS
    AOS.init({
        once: true,
        duration: 900,
        easing: 'ease-out-cubic',
        anchorPlacement: 'top-center',
    });

    //  всплывахи
    $('[data-fancybox]').fancybox({
        transitionEffect: "fade",
        touch: false,
    });

    $(".menu-btn").on("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(".menu-btn").toggleClass("active");
    });
    $('#buy-cards').fancybox({
        transitionEffect: "slide",
        beforeShow: function() {
            $("#page").addClass("hide-header");
            $(".fancybox-container").addClass("buy-container");
        },
        beforeClose: function() {
            $("#page").removeClass("hide-header");
        },
        touch: false,
    });

    $("#change-level").fancybox({
        beforeShow: function() {
            $("#page").addClass("blur-overlay");
            $(".fancybox-container").addClass("change-level-container");
        },
        beforeClose: function() {
            $("#page").removeClass("blur-overlay");
        },
        touch: false,
    });

    //	шапка

    if (document.querySelector("header")) {
        const headerGap = document.querySelector("header").offsetHeight - 51;
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
    }

    // кастомный скролл по всем ссылкам с якорями
    var els = document.querySelectorAll("a[href^='#']");

    function delAllActiveClass(els) {
        for (var i = 0, l = els.length; i < l; i++) {
            els[i].classList.remove("active");
        }
    }
    for (var i = 0, l = els.length; i < l; i++) {
        var elsHref = els[i].getAttribute("href");
        if (elsHref.slice(1) != "") {
            delAllActiveClass(els);
            els[i].addEventListener('click', smoothScroll, false);
            els[i].elToScroll = document.querySelector(elsHref);
            els[i].seNumber = elsHref.slice(3);

            function smoothScroll(e) {
                e.preventDefault();
                e.stopPropagation();
                delAllActiveClass(els);
                e.currentTarget.elToScroll.scrollIntoView({ behavior: 'smooth' });
                var activeEls = document.querySelectorAll("a[href='#se" + e.currentTarget.seNumber + "']");
                for (var j = 0, l = activeEls.length; j < l; j++) {
                    activeEls[j].classList.add("active");
                }
            }
        }
    }


    // !!! кастомный скролл на первом экране

    // window.addEventListener('scroll', () => {
    //     const currentScrollPosition = window.pageYOffset;
    //     const direction = Math.sign(currentScrollPosition - lastScrollPosition);
    //     lastScrollPosition = currentScrollPosition;
    //     const shouldBeCollapsed = direction > 0 && currentScrollPosition > headerGap;
    //     const shouldBeHidden = currentScrollPosition > headerGap;
    //     menuContainer.classList.toggle('site-header_collapsed', shouldBeCollapsed);
    //     menuContainer.classList.toggle('site-header_scrolled', shouldBeHidden);
    // })


    var swiperComments = new Swiper('.comments-slider', {
        effect: "coverflow",
        speed: 800,
        allowTouchMove: false,
        loop: true,
        loopAdditionalSlides: 2,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 700,
            modifier: .3,
            slideShadows: true
        },

        breakpoints: {
            0: {
                allowTouchMove: true,
                effect: 'slide',
                spaceBetween: 10,
                pagination: {
                    el: '.comments-slider .swiper-pagination',
                    type: 'bullets',
                },
            },
            640: {
                allowTouchMove: true,
                effect: 'slide',
                spaceBetween: 30,
                pagination: {
                    el: '.comments-slider .swiper-pagination',
                    type: 'bullets',
                    clickable: true,
                },
            },
            768: {
                spaceBetween: 60,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },
        },

    });

    var swiperPrices = new Swiper('.prices__list_mobile', {
        effect: "coverflow",
        speed: 800,
        loop: false,
        coverflowEffect: {
            rotate: 0,
            stretch: 100,
            depth: 150,
            modifier: 3,
            slideShadows: false,
        },
        pagination: {
            el: '.prices__list_mobile .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            640: {
                effect: "coverflow",
                grabCursor: true,
                centeredSlides: true,
                spaceBetween: 0,
            },
        },
    });

});
// тогглит открытие доски
function toggleDeskOpen(elToOpenID, togglingClass) {
    document.getElementById(elToOpenID).classList.add(togglingClass);
}

if (document.querySelector("#open-desk") !== null) {
    toDesk = document.querySelector("#open-desk");
    document.getElementById("to-desk").addEventListener("click", (function(e) {
        e.preventDefault(), toDesk.scrollIntoView({ behavior: "smooth" })
    }));
}

$(".centre-holder").on("mouseenter", function() {
    $(".centre-holder").addClass("hide-hover");
});

$(".inner label").on("click", function() {
    $(".centre-holder").addClass("hide-click");
    $("body").addClass("on-overlay");
});

$(".centre-holder").on("mouseleave", function() {
    $(".centre-holder").removeClass("hide-hover");
});

$("#cu-overlay").on("click", function() {
    $("body").removeClass("on-overlay");
});

$(".desk__item-list").on("mouseenter", function() {
    $(".point-to-card").addClass("show-once");
});


// const elMask = document.getElementById('mask')
// const elMaskCircle = elMask.getElementsByTagName('circle')[0]
// const elPetal = document.getElementById('petal')
// const elValueText = document.getElementById('petalText')
// const maxVal = 10
// const maxR = 410

// document.addEventListener('DOMContentLoaded', () => {
//     let curR = 0
//     elPetal.addEventListener('mousemove', {
//         handleEvent: (event) => {
//             const h = event.target.getBBox().height
//             const pos = event.layerY
//             const val = maxVal - Math.floor(pos / h * 100 / 10)

//             const radius = maxR / maxVal * val
//             anim(
//                 (v) => {
//                     curR = v
//                     elMaskCircle.setAttribute('r', curR)
//                 },
//                 radius,
//                 curR,
//                 0,
//             )

//             elValueText.innerHTML = val
//         }
//     })
// })

// function anim(func, value, oldValue, duration = 200) {
//     const delay = 10
//     const countSteps = duration / delay
//     const diff = Math.abs(oldValue - value)
//     const valItem = diff / countSteps
//     let curIter = 0
//     let val = 0

//     const action = function() {
//         curIter++
//         if (oldValue < value) val = oldValue + (valItem * curIter)
//         else val = oldValue - (valItem * curIter)

//         setTimeout(() => {
//             func(val)
//             if (curIter < countSteps) action()
//         }, delay)
//     }
//     action()
// }