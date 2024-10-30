import styles from "./ProductDetail.module.css";
import { products } from "@/app/product/page";

export default function ProductDetail({ productId }) {
  const product = products[productId - 1];
  return (
    <div className={styles.row}>
      <div className={styles.col}>
        <img src={product.imgSrc}></img>
      </div>
      <div className={styles.col}>
        <h3>{product.title}</h3>
        <p>{product.desc}</p>
        <p>{product.price}</p>
      </div>
    </div>
  );
}
