import { authService } from './authService';
import type { Papel } from '../types';

export const ROTAS = {
  inicio: '/index.html',
  login: '/src/pages/usuario/login-cadastro/login.html',
  cadastro: '/src/pages/usuario/login-cadastro/cadastro.html',
  animais: '/src/pages/animais/animais.html',
  producao: '/src/pages/producao/producao.html',
  historico: '/src/pages/historico/historico.html',
} as const;

export function obterPapel(): Papel | null {
  return authService.obterPapel();
}

export function temPapel(...papeisPermitidos: Papel[]): boolean {
  const papelAtual = obterPapel();
  if (!papelAtual) return false;
  const normalizado = papelAtual.toLowerCase();
  return papeisPermitidos.some((papel) => papel.toLowerCase() === normalizado);
}

export function ehProdutor(): boolean {
  return temPapel('produtor');
}

export function ehVaqueiro(): boolean {
  return temPapel('vaqueiro');
}

export function aplicarPermissoesPorPapel(raiz: ParentNode = document): void {
  raiz.querySelectorAll<HTMLElement>('[data-papel]').forEach((elemento) => {
    const atributo = elemento.dataset.papel ?? '';
    const papeis = atributo
      .split(',')
      .map((item) => item.trim().toLowerCase())
      .filter(Boolean);

    if (papeis.length === 0) return;
    elemento.hidden = !temPapel(...papeis);
  });
}


export function exigirAutenticacao(papeisPermitidos?: Papel[]): boolean {
  if (!authService.estaAutenticado()) {
    window.location.replace(ROTAS.login);
    return false;
  }

  if (papeisPermitidos && papeisPermitidos.length > 0 && !temPapel(...papeisPermitidos)) {
    window.location.replace(ROTAS.animais);
    return false;
  }

  aplicarPermissoesPorPapel();
  return true;
}

export function redirecionarSeAutenticado(destino: string = ROTAS.animais): boolean {
  if (authService.estaAutenticado()) {
    window.location.replace(destino);
    return true;
  }
  return false;
}

