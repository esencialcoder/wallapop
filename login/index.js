import { pubSub } from '../pubSub.js';
import { initLoginController } from './loginController.js';

const form = document.querySelector('#login-form');
const messageContainer = document.querySelector('#login-messages');

// Inicializa sistema global de notificaciones aquí (si no lo has hecho ya)
import { initNotificationsController } from '../notifications/notificationsController.js';
initNotificationsController(messageContainer, pubSub);

// Mostrar mensaje de registro exitoso si existe
const successMessage = localStorage.getItem('signupSuccess');
if (successMessage) {
  pubSub.publish('SUCCESS', successMessage);
  localStorage.removeItem('signupSuccess');
}

initLoginController(form, pubSub);
