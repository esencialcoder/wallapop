function clearMessages(container) {
  container.innerHTML = '';
}

export function showSuccessMessage(container, message) {
  clearMessages(container);
  const div = document.createElement('div');
  div.className = 'alert alert-success';
  div.textContent = message;
  container.appendChild(div);
}

export function showErrorMessage(container, message) {
  clearMessages(container);
  const div = document.createElement('div');
  div.className = 'alert alert-danger';
  div.textContent = message;
  container.appendChild(div);
}
