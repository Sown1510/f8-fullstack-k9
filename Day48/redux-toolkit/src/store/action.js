const actionFilterSearchStr = (data) => {
  return {
    type: "filter/searchStr",
    payload: data,
  };
};

const actionAddNewTask = (data) => {
  console.log(data);
  return {
    type: "todolist/addTask",
    payload: data,
  };
};

export { actionFilterSearchStr, actionAddNewTask };
