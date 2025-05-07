var swiper = new Swiper(".brandSlider", {
  loop: true,
  slidesPerView: 6,
  spaceBetween: 10,
  navigation: {
    nextEl: ".brand-button-next",
    prevEl: ".brand-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.5,
    },
    425: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 5,
    },
  },
});
