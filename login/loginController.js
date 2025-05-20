import { login } from "./login.js";

export function initLoginController(loginForm, pubSub) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    pubSub.publish("CLEAR");

    const fd = new FormData(loginForm);
    const email = fd.get("username").trim();
    const password = fd.get("password");

    pubSub.publish("LOADING");

    try {
      const token = await login({ username: email, password });
      localStorage.setItem("token", token);
      pubSub.publish("SUCCESS", "Login correcto. Redirigiendo...");
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1200);
    } catch (error) {
      pubSub.publish("ERROR", error.message);
      setTimeout(() => {
        pubSub.publish("CLEAR");
        loginForm.reset();
      }, 1500);
    }
  });
}
