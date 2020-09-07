import { SET_PRODUCT, LOADING_PRODUCT, ORDER_PRODUCT } from "../types";

const initialState = {
  products: [],
  product: {},
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCT:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case LOADING_PRODUCT:
      return {
        ...state,
        loading: true,
      };
    case ORDER_PRODUCT:
      return {
        ...state,
        success: action.payload.success,
      };
    default:
      return state;
  }
}
