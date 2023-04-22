import { Injectable } from '@angular/core';
import { Paciente } from '../models/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor() { }

	getPacientes() {
    return JSON.parse(window.localStorage.getItem('pacientes') || '[]');
  }

  setPacientes(pacientes: Array<Paciente>) {
    window.localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }

	adicionarPaciente(paciente: Paciente) {
		let pacientes = this.getPacientes();
		pacientes.push(paciente);
		this.setPacientes(pacientes);
	}

	editarPaciente(paciente: Paciente) {
		let pacientes = this.getPacientes();
		let i = window.history.state.i;
		pacientes[i] = paciente;
		this.setPacientes(pacientes);
	}

	removerPaciente(paciente: Paciente) {
		let pacientes = this.getPacientes();
		let index = pacientes.findIndex((p: Paciente) => {
			return p.nome === paciente.nome
		});
		if (index === -1) return;
		pacientes.splice(index, 1);
		this.setPacientes(pacientes);
	}
}
