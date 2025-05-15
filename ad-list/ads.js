const API_BASE_URL = "http://127.0.0.1:8000/api";

export async function getAds() {
  try {
    const response = await fetch(`${API_BASE_URL}/ads`);

    if (!response.ok) {
      throw new Error("No se pudieron cargar los anuncios");
    }

    const ads = await response.json();

    return ads;

  } catch (error) {
    throw new Error ('Error al conectar con el servidor')
  }
}
