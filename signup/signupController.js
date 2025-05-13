import { registerUser } from './signup.js';
import { showSuccessMessage, showErrorMessage } from './signupView.js';
import { isEmailValid } from '../utils/isEmailValid.js';
import { isPasswordValid } from '../utils/isPasswordValid.js';

export function initSignupController(signupElement, usernameInput, emailInput, passwordInput,confirmInput,) {
  signupElement.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const email    = emailInput.value.trim();
    const password = passwordInput.value;
    const confirm  = confirmInput.value;

   
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
