// Lấy phần tử DOM
var timerCountDown = document.querySelector(".timer span");
var getLinkBtn = document.querySelector(".action button");
var duration = 30;
var startTime;
var remaining;
var isPageActive = true;

// Các sự kiện
document.addEventListener("visibilitychange", handleVisibiility);
window.addEventListener("blur", handleBlur);
window.addEventListener("focus", handleFocus);

// Hàm đếm ngược
function startCountDown() {
  startTime = Date.now();
  updateCountDown();
}

// Hàm cập nhật đếm ngược
function updateCountDown() {
  if (!isPageActive) return;
  var elapsed = (Date.now() - startTime) / 1000;
  remaining = duration - Math.floor(elapsed);
  timerCountDown.textContent = remaining;
  if (remaining > 0) {
    requestAnimationFrame(updateCountDown);
  } else {
    timerCountDown.textContent = "0";
    getLinkBtn.disabled = false;
    getLinkBtn.addEventListener("click", function () {
      window.location.href = "https://fullstack.edu.vn/";
    });
  }
}

startCountDown();

// Hàm xử lý người dùng chuyển tab hoặc ẩn trang
function handleVisibiility() {
  if (document.hidden) {
    handleBlur();
  } else {
    handleFocus();
  }
}

function handleBlur() {
  isPageActive = false;
  localStorage.setItem("remainingTime", remaining);
}

function handleFocus() {
  isPageActive = true;
  duration = parseFloat(localStorage.getItem("remainingTime")) || duration;
  localStorage.removeItem("remainingTime");
  startCountDown();
}
