import { Component } from '@angular/core'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

import { LoginModalComponent } from '../../authentication/login-modal/login-modal.component'
import { RegisterModalComponent } from '../../authentication/register-modal/register-modal.component'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  public faLogin = faSignInAlt
  public faRegister = faUserPlus

  constructor (private modalService: NgbModal) {
  }

  openRegisterModal() {
    const registerRef = this.modalService.open(RegisterModalComponent)
    registerRef.result.then((result) => {
      console.log(result)
    }).catch((error) => {
      console.log(error)
    })
  }

  openLoginModal() {
    const loginRef = this.modalService.open(LoginModalComponent)
    loginRef.result.then((result) => {
      console.log(result)
    }).catch((error) => {
      console.log(error)
    })
  }
}
