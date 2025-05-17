import { createAd } from "./adsCreateModel.js";
import {
  clearMessages,
  showLoading,
  showSuccessMessage,
  showErrorMessage,
} from "./adsCreateView.js";

export function initAdsCreateController(form, messageContainer) {
  // Comprueba que el formulario y el contenedor existan
  if (!form || !messageContainer) {
    console.error("ads-create: form o messageContainer no encontrados");
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    clearMessages(messageContainer);

    const fd = new FormData(form);
    const name        = fd.get("name")?.trim();
    const description = fd.get("description")?.trim();
    const price       = parseFloat(fd.get("price"));
    const sale        = fd.get("sale") === "true";
    const photo       = fd.get("photo");

    if (!name || !description || isNaN(price) || fd.get("sale") == null) {
      showErrorMessage(messageContainer, "Completa todos los campos obligatorios.");
      return;
    }

    try {
      showLoading(messageContainer);
      await createAd({ name, description, price, sale, photo });
      showSuccessMessage(messageContainer, "Anuncio creado. Redirigiendo…");
      setTimeout(() => {
        window.location.href = "../index.html";
      }, 1000);

    } catch (err) {
      showErrorMessage(messageContainer, err.message);
    }
  });
}
