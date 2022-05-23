function start() {
  const viewport_Height = Math.max(document.documentElement.clientHeight);
  const viewport_Width = Math.max(document.documentElement.clientWidth);
  if (viewport_Width <= 762) {
    document.getElementById("Button").removeAttribute("disabled");
    console.log(document.getElementById("Button"));
  }
  if (viewport_Width <= 542 && viewport_Height <= 920) {
    console.log(1);

    const footers = document.querySelectorAll(".swiper-footer");
    const swiperBodys = document.querySelectorAll(".swiper-body");
    for (let i = 0; i < footers.length; i++) {
      swiperBodys[i].append(footers[i]);
    }
    const slideWidth = document.querySelectorAll(".swiper-slide");
    slideWidth.forEach((item) => {
      item.style.width = `${viewport_Width - 45}px`;
    });
  } else if (viewport_Width <= 920 && viewport_Height <= 542) {
    const footers = document.querySelectorAll(".swiper-footer");
    const swiperBodys = document.querySelectorAll(".swiper-body");
    for (let i = 0; i < footers.length; i++) {
      swiperBodys[i].append(footers[i]);
    }
    const slideWidth = document.querySelectorAll(".swiper-slide");
    slideWidth.forEach((item) => {
      item.style.width = `${viewport_Width - 45}px`;
    });
  }
}
start();
window.addEventListener("resize", start);

const burger = document.querySelector(".content-sidebar__button");
burger.addEventListener("click", function () {
  document.querySelector("nav").classList.toggle("active");
  body.classList.toggle("lock");
});
