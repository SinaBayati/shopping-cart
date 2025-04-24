import ErrorElement from "./components/ErrorElement/ErrorElement";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import ShopPage from "./components/ShopPage/ShopPage";
import CartPage from "./components/CartPage/CartPage";

const routes = [
  {
    path: "/",
    element: <NavBar />,
    errorElement: <ErrorElement />,
    children: [
      { path: "home", element: <HomePage /> },
      { path: "shop", element: <ShopPage /> },
      { path: "cart", element: <CartPage /> },
    ],
  },
];

export default routes;
