const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ListingSchema = new Schema({
  name: String,
  host_id: Number,
  address: String,
  rating: Number,
  pictures: Array,
  features: Array,
  rate: Number,
  area: String,
})

const ListingModel = mongoose.model('Listing', ListingSchema)

export default ListingModel
