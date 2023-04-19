import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroMedicoComponent } from './cadastro-medico/cadastro-medico.component';
import { CadastroMedicamentoComponent } from './cadastro-medicamento/cadastro-medicamento.component';
import { CadastroPacienteComponent } from './cadastro-paciente/cadastro-paciente.component';
import { FormFieldComponent } from './shared/elements/form-field/form-field.component';


@NgModule({
  declarations: [
    AppComponent,
		LoginComponent,
		CadastroMedicoComponent,
		CadastroMedicamentoComponent,
		CadastroPacienteComponent,
		FormFieldComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
