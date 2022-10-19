import { useEffect, useState } from "react";

const useFetchData = (URL, initalState) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(initalState);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const res = await fetch(URL);
      const products = await res.json();
      setProducts(products);
      setError("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return {
    loading,
    products,
    error,
  };
};

export default useFetchData;
