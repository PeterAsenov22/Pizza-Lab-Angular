import { Component, OnInit } from '@angular/core'
import { NgxSpinnerService } from 'ngx-spinner'
import { Store, select } from '@ngrx/store'
import { Subscription } from 'rxjs'

import { AppState } from './core/store/app.state'
import { BaseComponent } from './components/base.component'
import { ProductsService } from './core/services/products/products.service'

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
    private store: Store<AppState>) {
      super()
  }

  ngOnInit () {
    this.productsService.getAllProducts()
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
