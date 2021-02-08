export const actionTypes = {
  setProducts: "SET_PRODUCTS",
  setShoppingCart: "SET_SHOPPING_CART",
};

export function setProducts(products) {
  return {
    type: actionTypes.setProducts,
    payload: products,
  };
}

export function setShoppingCart(shoppingCartItems) {
  return {
    type: actionTypes.setShoppingCart,
    payload: shoppingCartItems,
  };
}
