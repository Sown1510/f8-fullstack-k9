// Lấy các phần tử DOM
const addTaskBtn = document.querySelector(".add-todo .add-todo-btn");
const addTaskBoxEl = document.querySelector(".overlay");
const cancelAddTaskBtn = addTaskBoxEl.querySelector(".add-todo-action .cancel");
const addTaskInput = addTaskBoxEl.querySelector(".todo-input input");
const todoListsEl = document.querySelector(".todo-lists-wrapper .todo-lists");
const completedTodoListEl = document.querySelector(
  ".completed-todos-wrapper .completed-todos"
);
const countTaskEl = document.querySelector(".show-completed-todos-btn span");
const saveDataBtn = addTaskBoxEl.querySelector(".add-todo-action .save");
const showCompletedTodosBtn = document.querySelector(
  ".show-completed-todos-btn"
);
let editTaskBtn = document.querySelectorAll(
  ".todo-lists-wrapper .todo-lists .task .task-action .edit"
);
let deleteTaskBtn = document.querySelectorAll(
  ".todo-lists .task .task-action .delete"
);
let checkTaskBtn = document.querySelectorAll(
  ".todo-lists .task .task-action .check"
);
let editDoneTaskBtn = document.querySelectorAll(
  ".completed-todos-wrapper .completed-todos .task .task-action .edit"
);
let deleteDoneTaskBtn = document.querySelectorAll(
  ".completed-todos-wrapper .completed-todos .task .task-action .delete"
);
let checkDoneTaskBtn = document.querySelectorAll(
  ".completed-todos-wrapper .completed-todos .task .task-action .check"
);
let doneTaskQuantity;

// Lắng nghe sự kiện
addTaskBtn.addEventListener("click", handleAddTask);
cancelAddTaskBtn.addEventListener("click", handleCancelAddTask);
saveDataBtn.addEventListener("click", handleSaveData);
showCompletedTodosBtn.addEventListener("click", handleShowCompletedTask);
// CÁC HÀM XỬ LÝ

// Hàm render dữ liệu
(async function renderData() {
  const getTaskResponse = await fetch("http://171.237.239.230:6868/tasks");
  const getDoneTaskResponse = await fetch("http://171.237.239.230:6868/done");
  const tasks = await getTaskResponse.json();
  const done = await getDoneTaskResponse.json();
  doneTaskQuantity = done.length;
  tasks.reverse().forEach((task) => {
    const newTask = document.createElement("li");
    newTask.dataset.id = task.id;
    newTask.classList.add("task");
    newTask.innerHTML = `
            <p>${task.value}</p>
            <div class="task-action">
                <button class="delete">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
                <button class="edit">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="check">
                    <i class="fa-solid fa-check-to-slot"></i>
                </button>
            </div>
    `;
    todoListsEl.append(newTask);
  });
  done.reverse().forEach((task) => {
    const doneTask = document.createElement("li");
    doneTask.dataset.id = task.id;
    doneTask.classList.add("task");
    doneTask.classList.add("done-task");
    doneTask.innerHTML = `
            <p>${task.value}</p>
            <div class="task-action">
                <button class="delete">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
                <button class="edit">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="check done">
                    <i class="fa-solid fa-check-to-slot"></i>
                </button>
            </div>
    `;
    completedTodoListEl.append(doneTask);
  });
  countTaskEl.innerText = doneTaskQuantity;
  editTaskBtn = document.querySelectorAll(
    ".todo-lists-wrapper .todo-lists .task .task-action .edit"
  );
  deleteTaskBtn = document.querySelectorAll(
    ".todo-lists .task .task-action .delete"
  );
  checkTaskBtn = document.querySelectorAll(
    ".todo-lists .task .task-action .check"
  );
  editDoneTaskBtn = document.querySelectorAll(
    ".completed-todos-wrapper .completed-todos .task .task-action .edit"
  );
  deleteDoneTaskBtn = document.querySelectorAll(
    ".completed-todos-wrapper .completed-todos .task .task-action .delete"
  );
  checkDoneTaskBtn = document.querySelectorAll(
    ".completed-todos-wrapper .completed-todos .task .task-action .check"
  );
  editTaskBtn.forEach((editBtn) =>
    editBtn.addEventListener("click", handleEditTask)
  );
  deleteTaskBtn.forEach((deleteBtn) =>
    deleteBtn.addEventListener("click", handleDeleteTask)
  );
  checkTaskBtn.forEach((checkBtn) =>
    checkBtn.addEventListener("click", handleCheckTask)
  );
  editDoneTaskBtn.forEach((editBtn) =>
    editBtn.addEventListener("click", handleEditDoneTask)
  );
  deleteDoneTaskBtn.forEach((deleteBtn) =>
    deleteBtn.addEventListener("click", handleDeleteTask)
  );
  checkDoneTaskBtn.forEach((checkBtn) =>
    checkBtn.addEventListener("click", handleCheckTask)
  );
})();

