let FirstSwiper = null;
window.addEventListener('resize', () => {
  const repairSlider = document.querySelector('.repair-slider');
  if (window.innerWidth < 768 && repairSlider && !FirstSwiper) {
    const paginationContainerFirst = document.querySelector('.repair-slider .swiper-pagination');
    if (!paginationContainerFirst) {
      const paginationFirst = document.createElement('div');
      paginationFirst.classList.add('swiper-pagination');
      repairSlider.appendChild(paginationFirst);
    }
    FirstSwiper = new Swiper(repairSlider, {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      spaceBetween: 16,
      slidesPerView: 'auto',
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },
      },
    });
  }
  if (window.innerWidth >= 768 && FirstSwiper) {
    FirstSwiper.destroy(true, true);
    FirstSwiper = null;

    const paginationFirst = document.querySelector('.repair-slider .swiper-pagination');
    if (paginationFirst) {
      paginationFirst.remove();
    }}});
/*
let SecondSwiper = null;
window.addEventListener('resize', () => {
  const repairTechnicListSlider = document.querySelector('.repair-technic-list-slider');
  if (window.innerWidth < 768 && repairTechnicListSlider && !SecondSwiper) {
    const paginationContainerSecond = document.querySelector('.repair-technic-list-slider .technic-pagination');
    if (!paginationContainerSecond) {
      const paginationSecond = document.createElement('div');
      paginationSecond.classList.add('technic-pagination');
      repairTechnicListSlider.appendChild(paginationSecond);
    }
    SecondSwiper = new Swiper(repairTechnicListSlider, {
      pagination: {
        el: '.technic-pagination',
        clickable: true,
      },
      spaceBetween: 16,
      slidesPerView: 'auto',
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },},});}
  if (window.innerWidth >= 768 && SecondSwiper) {
    SecondSwiper.destroy(true, true);
    SecondSwiper = null;

    const paginationSecond = document.querySelector('.repair-technic-list-slider .technic-pagination');
    if (paginationSecond) {
      paginationSecond.remove();
    }
  }
});

let ThirdSwiper = null;
window.addEventListener('resize', () => {
  const repairTechnicListSlider = document.querySelector('.repair-price-list-slider');
  if (window.innerWidth < 768 && repairTechnicListSlider && !ThirdSwiper) {
    const paginationContainerSecond = document.querySelector('.repair-price-list-slider .price-pagination');
    if (!paginationContainerSecond) {
      const paginationSecond = document.createElement('div');
      paginationSecond.classList.add('price-pagination');
      repairTechnicListSlider.appendChild(paginationSecond);
    }
    ThirdSwiper = new Swiper(repairTechnicListSlider, {
      pagination: {
        el: '.price-pagination',
        clickable: true,
      },
      spaceBetween: 16,
      slidesPerView: 'auto',
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },},});}
  if (window.innerWidth >= 768 && ThirdSwiper) {
    ThirdSwiper.destroy(true, true);
    ThirdSwiper = null;

    const paginationSecond = document.querySelector('.repair-price-list-slider .price-pagination');
    if (paginationSecond) {
      paginationSecond.remove();
    }
  }
});

*/
window.addEventListener('DOMContentLoaded', () => {
  const repairSlider = document.querySelector('.repair-slider');
  if (window.innerWidth < 768 && repairSlider && !FirstSwiper) {
    const paginationContainerFirst = document.querySelector('.repair-slider .swiper-pagination');
    if (!paginationContainerFirst) {
      const paginationFirst = document.createElement('div');
      paginationFirst.classList.add('swiper-pagination');
      repairSlider.appendChild(paginationFirst);
    }
    FirstSwiper = new Swiper(repairSlider, {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      spaceBetween: 16,
      slidesPerView: 'auto',
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },
      },
    });
  }
  if (window.innerWidth >= 768 && FirstSwiper) {
    FirstSwiper.destroy(true, true);
    FirstSwiper = null;

    const paginationFirst = document.querySelector('.repair-slider .swiper-pagination');
    if (paginationFirst) {
      paginationFirst.remove();
    }}});
