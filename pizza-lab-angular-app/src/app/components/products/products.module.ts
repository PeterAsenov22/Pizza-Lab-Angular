import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { productComponents } from '.'

@NgModule({
  declarations: [
    ...productComponents
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...productComponents
  ]
})
export class ProductsModule { }
