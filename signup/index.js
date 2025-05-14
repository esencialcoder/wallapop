import { initSignupController } from "./signupController.js";

const signupElement = document.querySelector("#signup-form");
const messageContainer = document.querySelector("#signup-messages");

initSignupController(signupElement, messageContainer);
