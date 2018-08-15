import { Component } from '@angular/core'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { FormBuilder, Validators } from '@angular/forms'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { Subscription } from 'rxjs'

import { AuthenticationService } from '../../../core/services/authentication/authentication.service'
import { BaseComponent } from '../../base.component'
import { LoginModel } from '../models/LoginModel'

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html'
})
export class LoginModalComponent extends BaseComponent {
  protected loginForm
  protected faWindowClose = faWindowClose
  private subscription$: Subscription

  constructor(
    protected activeModal: NgbActiveModal,
    protected formBuilder: FormBuilder,
    private authService: AuthenticationService
  ) {
    super()
    this.createForm()
  }

  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }

  public submitForm() {
    if (this.loginForm.invalid) {
      return
    }

    const formValue = this.loginForm.value
    const loginModel = new LoginModel(formValue.email, formValue.password)
    this.subscription$ = this.authService.login(loginModel)
      .subscribe(() => this.activeModal.close())
    this.subscriptions.push(this.subscription$)
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }
}
