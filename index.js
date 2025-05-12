import { adListController } from "./ad-list/adListController.js";

const adListElement = document.querySelector("#ads-list");
const loginBtn = document.querySelector('#loginBtn');
const signupBtn = document.querySelector('#signupBtn');

adListController(adListElement);

if (signupBtn) {
    signupBtn.addEventListener('click', () => {
        window.location.href = 'signup.html'
    })
    
}
if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        window.location.href = 'signup.html'
    })
    
}

