import { SET_USER, SET_ROLES, SET_THEME, SET_LANGUAGE } from '../actions/clientActions';

const initialState = {
  user: {},
  roles: [],
  //theme: 'light', context sıkıntı çıkarırsa aktif et
  // language: 'tr', context sıkıntı çıkarırsa aktif et
  addressList: [],
  creditCards: []
};

export const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload }; 
    case SET_ROLES:
      return { ...state, roles: action.payload };
    case SET_THEME:
      return { ...state, theme: action.payload };
    case SET_LANGUAGE:
      return { ...state, language: action.payload };
    default:
      return state;
  }
};