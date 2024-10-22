import "./CartItem.css";

export default function () {
  return (
    <>
      <div className="cart-item-card">
        <img className="cart-item-image" src="https://picsum.photos/200/200" alt="cart-item Image" />
        <div className="cart-item-title">
          <h3 className="title">Product Title</h3>
          <p className="price">$99.99</p>
        </div>
        <div className="cart-item-action">
          <button className="buy-now-btn">Remove</button>
        </div>
      </div>
    </>
  );
}
