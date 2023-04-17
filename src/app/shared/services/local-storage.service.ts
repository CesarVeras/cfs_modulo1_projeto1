import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

	getMedicos() {
		return JSON.parse(window.localStorage.getItem('medicos') || '');
	}

	setMedicos(medicos: Array<any>) {
		window.localStorage.setItem('medicos', JSON.stringify(medicos));
	}
}
