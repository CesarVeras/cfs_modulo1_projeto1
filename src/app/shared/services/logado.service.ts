import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogadoService {
  eventEmitter = new EventEmitter();

  constructor() {}

  emitirEvento() {
    this.eventEmitter.emit();
  }
}
