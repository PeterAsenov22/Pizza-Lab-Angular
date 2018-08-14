import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Store, select } from '@ngrx/store'

import { AppState } from '../../../core/store/app.state'
import { ProductModel } from '../models/ProductModel'
import { ProductsService } from '../../../core/services/products/products.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  public products$: Observable<ProductModel[]>

  constructor(
    private productsService: ProductsService,
    private store: Store<AppState>) { }

  ngOnInit() {
    this.productsService.getAllProducts()
    this.products$ = this.store.pipe(select(state => state.products.all))
  }
}
