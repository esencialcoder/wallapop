// login/loginController.js
import { loginUser } from "./login.js";
import { showLoading, showSuccess, showError } from "./loginView.js";

export function initLoginController(form) {
  const btn = form.querySelector("#login-btn");

  // Usamos click en botón (type="button") para evitar recarga SPA-fallback
  btn.addEventListener("click", async (e) => {
    e.preventDefault();
    const fd       = new FormData(form);
    const email    = fd.get("email").trim();
    const password = fd.get("password");

    showLoading(true);
    btn.disabled = true;

    try {
      const token = await loginUser({ username: email, password });
      localStorage.setItem("token", token);
      showSuccess("Login exitoso. Redirigiendo...");
      window.location.href = "./index.html";
    } catch (err) {
      showError(err.message);
    } finally {
      btn.disabled   = false;
      showLoading(false);
    }
  });
}
