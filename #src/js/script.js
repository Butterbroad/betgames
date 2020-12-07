'use strict'

// const pageSlider = new Swiper('.page', {
//   wrapperClass: 'page__wrapper',
//   slideClass: 'page__screen',
//   direction: 'vertical',
//   slidesPerView: 'auto',

//   keyboard: {
//     enabled: true,
//     onlyInViewport: true,
//     pageUpDown: true
//   },
//   mousewheel: {
//     sensitivity: 1,
//   },

//   watchOverflow: true,
//   speed: 800,
//   observer: true,
//   observeParents: true,
// });

//mobile menu
const mobMenuTrigger = document.querySelectorAll('.burger');
const mobileMenu = document.querySelector('.mobile-menu');

mobMenuTrigger.forEach(trigger => {
  trigger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    document.body.classList.toggle('lock');
  });
})

const mobileMenuLinks = document.querySelectorAll('.menu__list-link_mob');
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.classList.remove('lock');
  });
});

//links for mobiles
const isMobile = () => {
  return (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  );
};

const hasRegistrationLink = isMobile()
  ? 'https://m.maxline.by/register'
  : 'https://maxline.by/user/signup';


const regLinks = document.querySelectorAll('.reg-link');
regLinks.forEach(link => {
  link.setAttribute('href', hasRegistrationLink);
});

const mobLinks = document.querySelectorAll('.mob-link');
mobLinks.forEach(link => {
  let linkHref = link.getAttribute('href');
  let linkArray = linkHref.split("https://")
  let newLink = isMobile() ? `https://m.${linkArray[1]}` : linkHref;
  link.setAttribute('href', newLink);
});

//modal
const modalTrigger = document.querySelector('.screen-one__info-btn');
const modal = document.querySelector('.modal');

function toggleModal() {
  modal.classList.toggle('active');
  document.body.classList.toggle('lock');

  const modalClose = document.querySelector('.modal-info__close');
  modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
  });
}

modalTrigger.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleModal();
});

document.addEventListener('click', e => {
  let target = e.target;
  let isModal = target == modal;
  let isTrigger = target == modalTrigger;
  let menuIsActive = modal.classList.contains('active');
  if (isModal && !isTrigger && menuIsActive) {
    toggleModal();
  }
});













@@include('table.js');
@@include('webpSupport.js');