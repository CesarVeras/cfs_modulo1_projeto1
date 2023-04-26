import { Endereco } from "./endereco";

export interface Paciente {
	nome: string,
	genero: string,
	dataNascimento: string,
	cpf: string, 
	rg: string,
	estadoCivil: string,
	telefone: string,
	email: string,
	naturalidade: string,
	contatoEmergencia: string,
	alergias: string,
	cuidadosEspecificos?: string,
	convenio?: string,
	numeroConvenio?: string,
	validadeConvenio?: string,
	endereco: Endereco
}
