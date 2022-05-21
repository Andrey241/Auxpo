const count = ["1", "2", "3"];
const art = ["Julius Caesar", "Into the Abyss ", "Discobolous"];
const price = ["221", "157", "95"];

var swiper = new Swiper(".main-swiper", {
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
        ("<span>" + price[index] + "</span>" + " " + "ETH") +
        "</span>" +
        "</p>"
      );
    },
  },
});
