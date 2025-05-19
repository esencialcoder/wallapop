export async function loginUser({ username, password }) {
  const resp = await fetch("http://localhost:8000/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  if (!resp.ok) {
    const err = await resp.json().catch(() => ({}));
    throw new Error(err.message || "Usuario o contraseña incorrectos");
  }
  const data  = await resp.json();
  const token = data.accessToken; 
  if (!token) throw new Error("No se ha recibido token del servidor");
  return token;
}
