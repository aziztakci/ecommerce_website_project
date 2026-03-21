import homeData from "../mockdatas/homeData";


const initialState = {
  data: homeData, 
};

export const globalReducer = (state = initialState, action) => {
  switch (action.type) {
   
    default:
      return state;
  }
};