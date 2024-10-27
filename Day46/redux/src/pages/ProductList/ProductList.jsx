import ProductItem from "../../components/ProductItem/ProductItem";
import "./ProductList.css";
import { getProducts } from "../../store";
import { useSelector } from "react-redux";
import { onShowDetail } from "../../utils";

export default function ProductList() {
  const products = useSelector(getProducts);
  const showDetail = onShowDetail();
  return (
    <>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item" onClick={() => showDetail(product)}>
            <ProductItem product={product} />
          </li>
        ))}
      </ul>
    </>
  );
}
