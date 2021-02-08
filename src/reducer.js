import { actionTypes } from "./actions";

const initialState = {
  products: [],
  shoppingCartItems: [
    {
      image:
        "https://www.123planten.nl/media/catalog/product/cache/849c18a8c18231e9e60068f97f2b6ad6/a/l/alocasia_zebrina_kamerplant.jpg",
      title: "alocasia",
      price: "30",
    },
  ],
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
    default:
      return state;
  }
}
