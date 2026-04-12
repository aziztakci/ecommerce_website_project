import {API} from "../../api/axiosInstance"; // Kendi axios instance yoluna göre ayarla

export const SET_CART = 'SET_CART';
export const SET_PAYMENT = 'SET_PAYMENT';
export const SET_ADDRESS = 'SET_ADDRESS';
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const setPayment = (payment) => ({ type: SET_PAYMENT, payload: payment });
export const setAddress = (address) => ({ type: SET_ADDRESS, payload: address });

export const setCart = (newCart) => (dispatch) => {
  localStorage.setItem("cart", JSON.stringify(newCart));
  dispatch({ type: SET_CART, payload: newCart });
};


export const addToCart = (product) => (dispatch, getState) => {
  const { cart } = getState().shoppingCart;
  const existingProductIndex = cart.findIndex(item => item.product.id === product.id);

  let newCart;
  if (existingProductIndex >= 0) {
    newCart = cart.map((item, index) =>
      index === existingProductIndex ? { ...item, count: item.count + 1 } : item
    );
  } else {
    newCart = [...cart, { count: 1, checked: true, product }];
  }
  dispatch(setCart(newCart));
};

export const removeFromCart = (productId) => (dispatch, getState) => {
  const { cart } = getState().shoppingCart;
  const newCart = cart.filter(item => item.product.id !== productId);
  dispatch(setCart(newCart));
};

export const toggleFavorite = (product) => (dispatch, getState) => {
  const { favorites } = getState().shoppingCart;
  const isFavorite = favorites.find(item => item.id === product.id);
  let newFavorites;
  if (isFavorite) {
    newFavorites = favorites.filter(item => item.id !== product.id);
  } else {
    newFavorites = [...favorites, product];
  }
  localStorage.setItem("favorites", JSON.stringify(newFavorites));
  dispatch({ type: TOGGLE_FAVORITE, payload: newFavorites });
};

export const fetchAddresses = () => (dispatch) => {
  API
    .get("/user/address")
    .then((res) => {
      dispatch(setAddress(res.data));
    })
    .catch((err) => console.error("Adres çekme hatası:", err));
};