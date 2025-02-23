// let bg = document.getElementById("navbar");
// let serv = document.getElementById("services");

// // let c = document.getElementById("nv1");

// window.onscroll = function () {
//   if (this.scrollY >= 900) {
//     bg.style.backgroundColor = "white";
//     // c.style.color = "black";
//   } else {
//     bg.style.backgroundColor = "rgba(19, 19, 22, 0.5)";
//     // c.style.color = "white";
//   }
// };

new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 30,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
        slidesPerView: 2
    },
    768: {
        slidesPerView: 3
    },
    1024: {
        slidesPerView: 6
    },
  }
});