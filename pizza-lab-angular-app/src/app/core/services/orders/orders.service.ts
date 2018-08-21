import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

import { AppState } from '../../store/app.state'
import { GetUserOrders, SubmitOrder } from '../../store/orders/orders.actions'
import { OrderModel } from '../../../components/orders/models/OrderModel'
import { OrderProductModel } from '../../../components/orders/models/OrderProductModel'
import { NgxSpinnerService } from '../../../../../node_modules/ngx-spinner'

const baseUrl = 'http://localhost:5000/orders/'
const userOrdersUrl = 'user'
const submitOrderUrl = 'submit'

@Injectable()
export class OrdersService {
  private isGetUserOrdersCalled: boolean = false

  constructor (
    private http: HttpClient,
    private store: Store<AppState>,
    private spinner: NgxSpinnerService ) { }

  getUserOrders() {
    if (this.isGetUserOrdersCalled) {
      return
    }

    this.isGetUserOrdersCalled = true
    this.spinner.show()

    this.http.get<OrderModel[]>(`${baseUrl}${userOrdersUrl}`)
      .subscribe(orders => {
        this.store.dispatch(new GetUserOrders(orders))
        this.spinner.hide()
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
