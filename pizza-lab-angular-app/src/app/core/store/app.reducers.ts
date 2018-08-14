import { authenticationReducer } from './authentication/authentication.reducers'
import { productsReducer } from './products/products.reducers'

export const appReducers = {
  authentication: authenticationReducer,
  products: productsReducer
}
