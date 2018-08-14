import { GET_ALL } from './products.actions'
import { ProductModel } from '../../../components/products/models/ProductModel'
import { ProductsState } from './products.state'

const initialState: ProductsState = {
  all: []
}

function getAllProducts (state: ProductsState, products: ProductModel[]) {
  return Object.assign({}, state, {
    all: products
  })
}

export function productsReducer (state: ProductsState = initialState, action) {
  switch (action.type) {
    case GET_ALL:
      return getAllProducts(state, action.payload)
    default:
      return state
  }
}
