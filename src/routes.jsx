import ErrorElement from "./components/ErrorElement/ErrorElement";
import HomePage from "./components/HomePage/HomePage";
import ShopPage from "./components/ShopPage/ShopPage";
import CartPage from "./components/CartPage/CartPage";
import App from "./App";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "shop", element: <ShopPage /> },
      { path: "cart", element: <CartPage /> },
    ],
  },
];

export default routes;
