import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-medicamento',
  templateUrl: './cadastro-medicamento.component.html',
  styleUrls: ['./cadastro-medicamento.component.css']
})
export class CadastroMedicamentoComponent {
	form: any;

  constructor(fb: FormBuilder, private ls: LocalStorageService, private router: Router) {
    this.form = fb.group(
      {
        nome: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(80)]],
        data: ['', [Validators.required]],
        hora: ['', [Validators.required]],
				tipo: ['', [Validators.required]],
				quantidade: ['', [Validators.required]],
				unidade: ['', [Validators.required]],
				observacoes: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8000)]]
      },
    );
  }

  get fc(): any {
    return this.form.controls;
  }

  cadastrar() {
		// TODO desenvolver comportamento de cadastro de medicamentos.
  }
}
