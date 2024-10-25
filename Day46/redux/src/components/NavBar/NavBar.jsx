import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import Cart from "../Cart/Cart";
import "./NavBar.css";

export default function NavB() {
  const [showCart, setShowCart] = useState(false);
  const onShowCart = () => {
    showCart ? setShowCart(false) : setShowCart(true);
  };

  return (
    <div className="nav-bar">
      <h2>Product List</h2>
      <div className="cart-icon" onClick={onShowCart}>
        <ShoppingCartIcon sx={{ fontSize: "3rem" }} />
        <div className="cart" style={{ display: `${showCart ? "none" : "block"}` }} onClick={(e) => e.stopPropagation()}>
          <Cart />
        </div>
      </div>
    </div>
  );
}
