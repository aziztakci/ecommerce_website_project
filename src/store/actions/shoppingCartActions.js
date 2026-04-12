import { API } from "../../api/axiosInstance";

export const SET_CART = 'SET_CART';
export const SET_PAYMENT = 'SET_PAYMENT';
export const SET_ADDRESS = 'SET_ADDRESS';
export const ADD_ADDRESS = 'ADD_ADDRESS';
export const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
export const REMOVE_ADDRESS = 'REMOVE_ADDRESS';
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const setPayment = (payment) => ({ type: SET_PAYMENT, payload: payment });
export const setAddress = (addressList) => ({ type: SET_ADDRESS, payload: addressList });

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

// --- adres crud işlemleri ---

// Listeleme (GET)
export const fetchAddresses = () => (dispatch) => {
  API
    .get("/user/address")
    .then((res) => {
      dispatch(setAddress(res.data));
    })
    .catch((err) => console.error("Adres çekme hatası:", err));
};

// Ekleme (POST)
export const postAddress = (addressData) => (dispatch) => {
  return API.post("/user/address", addressData)
    .then((res) => {
      const newAddr = res.data["0"] || res.data;
      dispatch({ type: ADD_ADDRESS, payload: newAddr });
      return res;
    })
    .catch((err) => {
      console.error("Adres ekleme hatası:", err);
      throw err;
    });
};

// Güncelleme (PUT)
export const updateAddressAction = (addressData) => (dispatch) => {
  return API.put("/user/address", addressData)
    .then((res) => {
      const updatedAddr = res.data["0"] || res.data;
      dispatch({ type: UPDATE_ADDRESS, payload: updatedAddr });
      return res;
    })
    .catch((err) => {
      console.error("Adres güncelleme hatası:", err);
      throw err;
    });
};

// Silme (DELETE)
export const deleteAddressAction = (addressId) => (dispatch) => {
  return API.delete(`/user/address/${addressId}`)
    .then(() => {
      dispatch({ type: REMOVE_ADDRESS, payload: addressId });
    })
    .catch((err) => console.error("Adres silme hatası:", err));
};