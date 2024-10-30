import ProductsItem from "@/components/ProductsItem/ProductsItem";
import "./page.css";

export const products = [
  { id: 1, title: "Product 1", price: "$19.99", imgSrc: "https://fastly.picsum.photos/id/1011/300/300.jpg?hmac=4-sWnGVSRoshbWvFqHagv-NeLj1AbEGjxJqGgLtwEdY", desc: "lorem lorem remlolorel ahihi hihi haha lorem lorem remlolorel ahihi hihi haha lorem lorem remlolorel ahihi hihi haha" },
  { id: 2, title: "Product 2", price: "$29.99", imgSrc: "https://fastly.picsum.photos/id/864/300/300.jpg?hmac=vS7RjFd0kISq4skaH_DLn2J_I5p5i-Z3w5Eob_LwlAk", desc: "lorem lorem remlolorel ahihi hihi haha lorem lorem remlolorel ahihi hihi haha lorem lorem remlolorel ahihi hihi haha" },
  { id: 3, title: "Product 3", price: "$39.99", imgSrc: "https://fastly.picsum.photos/id/368/300/300.jpg?hmac=hUcupzjcKYYyvoznAz4VJTlRL_J_q3bDuNg28pPDkWs", desc: "lorem lorem remlolorel ahihi hihi haha lorem lorem remlolorel ahihi hihi haha lorem lorem remlolorel ahihi hihi haha" },
  { id: 4, title: "Product 4", price: "$39.99", imgSrc: "https://fastly.picsum.photos/id/581/300/300.jpg?hmac=tV_HJTrLarVHd8NW2Y8s8LLGza8rosstTKNXWBRyA3Y", desc: "lorem lorem remlolorel ahihi hihi haha lorem lorem remlolorel ahihi hihi haha lorem lorem remlolorel ahihi hihi haha" },
  { id: 5, title: "Product 5", price: "$39.99", imgSrc: "https://fastly.picsum.photos/id/862/300/300.jpg?hmac=omllSASwYQXWPO584bLQUz6GetRL0GRe-2QctRXVnJA", desc: "lorem lorem remlolorel ahihi hihi haha lorem lorem remlolorel ahihi hihi haha lorem lorem remlolorel ahihi hihi haha" },
  { id: 6, title: "Product 6", price: "$39.99", imgSrc: "https://fastly.picsum.photos/id/869/300/300.jpg?hmac=BufjuhxwGaOQl9I5sI3V25Zk-fpDzyhF7eHgxwWx_kY", desc: "lorem lorem remlolorel ahihi hihi haha lorem lorem remlolorel ahihi hihi haha lorem lorem remlolorel ahihi hihi haha" },
];

export default function Product() {
  return (
    <>
      <ul className="product-list">
        {products.map((product, index) => (
          <ProductsItem key={index} href={`product/${product.id}`} imgSrc={product.imgSrc} title={product.title} price={product.price} index={product.index} />
        ))}
      </ul>
    </>
  );
}
