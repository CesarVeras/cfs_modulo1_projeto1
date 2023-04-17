import { Component } from '@angular/core';

import { Validators, FormBuilder } from '@angular/forms';
import { LocalStorageService } from '../shared/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

	form: any;
	medicos: Array<any> = [];

	constructor(fb: FormBuilder, ls: LocalStorageService) {
		this.form = fb.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required]]
		});
		this.medicos = ls.getMedicos();
	}

	get fc(): any {
		return this.form.controls;
	}

	autenticar() {
		if (this.form.invalid) return;
		console.log(this.form);
		let found: boolean = this.medicos.some(medico => (this.form.value.email === medico.email) && (this.form.value.password === medico.password));
		// TODO liberar acesso
	}
}
