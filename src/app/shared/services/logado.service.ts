import { EventEmitter, Injectable } from '@angular/core';
import { Medico } from '../models/medico';

@Injectable({
  providedIn: 'root',
})
export class LogadoService {
  eventEmitter = new EventEmitter();
  eventoTitulo = new EventEmitter();

  constructor() {}

  emitirEvento() {
    this.eventEmitter.emit();
  }

  tituloAlterou(titulo: string) {
    this.eventoTitulo.emit(titulo);
  }

  getLogado() {
    return JSON.parse(window.localStorage.getItem('medicoLogado') || 'null');
  }

  setLogado(medico: Medico | null) {
    window.localStorage.setItem('medicoLogado', JSON.stringify(medico));
  }
}
