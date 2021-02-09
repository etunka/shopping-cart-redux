import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { fixPrice } from "../helper";
import { ShoppingCartItem } from "./ShoppingCartItem";

const calculateTotal = (arr) => {
  return arr.reduce((total, b) => total + b.product.price * b.count, 0);
};

const ShoppingCart = ({ shoppingCartItems, setShoppingCart }) => {
  useEffect(() => {
    setShoppingCart(shoppingCartItems);
  }, []);

  return (
    <div className="w-1/3 h-4/5 max-h-96 overflow-y-scroll p-6 text-left border-2 border-green-700 border-opacity-25 rounded">
      <h3 className="text-xl font-semibold mb-4">Shopping Cart</h3>
      {shoppingCartItems.length === 0 && (
        <span className="text-sm">Your cart is empty</span>
      )}
      {shoppingCartItems.length > 0 && (
        <>
          {" "}
          {shoppingCartItems.map((item) => {
            return <ShoppingCartItem item={item} />;
          })}
          <p className="text-lg font-semibold mt-6">
            Total: €{fixPrice(calculateTotal(shoppingCartItems))}
          </p>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    shoppingCartItems: state.shoppingCartItems,
  };
};

const mapDispatchToProps = {
  setShoppingCart: actions.setShoppingCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
