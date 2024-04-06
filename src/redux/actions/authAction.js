import { dispatch } from "../store.js";
import {
  signUpSuccess,
  logoutSuccess,
  logInSuccess,
} from "../slices/authSlice.js";
import AuthService from "../../services/AuthService.js";

export const signUpAction = async (userData) => {
  try {
    const data = await AuthService.signUp(userData);
    dispatch(signUpSuccess(data));
  } catch (error) {
    console.log(error);
  }
};

export const logInAction = async (userData) => {
  try {
    const data = await AuthService.logIn(userData);
    dispatch(logInSuccess(data));
  } catch (error) {
    console.log(error);
  }
};

export const logoutAction = () => {
  return (dispatch) => {
    try {
      localStorage.setItem('user', null);
      dispatch(logoutSuccess());
    } catch (error) {
      console.log(error);
    }
  };

};
