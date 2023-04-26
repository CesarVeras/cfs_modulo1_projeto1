import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tipos as t, unidades as u } from '../shared/utils';
import { MedicamentoService } from '../shared/services/medicamento.service';
import { LogadoService } from '../shared/services/logado.service';

@Component({
  selector: 'app-cadastro-medicamento',
  templateUrl: './cadastro-medicamento.component.html',
  styleUrls: ['./cadastro-medicamento.component.css'],
})
export class CadastroMedicamentoComponent {
  form: any;

  tipos;
  unidades;
  fields: Array<any>;

  constructor(
    fb: FormBuilder,
    private ms: MedicamentoService,
    private router: Router,
		private ls: LogadoService
  ) {
		this.ls.tituloAlterou('Prescrever medicamento');

    this.tipos = t;
    this.unidades = u;

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
      tipo: ['', [Validators.required]],
      quantidade: ['', [Validators.required]],
      unidade: ['', [Validators.required]],
      observacoes: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(8000),
        ],
      ],
    });
    this.fields = [
      {
        id: 'nome',
        label: 'Nome',
        classes: { grande: true },
        errorsMessage: {
          required: 'Campo obrigatório.',
          minlength: 'O nome deve ter pelo menos 8 caracteres.',
          maxlength: 'O nome deve ter no máximo 80 caracteres.',
        },
        fc: this.fc.nome,
      },
      {
        id: 'data',
        label: 'Data',
        errorsMessage: {
          required: 'Campo obrigatório.',
        },
        fc: this.fc.data,
      },
      {
        id: 'hora',
        label: 'Hora',
        errorsMessage: {
          required: 'Campo obrigatório.',
        },
        fc: this.fc.hora,
      },
      {
        id: 'tipo',
        label: 'Tipo',
        type: 'select',
				opcoes: this.tipos,
        classes: { 'medio': true },
        errorsMessage: {
          required: 'Campo obrigatório.',
        },
        fc: this.fc.tipo,
      },
      {
        id: 'quantidade',
        label: 'Quantidade',
        classes: { 'medio': true },
        errorsMessage: {
          required: 'Campo obrigatório.',
        },
        fc: this.fc.quantidade,
      },
      {
        id: 'unidade',
        label: 'Unidade',
        type: 'select',
				opcoes: this.unidades,
        classes: { medio: true },
        errorsMessage: {
          required: 'Campo obrigatório.',
        },
        fc: this.fc.unidade,
      },
      {
        id: 'observacoes',
        label: 'Observações',
        type: 'textarea',
        classes: { full: true },
        errorsMessage: {
          required: 'Campo obrigatório.',
          minlength: 'As observações devem ter pelo menos 8 caracteres.',
          maxlength: 'As observações devem ter no máximo 8000 caracteres.',
        },
        fc: this.fc.observacoes,
      },
    ];
  }

  get fc(): any {
    return this.form.controls;
  }

  cadastrar() {
    if (this.form.invalid) return;
    this.ms.adicionarMedicamento(this.form.value);
    this.form.reset();
    this.router.navigate(['/home']);
  }
}
