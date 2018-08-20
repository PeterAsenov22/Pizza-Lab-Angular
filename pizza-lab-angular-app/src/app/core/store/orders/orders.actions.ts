import { Action } from '@ngrx/store'
import { OrderModel } from '../../../components/orders/models/OrderModel'

export const GET_USER_ORDERS = '[ORDERS] GET_USER_ORDERS'

export class GetUserOrders implements Action {
  readonly type: string = GET_USER_ORDERS

  constructor (public payload: OrderModel[]) { }
}
