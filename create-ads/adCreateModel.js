export async function createAd(ad) {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("Debes iniciar sesión para publicar");
  
    const fd = new FormData();
    fd.append("name", ad.name);
    fd.append("description", ad.description);
    fd.append("price", ad.price);
    fd.append("sale", ad.sale);
    if (ad.photo && ad.photo.size > 0) {
      fd.append("photo", ad.photo);
    }
  
    const res = await fetch("http://127.0.0.1:8000/api/ads", {
      method:  "POST",
      headers: { Authorization: `Bearer ${token}` },
      body:    fd,
    });
  
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.message || "Error al crear anuncio");
    }
  
    return res.json();
  }
  