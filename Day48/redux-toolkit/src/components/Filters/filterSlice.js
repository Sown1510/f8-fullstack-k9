// const initState = {
//   searchStr: "",
//   category: "all",
//   priority: ["low", "medium", "high"],
// };

// export function filtersReducer(state = initState, action) {
//   switch (action.type) {
//     case "filter/searchStr":
//       return { ...state, searchStr: action.payload };
//     case "filter/category":
//       return state;
//     case "filter/priority":
//       return state;
//     default:
//       return state;
//   }
// }

import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filters",
  initialState: {
    searchStr: "",
    category: "",
    priority: ["low", "medium", "high"],
  },
  reducers: {
    searchStr: (state, action) => {
      state.searchStr = action.payload;
    },
    category: (state, action) => {
      state.category = action.payload;
    },
    priority: (state, action) => {
      const priority = state.priority;
      const newPriority = priority.includes(action.payload) ? priority.filter((p) => p != action.payload) : [...priority, action.payload];
      state.priority = newPriority;
    },
  },
});
