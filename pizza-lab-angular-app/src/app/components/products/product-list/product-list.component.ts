import { Component, Input } from '@angular/core'
import { Observable } from 'rxjs'

import { ProductModel } from '../models/ProductModel'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  public pageSize: number = 6
  public currentPage: number = 1

  @Input() public products$: Observable<ProductModel[]>

  changePage (page) {
    this.currentPage = page
  }
}

