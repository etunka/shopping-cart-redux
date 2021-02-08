import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { ShoppingCartItem } from "./ShoppingCartItem";

const ShoppingCart = ({ shoppingCartItems, setShoppingCart }) => {
  useEffect(() => {
    setShoppingCart(shoppingCartItems);
  }, []);

  return (
    <div className="w-1/3 p-4 text-left border-2 border-green-700 border-opacity-25 rounded">
      <h3 className="text-xl font-semibold mb-4">Shopping Cart</h3>
      {shoppingCartItems.map((item) => {
        return (
          <ShoppingCartItem
            image={item.image}
            title={item.title}
            price={item.price}
          />
        );
      })}
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
