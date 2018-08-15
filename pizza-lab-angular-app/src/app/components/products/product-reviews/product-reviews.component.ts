import { Component, OnInit, Input } from '@angular/core'
import { Observable } from 'rxjs'
import { FormBuilder, Validators } from '@angular/forms'
import { Store, select } from '@ngrx/store'

import { AppState } from '../../../core/store/app.state'
import { ReviewModel } from '../models/ReviewModel'
import { AuthenticationService } from '../../../core/services/authentication/authentication.service';

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.scss']
})
export class ProductReviewsComponent implements OnInit {
  protected reviewForm
  protected reviews$: Observable<ReviewModel[]>
  @Input() private id: string

  constructor (
    protected formBuilder: FormBuilder,
    private store: Store<AppState>,
    private authService: AuthenticationService ) {
    this.createForm()
  }

  ngOnInit() {
    this.reviews$ = this.store.pipe(select(state => state.products.all.find(p => p._id === this.id).reviews))
  }

  get review() { return this.reviewForm.get('review') }

  submitForm() {
    if (this.reviewForm.invalid) {
      return
    }

    const formValue = this.reviewForm.value
    const reviewModel = new ReviewModel(formValue.review, this.authService.getUsername())
    // dispatch action
  }

  private createForm() {
    this.reviewForm = this.formBuilder.group({
      review: ['', [Validators.required, Validators.minLength(4)]]
    })
  }
}
