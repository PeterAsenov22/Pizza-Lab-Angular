import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { DetailsPageComponent } from './details-page/details-page.component'

const furnitureRoutes: Routes = [
  { path: 'details/:id', component: DetailsPageComponent},
]

@NgModule({
  imports: [RouterModule.forChild(furnitureRoutes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
