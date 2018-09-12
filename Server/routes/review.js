const express = require('express')
const authCheck = require('../config/auth-check')
const Pizza = require('../models/Pizza')
const Review = require('../models/Review')

const router = new express.Router()

router.post('/create/:pizzaId', authCheck, (req, res) => {
  const pizzaId = req.params.pizzaId
  const review = req.body.review
  const username = req.user.username

  if (review.length < 4) {
    const message = 'Review must be at least 4 characters long.'
    return res.status(400).json({
      success: false,
      message: message
    })
  }

  Pizza
    .findById(pizzaId)
    .then(pizza => {
      if (!pizza) {
        return res.status(400).json({
          success: false,
          message: 'Product not found.'
        })
      }

      let reviewObj = {
        reviewText: review,
        creatorUsername: username
      }

      Review
        .create(reviewObj)
        .then(review => {
          let reviews = pizza.reviews
          reviews.push(review._id)
          pizza.reviews = reviews
          pizza
            .save()
            .then((pizza) => {
              res.status(200).json({
                success: true,
                message: 'Review added successfully.',
                data: review
              })
            })
            .catch((err) => {
              console.log(err)
              const message = 'Something went wrong :( Check the form for errors.'
              return res.status(400).json({
                success: false,
                message: message
              })
            })
        })
        .catch((err) => {
          console.log(err)
          const message = 'Something went wrong :( Check the form for errors.'
          return res.status(400).json({
            success: false,
            message: message
          })
        })
    })
    .catch((err) => {
      console.log(err)
      const message = 'Something went wrong :( Check the form for errors.'
      return res.status(400).json({
        success: false,
        message: message
      })
    })
})

module.exports = router
