import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loader from "./components/Loader";
import Layout from "./Layout/Layout";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import { fetchProducts, productById } from "./utils/productQuery";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [
        {
          index: true,
          element: <Home />,
        },
        { path: "cart", element: <Cart /> },
        {
          path: "product/:id",
          loader: async ({ params }) => productById(params.id),
          element: <ProductDetails />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} fallbackElement={<Loader />} />;
};

export default App;
