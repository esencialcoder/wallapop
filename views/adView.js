export function buildAdView(ad) {
  const newAdElement = document.createElement("div");
  newAdElement.classList.add("col-md-4");

  newAdElement.innerHTML = `
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">${ad.name}</h5>
        <p class="card-text">${ad.description}</p>
        <p class="card-text fw-bold">${ad.price} €</p>
      </div>
    </div>
  `;

  return newAdElement;
}
