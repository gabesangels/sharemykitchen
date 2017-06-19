const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ReviewSchema = new Schema({
  title: String,
  text: String,
  rating: Number,
  listing_id: Number,
  host_id: Number,
  guest_id: Number,
  booking_id: Number,
})


const ReviewModel = mongoose.model('Review', ReviewSchema)

exports.ReviewModel = ReviewModel
