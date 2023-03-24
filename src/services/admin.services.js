import ky from "ky";

//URL de base pour les routes liées aux actions administrateurs
const BASE_ADMIN_URL = "http://localhost:3000/api/admin/";

//Instance Ky
const adminInstance = ky.create({
  prefixUrl: BASE_ADMIN_URL,
});

//Mute/Unmute un utilisateur
const setMute = async (id, isMuted) => {
  try {
    const url = new URL("setMute", BASE_ADMIN_URL);
    const response = await adminInstance
      .post(url.toString(), {
        json: {
          id: id,
          is_muted: isMuted,
        },
      })
      .json();
    return response;
  } catch (error) {
    //faire un truc en cas d'erreur
  }
};

//Ban/Déban d'un utilisateur
const setBan = async (id, isBanned) => {
  try {
    const url = new URL("setBan", BASE_ADMIN_URL);
    const response = await adminInstance
      .post(url.toString(), {
        json: {
          id: id,
          is_banned: isBanned,
        },
      })
      .json();
    return response;
  } catch (error) {
    //faire un truc en cas d'erreur
  }
};

//Activer/Desactiver contenus adultes
const setNsfw = async (id, nsfwContentAllowed) => {
  try {
    const url = new URL("setNsfw", BASE_ADMIN_URL);
    const response = await adminInstance
      .post(url.toString(), {
        json: {
          id: id,
          nsfw_content_allowed: nsfwContentAllowed,
        },
      })
      .json();
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
