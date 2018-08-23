import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { CreateProductComponent } from './create-product/create-product.component'
import { EditProductComponent } from './edit-product/edit-product.component'
import { PendingOrdersComponent } from './pending-orders/pending-orders.component'

const adminRoutes: Routes = [
  { path: 'product/create', component: CreateProductComponent },
  { path: 'product/edit/:id', component: EditProductComponent },
  { path: 'orders/pending', component: PendingOrdersComponent }
]

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
