import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './shared/services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	logado;

	constructor(private router: Router, private ls: LocalStorageService) {
		if (this.ls.getLogado()) {
			this.logado = true;
		} else {
			this.logado = false;
		}
	}

	deslogar() {
		this.ls.setLogado(null);
		this.router.navigate(['/login']);
	}
}
