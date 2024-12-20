import "./reset.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as ReactDOM from "react-dom/client";
import * as React from "react";
import { ProductDetail, ProductList } from "./pages";
import { NavBar } from "./components";
import store from "./store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "",
    element: (
      <div>
        <NavBar />
        <div className="product-list">
          <ProductList />
        </div>
      </div>
    ),
  },
  {
    path: "/product-detail",
    element: (
      <div>
        <NavBar />
        <div className="product-list">
          <ProductDetail />
        </div>
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
