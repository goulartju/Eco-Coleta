export interface DoacaoPayload {
  id?: string;
  matriculaId: string;
  escolaId: string;
  calendarioId: string;
  qtdLacre: number;
  qtdTampinha: number;
  data: string;
}

export interface DoacaoItem {
  id: string;
  matriculaId: string;
  qtdLacre: number;
  qtdTampinha: number;
}

export interface DoacoesPayload {
  escolaId: string;
  calendarioId: string;
  data: string;
  doacoes: DoacaoItem[];
}

export interface DoacoesFilter {
  calendarioId?: string;
  data?: string;
  escolaId?: string;
  turmaId?: string;
}

export interface Doacao{
  id?: string;
  matriculaId: string;
  alunoId: string;
  turmaId: string;
  escolaId: string;
  calendarioId: string;
  qtdLacre: number;
  qtdTampinha: number;
  lacres: number;
  tampinhas: number;
  data: string;
  nomeAluno: string;
  alunoAtivo?: boolean;
  nomeTurma: string;
  nomeEscola: string;
  nomeCalendario: string;
  anoEscolar: number;
}