// Hàm xử lý dữ liệu với db
async function commitData(url, options) {
  const response = await fetch(url, options);
}

// Hàm thêm task vào todo
function handleAddTask(e) {
  addTaskBoxEl.classList.add("active");
  addTaskInput.focus();
}

// Hàm huỷ thêm task vào todo
function handleCancelAddTask() {
  addTaskBoxEl.classList.remove("active");
  addTaskInput.value = "";
}

// Hàm xử lý chỉnh sửa task
function handleEditTask(e) {
  const btnTarget = e.currentTarget;
  const taskTarget = btnTarget.parentElement.parentElement;
  let value = taskTarget.querySelector("p").innerText;
  let idTask = taskTarget.dataset.id;
  if (idTask) addTaskInput.dataset.id = idTask;
  addTaskBoxEl.classList.add("active");
  addTaskInput.value = value;
  addTaskInput.focus();
}

function handleEditDoneTask(e) {
  const btnTarget = e.currentTarget;
  const taskTarget = btnTarget.parentElement.parentElement;
  let value = taskTarget.querySelector("p").innerText;
  let idTask = taskTarget.dataset.id;
  if (idTask) addTaskInput.dataset.id = idTask;
  addTaskBoxEl.classList.add("active");
  addTaskInput.classList.add("done-task");
  addTaskInput.value = value;
  addTaskInput.focus();
}

// Xử lý lưu dữ liệu
function handleSaveData(e) {
  const saveBtn = e.currentTarget;
  const inputEl = saveBtn.parentElement.previousElementSibling.children[0];
  const taskId = inputEl.dataset.id;
  const value = inputEl.value;
  const isDoneTask = inputEl.classList.contains("done-task");
  let path = "tasks";
  if (isDoneTask) {
    path = "done";
  }
  if (taskId) {
    const url = `http://171.237.239.230:6868/${path}/${taskId}`;
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        value: value,
      }),
    };
    commitData(url, options);
  } else {
    const url = "http://171.237.239.230:6868/tasks";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        value: value,
      }),
    };
    commitData(url, options);
  }
}

// Hàm show completed task
function handleShowCompletedTask() {
  completedTodoListEl.classList.toggle("active");
  showCompletedTodosBtn.children[1].classList.toggle("active");
  showCompletedTodosBtn.children[2].classList.toggle("active");
}

// Xử lý xoá dữ liệu
function handleDeleteTask(e) {
  const deleteBtnTarget = e.currentTarget;
  const taskTarget = deleteBtnTarget.parentElement.parentElement;
  const taskTargetId = taskTarget.dataset.id;
  const isDoneTask = taskTarget.classList.contains("done-task");
  let path = "tasks";
  if (isDoneTask) path = "done";
  const url = `http://171.237.239.230:6868/${path}/${taskTargetId}`;
  const options = {
    method: "DELETE",
  };
  commitData(url, options);
}

// Xử lý đánh dấu hoàn thành task
function handleCheckTask(e) {
  const checkBtnTarget = e.currentTarget;
  const taskTarget = checkBtnTarget.parentElement.parentElement;
  const taskTargetId = taskTarget.dataset.id;
  const value = taskTarget.children[0].innerText;
  const isDoneTask = taskTarget.classList.contains("done-task");
  let path = "done";
  if (isDoneTask) path = "tasks";
  const url = `http://171.237.239.230:6868/${path}`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      value: `${value}`,
      id: taskTargetId,
    }),
  };
  commitData(url, options);
  handleDeleteTask(e);
}
