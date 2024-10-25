import jobsReducer from "./jobs.js";
import inputtingJobReducer from "./inputtingJob.js";

const initState = {
  cart: [],
};

const reducer = (state = initState, action) => {
  return {
    ...state,
    cart: cartReducer(state.cart, action),
  };
};

export default reducer;
