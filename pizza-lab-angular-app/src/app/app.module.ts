import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { SharedModule } from './components/shared/shared.module'

import { AppComponent } from './app.component'
import { RouterModule } from '../../node_modules/@angular/router'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
