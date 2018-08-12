import * as jwt_decode from 'jwt-decode'
import {
  HttpResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Router } from '@angular/router'
import { tap } from 'rxjs/operators'
import { ToastrService } from 'ngx-toastr'

import { AuthenticationService } from '../services/authentication/authentication.service'

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
  constructor (
    private authService: AuthenticationService,
    private toastr: ToastrService,
    private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.endsWith('/auth/login') || req.url.endsWith('/auth/signup')) {
      req = req.clone({
        setHeaders: {
          'Content-Type': 'application/json'
        }
      })
    } else {
      req = req.clone({
        setHeaders: {
          'Authorization': `Bearer ${}`,
          'Content-Type': 'application/json'
        }
      })
    }

    return next
      .handle(req)
      .pipe(tap((res: HttpEvent<any>) => {
        if (res instanceof HttpResponse && req.url.endsWith('/auth/login')) {
          this.saveToken(res.body)
        }

        if (res instanceof HttpResponse && res.body.success && req.url.endsWith('/auth/signup')) {
          this.toastr.success(res.body.message)
        }

      }))
  }

  private saveToken (data) {
    if (this.decodeToken(data.token)) {
      const authtoken = data.token
      // dispatch action to the store
      localStorage.setItem('authtoken', authtoken)
      this.toastr.success(data.message)
      // this.router.navigate(['/furniture/all'])
    } else {
      this.toastr.error('Invalid token', 'Warning!')
    }
  }

  private decodeToken (token) {
    try {
      jwt_decode(token)
      return true
    } catch {
      return false
    }
  }
}
