// Lấy phần tử DOM
var lessonContainer = document.querySelector(".container");
var lessonListEl;
var elementTarget;
var shadowElementTarget;
var offsetY;
var offsetX;

// Hiện thị danh sách bài học
function renderLesson() {
  var lessonCount = 0;
  var moduleCount = 0;
  lessonList.forEach((content, index) => {
    var lessonEl = document.createElement("div");
    lessonEl.addEventListener("mousedown", handleDrag);
    lessonEl.id = content.id;
    lessonEl.classList = content.type;
    lessonEl.dataset.index = `${index}`;
    var isALesson = isLesson(content); //Kiểm tra type của content
    lessonEl.innerHTML = `<p>${isALesson ? "Bài" : "Module"}<span> ${
      isALesson ? ++lessonCount : ++moduleCount
    }</span>: ${content.name}</p>`;
    lessonContainer.append(lessonEl);
  });
  lessonListEl = document.querySelectorAll(".container div");
}

renderLesson();

// Hàm xử lý kéo thả
function handleDrag(e) {
  elementTarget = e.currentTarget;
  shadowElementTarget = document.createElement("div");
  shadowElementTarget.classList = `${elementTarget.classList} shadow`;
  shadowElementTarget.innerHTML = `${elementTarget.innerHTML}`;
  shadowElementTarget.style.width = `${elementTarget.clientWidth}px`;
  offsetY = e.clientY - elementTarget.offsetTop;
  offsetX = e.clientX - elementTarget.offsetLeft;
  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", handleMouseUp);
}

// Hàm xử lý kéo
var lastId;

function handleMouseMove(e) {
  var id = elementTarget.id;
  elementTargetIndex = lessonList.findIndex((lesson) => lesson.id == id);
  shadowElementTarget.style.top = `${e.clientY - offsetY}px`;
  shadowElementTarget.style.left = `${e.clientX - offsetX}px`;
  elementTarget.style.opacity = "0.5";
  lessonContainer.append(shadowElementTarget);
  handleTouch(id);
}

// Xử lý va chạm
function handleTouch(id) {
  shadowZone = shadowElementTarget.getBoundingClientRect();
  lessonListEl.forEach((lessonElment) => {
    var lessonZone = lessonElment.getBoundingClientRect();
    if (
      shadowZone.top >= lessonZone.top &&
      shadowZone.top <= lessonZone.top + lessonZone.height &&
      shadowZone.right <= lessonZone.right
    ) {
      if (lessonElment.id !== lastId && lessonElment.id !== id) {
        lastId = lessonElment.id;
        handleChangeLessonArea(id);
      }
    }
  });
}

// Xử lý thay đổi vị trí
function handleChangeLessonArea(id) {
  var cloneLessonTarget;
  var cloneLessonMove;
  lessonListEl.forEach((lessonEl) => {
    if (lessonEl.id == lastId) {
      cloneLessonTarget = lessonEl.cloneNode(true);
      lessonEl.classList.add("target");
    } else {
      lessonEl.classList.remove("target");
    }
    if (lessonEl.id == id) {
      cloneLessonMove = lessonEl.cloneNode(true);
    }
  });
  console.log(cloneLessonMove, cloneLessonTarget);
  var lessonTargetEl = document.querySelector(".target");
  var lessonMoveEl = document.getElementById(`${id}`);
  lessonTargetEl.replaceWith(cloneLessonMove);
  lessonMoveEl.replaceWith(cloneLessonTarget);
  lessonListEl = document.querySelectorAll(".container div:not(.shadow)");
}

// Hàm xử lý hành động nhả chuột ra khỏi chủ đề
function handleMouseUp() {
  elementTarget.style.opacity = "1";
  shadowElementTarget.remove();
  document.removeEventListener("mousemove", handleMouseMove);
  lessonListEl = document.querySelectorAll(".container div:not(.shadow)");
}

// Hàm kiểm tra type có phải lesson không
function isLesson(content) {
  return content.type === "lesson";
}
