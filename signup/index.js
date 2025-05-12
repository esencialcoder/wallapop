import { initSignupController } from './signupController.js'

 const signupElement = document.querySelector('#signup-form');
 console.log(signupElement); // ¿null?


 initSignupController(signupElement);