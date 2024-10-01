import { createBrowserRouter } from "react-router-dom";
import App from "../App_old.jsx";
import {Home, Categories, Products} from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/categories",
    element: <Categories/>,
  },
  {
    path: "/products",
    element: <Products/>,
  },
]);
