const container = document.querySelector('#login-messages');

export function clear() {
  container.innerHTML = '';
}

export function showLoading(on) {
  clear();
  if (on) {
    const sp = document.createElement('div');
    sp.className = 'spinner-border text-primary';
    sp.setAttribute('role','status');
    sp.innerHTML = '<span class="visually-hidden">Cargando...</span>';
    container.appendChild(sp);
  }
}

export function showSuccess(msg) {
  clear();
  const d = document.createElement('div');
  d.className = 'alert alert-success';
  d.textContent = msg;
  container.appendChild(d);
}

export function showError(msg) {
  clear();
  const d = document.createElement('div');
  d.className = 'alert alert-danger';
  d.textContent = msg;
  container.appendChild(d);
}
