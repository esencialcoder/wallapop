export async function login({ username, password }) {
    const response = await fetch('http://localhost:8000/auth/login', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
  
    if (!response.ok) {
      throw new Error("Credenciales inválidas");
    }
  
    const data = await response.json();
    return data.accessToken || data.token;
  }
  