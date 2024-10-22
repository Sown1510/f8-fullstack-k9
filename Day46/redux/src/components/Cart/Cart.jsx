import CartItem from "../CartItem/CartItem";
import "./Cart.css";

export default function () {
  return (
    <>
      <ul className="cart-list">
        <li className="cart-item">
          <CartItem />
        </li>
        <li className="cart-item">
          <CartItem />
        </li>
        <li className="cart-item">
          <CartItem />
        </li>
        <li className="cart-item">
          <CartItem />
        </li>
        <li className="cart-item">
          <CartItem />
        </li>
      </ul>
    </>
  );
}
