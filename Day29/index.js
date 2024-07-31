var carouselInner = document.querySelector(".carousel .carousel-inner");
var nextBtn = document.querySelector(".carousel .carousel-nav .next");
var prevBtn = document.querySelector(".carousel .carousel-nav .prev");

var carouselWidth = carouselInner.clientWidth;
var totalSlides = carouselInner.children.length;
var totalWidth = carouselWidth * totalSlides;
var position = 0;

nextBtn.addEventListener("click", function () {
  if (Math.abs(position) + carouselWidth >= totalWidth) {
    return;
  }
  position -= carouselWidth;
  let positionIndex = Math.abs(position / carouselWidth) + 1;
  console.log(positionIndex);
  handleSlide(positionIndex);
  carouselInner.style.translate = `${position}px`;
});

prevBtn.addEventListener("click", function () {
  if (Math.abs(position) === 0) {
    return;
  }
  position += carouselWidth;
  let positionIndex = Math.abs(position / carouselWidth) + 1;
  console.log(positionIndex);

  handleSlide(positionIndex);
  carouselInner.style.translate = `${position}px`;
});

//Tạo Dot Button bằng số lượng slide
var carouselIndicator = document.querySelector(".carousel .carousel-indicator");
let data = ``;
for (let i = 1; i <= totalSlides; i++) {
  data += `<span class="dot slide-${i}" onclick='handleSlide(${i})'></span>`;
}
carouselIndicator.innerHTML = data;

var IndicatorBtns = document.querySelectorAll(".carousel-indicator .dot");
IndicatorBtns.forEach((dotBtn) => {
  dotBtn.addEventListener("click", function (e) {});
});

// Xử lý ấn Dot Button
const handleSlide = (index) => {
  position = -(carouselWidth * (index - 1));
  let dotActived = document.querySelector(".dot.active");
  let dotClick = document.querySelector(`.slide-${index}`);
  dotClick.classList.add("active");
  console.log(dotActived);
  if (dotActived && !dotActived.classList.contains(`slide-${index}`)) {
    dotActived.classList.remove("active");
  }
  carouselInner.style.translate = `${position}px`;
};
handleSlide(1);
