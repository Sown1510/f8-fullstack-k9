import { useDispatch } from "react-redux";
import "./CartItem.css";
import { removeFromCartAction } from "../../store";

export default function CartItem(product) {
  const dispatch = useDispatch();
  console.log(product);

  const onRemoveFromCart = (product) => {
    dispatch(removeFromCartAction(product));
  };
  return (
    <>
      <div className="cart-item-card">
        <img className="cart-item-image" src={product.imageUrl} alt="cart-item Image" />
        <div className="cart-item-title">
          <h3 className="title">{product.name}</h3>
          <p className="price">${product.price}</p>
        </div>
        <div className="cart-item-action">
          <button
            onClick={() => {
              onRemoveFromCart(product);
            }}
            className="remove-btn"
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
}
