const addToCartAction = (payload = {}) => {
  return {
    type: "cart/ADD_TO_CART",
    payload: payload,
  };
};

const removeFromCartAction = (payload = {}) => {
  return {
    type: "cart/REMOVE_FROM_CART",
    payload: payload,
  };
};

const decreaseFromCartAction = (payload = {}) => {
  return {
    type: "cart/DECREASE_FROM_CART",
    payload: payload,
  };
};

export { addToCartAction, removeFromCartAction, decreaseFromCartAction };
