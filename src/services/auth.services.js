import axios from "axios";

//URL de base pour les routes liées a l'authentification
const BASE_AUTH_URL = "http://localhost:3000/api/auth/";

//Instance Axios
export const authInstance = axios.create({
  baseURL: BASE_AUTH_URL, //La route de base pour appeller les routes d'authentification
  withCredentials: true, //Permet de récupérer le token dans les cookies du navigateur
});

authApi.defaults.headers.common["Content-Type"] = "application/json";

//Création d'un utilisateur
const signUp = async (values) => {
  try {
    const response = await authInstance.post(
      BASE_AUTH_URL + "register",
      values
    );
    console.log("Server response:", response.data);
  } catch (error) {
    console.error("Error:", error);
  }
};

//Connexion utilisateur
const login = async (values) => {
  try {
    const response = await authInstance.post(BASE_AUTH_URL + "login", values);
    console.log("Server response:", response.data);
  } catch (error) {
    console.error("Error:", error);
  }
};

const AuthService = {
  signUp,
  login,
};

export default AuthService;
