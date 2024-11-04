import { createSelector } from "reselect";

const allTasks = (state) => state.tasks;
const searchStr = (state) => state.filters.searchStr;
const priority = (state) => state.filters.priority;
const category = (state) => state.filters.category;

const getTasks = createSelector([allTasks, searchStr, priority, category], (tasks, searchStr, priority, category) => {
  if (category) {
    return tasks
      .filter((task) => (category == "finish" ? task.isDone : !task.isDone))
      .filter((task) => priority.includes(task.priority))
      .filter((task) => task.name.includes(searchStr));
  } else {
    return tasks.filter((task) => priority.includes(task.priority)).filter((task) => task.name.includes(searchStr));
  }
});

const getSearchStr = (state) => state.filters.searchStr;

const getCategory = (state) => state.filters.category;

const getPriority = (state) => state.filters.priority;

export { getTasks, getCategory, getSearchStr, getPriority };
