var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  speed: 600,
  parallax: true,
  grabCursor: true,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //   breakpoints: {
  //     1024: {
  //       slidesPerView: 3,
  //       spaceBetween: 20,
  //     },
  //     768: {
  //       slidesPerView: 3,
  //       spaceBetween: 30,
  //     },
  //     640: {
  //       slidesPerView: 2,
  //       spaceBetween: 40,
  //     },
  //     375: {
  //       slidesPerView: 1,
  //       spaceBetween: 50,
  //     },
  //   },
  /// Не работает искал искал но не нашел bug  ///
});

let likeLow = document.querySelectorAll(".addTo__favorite svg");
let likeAct = document.querySelectorAll(".fav-act");
let swipers = document.querySelectorAll(".swiper-slide");
likeLow.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("fav-act");
  });
});
