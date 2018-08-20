import { Component, OnInit } from '@angular/core'
import { NgxSpinnerService } from 'ngx-spinner'
import { Store, select } from '@ngrx/store'
import { Subscription } from 'rxjs'

import { AppState } from './core/store/app.state'
import { AuthenticationService } from './core/services/authentication/authentication.service'
import { BaseComponent } from './components/base.component'
import { ProductsService } from './core/services/products/products.service'
import { OrdersService } from './core/services/orders/orders.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent extends BaseComponent implements OnInit {
  protected getCalls: number = 0
  private subscription$: Subscription

  constructor (
    private spinner: NgxSpinnerService,
    private productsService: ProductsService,
    private authService: AuthenticationService,
    private ordersService: OrdersService,
    private store: Store<AppState>) {
      super()
  }

  ngOnInit () {
    this.productsService.getAllProducts()

    if (this.authService.isAuthenticated()) {
      this.ordersService.getUserOrders()
    }

    this.subscription$ = this.store
      .pipe(select(state => state.http.currentGetCalls))
      .subscribe(calls => {
        if (this.getCalls === 0 && calls > 0) {
          this.spinner.show()
        }

        if (this.getCalls > 0 && calls === 0) {
          this.spinner.hide()
        }

        this.getCalls = calls
      })

    this.subscriptions.push(this.subscription$)
  }
}
