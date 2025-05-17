import { pubSub} from '../pubSub.js'
import { initSignupController } from "./signupController.js";

const signupElement = document.querySelector("#signup-form");

initSignupController(signupElement, pubSub);
