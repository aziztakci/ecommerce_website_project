import { SET_ROLES } from '../actions/clientActions';

const initialState = {
  roles: [], 
  user: null,
  addressList: [],
  creditCards: [],
};

export const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROLES:
      return { ...state, roles: action.payload };
    default:
      return state;
  }
};