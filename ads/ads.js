export async function getAdById(id) {
    const response = await fetch(`http://127.0.0.1:8000/api/ads/${id}`);
  
    if (!response.ok) {
      throw new Error('No se pudo cargar el anuncio.');
    }
  
    return await response.json();
  }
  
  export async function getMe() {
    const token = localStorage.getItem('token');
  
    if (!token) {
      throw new Error('Debes iniciar sesión.');
    }
  
    const response = await fetch('http://127.0.0.1:8000/auth/me', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  
    if (!response.ok) {
      throw new Error('No se pudo identificar al usuario.');
    }
  
    return await response.json(); // contiene { id, username }
  }
  
  export async function deleteAd(id) {
    const token = localStorage.getItem('token');
  
    if (!token) {
      throw new Error('Token no disponible.');
    }
  
    const response = await fetch(`http://127.0.0.1:8000/api/ads/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  
    if (!response.ok) {
      throw new Error('No se pudo eliminar el anuncio.');
    }
  }
  