import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

	titulo: string = '';

	constructor() {
		this.titulo = window.history.state.titulo || '';
	}
}
