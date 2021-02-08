import React from "react";

export const ShoppingCartItem = ({ image, title, price }) => {
  return (
    <div className="flex items-center">
      <div className="w-1/6">
        <img src={image} alt="product-thumbnail" className="max-w-full" />
      </div>
      <div className="ml-4 pt-4">
        <h4 className="text-lg text-semibold">{title}</h4>
        <p>{price}</p>
        <button className="text-sm text-red-700 mt-4">Remove product</button>
      </div>
    </div>
  );
};
