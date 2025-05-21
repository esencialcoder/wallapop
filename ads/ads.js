const API_BASE = 'http://127.0.0.1:8000';

export async function getAdById(id) {
  const response = await fetch(`${API_BASE}/api/ads/${id}`);
  if (!response.ok) {
    throw new Error('No se pudo cargar el anuncio.');
  }
  return await response.json();
}

export async function getMe() {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('No estás autenticado.');
  }
  const response = await fetch(`${API_BASE}/auth/me`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!response.ok) {
    throw new Error('No se pudo obtener el usuario actual.');
  }
  return await response.json();
}

export async function deleteAd(id) {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Debes estar logueado para eliminar anuncios.');
  }
  const response = await fetch(`${API_BASE}/api/ads/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!response.ok) {
    throw new Error('Error al eliminar el anuncio.');
  }
  return true;
}

export async function getUserById(userId) {
  const response = await fetch(`${API_BASE}/api/users/${userId}`);
  if (!response.ok) {
    throw new Error('No se pudo cargar el autor del anuncio.');
  }
  return await response.json();
}
