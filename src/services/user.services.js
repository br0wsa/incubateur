import ky from "ky";

// URL de base pour les routes liées aux users
const BASE_USER_URL = "http://localhost:3000/api/users/";

// Instance Ky
const userInstance = ky.create({
  prefixUrl: BASE_USER_URL,
  credentials: "include", //Permet de récupérer le token dans les cookies du navigateur
});

// Récupère tous les utilisateurs
const getAllUsers = async () => {
  try {
    const response = await userInstance.get("getAllUsers").json();
    return response;
  } catch (error) {
    console.error("Error:", error);
  }
};

// Récupère un utilisateur à partir de l'id
const getUser = async (id) => {
  try {
    const response = await userInstance.get(`getUser/${id}`).json();
    return response;
  } catch (error) {
    console.error("Error:", error);
  }
};

const getCurrentUser = async () => {
  try {
    const response = await userInstance.get("myprofile").json();
    return response;
  } catch (error) {
    console.error("Error:", error);
  }
};

const UserService = {
  getAllUsers,
  getUser,
  getCurrentUser,
};

export default UserService;
