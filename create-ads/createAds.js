export async function createAd(ad) {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("Debes iniciar sesión para publicar un anuncio.");
  }

  // 1️⃣ SUBIR FOTO (si hay)
  let photoURL = "";

  if (ad.photo && ad.photo.size > 0) {
    const uploadFormData = new FormData();
    uploadFormData.append("file", ad.photo);

    const uploadResponse = await fetch("http://127.0.0.1:8000/upload", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: uploadFormData,
    });

    if (!uploadResponse.ok) {
      throw new Error("Error al subir la imagen.");
    }

    const uploadData = await uploadResponse.json();
    photoURL = uploadData.url;
  }

  // 2️⃣ ENVIAR ANUNCIO COMO JSON
  const adData = {
    nombre: ad.name,
    descripcion: ad.description,
    precio: ad.price,
    venta: ad.sale,
    foto: photoURL,
  };

  const response = await fetch("http://127.0.0.1:8000/api/ads", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(adData),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Error al crear el anuncio.");
  }

  const result = await response.json();
  console.log("✅ Anuncio creado:", result); // Debe incluir `usuario`
  return result;
}
