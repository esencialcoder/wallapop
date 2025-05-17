import { registerUser } from './signup.js';
import { isEmailValid } from '../utils/isEmailValid.js';
import { isPasswordValid } from '../utils/isPasswordValid.js';

export function initSignupController(signupElement, pubSub) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const fd = new FormData(form);
    const email = fd.get('email').trim();
    const password = fd.get('password');
    const confirm = fd.get('confirmPassword');

    if (!isEmailValid(email)) {
      pubSub.publish('ERROR', 'El correo no está bien escrito')
      return;
    }

    if (!isPasswordValid(password, confirm)) {
      pubSub.publish('ERROR', 'Las contraseñas no coinciden o están vacías')
      return;
    }

    try {
      await registerUser({ username: email, password });
      form.reset();
      localStorage.setItem('signupSuccess', 'Te has registrado con éxito');
      window.location.href = './login.html';
    } catch (err) {
      pubSub.publish('ERROR', err.message);
    }
  });
}
