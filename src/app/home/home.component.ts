import { Component } from '@angular/core';
import { Paciente } from '../shared/models/paciente';
import { PacienteService } from '../shared/services/paciente.service';
import { Medicamento } from '../shared/models/medicamento';
import { MedicamentoService } from '../shared/services/medicamento.service';
import { LogadoService } from '../shared/services/logado.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  pacientes: Array<Paciente>;
  medicamentos: Array<Medicamento>;
  busca = '';
  buscando = false;
  resultadoBusca: Array<Paciente>;

  constructor(
    private ps: PacienteService,
    private ms: MedicamentoService,
    private ls: LogadoService
  ) {
    this.ls.tituloAlterou('Inicio');

    this.resultadoBusca = [];
    this.pacientes = ps.getPacientes();
    this.medicamentos = ms.getMedicamentos();
  }

  buscarPaciente() {
    this.buscando = this.busca.length > 0;
    this.resultadoBusca = this.pacientes.filter((paciente) =>
      paciente.nome.includes(this.busca)
    );
  }

  getIdadePaciente(paciente: any): string {
    const anoNascimento = paciente.dataNascimento.split('-')[0];
    let idade = new Date().getFullYear() - Number(anoNascimento);
    return `${idade}`;
  }
}
