import { AppRoutingModule } from './app.routing'
import { AuthenticationModule } from './components/authentication/authentication.module'
import { BrowserModule } from '@angular/platform-browser'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { NgModule } from '@angular/core'
import { ProductsModule } from './components/products/products.module'
import { RouterModule } from '../../node_modules/@angular/router'
import { ServicesModule } from './core/services/services.module'
import { SharedModule } from './components/shared/shared.module'

import { AppComponent } from './app.component'
import { HomeComponent } from './components/home/home.component'

import { JWTInterceptor, ErrorInterceptor } from './core/interceptors'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    AuthenticationModule,
    BrowserModule,
    NgbModule.forRoot(),
    ProductsModule,
    RouterModule,
    ServicesModule,
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JWTInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
