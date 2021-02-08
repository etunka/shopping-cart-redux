import React from "react";

export const Product = ({ image, title, price }) => {
  return (
    <div className="product flex items-center">
      <div className="product__image w-1/2">
        <img src={image} alt="product" className="max-w-full" />
      </div>
      <div className="product__info ml-12">
        <h2 className="product__title text-left text-2xl font-semibold">
          {title}
        </h2>
        <h3 className="product__price text-left text-lg my-4">€{price}</h3>
        <button className="bg-green-700 rounded text-white float-left mt-4 py-2 px-4">
          Add to cart
        </button>
      </div>
    </div>
  );
};
