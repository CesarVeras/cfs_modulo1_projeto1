import { Component } from '@angular/core';

import { Validators, FormBuilder } from '@angular/forms';
import { LogadoService } from '../shared/services/logado.service';
import { Router } from '@angular/router';
import { Medico } from '../shared/models/medico';
import { MedicoService } from '../shared/services/medico.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: any;
  medicos: Array<Medico> = [];

  constructor(
    fb: FormBuilder,
    private ls: LogadoService,
		private ms: MedicoService,
		private router: Router
  ) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]],
    });
    this.medicos = ms.getMedicos();
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
    this.ls.emitirEvento();
		this.router.navigate(['/home']);
  }
}
