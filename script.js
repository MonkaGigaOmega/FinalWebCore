let FirstSwiper = null;
window.addEventListener('resize', () => {
  const repairSlider = document.querySelector('.repair-slider');
  if (window.innerWidth < 768 && repairSlider && !FirstSwiper) {
    const paginationContainerFirst = document.querySelector('.repair-slider .repair-slider__pagination');
    if (!paginationContainerFirst) {
      const paginationFirst = document.createElement('div');
      paginationFirst.classList.add('repair-slider__pagination');
      repairSlider.appendChild(paginationFirst);
    }
    FirstSwiper = new Swiper(repairSlider, {
      pagination: {
        el: '.repair-slider__pagination',
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

    const paginationFirst = document.querySelector('.repair-slider .repair-slider__pagination');
    if (paginationFirst) {
      paginationFirst.remove();
    }}});

let SecondSwiper = null;
window.addEventListener('resize', () => {
  const repairTechnicListSlider = document.querySelector('.technic-list-slider');
  if (window.innerWidth < 768 && repairTechnicListSlider && !SecondSwiper) {
    const paginationContainerSecond = document.querySelector('.technic-list-slider .technic-list-slider__pagination');
    if (!paginationContainerSecond) {
      const paginationSecond = document.createElement('div');
      paginationSecond.classList.add('technic-list-slider__pagination');
      repairTechnicListSlider.appendChild(paginationSecond);
    }
    SecondSwiper = new Swiper(repairTechnicListSlider, {
      pagination: {
        el: '.technic-list-slider__pagination',
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

    const paginationSecond = document.querySelector('.technic-list-slider .technic-list-slider__pagination');
    if (paginationSecond) {
      paginationSecond.remove();
    }
  }
});

let ThirdSwiper = null;
window.addEventListener('resize', () => {
  const repairTechnicListSlider = document.querySelector('.price-list-slider');
  if (window.innerWidth < 768 && repairTechnicListSlider && !ThirdSwiper) {
    const paginationContainerSecond = document.querySelector('.price-list-slider .price-list-slider__pagination');
    if (!paginationContainerSecond) {
      const paginationSecond = document.createElement('div');
      paginationSecond.classList.add('price-list-slider__pagination');
      repairTechnicListSlider.appendChild(paginationSecond);
    }
    ThirdSwiper = new Swiper(repairTechnicListSlider, {
      pagination: {
        el: '.price-list-slider__pagination',
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

    const paginationSecond = document.querySelector('.price-list-slider .price-list-slider__pagination');
    if (paginationSecond) {
      paginationSecond.remove();
    }
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const repairSlider = document.querySelector('.repair-slider');
  if (window.innerWidth < 768 && repairSlider && !FirstSwiper) {
    const paginationContainerFirst = document.querySelector('.repair-slider .repair-slider__pagination');
    if (!paginationContainerFirst) {
      const paginationFirst = document.createElement('div');
      paginationFirst.classList.add('repair-slider__pagination');
      repairSlider.appendChild(paginationFirst);
    }
    FirstSwiper = new Swiper(repairSlider, {
      pagination: {
        el: '.repair-slider__pagination',
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

    const paginationFirst = document.querySelector('.repair-slider .repair-slider__pagination');
    if (paginationFirst) {
      paginationFirst.remove();
    }}});

window.addEventListener('DOMContentLoaded', () => {
  const repairTechnicListSlider = document.querySelector('.technic-list-slider');
  if (window.innerWidth < 768 && repairTechnicListSlider && !SecondSwiper) {
    const paginationContainerSecond = document.querySelector('.technic-list-slider .technic-list-slider__pagination');
    if (!paginationContainerSecond) {
      const paginationSecond = document.createElement('div');
      paginationSecond.classList.add('technic-list-slider__pagination');
      repairTechnicListSlider.appendChild(paginationSecond);
    }
    SecondSwiper = new Swiper(repairTechnicListSlider, {
      pagination: {
        el: '.technic-list-slider__pagination',
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

    const paginationSecond = document.querySelector('.technic-list-slider .technic-list-slider__pagination');
    if (paginationSecond) {
      paginationSecond.remove();
    }
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const repairTechnicListSlider = document.querySelector('.price-list-slider');
  if (window.innerWidth < 768 && repairTechnicListSlider && !ThirdSwiper) {
    const paginationContainerSecond = document.querySelector('.price-list-slider .price-list-slider__pagination');
    if (!paginationContainerSecond) {
      const paginationSecond = document.createElement('div');
      paginationSecond.classList.add('price-list-slider__pagination');
      repairTechnicListSlider.appendChild(paginationSecond);
    }
    ThirdSwiper = new Swiper(repairTechnicListSlider, {
      pagination: {
        el: '.price-list-slider__pagination',
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

    const paginationSecond = document.querySelector('.price-list-slider .price-list-slider__pagination');
    if (paginationSecond) {
      paginationSecond.remove();
    }
  }
});

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
/*Кнопка 2 слайдера */
const techSlides = document.querySelectorAll('.technic-list-slider__slide');
const techButtonShow = document.querySelector('.technic-list__button');
const techButtonShowWrapper = document.querySelector('.technic-list__button-wrapper');
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
  techButtonShowWrapper.classList.toggle('technic-list__button-wrapper--down');

 techRepairList.classList.toggle('technic-list--expanded');

  techButtonShowWrapper.classList.toggle('technic-list__button-wrapper--flipped');
});

/*Меню */
document.addEventListener('DOMContentLoaded', function () {
  const openMenuButton = document.querySelector('.header__button-burger');
  const closeMenuButton = document.querySelector('.menu__header__button-exit-burger');
  const menu = document.querySelector('.menu');

  openMenuButton.addEventListener('click', function () {
      // Показываем меню и запускаем анимацию выезда
     menu.classList.add('block');
      setTimeout(() => {
          menu.classList.add('menu__active');
      }, 0);
  });

  closeMenuButton.addEventListener('click', function () {
      // Убираем класс active и скрываем меню после анимации
      menu.classList.remove('menu__active');
      setTimeout(() => {
      }, 1000); // Время должно совпадать с длительностью transition в CSS
  });
});

const closeMenuButton = document.querySelector('.menu__header__button-exit-burger');
const openMenuButton = document.querySelector('.header__button-burger');
const bodyBlur = document.querySelector('.body-blur');
const feedback = document.querySelector('.feedback-menu');
const orderCall = document.querySelector('.order-call');


openMenuButton.addEventListener('click', function () {
  bodyBlur.classList.add('menu-open');
});
closeMenuButton.addEventListener('click', function () {
  bodyBlur.classList.remove('menu-open');
});
bodyBlur.addEventListener('click', function(){
  const menu = document.querySelector('.menu');
  bodyBlur.classList.remove('menu-open');
  bodyBlur.classList.remove('menu-open-left');
  menu.classList.remove('menu__active');
  feedback.classList.remove('visible');
  orderCall.classList.remove('visible')

});
/*Меню  конец */

  /*Меню фидбек*/
const buttonMessage = document.querySelector('.menu__button-message');
const buttonMessageClose = document.querySelector('.feedback-menu__button-exit');
const headerButtonMessage = document.querySelector('.extra-message');
feedback.classList.add('flex');
buttonMessage.addEventListener('click', function () {
    setTimeout(() => {
    feedback.classList.add('visible');})
  }, 0);
  headerButtonMessage.addEventListener('click', function () {
    setTimeout(() => {
      bodyBlur.classList.add('menu-open-left');
    feedback.classList.add('visible');})
  }, 0);

buttonMessageClose.addEventListener('click', function () {
  // Убираем класс active и скрываем меню после анимации
  bodyBlur.classList.remove('menu-open-left');
  feedback.classList.remove('visible');
  setTimeout(() => {
  }, 1000); // Время должно совпадать с длительностью transition в CSS
});
  
    /*Меню фидбек конец */

/* Это меню звонка*/ 
document.addEventListener('DOMContentLoaded', function () {

  const button = document.querySelector('.menu__button-tele');
  const orderCall = document.querySelector('.order-call');
  const closeOrderButton = document.querySelector('.order-call__button-exit');
  const headerButton = document.querySelector('.extra-tele');
  orderCall.classList.add('flex');
  button.addEventListener('click', function () {
    // Показываем меню и запускаем анимацию выезда
    setTimeout(() => {
      orderCall.classList.add('visible');
    }, 0);
});
headerButton.addEventListener('click', function () {
  // Показываем меню и запускаем анимацию выезда
  setTimeout(() => {
    bodyBlur.classList.add('menu-open-left');
    orderCall.classList.add('visible');
  }, 0);
});

closeOrderButton.addEventListener('click', function () {
  // Убираем класс active и скрываем меню после анимации
  orderCall.classList.remove('visible');
  bodyBlur.classList.remove('menu-open-left');
  setTimeout(() => {
  }, 1000); // Время должно совпадать с длительностью transition в CSS
});
});
/* сверху кнопки снизу взааимодействие с блюром*/
    // Открытие элемента и активация блюра при нажатии на кнопку
    const button = document.querySelector('.menu__button-tele');
    button.addEventListener('click', function () {
      orderCall.classList.add('visible');
      bodyBlur.classList.add('menu-open');
    });
    const closeOrderButton = document.querySelector('.order-call__button-exit');
  closeOrderButton.addEventListener('click', function () {
    orderCall.classList.remove('visible');
  });
/* Это конец меню звонка*/ 

const contButton = document.querySelector('.content__button');
const parargaph = document.querySelector('.content__paragraph-more');
contButton.addEventListener('click', function(){
  parargaph.classList.toggle('none');
  parargaph.classList.toggle('block');
})