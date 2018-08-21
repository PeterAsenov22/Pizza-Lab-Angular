import { DEAUTHENTICATE } from '../authentication/authentication.actions'
import { GET_USER_ORDERS, SUBMIT_ORDER } from './orders.actions'
import { OrderModel } from '../../../components/orders/models/OrderModel'
import { OrdersState } from './orders.state'


const initialState: OrdersState = {
  userOrders: []
}

function getUserOrders(state: OrdersState, orders: OrderModel[]) {
  return Object.assign({}, state, {
    userOrders: orders
  })
}

function submitOrder(state: OrdersState, order: OrderModel) {
  return Object.assign({}, state, {
    userOrders: [...state.userOrders, order]
  })
}

function removeOrders (state) {
  return Object.assign({}, state, {
    userOrders: []
  })
}

export function ordersReducer(state: OrdersState = initialState, action) {
  switch (action.type) {
    case GET_USER_ORDERS:
      return getUserOrders(state, action.payload)
    case SUBMIT_ORDER:
      return submitOrder(state, action.payload)
    case DEAUTHENTICATE:
      return removeOrders(state)
    default:
      return state
  }
}
