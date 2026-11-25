import { api } from '../../../service/api';
import type { AuthResposta, Usuario } from '../../../types';

export const authService = {
  /**
   * Realiza login do usuário com e-mail/usuário e senha
   */
  async login(identifier: string, password: string): Promise<AuthResposta> {
    const response = await api.post<AuthResposta>('/auth/local', {
      identifier,
      password,
    });
    if (response.data.jwt) {
      localStorage.setItem('token', response.data.jwt);
      localStorage.setItem('usuario', JSON.stringify(response.data.user));
    }
    return response.data;
  },

  /**
   * Realiza o cadastro de um novo produtor
   */
  async cadastro(username: string, email: string, password: string): Promise<AuthResposta> {
    const response = await api.post<AuthResposta>('/auth/local/register', {
      username,
      email,
      password,
    });
    if (response.data.jwt) {
      localStorage.setItem('token', response.data.jwt);
      localStorage.setItem('usuario', JSON.stringify(response.data.user));
    }
    return response.data;
  },

  /**
   * Encerra a sessão removendo o token e os dados locais
   */
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
  },

  /**
   * Retorna os dados do usuário autenticado no momento
   */
  obterUsuario(): Usuario | null {
    const userStr = localStorage.getItem('usuario');
    if (!userStr) return null;
    try {
      return JSON.parse(userStr) as Usuario;
    } catch {
      return null;
    }
  },

  /**
   * Verifica se há um token salvo
   */
  estaAutenticado(): boolean {
    return !!localStorage.getItem('token');
  },
};

