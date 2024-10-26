import CartItem from "../CartItem/CartItem";
import "./Cart.css";
import { getCart } from "../../store";
import { useSelector } from "react-redux";

export default function Cart() {
  const cart = useSelector(getCart);

  return (
    <>
      <ul className="cart-list">
        {cart && cart.length > 0 ? (
          cart.map((product, index) => (
            <li key={index} className="cart-item">
              <CartItem product={product} />
            </li>
          ))
        ) : (
          <p>Không có sản phẩm nào</p>
        )}
      </ul>
    </>
  );
}
