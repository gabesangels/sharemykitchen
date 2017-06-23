const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ListingSchema = new Schema({
  name: String,
  host_id: Schema.Types.ObjectId,
  address: String,
  rating: Number,
  pictures: Array,
  features: Object,
  rate: Number,
  area: String,
})

const Listing = mongoose.model('Listing', ListingSchema)

export default Listing
