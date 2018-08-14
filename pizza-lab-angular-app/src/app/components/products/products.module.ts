import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { NgxPaginationModule } from 'ngx-pagination'

import { productComponents } from '.'
import { ProductsRoutingModule } from './products.routing'

@NgModule({
  declarations: [
    ...productComponents
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    ProductsRoutingModule
  ],
  exports: [
    ...productComponents
  ]
})
export class ProductsModule { }
