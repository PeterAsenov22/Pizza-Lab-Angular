import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  public products

  ngOnInit() {
    this.products = [{
      name: 'Capricosa'
    },
    {
      name: 'Venezia'
    },
    {
      name: 'Torino'
    },
    {
      name: 'Capricosa'
    },
    {
      name: 'Venezia'
    },
    {
      name: 'Torino'
    }
  ]
  }
}

