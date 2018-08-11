import { Component } from '@angular/core'
import CustomValidators from '../../../core/utils/customValidators'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { FormBuilder, Validators } from '@angular/forms'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html'
})
export class RegisterModalComponent {
  public registerForm
  public faWindowClose = faWindowClose

  constructor(
    public activeModal: NgbActiveModal,
    public formBuilder: FormBuilder
  ) {
    this.createForm()
  }

  get email() { return this.registerForm.get('email') }
  get username() { return this.registerForm.get('username') }
  get password() { return this.registerForm.get('password') }
  get confirmPassword() { return this.registerForm.get('confirmPassword') }

  public submitForm() {
    this.activeModal.close(this.registerForm.value)
  }

  private createForm() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
    }, { validator: CustomValidators.passwordsDoMatch.bind(this)})
  }
}
