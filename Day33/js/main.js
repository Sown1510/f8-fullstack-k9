// Lấy phần tử DOM
var lessonContainer = document.querySelector(".container");
var lessonListEl;

// Hiện thị danh sách bài học
function renderLesson() {
  var lessonCount = 0;
  var moduleCount = 0;
  lessonList.forEach((content, index) => {
    var lessonEl = document.createElement("div");
    lessonEl.addEventListener("dragstart", handleDrag);
    lessonEl.addEventListener("dragend", handleDragEnd);
    lessonEl.id = content.id;
    lessonEl.classList = content.type;
    lessonEl.dataset.index = `${index}`;
    lessonEl.draggable = "true";
    var isALesson = isLesson(content); //Kiểm tra type của content
    lessonEl.innerHTML = `<p>${isALesson ? "Bài" : "Module"}<span> ${
      isALesson ? ++lessonCount : ++moduleCount
    }</span>: ${content.name}</p>`;
    lessonContainer.append(lessonEl);
  });
  lessonContainer.addEventListener("dragover", handleDragOver);
}

renderLesson();

// Hàm xử lý kéo thả
function handleDrag(e) {
  e.currentTarget.classList.add("dragging");
}

// Hàm xử lý kéo vào thẻ khác
function handleDragOver(e) {
  var draggingItem = lessonContainer.querySelector(".dragging");
  var siblings = [
    ...lessonContainer.querySelectorAll(".container div:not(.dragging)"),
  ];
  var nextSibling = siblings.find((sibling) => {
    return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
  });
  lessonContainer.insertBefore(draggingItem, nextSibling);
}

// Xử lý khi bỏ kéo
function handleDragEnd(e) {
  var lessonMoveLastIndex = e.currentTarget.dataset.index;
  e.currentTarget.classList.remove("dragging");
  lessonListEl = [...lessonContainer.querySelectorAll("div")];
  var lessonMoveNewIndex = lessonListEl.findIndex(
    (lessonEl) => lessonEl.dataset.index === lessonMoveLastIndex
  );
  lessonMoveData = lessonList[lessonMoveLastIndex];
  lessonList.splice(lessonMoveLastIndex, 1);
  lessonList.splice(lessonMoveNewIndex, 0, lessonMoveData);
  lessonListEl.forEach((lessonEl) => lessonEl.remove());
  renderLesson();
}

// Hàm kiểm tra type có phải lesson không
function isLesson(content) {
  return content.type === "lesson";
}
