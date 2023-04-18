import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css'],
})
export class FormFieldComponent {
  @Input() label: string = '';
  @Input() id: string = '';
	@Input() errorsMessage: {[index: string]: string} = {
		required: 'O campo é obrigatório',
		minLength: `O ${this.label} precisa te no minimo X caracteres`
	};
	@Input() form: any;
	@Input() formControlObject: any;
	Object = Object;
	@Input() isSelect?: boolean = false;
	@Input() opcoes?: Array<string>;
}
