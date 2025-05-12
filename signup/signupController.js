// signup/signupController.js
import { registerUser } from './signup.js';
import { showSuccessMessage, showErrorMessage } from './signupView.js';
import { isEmailValid } from '../utils/isEmailValid.js';
import { isPasswordValid } from '../utils/isPasswordValid.js';

export function initSignupController(signupElement) {
  signupElement.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = signupElement.querySelector('#username').value.trim();
    const email    = signupElement.querySelector('#email').value.trim();
    const password = signupElement.querySelector('#password').value;
    const confirm  = signupElement.querySelector('#confirmPassword').value;

    // Validaciones
    if (!isEmailValid(email)) {
      showErrorMessage('El email no está bien escrito');
      return;
    }

    if (!isPasswordValid(password, confirm)) {
      showErrorMessage('Las contraseñas no coinciden o están vacías');
      return;
    }

    try {
      await registerUser({ username, password });
      signupElement.reset();
      showSuccessMessage('Usuario creado correctamente');
      window.location = '/';
    } catch (error) {
      showErrorMessage(error.message);
    }
  });
}
