import { Component, Input } from '@angular/core'
import { ProductModel } from '../models/ProductModel'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  @Input() protected product: ProductModel
}
