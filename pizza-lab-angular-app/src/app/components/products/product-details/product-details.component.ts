import { ActivatedRoute } from '@angular/router'
import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Store, select } from '@ngrx/store'

import { AppState } from '../../../core/store/app.state'
import { ProductModel } from '../models/ProductModel'
import { ProductsService } from '../../../core/services/products/products.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  public product$: Observable<ProductModel>
  private id: string

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private store: Store<AppState>) {
      this.id = this.route.snapshot.paramMap.get('id')
  }

  ngOnInit() {
    this.productsService.getAllProducts()
    this.product$ = this.store.pipe(select(state => state.products.all.find(p => p._id === this.id)))
  }
}
