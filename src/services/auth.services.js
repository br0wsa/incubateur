import axios from "axios";

//URL de base pour les routes liées a l'authentification
const BASE_AUTH_URL = "http://localhost:3000/api/auth/";

//Instance Axios
export const authInstance = axios.create({
  baseURL: BASE_AUTH_URL,
  withCredentials: true, //Permet de récupérer le token dans les cookies du navigateur
});

authInstance.defaults.headers.common["Content-Type"] = "application/json";

//Création d'un utilisateur
const signUp = async (values) => {
  try {
    const response = await authInstance.post("register", values);
  } catch (error) {}
};

//Connexion utilisateur
const login = async (values) => {
  try {
    const response = await authInstance.post("login", values);
    //gérer erreurs
  } catch (error) {
    //gérer erreurs
  }
};

const checkUsername = async (username) => {
  try {
    const response = await authInstance.post(`userNameExists${username}`);
    return response;
  } catch (err) {
    console.log(err);
  }
};

const AuthService = {
  signUp,
  login,
  checkUsername,
};

export default AuthService;
