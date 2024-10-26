import ProductItem from "../../components/ProductItem/ProductItem";
import "./ProductList.css";
import { getProducts } from "../../store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ProductList() {
  const products = useSelector(getProducts);
  const navigate = useNavigate();

  const onShowDetail = (product) => {
    navigate(`/product-detail?id=${product.id}`);
  };

  return (
    <>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item" onClick={() => onShowDetail(product)}>
            <ProductItem product={product} />
          </li>
        ))}
      </ul>
    </>
  );
}
