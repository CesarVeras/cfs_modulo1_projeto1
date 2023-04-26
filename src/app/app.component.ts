import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogadoService } from './shared/services/logado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  logado;

  constructor(private router: Router, private ls: LogadoService) {
    this.logado = this.ls.getLogado();
    ls.eventEmitter.subscribe(() => {
      this.logado = !this.logado;
    });
  }
}
