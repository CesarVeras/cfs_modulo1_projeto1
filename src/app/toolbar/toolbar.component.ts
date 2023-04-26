import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogadoService } from '../shared/services/logado.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  titulo: string = '';
  logado;
  email;

  constructor(private router: Router, private ls: LogadoService) {
    this.titulo = window.history.state.titulo || '';
    this.logado = this.ls.getLogado();
    this.ls.eventEmitter.subscribe(() => {
      this.logado = !this.logado;
    });
    if (this.logado) {
      this.email = this.logado.email.split('@')[0];
    }
  }

  deslogar() {
    this.ls.setLogado(null);
    this.ls.eventEmitter.emit();
    this.router.navigate(['/login']);
  }
}
