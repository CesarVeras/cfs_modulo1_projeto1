import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

	aberto: boolean = false;

	alternarAberto() {
		this.aberto = !this.aberto;
	}
}
