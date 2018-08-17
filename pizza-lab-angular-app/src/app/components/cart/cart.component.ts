import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'

import { AppState } from '../../core/store/app.state'
import { ProductInCartModel } from './models/ProductInCartModel'
import { SyncCart, RemoveFromCart } from '../../core/store/cart/cart.actions'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  protected products: ProductInCartModel[]
  protected totalSum: number

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.pipe(select(state => state))
      .subscribe(state => {
        const products = state.products.all
        const cartProductsIds = state.cart.products.map(p => p.productId)
        const productsInCart = products.filter(p => cartProductsIds.includes(p._id))

        let total = 0
        const allProducts: ProductInCartModel[] = []

        for (const pr of productsInCart) {
          const product = new ProductInCartModel()
          product._id = pr._id
          product.image = pr.image
          product.ingredients = pr.ingredients
          product.name = pr.name
          product.price = pr.price
          product.quantity = state.cart.products.find(p => p.productId === pr._id).quantity
          total += product.quantity * product.price
          allProducts.push(product)
        }

        this.products = allProducts
        this.totalSum = total
      })
  }

  onQuantChange(event, id) {
    const inputValue = event.target.value
    if (!isNaN(inputValue)) {
      this.store.dispatch(new SyncCart(id, parseInt(inputValue, 10)))
    }
  }

  onRefreshButtonClick(id) {
    this.store.dispatch(new SyncCart(id, 1))
  }

  onDeleteButtonClick(id) {
    this.store.dispatch(new RemoveFromCart(id))
  }
}
