import { NgModule } from '@angular/core'
import { ProductsModule } from './components/products/products.module'
import { RouterModule, Routes } from '@angular/router'

// Components
import { HomeComponent } from './components/home/home.component'
import { MenuComponent } from './components/menu/menu.component'
import { NotFoundComponent } from './components/shared/not-found/not-found.component'

// Guards
import { AuthGuard } from './core/guards/authentication/authentication.guard'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'product', canActivate: [AuthGuard] , loadChildren: () => ProductsModule },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
