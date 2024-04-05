import { dispatch } from "../store.js";
import {
  signUpSuccess,
  logoutSuccess,
  setError,
  setLoading,
  logInSuccess,
} from "../slices/authSlice.js";
import AuthService from "../../services/AuthService.js";

export const signUpAction = async (userData) => {
  dispatch(setLoading(true));
  try {
    const data = await AuthService.signUp(userData);
    dispatch(signUpSuccess(data));
  } catch (error) {
    dispatch(setError(error));
  }
};

export const logInAction = async (userData) => {
  dispatch(setLoading(true));
  try {
    const data = await AuthService.logIn(userData);
    dispatch(logInSuccess(data));
  } catch (error) {
    dispatch(setError(error));
  }
};

export const logoutAction = () => {
  dispatch(logoutSuccess());
};
