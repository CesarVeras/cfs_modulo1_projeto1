import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmarSenha } from '../shared/validators/confirmar-senha.validators';
import { Router } from '@angular/router';
import { MedicoService } from '../shared/services/medico.service';

@Component({
  selector: 'app-cadastro-medico',
  templateUrl: './cadastro-medico.component.html',
  styleUrls: ['./cadastro-medico.component.css'],
})
export class CadastroMedicoComponent {
  form: any;
  fields: Array<any>;

  constructor(
    fb: FormBuilder,
    private ms: MedicoService,
    private router: Router
  ) {
    this.form = fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required, Validators.minLength(11)]],
        confirmarSenha: ['', [Validators.required, Validators.minLength(11)]],
      },
      { validators: [ConfirmarSenha.confirmarSenhaValidations] }
    );
    this.fields = [
      {
        id: 'email',
        label: 'Email',
				type: 'email',
        errorsMessage: {
          required: 'Campo obrigatório.',
          email: 'Formato de email inválido.',
        },
        fc: this.fc.email,
      },
			{
				id: 'senha',
				label: 'Senha',
				type: 'password',
				errorsMessage: {
					required: 'Campo obrigatório.',
					minlength: 'A senha precisa ter pelo menos 10 caracteres.',
				},
				fc: this.fc.senha
			},
			{
				id: 'confirmarSenha',
				label: 'Confirmar Senha',
				type: 'password',
				errorsMessage: {
					required: 'Campo obrigatório.',
					minlength: 'A confirmação de senha precisa ter pelo menos 10 caracteres.',
				},
				fc: this.fc.confirmarSenha
			},
    ];
  }

  get fc(): any {
    return this.form.controls;
  }

  cadastrar() {
    if (this.form.invalid) return;
    const obj = { email: this.form.value.email, senha: this.form.value.senha };
    this.ms.adicionarMedico(obj);
    this.form.reset();
    this.router.navigate(['/login']);
  }
}
