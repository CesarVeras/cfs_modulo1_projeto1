import { Injectable } from '@angular/core';
import { Medicamento } from '../models/medicamento';

@Injectable({
  providedIn: 'root',
})
export class MedicamentoService {
  constructor() {}

  getMedicamentos() {
    return JSON.parse(window.localStorage.getItem('medicamentos') || '[]');
  }

  setMedicamentos(medicamentos: Array<Medicamento>) {
    window.localStorage.setItem('medicamentos', JSON.stringify(medicamentos));
  }

  adicionarMedicamento(medicamento: Medicamento) {
    let medicamentos = this.getMedicamentos();
    medicamentos.push(medicamento);
    this.setMedicamentos(medicamentos);
  }

  editarMedicamento(medicamento: Medicamento) {
    let medicamentos = this.getMedicamentos();
    let i = window.history.state.i;
    medicamentos[i] = medicamento;
    this.setMedicamentos(medicamentos);
  }

  removerMedicamento(medicamento: Medicamento) {
    let medicamentos = this.getMedicamentos();
    let index = medicamentos.findIndex((m: Medicamento) => {
      return m.nome === medicamento.nome;
    });
    if (index === -1) return;
    medicamentos.splice(index, 1);
    this.setMedicamentos(medicamentos);
  }
}
