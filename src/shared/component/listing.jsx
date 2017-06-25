import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { listingsShowRoute } from '../routes'

const Listing = (props) => {
  return (
    <div className="card">
      <Link
        className="one-listing"
        to={`${listingsShowRoute(props.kitchen._id)}`}
      >
        <h2 className="card-header col-12">
          {props.kitchen.name}
        </h2>
        <div className="columns col-online">
          <img
            className="listing-pic column center"
            src={props.kitchen.pictures[0]}
            alt="kitchen"
          />
          <div className="card-body text-center column">
            <strong>Area:</strong> {props.kitchen.area} <br />
            <strong>Rating:</strong> {props.kitchen.rating} <br />
            <strong>Features:</strong>
              <ul>
                {Object.keys(props.kitchen.features).map((keyValue) => {
                  return <li key={keyValue}>{keyValue}</li>
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
