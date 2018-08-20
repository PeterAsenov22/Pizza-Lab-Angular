import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { Subscription } from 'rxjs'

import { AppState } from '../../../core/store/app.state'
import { BaseComponent } from '../../base.component'
import { OrderModel } from '../models/OrderModel'

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html'
})
export class UserOrdersComponent extends BaseComponent implements OnInit {
  protected notFoundMessage = 'You have not made any orders!'
  protected orders: OrderModel[]
  private subscription$: Subscription

  constructor(private store: Store<AppState>) {
    super()
  }

  ngOnInit() {
    this.subscription$ = this.store
      .pipe(select(state => state.orders.userOrders))
      .subscribe(orders => {
        this.orders = orders
      })

    this.subscriptions.push(this.subscription$)
  }

  getTotalSum(products) {
    let total = 0
    for (const pr of products) {
      total += pr.price * pr.quantity
    }

    return total
  }

  toLocaleString(date) {
    return new Date(date).toLocaleString()
  }
}
