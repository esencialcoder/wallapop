import { createAd } from "./createAds.js";

export function initCreateAdsController(adsCreateElement, pubSub) {
  if (!adsCreateElement || !pubSub) {
    console.error("create-ads: formulario o pubSub no disponible");
    return;
  }

  adsCreateElement.addEventListener("submit", async (e) => {
    e.preventDefault();
    pubSub.publish("CLEAR");

    const formData = new FormData(adsCreateElement);

    const ad = {
      name: formData.get("name")?.trim(),
      description: formData.get("description")?.trim(),
      price: parseFloat(formData.get("price")),
      sale: formData.get("sale") === "true",
      photo: formData.get("photo"),
    };

    if (!ad.name || !ad.description || isNaN(ad.price) || formData.get("sale") == null) {
      pubSub.publish("ERROR", "Completa todos los campos obligatorios.");
      return;
    }

    try {
      pubSub.publish("LOADING");
      await createAd(ad);
      pubSub.publish("SUCCESS", "Anuncio creado. Redirigiendo...");
      setTimeout(() => {
        window.location.href = "../index.html";
      }, 1500);
    } catch (error) {
      pubSub.publish("ERROR", error.message);
    }
  });
}
