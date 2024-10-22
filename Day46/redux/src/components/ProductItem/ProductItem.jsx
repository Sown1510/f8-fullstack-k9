import "./productItem.css";

export default function () {
  return (
    <>
      <div className="product-card">
        <img className="product-image" src="https://picsum.photos/200/200" alt="Product Image" />
        <div className="product-title">
          <h3 className="title">Product Title</h3>
          <p className="price">$99.99</p>
        </div>
        <div className="product-action">
          <button className="buy-now-btn">Buy now</button>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </>
  );
}
