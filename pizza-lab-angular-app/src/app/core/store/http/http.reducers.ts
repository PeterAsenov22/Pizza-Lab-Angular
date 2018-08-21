import { DEAUTHENTICATE } from '../authentication/authentication.actions'
import { GET_REQUEST_BEGIN, GET_REQUEST_END } from './http.actions'
import { GET_USER_ORDERS } from '../orders/orders.actions'
import { HttpState } from './http.state'

const initialState = {
  currentGetCalls: 0,
  ordersRequestMade: false
}

export function httpReducer(state: HttpState = initialState, action) {
  switch (action.type) {
    case GET_REQUEST_BEGIN:
      return Object.assign({}, state, {
        currentGetCalls: state.currentGetCalls + 1
      })
    case GET_REQUEST_END:
      return Object.assign({}, state, {
        currentGetCalls: state.currentGetCalls - 1
      })
    case GET_USER_ORDERS:
      return Object.assign({}, state, {
        ordersRequestMade: true
      })
    case DEAUTHENTICATE:
    return Object.assign({}, state, {
      ordersRequestMade: false
    })
    default:
      return state
  }
}
