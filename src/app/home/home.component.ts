import { Component } from '@angular/core';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { Paciente } from '../shared/models/paciente';
import { Medicamento } from '../shared/models/medicamento';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
	pacientes: Array<Paciente>;
	medicamentos: Array<Medicamento>;

	constructor(private ls: LocalStorageService) {
		this.pacientes = ls.getPacientes();
		this.medicamentos = ls.getMedicamentos();
	}

	getIdadePaciente(paciente: any): string {
		const anoNascimento = paciente.dataNascimento.split('-')[0];
		let idade = new Date().getFullYear() - Number(anoNascimento);
		return `${idade}`;
	}
}
