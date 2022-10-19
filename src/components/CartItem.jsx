import React from "react";

const CartItem = ({ img, price, quantity, name }) => {
  return (
    <div className="flex gap-5 justify-between">
      <img src={img} alt={name} className="h-20 w-20" />
      <div className="flex flex-col justify-between items-center">
        <button className="text-sm font-bold h-5 w-5 bg-gray-200">-</button>
        <span className="text-sm text-gray-500">{quantity}</span>
        <button className="text-sm font-bold h-5 w-5 bg-gray-200">+</button>
      </div>
      <h2 className=" text-sm  flex items-center justify-center">${price}</h2>

      <div className="flex items-center justify-center">
        <button className="text-xs  h-5 w-5 bg-orange-500 text-white">x</button>
      </div>
    </div>
  );
};

export default CartItem;
