import { SET_CART, SET_PAYMENT, SET_ADDRESS, ADD_ADDRESS, UPDATE_ADDRESS, REMOVE_ADDRESS, TOGGLE_FAVORITE } from '../actions/shoppingCartActions';

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  payment: {},
  address: [],
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
};

export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      return { ...state, cart: action.payload };
    case SET_PAYMENT:
      return { ...state, payment: action.payload };
    case TOGGLE_FAVORITE:
      return { ...state, favorites: action.payload };
    case SET_ADDRESS:
      return { ...state, address: action.payload };
    case ADD_ADDRESS:
      return { ...state, address: [...state.address, action.payload] };
    case UPDATE_ADDRESS:
      return {
        ...state,
        address: state.address.map((addr) =>
          addr.id === action.payload.id ? action.payload : addr
        ),
      };
    case REMOVE_ADDRESS:
      return {
        ...state,
        address: state.address.filter((item) => item.id !== action.payload)
      };
    default:
      return state;
  }
};