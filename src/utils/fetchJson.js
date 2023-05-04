/**

Récupère les données depuis une URL via une requête
@async
@param {string} url - L'URL à partir de laquelle les données doivent être récupérées
@returns {Promise} - La promesse qui résout avec les données récupérées au format JSON
@throws {Error} - Lance une erreur si l'URL est invalide ou si la requête échoue
*/
export async function fetchData(url) {
  if (!url || typeof url !== "string") {
  throw new Error("URL invalide");
  }
  try {
  const response = await fetch(url);
  if (!response.ok) {
  throw new Error(response);
  }
  const data = await response.json();
  return data;
  } catch (error) {
  console.error(error);
  throw error;
  }
  }






