import cartReducer from "./cartReducer.js";
import productsReducer from "./productsReducer.js";

const initState = {
  cart: [],
  products: [
    { id: 1, name: "Product A", price: 100, qtyInCart: 0, remain: 0, imageUrl: "https://fastly.picsum.photos/id/969/200/200.jpg?hmac=p4_e12QQOwtyNXXwJjJs_2kwmu87KZGqAhiUV8goVos", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, provident. Eligendi numquam accusantium laboriosam. Repellat fugiat reprehenderit perferendis laudantium accusantium ad voluptatem tempore, fugit rem quas non deleniti animi dicta!" },
    { id: 2, name: "Product B", price: 100, qtyInCart: 0, remain: 0, imageUrl: "https://fastly.picsum.photos/id/19/200/200.jpg?hmac=U8dBrPCcPP89QG1EanVOKG3qBsZwAvtCLUrfeXdE0FI", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, provident. Eligendi numquam accusantium laboriosam. Repellat fugiat reprehenderit perferendis laudantium accusantium ad voluptatem tempore, fugit rem quas non deleniti animi dicta!" },
    { id: 3, name: "Product C", price: 100, qtyInCart: 0, remain: 0, imageUrl: "https://fastly.picsum.photos/id/556/200/200.jpg?hmac=5uOJ4fW7ElE2P5NfHlvz2zx4d99Ts2-lxy8tucygHLc", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, provident. Eligendi numquam accusantium laboriosam. Repellat fugiat reprehenderit perferendis laudantium accusantium ad voluptatem tempore, fugit rem quas non deleniti animi dicta!" },
    { id: 4, name: "Product D", price: 100, qtyInCart: 0, remain: 0, imageUrl: "https://fastly.picsum.photos/id/616/200/200.jpg?hmac=QEzyEzU6nVn4d_vdALhsT9UAtTUEVhwrT-kM5ogBqKM", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, provident. Eligendi numquam accusantium laboriosam. Repellat fugiat reprehenderit perferendis laudantium accusantium ad voluptatem tempore, fugit rem quas non deleniti animi dicta!" },
    { id: 5, name: "Product E", price: 100, qtyInCart: 0, remain: 0, imageUrl: "https://fastly.picsum.photos/id/982/200/200.jpg?hmac=X2ocb-PEJJpYgQn2Ib8SKCaWKsI-2hGcsvwZjWStNAw", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, provident. Eligendi numquam accusantium laboriosam. Repellat fugiat reprehenderit perferendis laudantium accusantium ad voluptatem tempore, fugit rem quas non deleniti animi dicta!" },
    { id: 6, name: "Product F", price: 100, qtyInCart: 0, remain: 0, imageUrl: "https://fastly.picsum.photos/id/485/200/200.jpg?hmac=7ho6uS1u-Lmj8IR2V6-nJaiAVicTYT7bNcnzCMRwEG4", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, provident. Eligendi numquam accusantium laboriosam. Repellat fugiat reprehenderit perferendis laudantium accusantium ad voluptatem tempore, fugit rem quas non deleniti animi dicta!" },
  ],
};

const reducer = (state = initState, action) => {
  return {
    ...state,
    cart: cartReducer(state.cart, action),
    products: productsReducer(state.products, action),
  };
};

export default reducer;
