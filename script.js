const botonTema = document.querySelector("#cambiar-tema");

botonTema.addEventListener("click", () => {
  const temaClaroActivo = document.documentElement.getAttribute("data-tema") === "claro";

  if (temaClaroActivo) {
    document.documentElement.removeAttribute("data-tema");
  } else {
    document.documentElement.setAttribute("data-tema", "claro");
  }

  const accionTema = temaClaroActivo ? "claro" : "oscuro";
  botonTema.textContent = temaClaroActivo ? "Modo claro" : "Modo oscuro";
  botonTema.setAttribute("aria-label", `Cambiar a modo ${accionTema}`);
  botonTema.setAttribute("title", `Cambiar a modo ${accionTema}`);
  botonTema.setAttribute("aria-pressed", String(temaClaroActivo));
});
