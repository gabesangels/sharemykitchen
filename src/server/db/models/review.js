const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ReviewSchema = new Schema({
  title: String,
  text: String,
  rating: Number,
  listing_id: Schema.Types.ObjectId,
  host_id: Schema.Types.ObjectId,
  guest_id: Schema.Types.ObjectId,
  booking_id: Schema.Types.ObjectId,
})

const Review = mongoose.model('Review', ReviewSchema)

export default Review
