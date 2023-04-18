import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-medicamento',
  templateUrl: './cadastro-medicamento.component.html',
  styleUrls: ['./cadastro-medicamento.component.css'],
})
export class CadastroMedicamentoComponent {
  form: any;
  tipos: Array<string> = [
    'Cápsula',
    'Comprimido',
    'Creme',
    'Gel',
    'Inalação',
    'Injeção',
    'Liquido',
    'Spray',
  ];
  unidades: Array<string> = ['mg', 'mcg', 'g', 'mL', '%'];
	medicamentos: Array<Object>;

  constructor(
    fb: FormBuilder,
    private ls: LocalStorageService,
    private router: Router
  ) {
		this.medicamentos = ls.getMedicamentos();

		let d = new Date();
		let hora = d.getHours();
    let momento = hora < 10 ? `0${hora}` : hora;
		let min = d.getMinutes();
		momento += `:` + (min < 10 ? `0${min}` : min);

    this.form = fb.group({
      nome: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(80),
        ],
      ],
      data: [d.toISOString().split('T')[0], [Validators.required]],
      hora: [momento, [Validators.required]],
      tipo: [-1, [Validators.required]],
      quantidade: ['', [Validators.required]],
      unidade: [-1, [Validators.required]],
      observacoes: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(8000),
        ],
      ],
    });
  }

  get fc(): any {
    return this.form.controls;
  }

  cadastrar() {
    // TODO desenvolver comportamento de cadastro de medicamentos.
		if (this.form.invalid) return;
		console.log(this.form.value);
		this.medicamentos.push(this.form.value);
		this.ls.setMedicamentos(this.medicamentos);
		this.form.reset();
  }
}
