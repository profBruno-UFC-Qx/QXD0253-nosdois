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
