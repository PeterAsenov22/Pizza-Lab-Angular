import { Component, Input } from '@angular/core'
import { ProductModel } from '../models/ProductModel'

import { AuthenticationService } from '../../../core/services/authentication/authentication.service'

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() public product: ProductModel

  constructor (public authService: AuthenticationService) { }
}
