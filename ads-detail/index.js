import { initAdsDetailController } from './adsDetailController.js';
import { initNotificationsController } from '../notifications/notificationsController.js';
import { pubSub } from '../pubSub.js';

const adDetailElement = document.querySelector('#ad-detail');
const notificationsElement = document.querySelector('#notifications');

initNotificationsController(notificationsElement, pubSub);
initAdsDetailController(adDetailElement, pubSub);
