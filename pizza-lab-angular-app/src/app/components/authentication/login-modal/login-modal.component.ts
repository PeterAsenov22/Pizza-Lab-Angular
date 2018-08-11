import { Component } from '@angular/core'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { FormBuilder, Validators } from '@angular/forms'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html'
})
export class LoginModalComponent {
  public loginForm
  public faWindowClose = faWindowClose

  constructor(
    public activeModal: NgbActiveModal,
    public formBuilder: FormBuilder
  ) {
    this.createForm()
  }

  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }

  public submitForm() {
    this.activeModal.close(this.loginForm.value)
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }
}
