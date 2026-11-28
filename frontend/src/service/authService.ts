import axios from 'axios';
import { api } from './api';
import type { AuthResposta, Papel, Usuario } from '../types';

const CHAVE_TOKEN = 'token';
const CHAVE_USUARIO = 'usuario';
const CHAVE_PAPEL = 'papel';

interface StrapiErroDetalhe {
  path?: string[];
  message?: string;
}

interface StrapiErroPayload {
  error?: {
    message?: string;
    details?: {
      errors?: StrapiErroDetalhe[];
    };
  };
}

function normalizarPapel(usuario: Usuario | null): Papel | null {
  const bruto = usuario?.role?.type || usuario?.role?.name;
  if (!bruto) return null;
  return bruto.trim().toLowerCase();
}

async function sincronizarUsuarioComPapel(usuarioBase: Usuario): Promise<Usuario> {
  let usuarioCompleto = usuarioBase;

  try {
    const meResponse = await api.get<Usuario>('/users/me?populate=role');
    usuarioCompleto = meResponse.data;
  } catch (error) {
    console.warn(
      'Não foi possível consultar /users/me?populate=role; mantendo dados básicos do usuário.',
      error,
    );
  }

  localStorage.setItem(CHAVE_USUARIO, JSON.stringify(usuarioCompleto));

  const papel = normalizarPapel(usuarioCompleto);
  if (papel) {
    localStorage.setItem(CHAVE_PAPEL, papel);
  } else {
    localStorage.removeItem(CHAVE_PAPEL);
  }

  return usuarioCompleto;
}

function extrairMensagensStrapi(data: unknown): string[] {
  const payload = data as StrapiErroPayload | undefined;
  const mensagens: string[] = [];

  if (payload?.error?.message) {
    mensagens.push(payload.error.message);
  }

  const detalhes = payload?.error?.details?.errors;
  if (Array.isArray(detalhes)) {
    for (const item of detalhes) {
      if (item?.message) {
        const prefixo = item.path?.length ? `${item.path.join('.')}: ` : '';
        mensagens.push(`${prefixo}${item.message}`);
      }
    }
  }

  return mensagens;
}

/**
 * Converte erros de autenticação do Axios/Strapi em mensagens amigáveis em português.
 */
export function obterMensagemErroAuth(
  error: unknown,
  contexto: 'login' | 'cadastro',
): string {
  if (!axios.isAxiosError(error)) {
    return 'Ocorreu um erro inesperado. Tente novamente.';
  }

  if (!error.response) {
    return 'Não foi possível conectar ao servidor. Verifique se o backend está em execução.';
  }

  const { status, data } = error.response;
  const mensagens = extrairMensagensStrapi(data);
  const mensagemPrincipal = mensagens[0] ?? '';
  const textoCombinado = mensagens.join(' | ').toLowerCase();

  if (status === 429) {
    return 'Muitas tentativas em sequência. Aguarde alguns instantes e tente novamente.';
  }

  if (status >= 500) {
    return 'Erro interno no servidor. Tente novamente mais tarde.';
  }

  if (contexto === 'login') {
    if (textoCombinado.includes('invalid identifier or password')) {
      return 'Usuário/e-mail ou senha inválidos.';
    }
    if (textoCombinado.includes('not confirmed')) {
      return 'Sua conta ainda não foi confirmada. Verifique seu e-mail.';
    }
    if (textoCombinado.includes('blocked')) {
      return 'Sua conta está bloqueada. Entre em contato com o administrador.';
    }
    if (status === 401 || status === 403) {
      return 'Acesso não autorizado. Verifique suas credenciais.';
    }
    return mensagemPrincipal
      ? `Não foi possível entrar: ${mensagemPrincipal}`
      : 'Não foi possível entrar. Verifique os dados informados.';
  }

  if (
    textoCombinado.includes('already taken') ||
    textoCombinado.includes('already exists')
  ) {
    return 'Este e-mail ou nome de usuário já está em uso.';
  }

  if (
    textoCombinado.includes('valid email') ||
    textoCombinado.includes('email must be a valid')
  ) {
    return 'Informe um endereço de e-mail válido.';
  }

  if (
    textoCombinado.includes('email') &&
    (textoCombinado.includes('at least') || textoCombinado.includes('min'))
  ) {
    return 'O e-mail deve ter pelo menos 6 caracteres.';
  }

  if (
    textoCombinado.includes('username') &&
    (textoCombinado.includes('at least') || textoCombinado.includes('min'))
  ) {
    return 'O nome de usuário deve ter pelo menos 3 caracteres.';
  }

  if (
    textoCombinado.includes('password') &&
    (textoCombinado.includes('at least') || textoCombinado.includes('min'))
  ) {
    return 'A senha deve conter no mínimo 6 caracteres.';
  }

  return mensagemPrincipal
    ? `Não foi possível concluir o cadastro: ${mensagemPrincipal}`
    : 'Não foi possível concluir o cadastro. Verifique os dados informados.';
}

export const authService = {
  /**
   * Realiza login do usuário e sincroniza o papel via /users/me?populate=role.
   */
  async login(identifier: string, password: string): Promise<AuthResposta> {
    const response = await api.post<AuthResposta>('/auth/local', {
      identifier,
      password,
    });

    if (!response.data.jwt) {
      return response.data;
    }

    localStorage.setItem(CHAVE_TOKEN, response.data.jwt);
    const usuario = await sincronizarUsuarioComPapel(response.data.user);
    return { ...response.data, user: usuario };
  },

  /**
   * Realiza o cadastro de um novo usuário e sincroniza o papel via /users/me?populate=role.
   */
  async cadastro(
    username: string,
    email: string,
    password: string,
  ): Promise<AuthResposta> {
    const response = await api.post<AuthResposta>('/auth/local/register', {
      username,
      email,
      password,
    });

    if (!response.data.jwt) {
      return response.data;
    }

    localStorage.setItem(CHAVE_TOKEN, response.data.jwt);
    const usuario = await sincronizarUsuarioComPapel(response.data.user);
    return { ...response.data, user: usuario };
  },

  /**
   * Encerra a sessão removendo token, usuário e papel salvos localmente.
   */
  logout(): void {
    localStorage.removeItem(CHAVE_TOKEN);
    localStorage.removeItem(CHAVE_USUARIO);
    localStorage.removeItem(CHAVE_PAPEL);
  },

  /**
   * Retorna os dados do usuário autenticado no momento.
   */
  obterUsuario(): Usuario | null {
    const userStr = localStorage.getItem(CHAVE_USUARIO);
    if (!userStr) return null;
    try {
      return JSON.parse(userStr) as Usuario;
    } catch {
      return null;
    }
  },

  /**
   * Retorna o papel normalizado do usuário autenticado (ex.: 'produtor' ou 'vaqueiro').
   */
  obterPapel(): Papel | null {
    const papelSalvo = localStorage.getItem(CHAVE_PAPEL)?.trim().toLowerCase();
    if (papelSalvo) return papelSalvo;
    return normalizarPapel(this.obterUsuario());
  },

  /**
   * Verifica se há um token salvo.
   */
  estaAutenticado(): boolean {
    return Boolean(localStorage.getItem(CHAVE_TOKEN));
  },
};

