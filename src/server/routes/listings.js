import express from 'express'
import {
  LISTINGS_INDEX,
  LISTINGS_SHOW,
  LISTINGS_CREATE,
  LISTINGS_UPDATE,
  LISTINGS_DELETE,
} from '../../shared/routes'
import ListingsModel from './db/models/listings'
import bodyParser from 'body-parser'

const router = express.Router()

router.route(LISTINGS_INDEX).get((req, res) => {
  ListingsModel.find({}, function(err, listings) {
    if (err) {
      res.status(500).send(err)
    } 
    res.json(listings)
  })
})

router.route(LISTINGS_SHOW).get((req, res) => {

  //parse the req url to get the listing id
  var id = req.params.id
  //query the database for the listing whose id matches the req id
  ListingsModel.find({id: id}, function(err, listing) {
    if (err) {
      res.status(500).send(err)
    }
    //send that listing back as json
    res.json(listing);
  })
})

router.route(LISTINGS_CREATE).post((req, res) => {

  //grab the listings object from res.body
  var listing = req.body
  //user model.create to add it to the database
  ListingsModel.create(listing, function(err) {
    //in the callback, error handle and send a success response back
    if (err) {
      res.status(500).send(err)
    }
    res.end('Listing posted')
  })
})

router.route(LISTINGS_UPDATE).put((req, res) => {

  //grab the information from req.body
  var update = req.body 
  //grab the listing id from req.params
  var id = req.params.id

  //find the listing in the database
  ListingsModel.findById(id, function(err, listing) {
    //error handle, update listing and send response
    if (err) {
      res.status(500).send(err)
    }
    
    //update the listing. Grab each property from update. If that property isn't being updates, default to the current value

    listing.name = update.name || listing.name
    listing.host_id = update.host_id || listing.host_id
    listing.address = update.address || listing.address
    listing.rating = update.rating || listing.rating
    listing.pictures = update.pictures || listing.pictures
    listing.features = update.features || listing.features
    listing.rate = update.rate || listing.rate
    listing.area = update.area || listing.area

    //save the updated listing
    listing.save(function(err, listing) {
      if (err) {
        res.status(500).send(err)
      }
      res.send(listing)
    })
  })
})

router.route(LISTINGS_DELETE).delete((req, res) => {

<<<<<<< HEAD
export default router
=======
  //grab the listing id from the req.params
  var id = req.params.id
  //use findByIdAndRemove
  ListingsModel.findByIdAndRemove(id, function(err, listing) {
    //error handle
    if (err) {
      res.status(500).send(err)
    }
    //otherwise, send a confirmation back with a refernece 
    var response = {
      message: "Listing deleted",
      id: id
    }

    res.send(response)
    
  })

})

export default router;
>>>>>>> Wrote LISTINGS_DELETE route in server/routes/listings.js
