import Link from "next/link";
import styles from "./ProductsItem.module.css";

export default function ProductsItem({ href, imgSrc, title, price, index }) {
  console.log(href);
  return (
    <li key={`product-${index}`} className={styles.product_banner}>
      <Link href={href}>
        <img src={imgSrc} alt={title} />
        <h3>{title}</h3>
        <p>{price}</p>
      </Link>
    </li>
  );
}
