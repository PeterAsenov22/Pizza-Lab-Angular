import { Action } from '@ngrx/store'
import { ProductModel } from '../../../components/products/models/ProductModel'

export const GET_ALL = '[PRODUCTS] GET_ALL'
export const ADD_REVIEW = '[PRODUCTS] ADD_REVIEW'

export class GetAllProducts implements Action {
  readonly type: string = GET_ALL

  constructor (public payload: ProductModel[]) { }
}

export class AddProductReview implements Action {
  readonly type: string = ADD_REVIEW

  constructor (public payload: ProductModel) { }
}
