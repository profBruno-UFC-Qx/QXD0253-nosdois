import '../styles/index.css';
import { authService } from '../service/authService';

const logado = authService.estaAutenticado();

document
  .querySelectorAll<HTMLElement>('[data-visitante]')
  .forEach((elemento) => {
    elemento.hidden = logado;
  });

document.querySelectorAll<HTMLElement>('[data-logado]').forEach((elemento) => {
  elemento.hidden = !logado;
});
