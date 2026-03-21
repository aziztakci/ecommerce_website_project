import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';


const rootReducer = combineReducers({
  global: globalReducer,
});


export const store = createStore(rootReducer, applyMiddleware(thunk));


import homeData from "../mockdatas/homeData";
import { globalReducer } from '../reducers/globalReducer';
