import { initLoginController } from './loginController.js';

const form = document.querySelector('#login-form');

const messageContainer = document.querySelector('#login-messages');

const successMessage = localStorage.getItem('signupSuccess');
if (successMessage) {
  import('../signup/signupView.js').then(({ showSuccessMessage }) => {
    showSuccessMessage(messageContainer, successMessage);
    localStorage.removeItem('signupSuccess');
  });
}
initLoginController(form);
