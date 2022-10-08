import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductLayout from "../components/ProductLayout";

const Home = () => {
  const products = useLoaderData();

  return (
    <section className="home py-5">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductLayout key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