/*
window.addEventListener('DOMContentLoaded', () => {
  const repairTechnicListSlider = document.querySelector('.repair-technic-list-slider');
  if (window.innerWidth < 768 && repairTechnicListSlider && !SecondSwiper) {
    const paginationContainerSecond = document.querySelector('.repair-technic-list-slider .technic-pagination');
    if (!paginationContainerSecond) {
      const paginationSecond = document.createElement('div');
      paginationSecond.classList.add('technic-pagination');
      repairTechnicListSlider.appendChild(paginationSecond);
    }
    SecondSwiper = new Swiper(repairTechnicListSlider, {
      pagination: {
        el: '.technic-pagination',
        clickable: true,
      },
      spaceBetween: 16,
      slidesPerView: 'auto',
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },},});}
  if (window.innerWidth >= 768 && SecondSwiper) {
    SecondSwiper.destroy(true, true);
    SecondSwiper = null;

    const paginationSecond = document.querySelector('.repair-technic-list-slider .technic-pagination');
    if (paginationSecond) {
      paginationSecond.remove();
    }
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const repairTechnicListSlider = document.querySelector('.repair-price-list-slider');
  if (window.innerWidth < 768 && repairTechnicListSlider && !ThirdSwiper) {
    const paginationContainerSecond = document.querySelector('.repair-price-list-slider .price-pagination');
    if (!paginationContainerSecond) {
      const paginationSecond = document.createElement('div');
      paginationSecond.classList.add('price-pagination');
      repairTechnicListSlider.appendChild(paginationSecond);
    }
    ThirdSwiper = new Swiper(repairTechnicListSlider, {
      pagination: {
        el: '.price-pagination',
        clickable: true,
      },
      spaceBetween: 16,
      slidesPerView: 'auto',
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },},});}
  if (window.innerWidth >= 768 && ThirdSwiper) {
    ThirdSwiper.destroy(true, true);
    ThirdSwiper = null;

    const paginationSecond = document.querySelector('.repair-price-list-slider .price-pagination');
    if (paginationSecond) {
      paginationSecond.remove();
    }
  }
});
*/
/*Кнопка превого слайдера */
const slides = document.querySelectorAll('.repair-slider__slide');
const buttonShow = document.querySelector('.repair-list__button');
const buttonShowWrapper = document.querySelector('.repair-list__button-wrapper');
const repairList = document.querySelector('.repair-list');

buttonShow.addEventListener('click', function () {
  for (let i = 6; i < slides.length; i++) {
    slides[i].classList.toggle('repair-slide-hidden');
    slides[i].classList.toggle('repair-slide-show');
  }
  buttonShow.classList.toggle('button--active');

  if (buttonShow.classList.contains('button--active')) {
    buttonShow.textContent = 'Скрыть';
  } else {
    buttonShow.textContent = 'Показать все';
  }
  buttonShowWrapper.classList.toggle('repair-list__button-wrapper--down');

 repairList.classList.toggle('repair-list--expanded');

  buttonShowWrapper.classList.toggle('repair-list__button-wrapper--flipped');
});
/*Кнопка 2 слайдера *//*
const techSlides = document.querySelectorAll('.repair-technic-list-slide');
const techButtonShow = document.querySelector('.repair-technic-list__button');
const techButtonShowWrapper = document.querySelector('.repair-technic-list__button-wrapper');
const techRepairList = document.querySelector('.technic-list');
techButtonShow.addEventListener('click', function () {
  for (let i = 3; i < techSlides.length; i++) {
    techSlides[i].classList.toggle('technic-slide-hidden');
    techSlides[i].classList.toggle('technic-slide-show');
  }
  techButtonShow.classList.toggle('button--active');

  if (techButtonShow.classList.contains('button--active')) {
    techButtonShow.textContent = 'Скрыть';
  } else {
    techButtonShow.textContent = 'Показать все';
  }
  techButtonShowWrapper.classList.toggle('repair-technic-list__button-wrapper--down');

 techRepairList.classList.toggle('technic-list--expanded');

  techButtonShowWrapper.classList.toggle('repair-technic-list__button-wrapper--flipped');
});



*/
/*Меню */
document.addEventListener('DOMContentLoaded', function () {
  const openMenuButton = document.querySelector('.header__button-burger');
  const closeMenuButton = document.querySelector('.menu__header__button-exit-burger');
  const menu = document.querySelector('.menu');

  openMenuButton.addEventListener('click', function () {
      // Показываем меню и запускаем анимацию выезда
      menu.style.display = 'block';
      setTimeout(() => {
          menu.classList.add('menu__active');
      }, 0);
  });

  closeMenuButton.addEventListener('click', function () {
      // Убираем класс active и скрываем меню после анимации
      menu.classList.remove('menu__active');
      setTimeout(() => {
          menu.style.display = 'none';
      }, 1000); // Время должно совпадать с длительностью transition в CSS
  });
});
/*
const closeMenuButton = document.querySelector('.header__button-exit-burger');
const openMenuButton = document.querySelector('.header__button-burger');
const bodyBlur = document.querySelector('.body-blur');
openMenuButton.addEventListener('click', function () {
  bodyBlur.classList.add('menu-open');
});
closeMenuButton.addEventListener('click', function () {
  bodyBlur.classList.remove('menu-open');
});
bodyBlur.addEventListener('click', function(){
  const menu = document.querySelector('.menu');
  bodyBlur.classList.remove('menu-open');
  menu.classList.remove('menu__active');
});*/