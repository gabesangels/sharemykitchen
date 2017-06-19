const mongoose = require('mongoose')

const Schema = mongoose.Schema

const BookingSchema = new Schema({
  listing_id: Number,
  host_id: Number,
  guest_id: Number,
  rate: Number,
  date: Date,
  paid: Boolean,
})

const BookingModel = mongoose.model('Booking', BookingSchema)

export default BookingModel
