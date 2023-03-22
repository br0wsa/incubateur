import axios from "axios";

//URL de base pour les routes liées aux users
const BASE_USER_URL = "http://localhost:3000/api/users/";

//Instance Axios
export const userInstance = axios.create({
  baseURL: BASE_USER_URL,
});

//Récupère tous les utilisateurs
const getAllUsers = async () => {
  try {
    const response = await userInstance.get("getAllUsers");
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

//Récupère un utilisateur a partir de l'id
const getUser = async (id) => {
  try {
    const response = await userInstance.get(`getUser/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

const UserService = {
  getAllUsers,
  getUser,
};

export default UserService;
