import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

import { AppState } from '../../store/app.state'
import { GetRequestBegin, GetRequestEnd } from '../../store/http/http.actions'
import { GetUserOrders, SubmitOrder } from '../../store/orders/orders.actions'
import { OrderModel } from '../../../components/orders/models/OrderModel'
import { OrderProductModel } from '../../../components/orders/models/OrderProductModel'

const baseUrl = 'http://localhost:5000/orders/'
const userOrdersUrl = 'user'
const submitOrderUrl = 'submit'

@Injectable()
export class OrdersService {
  constructor (
    private http: HttpClient,
    private store: Store<AppState> ) { }

  getUserOrders() {
    this.store.dispatch(new GetRequestBegin())

    this.http.get<OrderModel[]>(`${baseUrl}${userOrdersUrl}`)
      .subscribe(orders => {
        this.store.dispatch(new GetUserOrders(orders))
        this.store.dispatch(new GetRequestEnd())
    })
  }

  submitNewOrder(products: OrderProductModel[]) {
    const order = new OrderModel()
    order.date = new Date()
    order.products = products
    order.status = 'Pending'

    this.store.dispatch(new SubmitOrder(order))
    this.http
      .post(`${baseUrl}${submitOrderUrl}`, products)
      .subscribe()
  }
}
