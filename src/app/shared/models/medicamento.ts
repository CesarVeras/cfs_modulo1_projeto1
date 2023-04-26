import { Paciente } from './paciente';

export interface Medicamento {
  nome: string;
  data: string;
  hora: string;
  tipo: number;
  quantidade: number;
  unidade: number;
  observacoes: string;
  paciente: Paciente;
}
