import { Component, Input } from '@angular/core'
import { Store } from '@ngrx/store'

import { AddToCart } from '../../../core/store/cart/cart.actions'
import { AppState } from '../../../core/store/app.state'
import { CartProductModel } from '../../../core/models/CartProductModel'
import { ProductModel } from '../models/ProductModel'
import { Router } from '@angular/router'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  @Input() protected product: ProductModel

  constructor (
    private store: Store<AppState>,
    private router: Router ) { }

  addToCart() {
    const productToAdd = new CartProductModel(
      this.product._id,
      this.product.name,
      1,
      this.product.price)

    this.store.dispatch(new AddToCart(productToAdd))
    this.router.navigate(['/cart'])
  }
}
