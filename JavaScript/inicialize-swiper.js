const count = ["1", "2", "3"];
const art = ["Julius Caesar ", "Into the Abyss ", "Discobolous "];
const price = ["221", "157", "95"];
const classForPirce = ["price-caesar", "price-abyss", "price-discobolous"];
// function adaptive() {
//   const viewport_Height = Math.max(document.documentElement.clientHeight);
//   const viewport_Width = Math.max(document.documentElement.clientWidth);
//   console.log(viewport_Width);
//   if (viewport_Height <= 600 || viewport_Width <= 600) {
//     return false;
//   } else return true;
// }

// "<span class='pagination-price'>" +

//document.querySelector(".price-caesar span").textContent = " 244";

const viewport_Height = Math.max(document.documentElement.clientHeight);

const viewport_Width = Math.max(document.documentElement.clientWidth);
//;

// alert(viewport_Width);
// alert(viewport_Height);

if (viewport_Height < 600 || viewport_Width < 600) {
  var swiper = new Swiper(".main-swiper", {
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<p class="' +
          className +
          '">' +
          "<span class='pagination-art'>" +
          art[index] +
          "</span>" +
          "<span class='pagination-price'>" +
          // `<span class='pagination-price ${classForPirce[index]}'>` +
          ("<span>" + price[index] + "</span>" + " " + "ETH") +
          "</span>" +
          "</p>"
        );
      },
    },
  });
  swiper["mousewheel"]["enabled"] = false;
} else {
  var swiper = new Swiper(".main-swiper", {
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<p class="' +
          className +
          '">' +
          "#0" +
          count[index] +
          "<span class='pagination-art'>" +
          art[index] +
          "</span>" +
          "<span class='pagination-price'>" +
          // `<span class='pagination-price ${classForPirce[index]}'>` +
          ("<span>" + price[index] + "</span>" + " " + "ETH") +
          "</span>" +
          "</p>"
        );
      },
    },
  });
}
