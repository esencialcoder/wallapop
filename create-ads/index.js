import { initCreateAdsController } from "./createAdsController.js";
import { initNotificationsController } from "../notifications/notificationsController.js";
import { pubSub } from "../pubSub.js";

const adsCreateElement = document.querySelector("#ads-create-form");
const notificationsElement = document.querySelector("#notifications");

initNotificationsController(notificationsElement, pubSub);
initCreateAdsController(adsCreateElement, pubSub);
