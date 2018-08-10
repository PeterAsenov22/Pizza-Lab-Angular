import { AppRoutingModule } from './app.routing'
import { BrowserModule } from '@angular/platform-browser'
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
    BrowserModule,
    ProductsModule,
    RouterModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
