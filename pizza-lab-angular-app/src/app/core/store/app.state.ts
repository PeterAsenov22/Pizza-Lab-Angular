import { AuthenticationState } from './authentication/authentication.state'
import { ProductsState } from './products/products.state'
import { CartState } from './cart/cart.state'

export interface AppState {
  authentication: AuthenticationState
  products: ProductsState,
  cart: CartState
}
