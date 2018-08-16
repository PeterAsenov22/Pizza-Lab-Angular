import { Component, OnInit } from '@angular/core'
import { ProductsService } from './core/services/products/products.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor (private productsService: ProductsService) { }

  ngOnInit () {
    this.productsService.getAllProducts()
  }
}
