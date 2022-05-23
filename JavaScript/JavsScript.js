(function () {
  const viewport_Height = Math.max(document.documentElement.clientHeight);
  const viewport_Width = Math.max(document.documentElement.clientWidth);
  console.log(viewport_Height);

  if (viewport_Width <= 376 && viewport_Height <= 668) {
    console.log(1);

    const footers = document.querySelectorAll(".swiper-footer");
    const swiperBodys = document.querySelectorAll(".swiper-body");
    for (let i = 0; i < footers.length; i++) {
      swiperBodys[i].append(footers[i]);
    }
  }
})();
