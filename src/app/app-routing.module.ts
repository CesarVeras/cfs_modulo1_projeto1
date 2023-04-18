import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroMedicoComponent } from './cadastro-medico/cadastro-medico.component';
import { CadastroMedicamentoComponent } from './cadastro-medicamento/cadastro-medicamento.component';
import { LogadoGuard } from './shared/guards/logado.guard';
import { DeslogadoGuard } from './shared/guards/deslogado.guard';
import { CadastroPacienteComponent } from './cadastro-paciente/cadastro-paciente.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: LoginComponent,
		canActivate: [DeslogadoGuard]
  },
  {
    path: 'cadastrar-medico',
    component: CadastroMedicoComponent,
  },
	{
		path: 'cadastrar-medicamento',
		component: CadastroMedicamentoComponent,
		canActivate: [LogadoGuard]
	},
	{
		path: 'cadastrar-paciente',
		component: CadastroPacienteComponent,
		canActivate: [LogadoGuard]
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
