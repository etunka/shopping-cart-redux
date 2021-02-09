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
      const itemIndex = state.shoppingCartItems.findIndex(
        (a) => a.product.id === action.payload.id
      );
      // if already in cart +1 on count
      if (itemIndex >= 0) {
        state.shoppingCartItems[itemIndex].count++;

        return {
          ...state,
          shoppingCartItems: [...state.shoppingCartItems],
        };
      }

      return {
        ...state,
        shoppingCartItems: [
          ...state.shoppingCartItems,
          { product: action.payload, count: 1 },
        ],
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
