export interface Animal {
  id: number;
  documentId: string;
  nome: string;
  brinco: string | null;
  categoria: "vaca" | "bezerro" | "garrote" | "novilho" | null;
  sexo: "femea" | "macho" | null;
  dataNascimento: string | null;
  ativo: boolean;
  motivoInativacao: "venda" | "morte" | "descarte" | null;
}

export interface RegistroProducao {
  id: number;
  documentId: string;
  data: string;
  volumeLitros: number;
  animal?: Animal | null;
}

export interface Resposta<T> {
  data: T;
}

export type Papel = "produtor" | "vaqueiro" | (string & {});

export interface PapelUsuario {
  id: number;
  documentId?: string;
  name: string;
  type: string;
  description?: string | null;
}

export interface Usuario {
  id: number;
  documentId?: string;
  username: string;
  email: string;
  provider?: string;
  confirmed?: boolean;
  blocked?: boolean;
  role?: PapelUsuario | null;
}

export interface AuthResposta {
  jwt: string;
  user: Usuario;
}
