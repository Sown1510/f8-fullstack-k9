import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import Cart from "../Cart/Cart";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import { getCart } from "../../store";
import { useSelector } from "react-redux";
import { Visibility } from "@mui/icons-material";

export default function NavB() {
  const [showCart, setShowCart] = useState(false);
  const cart = useSelector(getCart);
  const navigate = useNavigate();
  const onShowCart = () => {
    showCart ? setShowCart(false) : setShowCart(true);
  };

  const onGoHome = () => {
    navigate("/");
  };

  return (
    <div className="nav-bar">
      <h2 className="logo" onClick={onGoHome}>
        Product List
      </h2>
      <div className="cart-icon" onClick={onShowCart}>
        <span className={`cart-quantity ${cart.length > 0 ? "" : "hidden"}`}>{cart.length}</span>
        <ShoppingCartIcon sx={{ fontSize: "3rem" }} />
        <div className="cart" style={{ display: `${showCart ? "none" : "block"}` }} onClick={(e) => e.stopPropagation()}>
          <Cart />
        </div>
      </div>
    </div>
  );
}
