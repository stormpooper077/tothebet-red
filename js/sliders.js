const mainSliderSwiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const eventsSwiper = new Swiper(".swiper-container2", {
  slidesPerView: "auto",
  spaceBetween: 10,
  centeredSlides: true,
  loop: false,
  navigation: {
    nextEl: ".events__slider-arrow--right",
    prevEl: ".events__slider-arrow--left",
  },
  on: {
    init: function () {
      this.slideTo(1);
    },
  },
  breakpoints: {
    730: {
      slidesPerView: "auto",
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
    731: {
      slidesPerView: "auto",
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
    1600: {
      slidesPerView: "auto",
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
  },
});

const tournamentsSwiper = new Swiper(".swiper-container3", {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  loop: false,
  navigation: {
    nextEl: ".tournaments__slider-arrow--right",
    prevEl: ".tournaments__slider-arrow--left",
  },
});

const providersSwiper = new Swiper(".swiper-container4", {
  navigation: {
    nextEl: ".providers__slider-arrow--right",
    prevEl: ".providers__slider-arrow--left",
  },
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 10,
  centeredSlides: false,
  loop: false,
  breakpoints: {
    630: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 5,
      slidesPerGroup: 5,
      spaceBetween: 10,
    },
    1600: {
      slidesPerView: 6,
      slidesPerGroup: 6,
      spaceBetween: 10,
    },
  },
});

const discountSwiper = new Swiper(".swiper-container5", {
  navigation: {
    nextEl: ".discount__slider-arrow--right",
    prevEl: ".discount__slider-arrow--left",
  },
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 10,
  centeredSlides: false,
  loop: false,
  breakpoints: {
    630: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
    631: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 10,
    },
    931: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 10,
    },
    1281: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 10,
    },
  },
});

const allSlotsSections = document.querySelectorAll(".slots");

allSlotsSections.forEach((section, index) => {
  const swiperContainer = section.querySelector(".swiper-container6");

  const leftArrow = section.querySelector(".slots__slider-arrow--left");
  const rightArrow = section.querySelector(".slots__slider-arrow--right");

  if (leftArrow && rightArrow) {
    leftArrow.id = `slider-left-${index}`;
    rightArrow.id = `slider-right-${index}`;
  }

  const slotsSwiper = new Swiper(swiperContainer, {
    navigation: {
      nextEl: `#slider-right-${index}`,
      prevEl: `#slider-left-${index}`,
    },
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 10,
    grid: {
      rows: 2,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 10,
      },
      769: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 10,
      },
      1201: {
        slidesPerView: 6,
        slidesPerGroup: 6,
        spaceBetween: 10,
      },
    },
  });

  const swiper = new Swiper(".swiper-container7", {
    slidesPerView: 6,
    spaceBetween: 10,
    breakpoints: {
      0: {
        slidesPerView: 3,
      },
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 6,
      },
    },
  });
});
