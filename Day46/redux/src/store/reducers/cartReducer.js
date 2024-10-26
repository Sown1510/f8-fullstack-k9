const initState = [];

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case "cart/ADD_TO_CART":
      return [...state, action.payload];
    case "cart/REMOVE_FROM_CART":
      console.log(action);
      const newCart = state.filter((product) => product.id != action.payload.product.id);
      console.log(newCart);
      return newCart;
    case "cart/UPDATE_CART_QUANTITY":
      return state;
    default:
      return state;
  }
};

export default cartReducer;
