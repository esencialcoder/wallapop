import { getAdById, getMe, deleteAd, getUserById } from "../ads/ads.js";
import { buildAdDetail } from "./adsDetailView.js";

export async function initAdsDetailController(
  adDetailElement,
  confirmDeleteBtn,
  confirmDeleteModal,
  pubSub
) {
  const params = new URLSearchParams(window.location.search);
  const adId = params.get("id");

  if (!adId) {
    pubSub.publish("ERROR", "No se proporcionó ID de anuncio.");
    return;
  }

  pubSub.publish("LOADING");
  let ad,
    autor,
    me,
    esAutor = false;

  try {
    ad = await getAdById(adId);
  } catch (error) {
    pubSub.publish("ERROR", error.message);
    return;
  }

  try {
    me = await getMe();
    esAutor = ad.userId === me.id;
  } catch (error) {
    pubSub.publish("ERROR", error.message);
  }

  try {
    autor = await getUserById(ad.userId);
    ad.usuario = autor;
  } catch (error) {
    pubSub.publish("ERROR", "No se pudo cargar el autor del anuncio.");
    ad.usuario = { username: "Desconocido" };
  }

  adDetailElement.innerHTML = "";
  const { element: adElement, deleteButton } = buildAdDetail(ad, esAutor);
  adDetailElement.appendChild(adElement);

  pubSub.publish("CLEAR");

  if (esAutor && deleteButton) {
    const modal = new bootstrap.Modal(confirmDeleteModal);

    deleteButton.addEventListener("click", () => modal.show());
    confirmDeleteBtn.addEventListener("click", async () => {
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
}
