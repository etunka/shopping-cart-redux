import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { fixPrice } from "../helper";

const Product = ({ product, addToCart }) => {
  return (
    <div className="product flex items-center">
      <div className="product__image w-1/2">
        <img src={product.imageUrl} alt="product" className="max-w-full" />
      </div>
      <div className="product__info ml-12">
        <h2 className="product__title text-left text-2xl font-semibold">
          {product.title}
        </h2>
        <h3 className="product__price text-left text-lg my-4">
          €{fixPrice(product.price)}
        </h3>

        <button
          className="bg-green-700 rounded text-white float-left mt-4 py-2 px-4"
          onClick={() => {
            addToCart(product);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addToCart: actions.addToCart,
};

export default connect(null, mapDispatchToProps)(Product);
