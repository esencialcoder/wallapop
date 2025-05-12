import { registerUser } from "./signup.js";
import { showSuccessMessage, showErrorMessage } from "./signupView.js";

export function initSignupController(signupElement) {
  signupElement.addEventListener('submit', async (event) => {
    event.preventDefault();

    const usernameElement = signupElement.querySelector('#username');
    const emailElement = signupElement.querySelector('#email');
    const passwordElement = signupElement.querySelector('#password');
    const passwordConfirmElement = signupElement.querySelector('#confirmPassword');

    
    if (
      isEmailValid(emailElement.value) &&
      isPasswordValid(passwordElement.value, passwordConfirmElement.value)
    ) {
      try {
        
        await registerUser({
          username: usernameElement.value,
          password: passwordElement.value
        });

        signupElement.reset();
        showSuccessMessage('Usuario creado correctamente');
        window.location = '/'; 
      } catch (error) {
        showErrorMessage(error.message);
      }
    }
  });

  function isEmailValid(email) {
    const mailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!mailRegExp.test(email)) {
      alert('El email no está bien escrito');
      return false;
    }

    return true;
  }

  function isPasswordValid(password, passwordConfirmation) {
    if (password !== passwordConfirmation) {
      alert('Las contraseñas no son iguales');
      return false;
    }

    return true;
  }
}
