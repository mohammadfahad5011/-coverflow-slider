// const slideContainer = document.querySelector(".container");
// const slide = document.querySelector(".img-continer");
// const nextBtn = document.querySelector(".next");
// const prevBtn = document.querySelector(".privous");

// let slides = document.querySelectorAll(".img-box");

// let curSlide = 0;

// // slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

// prevBtn.addEventListener("click", function () {
//   curSlide++;

//   // (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)

//   slides.forEach((s, i) => (s.style.transform = `translateX(${-100 * i}%)`));
// });

/* <!-- Initialize Swiper --> */
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 45,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  // pagination: {
  //   el: ".swiper-pagination",
  // },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
