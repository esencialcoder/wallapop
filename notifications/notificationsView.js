export function showSuccessMessage(container, message) {
  clearMessages(container);

  const div = document.createElement("div");

  div.className = "alert alert-success";
  div.textContent = message;

  container.appendChild(div);

  setTimeout(() => {
    clearMessages(container);
  }, 2000);
}

export function showErrorMessage(container, message) {
  clearMessages(container);

  const div = document.createElement("div");

  div.className = "alert alert-danger";
  div.textContent = message;

  container.appendChild(div);
}

export function showLoadingMessage(container) {
  clearMessages(container);

  const spinner = document.createElement("div");

  spinner.className = "d-flex justify-content-center";
  spinner.innerHTML = `
        <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Cargando...</span>
        </div>
    `;

    container.appendChild(spinner);
}

export function clearMessages(container) {
    container.innerHTML = '';
}

