import { AppRoutingModule } from './app.routing'
import { AuthenticationModule } from './components/authentication/authentication.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { NgModule } from '@angular/core'
import { ProductsModule } from './components/products/products.module'
import { RouterModule } from '../../node_modules/@angular/router'
import { ServicesModule } from './core/services/services.module'
import { SharedModule } from './components/shared/shared.module'
import { StoreModule, ActionReducer } from '@ngrx/store'
import { ToastrModule } from 'ngx-toastr'

import { AppComponent } from './app.component'
import { HomeComponent } from './components/home/home.component'

import { appReducers } from './core/store/app.reducers'
import { JWTInterceptor, ErrorInterceptor } from './core/interceptors'

import { AppState } from './core/store/app.state'
import { storeLogger } from 'ngrx-store-logger'

import { environment } from '../environments/environment'

export function logger(reducer: ActionReducer<AppState>): any {
  return storeLogger()(reducer)
}

export const metaReducers = environment.production ? [] : [logger]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    AuthenticationModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    ProductsModule,
    RouterModule,
    ServicesModule,
    SharedModule,
    StoreModule.forRoot(appReducers, {metaReducers}),
    ToastrModule.forRoot()
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
