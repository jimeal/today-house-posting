// SWIPER
new Swiper('.main__banner .swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: true,
  pagination: {
      el: '.main__banner .swiper-pagination',
      type: "fraction",
      // NUMBER COSTUM 0-
      formatFractionCurrent: function (number) {
          return ('0' + number).slice(-2);
      },
      formatFractionTotal: function (number) {
          return ('0' + number).slice(-2);
      },
      renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' +
                '/' +
                '<span class="' + totalClass + '"></span>';
      }
  },
  navigation: {
      prevEl: '.main__banner .swiper-prev',
      nextEl: '.main__banner .swiper-next'
  }
})






