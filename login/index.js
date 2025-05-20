import { pubSub } from '../pubSub.js';
import { initLoginController } from './loginController.js';
import { initNotificationsController } from '../notifications/notificationsController.js';

const loginForm = document.querySelector("#login-form");
const messages = document.querySelector("#login-messages");

initNotificationsController(messages, pubSub);
initLoginController(loginForm, pubSub);
