import { NgModule } from '@angular/core'
import { ProductsModule } from './components/products/products.module'
import { RouterModule, Routes } from '@angular/router'

// Components
import { HomeComponent } from './components/home/home.component'
import { MenuComponent } from './components/menu/menu.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'product', loadChildren: () => ProductsModule }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
