import axios from "axios";

// -------------------------------------------------------------------

const baseUrl = process.env.REACT_APP_HOST_API;

const signUp = async (data) => {
  const response = await axios.post(`${baseUrl}/register`, data);
  return response.data;
};

const logIn = async (data) => {
  const response = await axios.post(`${baseUrl}/login`, data);
  return response.data;
};

const AuthService = {
  signUp,
  logIn,
};

export default AuthService;
