import { SET_ROLES } from '../store/actions/globalActions';

const initialState = {
  roles: [], 
  user: null,
};

export const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROLES:
      return { ...state, roles: action.payload };
    default:
      return state;
  }
};