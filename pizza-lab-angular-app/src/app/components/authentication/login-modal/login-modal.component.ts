import { Component } from '@angular/core'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { FormBuilder, Validators } from '@angular/forms'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

import { AuthenticationService } from '../../../core/services/authentication/authentication.service'
import { LoginModel } from '../models/LoginModel'

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html'
})
export class LoginModalComponent {
  public loginForm
  public faWindowClose = faWindowClose

  constructor(
    public activeModal: NgbActiveModal,
    public formBuilder: FormBuilder,
    private authService: AuthenticationService
  ) {
    this.createForm()
  }

  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }

  public submitForm() {
    const formValue = this.loginForm.value
    const loginModel = new LoginModel(formValue.email, formValue.password)
    this.authService.login(loginModel)
      .subscribe(() => this.activeModal.close())
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }
}
