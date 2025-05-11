export function buildAdView(ad) {
    const tipoOperacion = ad.venta ? "Venta" : "Compra";
    const badgeClass = ad.venta ? "success" : "warning";
    
    const newAdElement = document.createElement("article");
    
    newAdElement.classList.add("col-md-4", "mb-4");
    newAdElement.innerHTML = `
       <div class="card h-100 shadow-sm">
       
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${ad.nombre}</h5>
          <p class="card-text">${ad.descripcion}</p>
          <p class="fw-bold text-primary">${ad.precio} €</p>
          <span class="badge bg-${badgeClass} mb-2">${tipoOperacion}</span>
          <small class="text-muted mt-auto">Publicado por ${ad.usuario}</small>
        </div>
      </div>
    `;
    return newAdElement;
}
