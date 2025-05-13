import { initSignupController } from "./signupController.js";

const signupElement = document.querySelector("#signup-form");
const usernameInput = signupElement.querySelector('#username');
const emailInput    = signupElement.querySelector('#email');
const passwordInput = signupElement.querySelector('#password');
const confirmInput  = signupElement.querySelector('#confirmPassword');


initSignupController(signupElement, usernameInput, emailInput, passwordInput, confirmInput);
