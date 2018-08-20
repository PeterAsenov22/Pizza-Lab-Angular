import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

import { AppState } from '../../store/app.state'
import { GetRequestBegin, GetRequestEnd } from '../../store/http/http.actions'
import { GetUserOrders } from '../../store/orders/orders.actions'
import { OrderModel } from '../../../components/orders/models/OrderModel'

const baseUrl = 'http://localhost:5000/orders/'
const userOrdersUrl = 'user'

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
}
