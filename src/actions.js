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

export function addToCart(item) {
  return {
    type: actionTypes.addToCart,
    payload: item,
  };
}

export function removeFromCart(product) {
  return {
    type: actionTypes.removeFromCart,
    payload: product,
  };
}
