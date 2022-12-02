import Swiper, { Navigation, Pagination, EffectCoverflow } from 'swiper';

const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination, EffectCoverflow],
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  autoHeight: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0,
    slideShadows: false,
    scale: 0.6,
  },
});
