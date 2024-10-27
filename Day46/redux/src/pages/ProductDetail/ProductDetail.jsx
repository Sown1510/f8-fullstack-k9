import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getProducts } from "../../store";

export default function ProductDetail() {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("id");
  const products = useSelector(getProducts);
  const product = products.find((product) => product.id == productId);

  return (
    <>
      <div className="product-detail">
        <div className="product-image">
          <img src={product.imageUrl} alt="product-image" />
        </div>
        <div className="product-info">
          <h1 className="product-name">{product.name}</h1>
          <p className="product-price">${product.price}</p>
          <p className="product-short-description">{product.desc}</p>
        </div>
      </div>
    </>
  );
}
