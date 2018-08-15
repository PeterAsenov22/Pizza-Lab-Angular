import { Component } from '@angular/core'
import CustomValidators from '../../../core/utils/customValidators'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { FormBuilder, Validators } from '@angular/forms'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

import { AuthenticationService } from '../../../core/services/authentication/authentication.service'
import { RegisterModel } from '../models/RegisterModel'

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html'
})
export class RegisterModalComponent {
  public registerForm
  public faWindowClose = faWindowClose

  constructor(
    public activeModal: NgbActiveModal,
    public formBuilder: FormBuilder,
    private authService: AuthenticationService
  ) {
    this.createForm()
  }

  get email() { return this.registerForm.get('email') }
  get username() { return this.registerForm.get('username') }
  get password() { return this.registerForm.get('password') }
  get confirmPassword() { return this.registerForm.get('confirmPassword') }

  public submitForm() {
    if (this.registerForm.invalid) {
      return
    }

    const formValue = this.registerForm.value
    const registerModel = new RegisterModel(formValue.email, formValue.username, formValue.password)
    this.authService.register(registerModel)
      .subscribe(() => {
        this.activeModal.close()
      })
  }

  private createForm() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: CustomValidators.passwordsDoMatch.bind(this)})
  }
}
