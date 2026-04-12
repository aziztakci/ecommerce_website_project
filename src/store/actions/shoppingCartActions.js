import { API } from "../../api/axiosInstance";

export const SET_CART = 'SET_CART';
export const SET_PAYMENT = 'SET_PAYMENT';
export const SET_ADDRESS = 'SET_ADDRESS';
export const ADD_ADDRESS = 'ADD_ADDRESS';
export const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
export const REMOVE_ADDRESS = 'REMOVE_ADDRESS';
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const SET_CREDIT_CARDS = 'SET_CREDIT_CARDS';
export const ADD_CREDIT_CARD = 'ADD_CREDIT_CARD';
export const UPDATE_CREDIT_CARD = 'UPDATE_CREDIT_CARD';
export const REMOVE_CREDIT_CARD = 'REMOVE_CREDIT_CARD';

export const CLEAR_CART = 'CLEAR_CART';

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

// Kart Listeleme (GET)
export const fetchCards = () => (dispatch) => {
  API.get("/user/card")
    .then((res) => dispatch({ type: SET_CREDIT_CARDS, payload: res.data }))
    .catch((err) => console.error("Kart çekme hatası:", err));
};

// Kart Ekleme (POST)
export const postCardAction = (cardData) => (dispatch) => {
  return API.post("/user/card", cardData)
    .then((res) => {
      dispatch({ type: ADD_CREDIT_CARD, payload: res.data[0] || res.data });
      return res;
    })
    .catch((err) => {
      console.error("Kart ekleme hatası:", err);
      throw err;
    });
};

// Kart Güncelleme (PUT)
export const updateCardAction = (cardData) => (dispatch) => {
  return API.put("/user/card", cardData)
    .then((res) => {
      dispatch({ type: UPDATE_CREDIT_CARD, payload: res.data[0] || res.data });
      return res;
    })
};

// Kart Silme (DELETE)
export const deleteCardAction = (cardId) => (dispatch) => {
  return API.delete(`/user/card/${cardId}`)
    .then(() => dispatch({ type: REMOVE_CREDIT_CARD, payload: cardId }));
};

// Order Kısmı
export const postOrderAction = (orderData) => (dispatch) => {  
  return API
    .post("/order", orderData)
    .then((res) => {      
      dispatch({ type: CLEAR_CART }); 
      localStorage.removeItem("cart"); 
      return res.data;
    })
    .catch((err) => {
      console.error("Sipariş hatası:", err);
      throw err;
    });
};