import "../styles/index.css";

const logado = localStorage.getItem("token") !== null;

document
  .querySelectorAll<HTMLElement>("[data-visitante]")
  .forEach((elemento) => {
    elemento.hidden = logado;
  });

document.querySelectorAll<HTMLElement>("[data-logado]").forEach((elemento) => {
  elemento.hidden = !logado;
});
