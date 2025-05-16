import { pubSub } from "./pubSub.js";
import { initAdsController } from "./ad-list/adListController.js";
import { initNotificationsController } from './notifications/notificationsController.js';

const adListElement = document.querySelector("#ads-list");
const loginBtn = document.querySelector('#loginBtn');
const signupBtn = document.querySelector('#signupBtn');
const notificationsElement = document.querySelector('#notifications');

initAdsController(adListElement, pubSub);
initNotificationsController(notificationsElement, pubSub);


if (signupBtn) {
    signupBtn.addEventListener('click', () => {
        window.location.href = 'signup.html'
    })
    
}
if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        window.location.href = 'login.html'
    })
    
}

