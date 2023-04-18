import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  getMedicos() {
    return JSON.parse(window.localStorage.getItem('medicos') || '[]');
  }

  setMedicos(medicos: Array<any>) {
    window.localStorage.setItem('medicos', JSON.stringify(medicos));
  }

	getMedicamentos() {
		return JSON.parse(window.localStorage.getItem('medicamentos') || '[]');
	}

	setMedicamentos(medicamentos: Array<any>) {
		window.localStorage.setItem('medicamentos', JSON.stringify(medicamentos));
	}

  getLogado() {
    return JSON.parse(window.localStorage.getItem('usuarioLogado') || 'null');
  }

  setLogado(usuario: Object | null) {
    window.localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
  }
}
