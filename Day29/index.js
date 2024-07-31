var carouselInner = document.querySelector(".carousel .carousel-inner");
var nextBtn = document.querySelector(".carousel .carousel-nav .next");
var prevBtn = document.querySelector(".carousel .carousel-nav .prev");
var carouselIndicator = document.querySelector(".carousel .carousel-indicator");
var carouselWidth = carouselInner.clientWidth;
var totalSlides = carouselInner.children.length;
var totalWidth = carouselWidth * totalSlides;
var position = 0;

// Hàm xử lý NextSlide
function handleNextSlide() {
  if (Math.abs(position) + carouselWidth >= totalWidth) {
    return;
  }
  position -= carouselWidth;
  let positionIndex = Math.abs(position / carouselWidth) + 1;
  handleSlide(positionIndex);
  carouselInner.style.translate = `${position}px`;
}
nextBtn.addEventListener("click", handleNextSlide);

// Hàm xử lý prevSlide
function handlePrevSlide() {
  if (Math.abs(position) === 0) {
    return;
  }
  position += carouselWidth;
  let positionIndex = Math.abs(position / carouselWidth) + 1;
  handleSlide(positionIndex);
  carouselInner.style.translate = `${position}px`;
}
prevBtn.addEventListener("click", handlePrevSlide);

//Tạo Dot Button bằng số lượng slide
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
  if (dotActived && !dotActived.classList.contains(`slide-${index}`)) {
    dotActived.classList.remove("active");
  }
  carouselInner.style.translate = `${position}px`;
};
handleSlide(1);

// Xử lý kéo thả
let pointStart = 0;
const handleDrag = function (e) {
  let move = e.clientX - pointStart;
  let positionDrag = position;
  positionDrag = positionDrag + move;
  carouselInner.style.translate = `${positionDrag}px`;
};

carouselInner.addEventListener("mousedown", function (e) {
  pointStart = e.clientX;
  carouselInner.addEventListener("mousemove", handleDrag);
});

document.addEventListener("mouseup", function (e) {
  let move = e.clientX - pointStart;
  if (Math.abs(move) > carouselWidth / 3 && pointStart !== 0) {
    console.log(move, carouselWidth / 3);
    pointStart = 0;
    if (move > 0) {
      if (position !== 0) {
        handlePrevSlide();
      } else {
        carouselInner.style.translate = `${position}px`;
      }
    } else {
      if (position !== -(totalWidth - carouselWidth)) {
        handleNextSlide();
      } else {
        carouselInner.style.translate = `${position}px`;
      }
    }
  } else {
    carouselInner.style.translate = `${position}px`;
  }
  carouselInner.removeEventListener("mousemove", handleDrag);
});

const images = document.querySelectorAll("img");
images.forEach((img) => {
  img.addEventListener("dragstart", (e) => {
    e.preventDefault();
  });
});
