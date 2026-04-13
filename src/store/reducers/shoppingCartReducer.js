import {SET_ORDERS, SET_CART, SET_PAYMENT, SET_ADDRESS, ADD_ADDRESS, UPDATE_ADDRESS, REMOVE_ADDRESS, TOGGLE_FAVORITE, SET_CREDIT_CARDS, ADD_CREDIT_CARD, UPDATE_CREDIT_CARD, REMOVE_CREDIT_CARD } from '../actions/shoppingCartActions';

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  payment: {},
  address: [],
  creditCards: [],
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  orders: [],  
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

    case SET_CREDIT_CARDS:
      return { ...state, creditCards: action.payload };
    case ADD_CREDIT_CARD:
      return { ...state, creditCards: [...state.creditCards, action.payload] };
    case UPDATE_CREDIT_CARD:
      return {
        ...state,
        creditCards: state.creditCards.map(c => c.id === action.payload.id ? action.payload : c)
      };
    case REMOVE_CREDIT_CARD:
      return {
        ...state,
        creditCards: state.creditCards.filter(c => c.id !== action.payload)
      };

      case "CLEAR_CART":
      return {
        ...state,
        cart: [], 
      };

      case "SET_ORDERS":
  return { ...state, orders: action.payload };
    default:
      return state;
  }
};