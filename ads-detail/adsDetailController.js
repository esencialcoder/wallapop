import { getAdById, getMe, deleteAd, getUserById } from "../ads/ads.js";
import { buildAdDetail } from "./adsDetailView.js";

export async function initAdsDetailController(adDetailElement, pubSub) {
  const params = new URLSearchParams(window.location.search);
  const adId = params.get("id");

  if (!adId) {
    pubSub.publish("ERROR", "No se proporcionó ID de anuncio.");
    return;
  }

  try {
    pubSub.publish("LOADING");

    const [ad, me] = await Promise.all([getAdById(adId), getMe()]);

    const esAutor = ad.userId === me.id;
    const autor = await getUserById(ad.userId);
    ad.usuario = autor;

    const adElement = buildAdDetail(ad, esAutor);
    adDetailElement.appendChild(adElement);

    pubSub.publish("CLEAR");

    if (esAutor) {
      const deleteButton = adDetailElement.querySelector("#delete-button");
      const confirmButton = document.querySelector("#confirm-delete-btn");
      const modalElement = document.getElementById("confirmDeleteModal");
      const modal = new bootstrap.Modal(modalElement);

      deleteButton.addEventListener("click", () => {
        modal.show();
      });

      confirmButton.addEventListener("click", async () => {
        try {
          modal.hide();
          pubSub.publish("LOADING");
          await deleteAd(adId);
          pubSub.publish("SUCCESS", "Anuncio eliminado correctamente.");
          setTimeout(() => (window.location.href = "./index.html"), 1500);
        } catch (error) {
          pubSub.publish("ERROR", error.message);
        }
      });
    }
  } catch (error) {
    pubSub.publish("ERROR", error.message);
  }
}
