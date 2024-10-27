import CartItem from "../CartItem/CartItem";
import "./Cart.css";
import { getCart } from "../../store";
import { useSelector } from "react-redux";

export default function Cart() {
  const cart = useSelector(getCart);
  const cartValue = cart.reduce((total, product) => {
    return total + product.price * product.qtyInCart;
  }, 0);

  return (
    <>
      <div className="cart-list">
        {cart && cart.length > 0 ? (
          <>
            <ul>
              {cart.map((product, index) => (
                <li key={index} className="cart-item">
                  <CartItem product={product} />
                </li>
              ))}
            </ul>
            <p className="cart-value">Tổng: ${cartValue}</p>
            <button className="cart-checkout">Thanh toán</button>
          </>
        ) : (
          <p>Không có sản phẩm nào</p>
        )}
      </div>
    </>
  );
}
