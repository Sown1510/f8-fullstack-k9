import "./productItem.css";

export default function ProductItem({ product }) {
  console.log(product);
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
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </>
  );
}
