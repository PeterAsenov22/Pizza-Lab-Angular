import { Action } from '@ngrx/store'
import { OrderModel } from '../../../components/orders/models/OrderModel'

export const GET_USER_ORDERS = '[ORDERS] GET_USER_ORDERS'
export const SUBMIT_ORDER = '[ORDERS] SUBMIT_ORDER'

export class GetUserOrders implements Action {
  readonly type: string = GET_USER_ORDERS

  constructor (public payload: OrderModel[]) { }
}

export class SubmitOrder implements Action {
  readonly type: string = SUBMIT_ORDER

  constructor (public payload: OrderModel) { }
}
