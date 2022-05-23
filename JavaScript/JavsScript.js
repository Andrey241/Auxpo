function start() {
  const viewport_Height = Math.max(document.documentElement.clientHeight);
  const viewport_Width = Math.max(document.documentElement.clientWidth);
  console.log(viewport_Height);

  if (viewport_Width <= 416 && viewport_Height <= 920) {
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
    console.log(slideWidth);
  }
}

window.addEventListener("resize", start);
