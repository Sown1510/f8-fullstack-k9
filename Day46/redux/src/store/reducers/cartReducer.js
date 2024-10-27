const initState = [];

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case "cart/ADD_TO_CART":
      const productExists = state.some((product) => product.id == action.payload.id);
      if (productExists) {
        return state.map((product) => (product.id === action.payload.id ? { ...product, qtyInCart: product.qtyInCart + 1 } : product));
      } else {
        return [...state, { ...action.payload, qtyInCart: 1 }];
      }
    case "cart/DECREASE_FROM_CART":
      return state.map((product) => (product.id === action.payload.id ? { ...product, qtyInCart: product.qtyInCart - 1 } : product)).filter((product) => product.qtyInCart > 0);
    case "cart/REMOVE_FROM_CART":
      const newCart = state.filter((product) => product.id != action.payload.product.id);
      return newCart;
    case "cart/UPDATE_CART_QUANTITY":
      return state;
    default:
      return state;
  }
};

export default cartReducer;
