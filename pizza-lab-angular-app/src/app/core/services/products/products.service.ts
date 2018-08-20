import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

import { AppState } from '../../store/app.state'
import { ProductModel } from '../../../components/products/models/ProductModel'
import { ReviewModel } from '../../../components/products/models/ReviewModel'

import { GetAllProducts, AddProductReview, LikeProduct, UnlikeProduct } from '../../store/products/products.actions'
import { GetRequestBegin, GetRequestEnd } from '../../store/http/http.actions'

const baseUrl = 'http://localhost:5000/pizza/'
const allProductsUrl = 'all'
const addReviewUrl = 'review/'
const likeProductUrl = 'like/'
const unlikeProductUrl = 'unlike/'
const fiveMinutes = 1000 * 60 * 5

@Injectable()
export class ProductsService {
  private productsCached: boolean = false
  private cacheTime: number

  constructor (
    private http: HttpClient,
    private store: Store<AppState> ) { }

  getAllProducts () {
    if (this.productsCached && (new Date().getTime() - this.cacheTime) < fiveMinutes) {
      return
    }

    this.productsCached = false
    this.cacheTime = null

    this.store.dispatch(new GetRequestBegin())

    this.http.get<ProductModel[]>(`${baseUrl}${allProductsUrl}`)
      .subscribe(products => {
        this.productsCached = true
        this.cacheTime = new Date().getTime()
        this.store.dispatch(new GetAllProducts(products))
        this.store.dispatch(new GetRequestEnd())
      })
  }

  addProductReview (model: ReviewModel, id: string) {
    this.store.dispatch(new AddProductReview(model, id))
    this.http
      .post(`${baseUrl}${addReviewUrl}${id}`, model)
      .subscribe()
  }

  likeProduct(id: string, username: string) {
    this.store.dispatch(new LikeProduct(id, username))
    this.http
      .post(`${baseUrl}${likeProductUrl}${id}`, {})
      .subscribe()
  }

  unlikeProduct(id: string, username: string) {
    this.store.dispatch(new UnlikeProduct(id, username))
    this.http
      .post(`${baseUrl}${unlikeProductUrl}${id}`, {})
      .subscribe()
  }
}
