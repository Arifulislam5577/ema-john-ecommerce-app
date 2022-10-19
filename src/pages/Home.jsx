import React, { useContext } from "react";
import Loader from "../components/Loader";
import ProductLayout from "../components/ProductLayout";
import { DataContext } from "../Context/Context";

const Home = () => {
  const { loading, error, products } = useContext(DataContext);

  if (loading) {
    return <Loader />;
  } else if (error) {
    return (
      <section className="home py-5 z-0">
        <div className="container">
          <h1>{error}</h1>
        </div>
      </section>
    );
  } else {
    return (
      <section className="home py-5 z-0">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {products?.map((product) => (
              <ProductLayout key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
    );
  }
};

export default Home;
