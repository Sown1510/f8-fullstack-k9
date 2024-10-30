import styles from "./page.module.css";
import Link from "next/link";
import ProductDetail from "@/components/ProductDetail/ProductDetail";

export default async function page({ params, searchParams }) {
  const id = await params;
  return (
    <div className={styles.product_detail}>
      <Link className={styles.back_btn} href="/product">
        Back
      </Link>
      <ProductDetail productId={id.id} />
    </div>
  );
}
