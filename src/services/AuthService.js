
import axios from "axios";

// -------------------------------------------------------------------

const signUp = async ({data}) => {
  const response = await axios.post('/register/admin', data);
  return response.data.data;
};

const AuthService = {
    signUp,
};

export default AuthService;