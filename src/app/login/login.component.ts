import { Component } from '@angular/core';

import { Validators, FormBuilder } from '@angular/forms';
import { LocalStorageService } from '../shared/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: any;
  medicos: Array<any> = [];

  constructor(fb: FormBuilder, private ls: LocalStorageService) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    });
    this.medicos = ls.getMedicos();
  }

  get fc(): any {
    return this.form.controls;
  }

  autenticar() {
    if (this.form.invalid) return;
		let elem = this.medicos.find(
      (medico) =>
        this.form.value.email === medico.email &&
        this.form.value.senha === medico.senha
    );
		this.ls.setLogado(elem || null);
    console.log(elem);
  }
}
