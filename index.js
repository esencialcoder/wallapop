import { pubSub } from "./pubSub.js";
import { initAdsController } from "./ad-list/adListController.js";
import { initNotificationsController } from './notifications/notificationsController.js';

const adListElement = document.querySelector("#ads-list");
const loginBtn = document.querySelector('#loginBtn');
const signupBtn = document.querySelector('#signupBtn');
const logoutBtn = document.querySelector('#logoutBtn'); 
const notificationsElement = document.querySelector('#notifications');

initAdsController(adListElement, pubSub);
initNotificationsController(notificationsElement, pubSub);

if (signupBtn) {
    signupBtn.addEventListener('click', () => {
        window.location.href = 'signup.html';
    });
}

if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        window.location.href = 'login.html';
    });
}

const createAdBtn = document.getElementById("createAdBtn");

const token = localStorage.getItem('token');

if (token) {
    createAdBtn.classList.remove("d-none");
    if (logoutBtn) logoutBtn.classList.remove("d-none");
    if (loginBtn) loginBtn.classList.add("d-none");
    if (signupBtn) signupBtn.classList.add("d-none");
} else {
    createAdBtn.classList.add("d-none");
    if (logoutBtn) logoutBtn.classList.add("d-none");
    if (loginBtn) loginBtn.classList.remove("d-none");
    if (signupBtn) signupBtn.classList.remove("d-none");
}

if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("token");
        pubSub.publish('SUCCESS', 'Has cerrado sesión correctamente.');
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000); 
    });
}

createAdBtn.addEventListener("click", () => {
    const token = localStorage.getItem('token'); 
    if (token) {
        window.location.href = "./create-ads.html";
    } else {
        pubSub.publish('ERROR', 'Debes estar logueado para crear un anuncio.');
        window.location.href = "./login.html";
    }
});
