// Lấy phần tử DOM
var lessonContainer = document.querySelector(".container");
var lessonListEl;
var elementTarget;
var shadowElementTarget;
// Hiện thị danh sách bài học
function renderLesson() {
  var lessonCount = 0;
  var moduleCount = 0;
  lessonList.forEach((content, index) => {
    var lessonEl = document.createElement("div");
    lessonEl.addEventListener("mousedown", handleDrag);
    lessonEl.id = content.id;
    lessonEl.classList = content.type;
    var isALesson = isLesson(content); //Kiểm tra type của content
    lessonEl.innerHTML = `<p>${isALesson ? "Bài" : "Module"}<span> ${
      isALesson ? ++lessonCount : ++moduleCount
    }</span>: ${content.name}</p>`;
    lessonContainer.append(lessonEl);
  });
  lessonListEl = document.querySelectorAll(".container div");
}

renderLesson();

// Hàm xử lý nhấn chuột vào 1 chủ để

// Hàm xử lý hành động kéo 1 chủ đề
function handleDrag(e) {
  elementTarget = e.currentTarget;
  elementTarget.style.opacity = "0.5";
  shadowElementTarget = document.createElement("div");
  shadowElementTarget.classList = `${elementTarget.classList} shadow`;
  shadowElementTarget.innerHTML = `${elementTarget.innerHTML}`;
  shadowElementTarget.style.width = `${elementTarget.clientWidth}px`;
  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", handleMouseUp);
}

function handleMouseMove() {
  lessonContainer.append(shadowElementTarget);
}

// Hàm xử lý hành động nhả chuột ra khỏi chủ đề
function handleMouseUp() {
  elementTarget.style.opacity = "1";
  shadowElementTarget.remove();
  document.removeEventListener("mousemove", handleMouseMove);
}

// Hàm kiểm tra type có phải lesson không
function isLesson(content) {
  if (content.type === "lesson") {
    return true;
  }
  return false;
}
