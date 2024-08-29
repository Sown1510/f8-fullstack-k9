// Lấy phần tử DOM
var lens = document.querySelector(".lens");
var image = document.querySelector(".image-box img");
var imageBox = document.querySelector(".image-box");
var imageZoom = document.querySelector(".image-zoomed");
var x, y;

// Lắng nghe sự kiện
imageBox.addEventListener("mouseover", handleMouseEnter);
imageBox.addEventListener("mouseout", handleMouseOut);

// Hàm xử lý khi di chuột vào ảnh
function handleMouseEnter() {
  imageZoom.style.display = "block";
  lens.style.display = "block";
  function handleMouseMove(e) {
    if (e.clientX + lens.clientWidth / 2 + 6 >= imageBox.clientWidth) {
      x = imageBox.clientWidth - lens.clientWidth - 6;
      lens.style.left = `${x}px`;
    } else if (e.clientX - lens.clientWidth / 2 <= 0) {
      x = 0;
      lens.style.left = `${0}px`;
    } else {
      x = e.clientX - lens.clientWidth / 2;
      lens.style.left = `${x}px`;
    }
    if (e.clientY + lens.clientHeight / 2 + 6 >= imageBox.clientHeight) {
      y = imageBox.clientHeight - lens.clientHeight - 6;
      lens.style.top = `${y}px`;
    } else if (e.clientY - lens.clientHeight / 2 <= 0) {
      y = 0;
      lens.style.top = `${y}px`;
    } else {
      y = e.clientY - lens.clientHeight / 2;
      lens.style.top = `${y}px`;
    }
    handleZoomImage(e.clientX, e.clientY);
  }
  document.addEventListener("mousemove", handleMouseMove);
}

// Hàm xử lý khi di chuột ra ngoài ảnh
function handleMouseOut() {
  lens.style.display = "none";
  imageZoom.style.display = "none";
}

// Hàm xử lý zoom ảnh
function handleZoomImage(x, y) {
  let rect = image.getBoundingClientRect();
  let startX = ((x - rect.left) / image.offsetWidth) * 100;
  let startY = ((y - rect.top) / image.offsetHeight) * 100;
  imageZoom.style.backgroundPosition = `${startX}% ${startY}%`;
}
