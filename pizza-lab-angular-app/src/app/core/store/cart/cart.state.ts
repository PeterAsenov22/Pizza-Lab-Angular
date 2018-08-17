import { CartProductModel } from '../../../components/cart/models/CartProductModel'

export interface CartState {
  readonly products: CartProductModel[]
}
