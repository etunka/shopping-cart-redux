import React, { useEffect } from "react";
import { Product } from "./Product";
import { connect } from "react-redux";
import * as actions from "../actions";

const ProductsList = ({ products, setProducts }) => {
  useEffect(() => {
    fetch("http://localhost:3001/data")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold">Products</h1>
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            image={product.imageUrl}
            title={product.title}
            price={product.price}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = {
  setProducts: actions.setProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
