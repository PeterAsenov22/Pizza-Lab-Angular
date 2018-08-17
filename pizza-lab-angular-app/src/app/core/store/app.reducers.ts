import { authenticationReducer } from './authentication/authentication.reducers'
import { productsReducer } from './products/products.reducers'
import { cartReducer } from './cart/cart.reducers'

export const appReducers = {
  authentication: authenticationReducer,
  products: productsReducer,
  cart: cartReducer
}
