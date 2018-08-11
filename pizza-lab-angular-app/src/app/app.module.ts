import { AppRoutingModule } from './app.routing'
import { AuthenticationModule } from './components/authentication/authentication.module'
import { BrowserModule } from '@angular/platform-browser'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { NgModule } from '@angular/core'
import { ProductsModule } from './components/products/products.module'
import { RouterModule } from '../../node_modules/@angular/router'
import { SharedModule } from './components/shared/shared.module'

import { AppComponent } from './app.component'
import { HomeComponent } from './components/home/home.component'

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
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
