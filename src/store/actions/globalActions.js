import { API } from "../../api/axiosInstance";
export const SET_ROLES = 'SET_ROLES';

export const setRolesAction = () => (dispatch) => {
  API.get('/roles')
    .then(res => {
      dispatch({ type: 'SET_ROLES', payload: res.data });
    })
    .catch(err => {
      console.error("Roles fetch error:", err);
    });
};