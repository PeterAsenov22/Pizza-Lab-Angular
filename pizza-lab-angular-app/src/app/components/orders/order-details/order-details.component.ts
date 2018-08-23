import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Store, select } from '@ngrx/store'
import { Subscription } from 'rxjs'

import { AppState } from '../../../core/store/app.state'
import { BaseComponent } from '../../base.component'
import { getTotalSum, toLocaleString } from '../../../core/utils/helperFunctions'
import { OrderModel } from '../models/OrderModel'

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html'
})
export class OrderDetailsComponent extends BaseComponent implements OnInit {
  protected getTotalSum = getTotalSum
  protected toLocaleString = toLocaleString
  protected notFoundMessage = 'ORDER NOT FOUND'
  protected order: OrderModel
  private id: string
  private subscription$: Subscription

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute ) {
      super()
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.subscription$ = this.store
      .pipe(select(state => state.orders))
      .subscribe(orders => {
        if (orders.userOrders.length > 0) {
          this.order = orders.userOrders.find(o => o._id === this.id)
        } else if (orders.pendingOrders.length > 0) {
          this.order = orders.pendingOrders.find(o => o._id === this.id)
        }
      })

    this.subscriptions.push(this.subscription$)
  }
}
