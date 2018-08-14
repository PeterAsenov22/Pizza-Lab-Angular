import { AuthenticationState } from './authentication/authentication.state'
import { ProductsState } from './products/products.state'

export interface AppState {
  authentication: AuthenticationState
  products: ProductsState
}
