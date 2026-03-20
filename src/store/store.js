import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';


const initialState = {
  data: [],
  loading: false,
  error: null
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  global: globalReducer,
});


export const store = createStore(rootReducer, applyMiddleware(thunk));