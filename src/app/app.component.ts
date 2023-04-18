import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './shared/services/local-storage.service';
import { LogadoService } from './shared/services/logado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  logado;

  constructor(
    private router: Router,
    private ls: LocalStorageService,
    private lo: LogadoService
  ) {
    if (this.ls.getLogado()) {
      this.logado = true;
    } else {
      this.logado = false;
    }
    lo.eventEmitter.subscribe(() => {
      this.logado = !this.logado;
    });
  }

  deslogar() {
    this.ls.setLogado(null);
    this.lo.eventEmitter.emit();
    this.router.navigate(['/login']);
  }
}
