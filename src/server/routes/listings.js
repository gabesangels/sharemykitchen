import express from 'express'
import { 
  LISTINGS_INDEX,
  LISTINGS_SHOW,
  LISTINGS_CREATE,
  LISTINGS_UPDATE,
  LISTINGS_DELETE,
} from '../../shared/routes'
import ListingsModel from './db/models/listings'

const router = express.Router()

router.route(LISTINGS_INDEX).get((req, res) => {
  ListingsModel.find({}, function(err, listings) {
    if (err) {
      console.log('server error')
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
      console.log('server error')
    }
    //send that listing back as json
    res.json(listing);
  })

})

router.route(LISTINGS_CREATE).post((req, res) => {

  //grab the listings object from res.body
  
  //user model.create to add it to the database
    //in the callback, error handle and send a success response back

})
router.route(LISTINGS_UPDATE).put((req, res) => {})
router.route(LISTINGS_DELETE).delete((req, res) => {})

export default router;