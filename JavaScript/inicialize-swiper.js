const count = ["1", "2", "3"];
const art = ["Julius Caesar", "Into the Abyss ", "Discobolous"];
const price = ["221", "157", "95"];
const classForPirce = ["price-caesar", "price-abyss", "price-discobolous"];

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
// "<span class='pagination-price'>" +

//document.querySelector(".price-caesar span").textContent = " 244";
