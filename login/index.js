import { pubSub } from '../pubSub.js';
import { initLoginController } from './loginController.js';

const form = document.querySelector('#login-form');
const messageContainer = document.querySelector('#login-messages');

import { initNotificationsController } from '../notifications/notificationsController.js';
initNotificationsController(messageContainer, pubSub);

const successMessage = localStorage.getItem('signupSuccess');
if (successMessage) {
  pubSub.publish('SUCCESS', successMessage);
  localStorage.removeItem('signupSuccess');
}

initLoginController(form, pubSub);
