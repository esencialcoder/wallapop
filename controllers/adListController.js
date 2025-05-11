import { ads } from "../models/ads.js";
import { buildAdView } from "../views/adsView.js";

export function adListController(adListElement) {
  for (const ad of ads) {
    const newAdElement = buildAdView(ad);
    adListElement.appendChild(newAdElement);
  }
}
