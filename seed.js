import Listing from './src/server/db/models/listing'
import Booking from './src/server/db/models/booking'
import Review from './src/server/db/models/review'
import User from './src/server/db/models/user'
import mongoose from 'mongoose'
import {
  seedUsers,
  seedListings,
  seedBookings,
  seedReviews,
} from './src/server/db/seeddata'

mongoose.connect('mongodb://localhost/sharemykitchen_dev')

const models = {
  user: User,
  listing: Listing,
  booking: Booking,
  review: Review,
} 

const data = {
  user: seedUsers,
  listing: seedListings,
  booking: seedBookings,
  review: seedReviews,
}

let promiseArray = [];

Object.keys(data).forEach((key) => {
  const child = data[key]
  const model = key
  console.log(models[model])
  for (var i = 0; i < child.length; i++) {
    var m = new models[model](child[i])
    promiseArray.push(m.save())
  }
})
Promise.all(promiseArray).then(() => mongoose.disconnect())
