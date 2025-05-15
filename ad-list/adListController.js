import { getAds } from "./ads.js";
import { showAds, showEmpty } from "./adsView.js";

export async function initAdsController(adsListElement, pubSub) {
  pubSub.publish("LOADING"); 

  try {
    const ads = await getAds();

    if (ads.length === 0) {
      showEmpty(adsListElement);
    } else {
      showAds(adsListElement, ads);
    }

    pubSub.publish("CLEAR"); 
  } catch (error) {
    pubSub.publish("ERROR", error.message); 
  }
}
