import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { NgxPaginationModule } from 'ngx-pagination'
import { ProductsRoutingModule } from './products.routing'
import { SharedModule } from '../shared/shared.module'

import { productComponents } from '.'

@NgModule({
  declarations: [
    ...productComponents
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    ...productComponents
  ]
})
export class ProductsModule { }
