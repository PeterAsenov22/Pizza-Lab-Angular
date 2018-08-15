import { ActivatedRoute } from '@angular/router'
import { Component } from '@angular/core'

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html'
})
export class DetailsPageComponent {
  protected id: string

  constructor (private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id')
  }
}
