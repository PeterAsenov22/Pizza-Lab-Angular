import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { NgxPaginationModule } from 'ngx-pagination'
import { SharedModule } from '../shared/shared.module'

import { NotFoundComponent } from '../shared/not-found/not-found.component'
import { productComponents } from '.'
import { ProductsRoutingModule } from './products.routing'

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
