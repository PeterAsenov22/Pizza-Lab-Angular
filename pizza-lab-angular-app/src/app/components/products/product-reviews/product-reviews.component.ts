import { Component, Input } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'

import { ReviewModel } from '../models/ReviewModel'

import { AuthenticationService } from '../../../core/services/authentication/authentication.service'
import { ProductsService } from '../../../core/services/products/products.service'

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.scss']
})
export class ProductReviewsComponent {
  protected reviewForm
  @Input() protected reviews: ReviewModel[]
  @Input() private id: string

  constructor (
    protected formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private productsService: ProductsService ) {
    this.createForm()
  }

  get review() { return this.reviewForm.get('review') }

  submitForm() {
    if (this.reviewForm.invalid) {
      return
    }

    const formValue = this.reviewForm.value
    const reviewModel = new ReviewModel(formValue.review, this.authService.getUsername())
    this.productsService.addProductReview(reviewModel, this.id)
    this.reviewForm.reset()
  }

  private createForm() {
    this.reviewForm = this.formBuilder.group({
      review: ['', [Validators.required, Validators.minLength(4)]]
    })
  }
}
