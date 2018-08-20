import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { UserOrdersComponent } from './user-orders/user-orders.component'

const ordersRoutes: Routes = [
  { path: 'my', component: UserOrdersComponent }
]

@NgModule({
  imports: [RouterModule.forChild(ordersRoutes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
