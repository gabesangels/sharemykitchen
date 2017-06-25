import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { listingsShowRoute } from '../routes'

const Listing = (props) => {
  return (
    <div className="card mt-10 mr-10 ml-10 col-5">
      <Link
        className="one-listing"
        to={`${listingsShowRoute(props.kitchen._id)}`}
      >
        <h3 className="card-header col-12">
          {props.kitchen.name}
        </h3>
        <div className="columns col-online">
          <div className="card-image col-6">
            <img
              className="listing-pic"
              src={props.kitchen.pictures[0]}
              alt="kitchen"
            />
          </div>
          <div className="card-body text-center col-6">
            <strong>Area:</strong> {props.kitchen.area} <br />
            <strong>Rating:</strong> {props.kitchen.rating} <br />
            <strong>Features:</strong>
            <ul>
              {Object.keys(props.kitchen.features).map((key) => {
                return <li key={key}><strong>{key}:</strong> {props.kitchen.features[key]}</li>
              })}
            </ul>
          </div>
        </div>
      </Link>
    </div>
  )
}

Listing.propTypes = {
  kitchen: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
}

export default Listing
