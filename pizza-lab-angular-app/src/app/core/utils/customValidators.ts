import { FormGroup } from '@angular/forms'

export default class CustomValidators {
  static passwordsDoMatch(registrationFormGroup: FormGroup) {
    const password = registrationFormGroup.controls.password.value
    const repeatPassword = registrationFormGroup.controls.confirmPassword.value

    if (repeatPassword.length <= 0) {
      return null
    }

    if (repeatPassword !== password) {
      return {
        mismatch: true
      }
    }

    return null
  }
}
