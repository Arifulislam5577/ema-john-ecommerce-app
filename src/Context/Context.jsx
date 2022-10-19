import { createContext, useState } from "react";
import useFetchData from "../hooks/useFetchData";
import { getCart, saveCartInDB } from "../utils/saveCartInDb";
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [cart, setCart] = useState(getCart());
  const { loading, error, products } = useFetchData(
    "fakeData/products.json",
    []
  );

  const handleAddToCart = (id) => {
    let newCart = [];
    const product = products.find((p) => p.id === id);
    const productInCart = cart.find((p) => p.id === id);

    if (!productInCart) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      const restProduct = cart.filter((p) => p.id !== productInCart.id);
      productInCart.quantity += 1;
      newCart = [...restProduct, productInCart];
    }

    setCart(newCart);
  };

  // TOTAL ITEMS
  const totalItems = cart.reduce((prev, current) => current.quantity + prev, 0);

  saveCartInDB(cart);

  return (
    <DataContext.Provider
      value={{ loading, error, products, handleAddToCart, totalItems, cart }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
