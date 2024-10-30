import Link from "next/link";
import styles from "./ProductsItem.module.css";

export default function ProductsItem({ href, imgSrc, title, price, index }) {
  console.log(index);
  return (
    <li key={`product-${index}`} className={styles.product_banner}>
      <Link href={href}>
        <img className={styles.img} src={imgSrc} alt={title} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>{price}</p>
      </Link>
    </li>
  );
}
