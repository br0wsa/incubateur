export async function fetchData(url) {
  if (!url || typeof url !== "string") {
    throw new Error("URL invalide");
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erreur ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
