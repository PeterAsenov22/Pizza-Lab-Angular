import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Store, select } from '@ngrx/store'
import { Subscription } from 'rxjs'

import { AppState } from '../../../core/store/app.state'
import { BaseComponent } from '../../base.component'
import { OrderModel } from '../models/OrderModel'

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent extends BaseComponent implements OnInit {
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
      .pipe(select(state => state.orders.userOrders))
      .subscribe(orders => {
        if (orders.length > 0) {
          this.order = orders.find(o => o._id === this.id)
        }
      })

    this.subscriptions.push(this.subscription$)
  }
}
