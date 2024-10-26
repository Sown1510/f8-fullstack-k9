import { useDispatch } from "react-redux";
import "./productItem.css";
import { addToCartAction } from "../../store";

export default function ProductItem({ product }) {
  const dispatch = useDispatch();
  const onUpdate = (e, product) => {
    e.stopPropagation();
    dispatch(addToCartAction(product));
  };
  return (
    <>
      <div className="product-card">
        <img className="product-image" src={product.imageUrl} alt="Product Image" />
        <div className="product-title">
          <h3 className="title">{product.name}</h3>
          <p className="price">${product.price}</p>
        </div>
        <div className="product-action">
          <button className="buy-now-btn">Buy now</button>
          <button className="add-to-cart-btn" onClick={(e) => onUpdate(e, product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
