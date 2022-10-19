export const saveCartInDB = (arr) => {
  localStorage.setItem("cart", JSON.stringify(arr));
};

export const getCart = () => {
  return localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
};
