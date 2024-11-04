// import { createStore } from "redux";
// import { rootReducer } from "./reducer/reducer";
// import { composeWithDevTools } from "redux-devtools-extension";
// const composedEnhancers = composeWithDevTools();
// const store = createStore(rootReducer, composedEnhancers);

// export default store;
// export * from "./action.js";

import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "../components/Filters/filterSlice.js";
import { todolistSlice } from "../components/TodoLists/todolistsSlice.js";

const store = configureStore({
  reducer: {
    filters: filterSlice.reducer,
    tasks: todolistSlice.reducer,
  },
});

export default store;
export * from "./selector.js";
