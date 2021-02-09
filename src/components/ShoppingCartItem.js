import React from "react";
import { fixPrice } from "../helper";

export const ShoppingCartItem = ({ item }) => {
  const { product, count } = item;
  return (
    <div className="flex items-center">
      <div className="w-1/6">
        <img
          src={product.imageUrl}
          alt="product-thumbnail"
          className="max-w-full"
        />
      </div>
      <div className="ml-4 pt-4">
        <span className="text-sm font-semibold">{product.title}</span>
        {count > 1 && <span> x {count}</span>}
        <p className="mt-2 text-sm">€{fixPrice(product.price * count)}</p>
        <button className="text-sm text-red-700 mt-4">Remove item</button>
      </div>
    </div>
  );
};
