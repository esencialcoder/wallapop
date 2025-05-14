import { registerUser } from './signup.js';
import { showErrorMessage } from './signupView.js';
import { isEmailValid } from '../utils/isEmailValid.js';
import { isPasswordValid } from '../utils/isPasswordValid.js';

export function initSignupController(form, messageContainer) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const fd = new FormData(form);
    const email = fd.get('email').trim();
    const password = fd.get('password');
    const confirm = fd.get('confirmPassword');

    if (!isEmailValid(email)) {
      showErrorMessage(messageContainer, 'El correo no está bien escrito');
      autoClearMessage(messageContainer);
      return;
    }

    if (!isPasswordValid(password, confirm)) {
      showErrorMessage(messageContainer, 'Las contraseñas no coinciden o están vacías');
      autoClearMessage(messageContainer);
      return;
    }

    try {
      await registerUser({ username: email, password });
      form.reset();
      localStorage.setItem('signupSuccess', 'Te has registrado con éxito');
      window.location.href = './login.html';
    } catch (err) {
      showErrorMessage(messageContainer, err.message);
      autoClearMessage(messageContainer);
    }
  });
}

function autoClearMessage(container) {
  setTimeout(() => {
    container.innerHTML = '';
  }, 3000); 
}
