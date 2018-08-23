import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { CreateProductComponent } from './create-product/create-product.component'
import { EditProductComponent } from './edit-product/edit-product.component'

const adminRoutes: Routes = [
  { path: 'product/create', component: CreateProductComponent },
  { path: 'product/edit/:id', component: EditProductComponent }
]

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
