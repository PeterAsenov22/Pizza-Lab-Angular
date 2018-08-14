import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { NgxPaginationModule } from 'ngx-pagination'

import { productComponents } from '.'

@NgModule({
  declarations: [
    ...productComponents
  ],
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  exports: [
    ...productComponents
  ]
})
export class ProductsModule { }
