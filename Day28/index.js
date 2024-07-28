const inputDataElm = document.querySelector("form input");
const addDataBtn = document.querySelector("form button");
const todoTasksListElm = document.querySelector(".box .todo-tasks");
var removeTaskBtn, editTaskBtn;

var handleData = function (e) {
  e.preventDefault();
  if (inputDataElm.value) {
    const newTask = document.createElement("li");
    newTask.classList.add("task");
    newTask.innerHTML = `
        ${inputDataElm.value}
        <i class="fa-solid fa-pen-to-square edit-btn"></i>
        <i class="fa-solid fa-trash remove-btn"></i>
      `;
    todoTasksListElm.appendChild(newTask);
    inputDataElm.value = "";
  }
  return;
};

todoTasksListElm.addEventListener("click", function (e) {
  if (e.target.classList.contains("edit-btn")) {
    e.preventDefault();
    let content = e.target.parentElement.innerText.toString();
    e.target.parentElement.classList.remove("task");
    e.target.parentElement.innerHTML = `<form action="">
          <input
            value = "${content}"
            id="input-lbl"
            type="text"
          />
          <button>Add Task</button>
        </form>`;
    var editDataConfirm = document.querySelector("li form button");
    editDataConfirm.addEventListener("click", function (event) {
      event.preventDefault();
      let data = event.target.previousElementSibling.value;
      event.target.parentElement.parentElement.classList.add("task");
      event.target.parentElement.parentElement.innerHTML = `
      ${data}
            <i class="fa-solid fa-pen-to-square edit-btn"></i>
            <i class="fa-solid fa-trash remove-btn"></i>
            `;
    });
  }
  if (e.target.classList.contains("remove-btn")) {
    e.target.parentElement.remove();
  }
});
addDataBtn.addEventListener("click", handleData);
