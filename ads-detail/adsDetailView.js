export function buildAdDetail(ad, esAutor) {
  const tipo = ad.venta ? "Venta" : "Compra";
  const badgeClass = ad.venta ? "success" : "warning";

  const container = document.createElement('section');
  container.classList.add('card', 'p-4', 'shadow');

  container.innerHTML = `
    <h2 class="mb-3">${ad.nombre}</h2>
    <p>${ad.descripcion}</p>
    <p><strong>Precio:</strong> ${ad.precio} €</p>
    <p><span class="badge bg-${badgeClass}">${tipo}</span></p>
    ${
      ad.foto
        ? `<img src="${ad.foto}" alt="Imagen del anuncio" class="img-fluid mb-3" />`
        : ''
    }
    <p><small class="text-muted">
      Publicado por ${ad.usuario?.username || 'usuario desconocido'}
    </small></p>
    <div class="mt-4 d-flex flex-column flex-md-row gap-2">
      <a href="index.html" class="btn btn-success">Ver anuncios</a>
      ${
        esAutor
          ? `<button id="delete-button" class="btn btn-danger">Eliminar anuncio</button>`
          : ''
      }
    </div>
  `;

  return {
    element: container,
    deleteButton: esAutor ? container.querySelector("#delete-button") : null
  };
}
