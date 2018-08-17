import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const ordersRoutes: Routes = [
]

@NgModule({
  imports: [RouterModule.forChild(ordersRoutes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
