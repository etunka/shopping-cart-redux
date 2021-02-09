export const actionTypes = {
  setProducts: "SET_PRODUCTS",
  setShoppingCart: "SET_SHOPPING_CART",
  addToCart: "ADD_TO_CART",
  removeFromCart: "REMOVE_FROM_CART",
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

export function addToCart(product) {
  return {
    type: actionTypes.addToCart,
    payload: product,
  };
}

export function removeFromCart(product) {
  return {
    type: actionTypes.removeFromCart,
    payload: product,
  };
}
