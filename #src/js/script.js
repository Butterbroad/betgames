const pageSlider = new Swiper('.page', {
  wrapperClass: 'page__wrapper',
  slideClass: 'page__screen',
  direction: 'vertical',
  slidesPerView: 'auto',

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true
  },
  mousewheel: {
    sensitivity: 1,
  },

  watchOverflow: true,
  speed: 800,
  observer: true,
  observeParents: true,
});



















@@include('webpSupport.js')