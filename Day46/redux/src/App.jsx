import { NavBar } from "./components";
import { ProductList } from "./pages";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <div className="product-list">
        <ProductList />
      </div>
    </>
  );
}

export default App;
