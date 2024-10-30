import ProductsItem from "@/components/ProductsItem/ProductsItem";
import "./page.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link className="product_btn" href="/product">
        Product
      </Link>
    </>
  );
}
