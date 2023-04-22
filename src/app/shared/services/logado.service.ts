import { EventEmitter, Injectable } from '@angular/core';
import { Medico } from '../models/medico';

@Injectable({
  providedIn: 'root',
})
export class LogadoService {
  eventEmitter = new EventEmitter();

  constructor() {}

  emitirEvento() {
    this.eventEmitter.emit();
  }

	getLogado() {
    return JSON.parse(window.localStorage.getItem('medicoLogado') || 'null');
  }

  setLogado(medico: Medico | null) {
    window.localStorage.setItem('medicoLogado', JSON.stringify(medico));
  }
}
