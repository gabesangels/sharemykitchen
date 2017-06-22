const mongoose = require('mongoose')

const Schema = mongoose.Schema

const BookingSchema = new Schema({
  listing_id: Schema.Types.ObjectId,
  host_id: Schema.Types.ObjectId,
  guest_id: Schema.Types.ObjectId,
  rate: Number,
  date: Date,
  paid: Boolean,
})

const Booking = mongoose.model('Booking', BookingSchema)

export default Booking
