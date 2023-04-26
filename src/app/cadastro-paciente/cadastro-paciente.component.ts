import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { estados, estadosCivis, generos } from '../shared/utils';
import { Paciente } from '../shared/models/paciente';
import { PacienteService } from '../shared/services/paciente.service';
import { LogadoService } from '../shared/services/logado.service';

@Component({
  selector: 'app-cadastro-paciente',
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['./cadastro-paciente.component.css'],
})
export class CadastroPacienteComponent {
  form: any;
  pacienteSelecionado: Paciente;
  editar: boolean;

  fields: any;
  enderecoFields: any;

  Object = Object;

  constructor(
    fb: FormBuilder,
    private ps: PacienteService,
    private router: Router,
    private ls: LogadoService
  ) {
    this.ls.tituloAlterou('Cadastro de paciente');

    this.pacienteSelecionado = window.history.state.paciente || {};
    this.editar = window.history.state.editar || false;

    this.form = fb.group({
      nome: [
        this.pacienteSelecionado?.nome || '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(80),
        ],
      ],
      genero: [this.pacienteSelecionado?.genero || '', [Validators.required]],
      dataNascimento: [
        this.pacienteSelecionado?.dataNascimento || '',
        [Validators.required],
      ],
      cpf: [
        this.pacienteSelecionado?.cpf || '',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
        ],
      ],
      rg: [
        this.pacienteSelecionado?.rg || '',
        [Validators.required, Validators.maxLength(20)],
      ],
      estadoCivil: [
        this.pacienteSelecionado?.estadoCivil || '',
        [Validators.required],
      ],
      telefone: [
        this.pacienteSelecionado?.telefone || '',
        [Validators.required],
      ],
      email: [
        this.pacienteSelecionado?.email || '',
        [Validators.required, Validators.email],
      ],
      naturalidade: [
        this.pacienteSelecionado?.naturalidade || '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
        ],
      ],
      contatoEmergencia: [
        this.pacienteSelecionado?.contatoEmergencia || '',
        [Validators.required],
      ],
      alergias: [this.pacienteSelecionado?.alergias || '', []],
      cuidadosEspecificos: [
        this.pacienteSelecionado?.cuidadosEspecificos || '',
        [],
      ],
      convenio: [this.pacienteSelecionado?.convenio || '', []],
      numeroConvenio: [this.pacienteSelecionado?.numeroConvenio || '', []],
      validadeConvenio: [this.pacienteSelecionado?.validadeConvenio || '', []],
      endereco: fb.group({
        cep: [
          this.pacienteSelecionado?.endereco?.cep || '',
          [Validators.required],
        ],
        cidade: [
          this.pacienteSelecionado?.endereco?.cidade || '',
          [Validators.required],
        ],
        estado: [
          this.pacienteSelecionado?.endereco?.estado || '',
          [Validators.required],
        ],
        logradouro: [
          this.pacienteSelecionado?.endereco?.logradouro || '',
          [Validators.required],
        ],
        numero: [
          this.pacienteSelecionado?.endereco?.numero || '',
          [Validators.required],
        ],
        complemento: [
          this.pacienteSelecionado?.endereco?.complemento || '',
          [Validators.required],
        ],
        bairro: [
          this.pacienteSelecionado?.endereco?.bairro || '',
          [Validators.required],
        ],
        referencia: [this.pacienteSelecionado?.endereco?.referencia || '', []],
      }),
    });
    this.fields = [
      {
        label: 'Nome Completo',
        id: 'nome',
        classes: { grande: true },
        errorsMessage: {
          required: 'Campo obrigatório.',
          minlength: 'O nome precisa ter pelo menos 4 caracteres.',
          maxlength: 'O nome deve ter no máximo 80 caracteres.',
        },
        fc: this.fc.nome,
      },
      {
        label: 'Gênero',
        id: 'genero',
        type: 'select',
        opcoes: generos,
        value: this.pacienteSelecionado?.genero,
        errorsMessage: {
          required: 'Campo obrigatório.',
        },
        fc: this.fc.genero,
      },
      {
        label: 'Estado Civil',
        id: 'estadoCivil',
        type: 'select',
        opcoes: estadosCivis,
        value: this.pacienteSelecionado?.estadoCivil,
        errorsMessage: {
          required: 'Campo obrigatório.',
        },
        fc: this.fc.estadoCivil,
      },
      {
        label: 'Email',
        id: 'email',
        type: 'email',
        classes: { grande: true },
        errorsMessage: {
          required: 'Campo obrigatório.',
          email: 'O formato do email é inválido.',
        },
        fc: this.fc.email,
      },
      {
        label: 'CPF',
        id: 'cpf',
        mask: '000.000.000-00',
        errorsMessage: {
          required: 'Campo obrigatório.',
          minlength: 'O CPF precisa ter 11 caracteres.',
          maxlength: 'O CPF precisa ter 11 caracteres.',
        },
        fc: this.fc.cpf,
      },
      {
        label: 'RG',
        id: 'rg',
				mask: '0.000.000',
        errorsMessage: {
          required: 'Campo obrigatório.',
          minlength: 'O RG precisa ter no máximo 20.',
        },
        fc: this.fc.rg,
      },
      {
        label: 'Data de Nascimento',
        id: 'dataNascimento',
        type: 'date',
        errorsMessage: {
          required: 'Campo obrigatório.',
        },
        fc: this.fc.dataNascimento,
      },
      {
        label: 'Telefone',
        id: 'telefone',
				mask: '(00) 0000-0000||(00) 00000-0000',
        errorsMessage: {
          required: 'Campo obrigatório.',
        },
        fc: this.fc.telefone,
      },
      {
        label: 'Naturalidade',
        id: 'naturalidade',
        classes: { grande: true },
        value: this.pacienteSelecionado.naturalidade,
        errorsMessage: {
          required: 'Campo obrigatório.',
          minlength: 'A naturalidade precisar ter mais que 5 caracteres.',
          maxlength: 'A naturalidade precisar ter no máximo 100 caracteres.',
        },
        fc: this.fc.naturalidade,
      },
      {
        label: 'Alergias',
        id: 'alergias',
        classes: { grande: true },
        fc: this.fc.alergias,
      },
      {
        label: 'Contato de Emergência',
        id: 'contatoEmergencia',
				mask: '(00) 0000-0000||(00) 00000-0000',
        errorsMessage: {
          required: 'Campo obrigatório.',
        },
        fc: this.fc.contatoEmergencia,
      },
      {
        label: 'Cuidados Específicos',
        id: 'cuidadosEspecificos',
        fc: this.fc.cuidadosEspecificos,
      },
      {
        label: 'Convênio',
        id: 'convenio',
        fc: this.fc.convenio,
      },
      {
        label: 'Validade do Convênio',
        id: 'validadeConvenio',
        type: 'month',
        fc: this.fc.validadeConvenio,
      },
    ];
    this.enderecoFields = [
      {
        label: 'CEP',
        id: 'cep',
				mask: '00000-000',
        errorsMessage: {
          required: 'O campo é obrigatório',
        },
        fc: this.fc.endereco.controls.cep,
      },
      {
        label: 'Cidade',
        id: 'cidade',
        errorsMessage: {
          required: 'O campo é obrigatório',
        },
        fc: this.fc.endereco.controls.cidade,
      },
      {
        label: 'Estado',
        id: 'estado',
        errorsMessage: {
          required: 'O campo é obrigatório',
        },
        fc: this.fc.endereco.controls.estado,
      },
      {
        label: 'Logradouro',
        id: 'logradouro',
        errorsMessage: {
          required: 'O campo é obrigatório',
        },
        fc: this.fc.endereco.controls.logradouro,
      },
      {
        label: 'Número',
        id: 'numero',
				mask: '0*',
        type: 'number',
        errorsMessage: {
          required: 'O campo é obrigatório',
        },
        fc: this.fc.endereco.controls.numero,
      },
      {
        label: 'Complemento',
        id: 'complemento',
        errorsMessage: {
          required: 'O campo é obrigatório',
        },
        fc: this.fc.endereco.controls.complemento,
      },
      {
        label: 'Bairro',
        id: 'bairro',
        errorsMessage: {
          required: 'O campo é obrigatório',
        },
        fc: this.fc.endereco.controls.bairro,
      },
      {
        label: 'Ponto de Referência',
        id: 'referencia',
        errorsMessage: {},
        fc: this.fc.endereco.controls.referencia,
      },
    ];
  }

  ngOnInit(): void {
    this.fc.endereco.get('cep').valueChanges.subscribe((value: string) => {
      if (value?.length === 8)
        fetch(`https://viacep.com.br/ws/${value}/json/`)
          .then((data) => data.json())
          .then((data) => {
            this.fc.endereco.get('bairro').setValue(data.bairro);
            this.fc.endereco.get('cidade').setValue(data.localidade);
            this.fc.endereco.get('logradouro').setValue(data.logradouro);
            this.fc.endereco
              .get('estado')
              .setValue(estados[data.uf.toLowerCase()]);
          });
    });
  }

  get fc(): any {
    return this.form.controls;
  }

  cadastrar() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    if (this.editar) {
      this.ps.editarPaciente(this.form.value);
    } else {
      this.ps.adicionarPaciente(this.form.value);
    }
    this.form.reset();
    this.router.navigate(['/home']);
  }

  deletarPaciente() {
    if (!this.editar) return;
    this.ps.removerPaciente(this.pacienteSelecionado);
    this.form.reset();
    this.router.navigate(['/home']);
  }
}
