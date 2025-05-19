import { pubSub } from '../pubSub.js';
import { initSignupController } from './signupController.js';
import { initNotificationsController } from '../notifications/notificationsController.js';

const signupElement = document.querySelector("#signup-form");
const messageContainer = document.querySelector("#signup-messages");

initNotificationsController(messageContainer, pubSub);
initSignupController(signupElement, pubSub);
