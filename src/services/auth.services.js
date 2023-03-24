import ky from "ky";

//URL de base pour les routes liées a l'authentification
const BASE_AUTH_URL = "http://localhost:3000/api/auth/";

//Instance ky
const authInstance = ky.create({
  prefixUrl: BASE_AUTH_URL,
  credentials: "include", //Permet de récupérer le token dans les cookies du navigateur
  headers: {
    "Content-Type": "application/json",
  },
});

//Création d'un utilisateur
const signUp = async (values) => {
  try {
    const response = await authInstance
      .post("register", { json: values })
      .json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

//Connexion utilisateur
const login = async (values) => {
  try {
    const response = await authInstance.post("login", { json: values }).json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

const checkUsername = async (username) => {
  try {
    const response = await authInstance
      .post(`userNameExists${username}`)
      .json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

const AuthService = {
  signUp,
  login,
  checkUsername,
};

export default AuthService;
