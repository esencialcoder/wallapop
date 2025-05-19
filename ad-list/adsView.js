export function clearContainer(container) {
  container.innerHTML = "";
}

export function showLoading(container) {
  clearContainer(container);

  const spinnerWrapper = document.createElement("div");
  spinnerWrapper.className = "d-flex justify-content-center py-5 w-100";

  spinnerWrapper.innerHTML = `
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Cargando anuncios...</span>
    </div>
  `;

  container.appendChild(spinnerWrapper);
}

export function showAds(container, ads) {
  clearContainer(container);

  ads.forEach((ad) => {
    const adEl = buildAdView(ad);
    container.appendChild(adEl);
  });
}

export function showEmpty(container) {
  clearContainer(container);

  container.innerHTML = `
    <div class="alert alert-info text-center w-100">
      No hay anuncios disponibles.
    </div>
  `;
}

export function showError(container, message) {
  clearContainer(container);

  container.innerHTML = `
    <div class="alert alert-danger" role="alert">
      Error al cargar anuncios: ${message}
    </div>
  `;
}

function buildAdView(ad) {
  const tipoOperacion = ad.venta ? "Venta" : "Compra";
  const badgeClass = ad.venta ? "success" : "warning";

  const article = document.createElement("article");
  article.classList.add("col-md-4", "mb-4");

  article.innerHTML = `
    <div class="card h-100 shadow-sm">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title fw-bold fs-5">${ad.nombre}</h5>
        <p class="card-text fw-medium flex-grow-1">${ad.descripcion}</p>
        <p class="fw-bold text-primary mb-2">${ad.precio} €</p>
        <span class="badge bg-${badgeClass} mb-2">${tipoOperacion}</span>
        
      </div>
    </div>
  `;

  return article;
}
