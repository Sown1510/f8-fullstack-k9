import { combineReducers } from "redux";

import { filterSlice } from "../../components/Filters/filterSlice";
import { todolistsReducer } from "../../components/TodoLists/todolistsSlice";

// export function reducer(state = {}, action) {
//   return {
//     filters: filtersReducer(state.filters, action),
//     tasks: todolistsReducer(state.tasks, action),
//   };
// }

export const rootReducer = combineReducers({
  filters: filterSlice.reducer,
  tasks: todolistsReducer,
});
