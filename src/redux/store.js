import { configureStore } from "@reduxjs/toolkit";
import {
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from "react-redux";
import { rootReducer } from "./rootReducer.js";

// --------------------------------------------------
const store = configureStore({
  reducer: rootReducer,
});

store.subscribe(() => {
  const { isAuthenticated, user } = store.getState().auth;
  localStorage.setItem('isAuthenticated', isAuthenticated);
  localStorage.setItem('user', JSON.stringify(user));
});

const { dispatch } = store;
const useSelector = useAppSelector;
const useDispatch = () => useAppDispatch();

export { store, dispatch, useSelector, useDispatch };
