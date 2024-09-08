// Lấy các phần tử DOM
const endPoint = "https://sw3lqn-8080.csb.app";
const newTaskPath = "/tasks";
const doneTaskPath = "/done";
var isNewTask = false;
var reRender = false;
var newTasks = [];
var doneTasks = [];
const searchInputEl = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");
const searchForm = document.querySelector(".search-box");
const addNewTaskBtn = document.querySelector(".add-todo .add-todo-btn");
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
addNewTaskBtn.addEventListener("click", handleAddNewTask);
cancelAddTaskBtn.addEventListener("click", handleCancelAddTask);
saveDataBtn.addEventListener("click", handleSaveData);
showCompletedTodosBtn.addEventListener("click", handleShowCompletedTask);
searchBtn.addEventListener("click", handleSearch);
searchInputEl.addEventListener("blur", handleSearch);
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
const createNewTaskHTML = (tasks) => {
  let data = "";
  tasks.forEach((task) => {
    data += `
      <li data-id="${task.id}" class="task">
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
      </li>
    `;
  });
  return data;
};

const createDoneTaskHTML = (tasks) => {
  let data = "";
  tasks.forEach((task) => {
    data += `
    <li data-id="${task.id}" class="task done-task">
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
    </li>
    `;
  });
  return data;
};

const getData = async () => {
  const getNewTaskResponse = await fetch(`${endPoint + newTaskPath}`);
  newTasks = await getNewTaskResponse.json();
  const getDoneTaskResponse = await fetch(`${endPoint + doneTaskPath}`);
  doneTasks = await getDoneTaskResponse.json();
  renderData(newTasks, doneTasks);
  reRender = false;
};
getData();

function renderData(newTasks, doneTasks) {
  todoListsEl.innerHTML = createNewTaskHTML(newTasks);
  doneTaskQuantity = doneTasks.length;
  completedTodoListEl.innerHTML = createDoneTaskHTML(doneTasks);
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
    editBtn.addEventListener("click", handleEditNewTask)
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
}

// Hàm xử lý dữ liệu với db
async function commitData(url, options, reRender) {
  const response = await fetch(url, options);
  console.log(reRender);
  if (reRender) getData();
}

// Hàm thêm task vào todo
function handleAddNewTask(e) {
  isNewTask = true;
  addTaskBoxEl.classList.add("active");
  addTaskInput.focus();
}

// Hàm huỷ thêm task vào todo
function handleCancelAddTask() {
  addTaskBoxEl.classList.remove("active");
  addTaskInput.value = "";
}

// Hàm xử lý chỉnh sửa task
function handleEditNewTask(e) {
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
  const value = escapeHTML(inputEl.value);
  if (!value) return;
  const isDoneTask = inputEl.classList.contains("done-task");
  let path = "tasks";
  if (isDoneTask) {
    path = "done";
  }
  if (taskId && !isNewTask) {
    const url = `${endPoint}/${path}/${taskId}`;
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        value: value,
      }),
    };
    commitData(url, options, reRender);
    if (isDoneTask) {
      doneTasks.forEach((task) => {
        if (task.id == taskId) {
          task.value = value;
          return;
        }
      });
    } else {
      newTasks.forEach((task) => {
        if (task.id == taskId) {
          task.value = value;
          return;
        }
      });
    }
    renderData(newTasks, doneTasks);
  } else {
    const url = `${endPoint + newTaskPath}`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        value: value,
      }),
    };
    reRender = true;
    commitData(url, options, reRender);
    isNewTask = false;
  }
  addTaskBoxEl.classList.remove("active");
  inputEl.value = "";
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
  const url = `${endPoint}/${path}/${taskTargetId}`;
  const options = {
    method: "DELETE",
  };
  commitData(url, options, reRender);
  if (isDoneTask) {
    const index = doneTasks.findIndex((task) => task.id == taskTargetId);
    doneTasks.splice(index, 1);
  } else {
    const index = newTasks.findIndex((task) => task.id == taskTargetId);
    newTasks.splice(index, 1);
  }
  renderData(newTasks, doneTasks);
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
  const url = `https://sw3lqn-8080.csb.app/${path}`;
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
  commitData(url, options, reRender);
  if (isDoneTask) {
    newTasks.push({ value: `${value}`, id: taskTargetId });
  } else {
    doneTasks.push({ value: `${value}`, id: taskTargetId });
  }
  handleDeleteTask(e);
}

function handleSearch() {
  const searchKey = escapeHTML(searchInputEl.value.toLowerCase());
  if (!searchKey) {
    renderData(newTasks, doneTasks);
  } else {
    const filterNewTasks = newTasks.filter((task) => {
      return task.value.toLowerCase().includes(searchKey);
    });
    const filterDoneTasks = doneTasks.filter((task) => {
      return task.value.toLowerCase().includes(searchKey);
    });
    renderData(filterNewTasks, filterDoneTasks);
  }
}

function escapeHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}
