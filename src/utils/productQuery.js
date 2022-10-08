export const fetchProducts = async () => {
  const res = await fetch(
    "fakeData/products.json"
  );
  const products = await res.json();
  return products;
};

export const productById = async (id) => {
  const res = await fetch(
    "fakeData/products.json"
  );
  const products = await res.json();
  const product = await products.find((pd) => pd.id === id);
  return product;
};
