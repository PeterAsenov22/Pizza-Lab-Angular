import {
   CanActivate,
   ActivatedRouteSnapshot,
   RouterStateSnapshot,
   Router
} from '@angular/router'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { AuthenticationService } from '../../services/authentication/authentication.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthenticationService,
    private router: Router ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean {

    if (this.authService.isAuthenticated()) {
      return true
    }

    this.router.navigate(['/'])
    return false
  }
}
