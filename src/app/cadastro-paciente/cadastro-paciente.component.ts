import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-paciente',
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['./cadastro-paciente.component.css'],
})
export class CadastroPacienteComponent implements OnInit {
  form: any;
  generos: Array<String> = ['Masculino', 'Feminino', 'Outro'];
  estadosCivis: Array<string> = [
    'Solteiro',
    'Casado',
    'União estável',
    'Divorciado',
    'Viúvo',
  ];

  dfs: any = {
    rr: 'Roraima',
    ap: 'Amapá',
    am: 'Amazonas',
    pa: 'Pará',
    ac: 'Acre',
    ro: 'Rondônia',
    to: 'Tocantins',
    ma: 'Maranhão',
    pi: 'Piauí',
    ce: 'Ceará',
    rn: 'Rio Grande do Norte',
    pb: 'Paraíba',
    pe: 'Pernambuco',
    al: 'Alagoas',
    se: 'Sergipe',
    ba: 'Bahia',
    mt: 'Mato Grosso',
    df: 'Distrito Federal',
    go: 'Goiás',
    ms: 'Mato Grosso do Sul',
    mg: 'Minas Gerais',
    es: 'Espírito Santo',
    rj: 'Rio de Janeiro',
    sp: 'São Paulo',
    pr: 'Paraná',
    sc: 'Santa Catarina',
    rs: 'Rio Grande do sul',
  };

  pacientes: Array<Object>;

  fields: any;
  enderecoFields: any;

  Object = Object;

  constructor(
    fb: FormBuilder,
    private ls: LocalStorageService,
    private router: Router
  ) {
    this.pacientes = ls.getPacientes();

    this.form = fb.group({
      nome: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(80),
        ],
      ],
      genero: ['', [Validators.required]],
      dataNascimento: ['', [Validators.required]],
      cpf: [
        '',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
        ],
      ],
      rg: ['', [Validators.required, Validators.maxLength(20)]],
      estadoCivil: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      naturalidade: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
        ],
      ],
      contatoEmergencia: ['', [Validators.required]],
      alergias: ['', []],
      cuidadosEspecificos: ['', []],
      convenio: ['', []],
      numeroConvenio: ['', []],
      validadeConvenio: ['', []],
      endereco: fb.group({
        cep: ['', [Validators.required]],
        cidade: ['', [Validators.required]],
        estado: ['', [Validators.required]],
        logradouro: ['', [Validators.required]],
        numero: ['', [Validators.required]],
        complemento: ['', [Validators.required]],
        bairro: ['', [Validators.required]],
        referencia: ['', []],
      }),
    });

    console.log(this.form.get('endereco'));

    this.fields = [
      {
        label: 'Nome Completo',
        id: 'nome',
        classes: { grande: true },
        errorsMessage: {
          required: 'O campo é obrigatório.',
          minlength: 'O nome precisa ter pelo menos 4 caracteres.',
          maxlength: 'O nome deve ter no máximo 80 caracteres.',
        },
        fc: this.fc.nome,
      },
      {
        label: 'Gênero',
        id: 'genero',
        type: 'select',
        opcoes: this.generos,
        errorsMessage: {
          required: 'O campo é obrigatório.',
        },
        fc: this.fc.genero,
      },
      {
        label: 'Estado Civil',
        id: 'estadoCivil',
        type: 'select',
        opcoes: this.estadosCivis,
        errorsMessage: {
          required: 'O campo é obrigatório.',
        },
        fc: this.fc.estadoCivil,
      },
      {
        label: 'Email',
        id: 'email',
        type: 'email',
        classes: { grande: true },
        errorsMessage: {
          required: 'O campo é obrigatório.',
          email: 'O formato do email é inválido.',
        },
        fc: this.fc.email,
      },
      {
        label: 'CPF',
        id: 'cpf',
        errorsMessage: {
          required: 'O campo é obrigatório.',
          minlength: 'O CPF precisa ter 11 caracteres.',
          maxlength: 'O CPF precisa ter 11 caracteres.',
        },
        fc: this.fc.cpf,
      },
      {
        label: 'RG',
        id: 'rg',
        errorsMessage: {
          required: 'O campo é obrigatório.',
          minlength: 'O RG precisa ter no máximo 20.',
        },
        fc: this.fc.rg,
      },
      {
        label: 'Data de Nascimento',
        id: 'dataNascimento',
        type: 'date',
        errorsMessage: {
          required: 'O campo é obrigatório.',
        },
        fc: this.fc.dataNascimento,
      },
      {
        label: 'Telefone',
        id: 'telefone',
        errorsMessage: {
          required: 'O campo é obrigatório.',
        },
        fc: this.fc.telefone,
      },
      {
        label: 'Naturalidade',
        id: 'naturalidade',
        classes: { grande: true },
        errorsMessage: {
          required: 'O campo é obrigatório.',
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
        errorsMessage: {
          required: 'O campo é obrigatório.',
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
            console.log(data);
            this.fc.endereco.get('bairro').setValue(data.bairro);
            this.fc.endereco.get('cidade').setValue(data.localidade);
            this.fc.endereco.get('logradouro').setValue(data.logradouro);
            this.fc.endereco
              .get('estado')
              .setValue(this.dfs[data.uf.toLowerCase()]);
          });
    });
  }

  get fc(): any {
    return this.form.controls;
  }

  cadastrar() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    console.log(this.form.value);
    this.pacientes.push(this.form.value);
    this.ls.setPacientes(this.pacientes);
    this.form.reset();
  }
}
