//	AOS
AOS.init({
  easing: 'ease-in-out-sine',
  once: true
});



$(window).load(function () {


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


}); 

// scroll по секциям

if (document.getElementById('top-anchor') !== null) {
  var toTop = document.querySelector('#top-anchor');
  document.getElementById('js-scroll_top').addEventListener('click', function (e) {
    e.preventDefault();
    toTop.scrollIntoView({ behavior: 'smooth' });
  });
}