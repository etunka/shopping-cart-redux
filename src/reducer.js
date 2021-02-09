import { actionTypes } from "./actions";

const initialState = {
  products: [],
  shoppingCartItems: [],
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.setProducts:
      return {
        ...state,
        products: action.payload,
      };
    case actionTypes.setShoppingCart:
      return {
        ...state,
        shoppingCartItems: action.payload,
      };
    case actionTypes.addToCart: {
      const { product, count } = action.payload;
      const itemIndex = state.shoppingCartItems.findIndex(
        (a) => a.product.id === product.id
      );
      // if already in cart +count on count
      if (itemIndex >= 0) {
        state.shoppingCartItems[itemIndex].count =
          state.shoppingCartItems[itemIndex].count + count;

        return {
          ...state,
          shoppingCartItems: [...state.shoppingCartItems],
        };
      }

      return {
        ...state,
        shoppingCartItems: [...state.shoppingCartItems, { product, count }],
      };
    }
    case actionTypes.removeFromCart: {
      return {
        ...state,
        shoppingCartItems: state.shoppingCartItems.filter(
          (a) => a.product.id !== action.payload.id
        ),
      };
    }

    default:
      return state;
  }
}
