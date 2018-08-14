import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

import { AppState } from '../../store/app.state'
import { ProductModel } from '../../../components/products/models/ProductModel'
import { GetAllProducts } from '../../store/products/products.actions'

const allProductsUrl = 'http://localhost:5000/pizza/all'
const fiveMinutes = 1000 * 60 * 5

@Injectable()
export class ProductsService {
  private productsCached: boolean = false
  private cacheTime: number

  constructor (private http: HttpClient, private store: Store<AppState>) { }

  getAllProducts () {
    if (this.productsCached && (new Date().getTime() - this.cacheTime) < fiveMinutes) {
      return
    }

    this.productsCached = false
    this.cacheTime = null

    this.http.get<ProductModel[]>(allProductsUrl)
      .subscribe(products => {
        this.productsCached = true
        this.cacheTime = new Date().getTime()
        this.store.dispatch(new GetAllProducts(products))
      })
  }
}
