import ProductItem from "../../components/ProductItem/ProductItem";
import "./ProductList.css";

const products = [
  { id: 1, name: "Product Name", price: 100, imageUrl: "https://picsum.photos/200/200", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, provident. Eligendi numquam accusantium laboriosam. Repellat fugiat reprehenderit perferendis laudantium accusantium ad voluptatem tempore, fugit rem quas non deleniti animi dicta!" },
  { id: 2, name: "Product Name", price: 100, imageUrl: "https://picsum.photos/200/200", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, provident. Eligendi numquam accusantium laboriosam. Repellat fugiat reprehenderit perferendis laudantium accusantium ad voluptatem tempore, fugit rem quas non deleniti animi dicta!" },
  { id: 3, name: "Product Name", price: 100, imageUrl: "https://picsum.photos/200/200", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, provident. Eligendi numquam accusantium laboriosam. Repellat fugiat reprehenderit perferendis laudantium accusantium ad voluptatem tempore, fugit rem quas non deleniti animi dicta!" },
  { id: 4, name: "Product Name", price: 100, imageUrl: "https://picsum.photos/200/200", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, provident. Eligendi numquam accusantium laboriosam. Repellat fugiat reprehenderit perferendis laudantium accusantium ad voluptatem tempore, fugit rem quas non deleniti animi dicta!" },
  { id: 5, name: "Product Name", price: 100, imageUrl: "https://picsum.photos/200/200", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, provident. Eligendi numquam accusantium laboriosam. Repellat fugiat reprehenderit perferendis laudantium accusantium ad voluptatem tempore, fugit rem quas non deleniti animi dicta!" },
  { id: 6, name: "Product Name", price: 100, imageUrl: "https://picsum.photos/200/200", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, provident. Eligendi numquam accusantium laboriosam. Repellat fugiat reprehenderit perferendis laudantium accusantium ad voluptatem tempore, fugit rem quas non deleniti animi dicta!" },
];

export default function ProductList() {
  function onClick() {}
  return (
    <>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <ProductItem product={product} />
          </li>
        ))}
      </ul>
    </>
  );
}
