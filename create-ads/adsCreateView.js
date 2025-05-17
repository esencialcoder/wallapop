export function clearMessages(c) {
    c.innerHTML = "";
  }
  
  export function showLoading(c) {
    clearMessages(c);
    const sp = document.createElement("div");
    sp.className = "spinner-border text-primary";
    sp.setAttribute("role", "status");
    sp.innerHTML = '<span class="visually-hidden">Cargando...</span>';
    c.appendChild(sp);
  }
  
  export function showSuccessMessage(c, msg) {
    clearMessages(c);
    const d = document.createElement("div");
    d.className = "alert alert-success";
    d.textContent = msg;
    c.appendChild(d);
  }
  
  export function showErrorMessage(c, msg) {
    clearMessages(c);
    const d = document.createElement("div");
    d.className = "alert alert-danger";
    d.textContent = msg;
    c.appendChild(d);
  }
  