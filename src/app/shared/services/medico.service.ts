import { Injectable } from '@angular/core';
import { Medico } from '../models/medico';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor() { }

	getMedicos() {
    return JSON.parse(window.localStorage.getItem('medicos') || '[]');
  }

  setMedicos(medicos: Array<Medico>) {
    window.localStorage.setItem('medicos', JSON.stringify(medicos));
  }

	adicionarMedico(medico: Medico) {
		let medicos = this.getMedicos();
		medicos.push(medico);
		this.setMedicos(medicos);
	}

	editarMedico(medico: Medico) {
		let medicos = this.getMedicos();
		let i = window.history.state.i;
		medicos[i] = medico;
		this.setMedicos(medicos);
	}

	removerMedico(medico: Medico) {
		let medicos = this.getMedicos();
		let index = medicos.findIndex((m: Medico) => {
			return m.email === medico.email
		});
		if (index === -1) return;
		medicos.splice(index, 1);
		this.setMedicos(medicos);
	}
}
