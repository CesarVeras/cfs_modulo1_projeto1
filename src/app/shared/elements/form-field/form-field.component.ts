import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css'],
})
export class FormFieldComponent {
	Object = Object;

  @Input() label: string = '';
  @Input() id: string = '';
	@Input() type?: string = 'text';
	@Input() form: any;
	@Input() formControlObject: any;
	@Input() opcoes?: Array<string>;
	@Input() errorsMessage: {[index: string]: string} = {
		required: 'O campo é obrigatório',
		minLength: `O ${this.label} precisa te no minimo X caracteres`
	};
}
