import { API } from '../../api/axiosInstance';

export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST';
export const SET_TOTAL = 'SET_TOTAL';
export const SET_FETCH_STATE = 'SET_FETCH_STATE';
export const SET_LIMIT = 'SET_LIMIT';
export const SET_OFFSET = 'SET_OFFSET';
export const SET_FILTER = 'SET_FILTER';

export const setCategories = (categories) => ({ type: SET_CATEGORIES, payload: categories });
export const setProductList = (products) => ({ type: SET_PRODUCT_LIST, payload: products });
export const setTotal = (total) => ({ type: SET_TOTAL, payload: total });
export const setFetchState = (state) => ({ type: SET_FETCH_STATE, payload: state });
export const setLimit = (limit) => ({ type: SET_LIMIT, payload: limit });
export const setOffset = (offset) => ({ type: SET_OFFSET, payload: offset });
export const setFilter = (filter) => ({ type: SET_FILTER, payload: filter });


export const fetchCategories = () => (dispatch) => {
  dispatch(setFetchState("FETCHING"));
  API.get('/categories')
    .then((res) => {
      dispatch(setCategories(res.data));
      dispatch(setFetchState("FETCHED"));
    })
    .catch((err) => {
      console.error("Kategoriler yüklenemedi:", err);
      dispatch(setFetchState("FAILED"));
    });
};

export const fetchProducts = (params = {}) => (dispatch) => {
  dispatch(setFetchState("FETCHING"));
  API.get('/products', { params })
    .then((res) => {
      dispatch(setProductList(res.data.products));
      dispatch(setTotal(res.data.total));
      dispatch(setFetchState("FETCHED"));
    })
    .catch((err) => {
      console.error("Ürünler yüklenemedi:", err);
      dispatch(setFetchState("FAILED"));
    });
};