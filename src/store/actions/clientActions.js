import { toast } from "react-toastify";

export const SET_USER = 'SET_USER';
export const SET_ROLES = 'SET_ROLES';
export const SET_THEME = 'SET_THEME';
export const SET_LANGUAGE = 'SET_LANGUAGE';


export const setUser = (user) => ({ type: SET_USER, payload: user });
export const setRoles = (roles) => ({ type: SET_ROLES, payload: roles });
export const setTheme = (theme) => ({ type: SET_THEME, payload: theme });
export const setLanguage = (lang) => ({ type: SET_LANGUAGE, payload: lang });

//theme ve lang oluşturdum ama context apiden kullan, sıkıntı çıkarırsa context api, burayı devreye sok.

import { API } from "../../api/axiosInstance";

export const setRolesAction = () => (dispatch) => {
  API.get('/roles')
    .then(res => {
      dispatch(setRoles(res.data));
    })
    .catch(err => console.error("Roles fetch error:", err));
};

export const loginUserAction = (formData) => (dispatch) => {
  return API.post("/login", {
    email: formData.email,
    password: formData.password,
  })
    .then((res) => {
      dispatch(setUser(res.data));
      
      if (formData.rememberMe) {
        localStorage.setItem("token", res.data.token);
      }
      
      toast.success(`Welcome back, ${res.data.name}!`);
      return res.data; 
    })
    .catch((err) => {
      const errorMessage = err.response?.data?.message || "Invalid email or password!";
      toast.error(errorMessage); 
      throw err; 
    });
};