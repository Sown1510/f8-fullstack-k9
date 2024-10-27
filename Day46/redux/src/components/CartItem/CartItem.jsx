import { useDispatch } from "react-redux";
import "./CartItem.css";
import { addToCartAction, removeFromCartAction, decreaseFromCartAction } from "../../store";
import { onShowDetail } from "../../utils";

export default function CartItem(product) {
  const dispatch = useDispatch();
  console.log(product);

  const onIncrease = (e, product) => {
    e.stopPropagation();
    dispatch(addToCartAction(product));
  };
  const onDecrease = (e, product) => {
    e.stopPropagation();
    dispatch(decreaseFromCartAction(product));
  };
  const showDetail = onShowDetail();

  const onRemoveFromCart = (e, product) => {
    e.stopPropagation();
    dispatch(removeFromCartAction(product));
  };

  return (
    <>
      <div className="cart-item-card" onClick={() => showDetail(product.product)}>
        <img className="cart-item-image" src={product.product.imageUrl} alt="cart-item Image" />
        <div className="cart-item-title">
          <h3 className="title">{product.product.name}</h3>
          <p className="price">${product.product.price}</p>
        </div>
        <div className="cart-item-action">
          <button className="cart-item-decrease" onClick={(e) => onDecrease(e, product.product)}>
            -
          </button>
          <span className="cart-item-quantity">{product.product.qtyInCart}</span>
          <button className="cart-item-increase" onClick={(e) => onIncrease(e, product.product)}>
            +
          </button>
          <button
            onClick={(e) => {
              onRemoveFromCart(e, product);
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
