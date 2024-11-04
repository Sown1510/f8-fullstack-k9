// const initState = [
//   { id: 1, name: "Task 1", priority: "medium", isDone: false },
//   { id: 2, name: "Task 2", priority: "medium", isDone: false },
//   { id: 3, name: "Task 3", priority: "medium", isDone: false },
// ];

// export function todolistsReducer(state = initState, action) {
//   switch (action.type) {
//     case "todolist/addTask":
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// }

import { createSlice } from "@reduxjs/toolkit";

export const todolistSlice = createSlice({
  name: "todolist",
  initialState: [
    { id: 1, name: "Task 1", priority: "medium", isDone: false },
    { id: 2, name: "Task 2", priority: "medium", isDone: false },
    { id: 3, name: "Task 3", priority: "medium", isDone: false },
  ],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    checkTask: (state, action) => {
      const task = state.find((task) => task.id === action.payload.id);
      if (task) task.isDone = !task.isDone;
    },
  },
});
