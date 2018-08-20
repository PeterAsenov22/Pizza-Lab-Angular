import { OrdersState } from './orders.state'
import { GET_USER_ORDERS } from './orders.actions'
import { OrderModel } from '../../../components/orders/models/OrderModel'

const initialState: OrdersState = {
  userOrders: []
}

function getUserOrders(state: OrdersState, orders: OrderModel[]) {
  return Object.assign({}, state, {
    userOrders: orders
  })
}

export function ordersReducer(state: OrdersState = initialState, action) {
  switch (action.type) {
    case GET_USER_ORDERS:
      return getUserOrders(state, action.payload)
    default:
      return state
  }
}
