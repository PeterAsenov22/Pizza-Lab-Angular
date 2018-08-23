import { AdminRoutingModule } from './admin.routing'
import { CommonModule } from '@angular/common'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { NgxSpinnerModule } from 'ngx-spinner'

import { adminComponents } from '.';
import { ProductDeleteModalComponent } from './product-delete-modal/product-delete-modal.component'

@NgModule({
  declarations: [
    ...adminComponents,
    ProductDeleteModalComponent
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
