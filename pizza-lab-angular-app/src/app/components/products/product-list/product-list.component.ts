import { Component, Input } from '@angular/core'
import { Observable } from 'rxjs'

import { ProductModel } from '../models/ProductModel'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  protected pageSize: number = 6
  protected currentPage: number = 1

  @Input() protected products$: Observable<ProductModel[]>

  changePage (page) {
    this.currentPage = page
  }

  trackByIds(index: number, product: ProductModel): string {
    return product._id
  }
}

