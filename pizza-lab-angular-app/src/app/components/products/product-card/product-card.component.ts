import { Component, Input } from '@angular/core'
import { ProductModel } from '../models/ProductModel'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'

import { AddToCart } from '../../../core/store/cart/cart.actions'
import { AppState } from '../../../core/store/app.state'
import { AuthenticationService } from '../../../core/services/authentication/authentication.service'
import { CartProductModel } from '../../../core/models/CartProductModel'

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() protected product: ProductModel

  constructor (
    protected authService: AuthenticationService,
    private store: Store<AppState>,
    private router: Router) { }

  navigateToDetails () {
    this.router.navigate([`/product/details/${this.product._id}`])
  }

  addToCart () {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/cart'])
      return
    }

    const productToAdd = new CartProductModel(
      this.product._id,
      this.product.name,
      1,
      this.product.price)

    this.store.dispatch(new AddToCart(productToAdd))
    this.router.navigate(['/cart'])
  }
}
