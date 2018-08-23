import { AdminRoutingModule } from './admin.routing'
import { CommonModule } from '@angular/common'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { NgxSpinnerModule } from 'ngx-spinner'

import { adminComponents } from '.'

@NgModule({
  declarations: [
    ...adminComponents
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    NgxSpinnerModule,
    ReactiveFormsModule
  ],
  exports: [
  ]
})
export class AdminModule { }
