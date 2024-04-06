import { combineReducers } from "redux";
import authReducer from "../redux/slices/authSlice";

const preloadedState = {
  auth: {
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
    user: JSON.parse(localStorage.getItem('user')) || null,
  },
};

const rootReducer = combineReducers({
  auth: authReducer,
  preloadedState
});

export { rootReducer };
