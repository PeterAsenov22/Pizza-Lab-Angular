import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { NgxSpinnerService } from 'ngx-spinner'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { ToastrService } from 'ngx-toastr'

import { AppState } from '../../store/app.state'
import { CreateProductModel } from '../../../components/admin/models/CreateProductModel'
import { ProductModel } from '../../../components/products/models/ProductModel'
import { ReviewModel } from '../../../components/products/models/ReviewModel'

import { GetAllProducts, AddProductReview,
  LikeProduct, UnlikeProduct, CreateProduct, DeleteProduct, EditProduct } from '../../store/products/products.actions'
import { GetRequestBegin, GetRequestEnd } from '../../store/http/http.actions'
import { ResponseDataModel } from '../../models/ResponseDataModel'

const baseUrl = 'http://localhost:5000/pizza/'
const allProductsUrl = 'all'
const createProductUrl = 'create'
const editProductUrl = 'edit/'
const deleteProductUrl = 'delete/'
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
    private store: Store<AppState>,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private router: Router ) { }

  getAllProducts () {
    if (this.productsCached && (new Date().getTime() - this.cacheTime) < fiveMinutes) {
      return
    }

    this.productsCached = true
    this.cacheTime = new Date().getTime()

    this.store.dispatch(new GetRequestBegin())

    this.http.get<ProductModel[]>(`${baseUrl}${allProductsUrl}`)
      .subscribe(products => {
        this.store.dispatch(new GetAllProducts(products))
        this.store.dispatch(new GetRequestEnd())
      })
  }

  createProduct(model: CreateProductModel) {
    this.spinner.show()
    this.http
      .post(`${baseUrl}${createProductUrl}`, model)
      .subscribe((res: ResponseDataModel) => {
        this.store.dispatch(new CreateProduct(res.data))
        this.spinner.hide()
        this.router.navigate(['/menu'])
        this.toastr.success('Product added successfully.')
      })
  }

  editProduct(model: ProductModel) {
    this.spinner.show()
    this.http
      .post(`${baseUrl}${editProductUrl}${model._id}`, model)
      .subscribe((res: ResponseDataModel) => {
        this.store.dispatch(new EditProduct(res.data))
        this.spinner.hide()
        this.router.navigate(['/menu'])
        this.toastr.success('Product edited successfully.')
      })
  }

  deleteProduct(id: string, activeModal) {
    this.spinner.show()
    this.http
      .delete(`${baseUrl}${deleteProductUrl}${id}`)
      .subscribe(() => {
        this.store.dispatch(new DeleteProduct(id))
        this.spinner.hide()
        activeModal.close()
        this.toastr.success('Product deleted successfully.')
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
