export interface Resposta {
  id: string,
  resposta: string,
  score: number,
  selected?: boolean,
}

export interface Question {
  id?: string,
  pergunta: string,
  tipo: 'Multipla' | 'Unica' | 'Texto' | 'Numero',
  complemento?: string,
  respostas: Resposta[],
}
