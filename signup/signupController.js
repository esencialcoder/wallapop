import { registerUser } from './signup.js';
import { showSuccessMessage, showErrorMessage } from './signupView.js';
import { isEmailValid } from '../utils/isEmailValid.js';
import { isPasswordValid } from '../utils/isPasswordValid.js';

export function initSignupController(form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const fd = new FormData(form);
    // Solo usamos el email como campo username
    const email = fd.get('email').trim();
    const password = fd.get('password');
    const confirm = fd.get('confirmPassword');

    if (!isEmailValid(email)) {
      showErrorMessage('El correo no está bien escrito');
      return;
    }

    if (!isPasswordValid(password, confirm)) {
      showErrorMessage('Las contraseñas no coinciden o están vacías');
      return;
    }

    try {
      // Enviamos `{ username: email, password }` al backend
      await registerUser({ username: email, password });
      form.reset();
      showSuccessMessage('Usuario creado correctamente');
      window.location.href = './login.html';
    } catch (err) {
      showErrorMessage(err.message);
    }
  });
}