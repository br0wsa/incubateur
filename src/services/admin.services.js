import axios from "axios";

//URL de base pour les routes liées aux actions administrateurs
const BASE_ADMIN_URL = "http://localhost:3000/api/admin/";

//Instance Axios
export const adminInstance = axios.create({
  baseURL: BASE_ADMIN_URL,
});

//Mute/Unmute un utilisateur
const setMute = async (id, isMuted) => {
  try {
    const response = await adminInstance.post(`setMute`, {
      id: id,
      is_muted: isMuted,
    });
    return response;
  } catch (error) {
    //faire un truc en cas d'erreur
  }
};

//Ban/Déban d'un utilisateur
const setBan = async (id, isBanned) => {
  try {
    const response = await adminInstance.post(`setBan`, {
      id: id,
      is_banned: isBanned,
    });
    return response;
  } catch (error) {
    //faire un truc en cas d'erreur
  }
};

//Activer/Desactiver contenus adultes
const setNsfw = async (id, nsfwContentAllowed) => {
  try {
    const response = await adminInstance.post(`setNsfw`, {
      id: id,
      nsfw_content_allowed: nsfwContentAllowed,
    });
    return response;
  } catch (error) {
    //faire un truc en cas d'erreur
  }
};

const AdminService = {
  setMute,
  setBan,
  setNsfw,
};

export default AdminService;
