import { Component } from '@angular/core';
import { Paciente } from '../shared/models/paciente';
import { PacienteService } from '../shared/services/paciente.service';
import { Medicamento } from '../shared/models/medicamento';
import { MedicamentoService } from '../shared/services/medicamento.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  pacientes: Array<Paciente>;
  medicamentos: Array<Medicamento>;

  constructor(
    private ps: PacienteService,
    private ms: MedicamentoService
  ) {
    this.pacientes = ps.getPacientes();
    this.medicamentos = ms.getMedicamentos();
  }

  getIdadePaciente(paciente: any): string {
    const anoNascimento = paciente.dataNascimento.split('-')[0];
    let idade = new Date().getFullYear() - Number(anoNascimento);
    return `${idade}`;
  }
}
