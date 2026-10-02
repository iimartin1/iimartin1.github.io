const botonTema = document.querySelector("#cambiar-tema");
const raiz = document.documentElement;

function aplicarTema(claro) {
  if (claro) {
    raiz.setAttribute("data-tema", "claro");
  } else {
    raiz.removeAttribute("data-tema");
  }

  // El botón muestra la acción disponible, no el tema actual
  const destino = claro ? "oscuro" : "claro";
  botonTema.textContent = `Modo ${destino}`;
  botonTema.setAttribute("aria-label", `Cambiar a modo ${destino}`);
  botonTema.setAttribute("title", `Cambiar a modo ${destino}`);
}

botonTema.addEventListener("click", () => {
  const esClaro = raiz.getAttribute("data-tema") === "claro";
  aplicarTema(!esClaro);
});