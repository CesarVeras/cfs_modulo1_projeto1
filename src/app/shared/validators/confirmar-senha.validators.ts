import { AbstractControl, ValidationErrors } from '@angular/forms';

export class ConfirmarSenha implements ValidationErrors {
  static confirmarSenhaValidations(
    control: AbstractControl
  ): ValidationErrors | null {
    const senha = control.get('password')?.value;
    const confirmarSenha = control.get('confirmPassword')?.value;
    if (senha === confirmarSenha) {
      return null;
    } else {
      return { confirmarSenha: true };
    }
  }
}
