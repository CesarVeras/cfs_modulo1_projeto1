import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { ConfirmarSenha } from '../shared/validators/confirmar-senha.validators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-medico',
  templateUrl: './cadastro-medico.component.html',
  styleUrls: ['./cadastro-medico.component.css'],
})
export class CadastroMedicoComponent {
  form: any;
  medicos: Array<any> = [];

  constructor(fb: FormBuilder, private ls: LocalStorageService, private router: Router) {
    this.form = fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required, Validators.minLength(11)]],
        confirmarSenha: ['', [Validators.required, Validators.minLength(11)]],
      },
      { validators: [ConfirmarSenha.confirmarSenhaValidations] }
    );
    this.medicos = ls.getMedicos();
  }

  get fc(): any {
    return this.form.controls;
  }

  cadastrar() {
    if (this.form.invalid) return;
		const obj = {'email': this.form.value.email, 'senha': this.form.value.senha};
    this.medicos.push(obj);
    this.ls.setMedicos(this.medicos);
		this.router.navigate(['/login']);
		this.form.reset();
  }
}
