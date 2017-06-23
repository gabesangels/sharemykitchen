import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { listingsShowRoute } from '../routes'

const Listing = (props) => {
  return (
    <Link
      className="one-listing"
      to={`${listingsShowRoute(props.kitchen._id)}`}
    >
      <h2>
        {props.kitchen.name}
      </h2>
      <img
        className="listing-pic"
        src={props.kitchen.pictures[0]}
        alt="kitchen"
      />
      <div className="listing-details">
        Area: {props.kitchen.area} <br />
        Rating: {props.kitchen.rating} <br />
        Features:
          <ul>
            {Object.keys(props.kitchen.features).map((keyValue) => {
              return <li key={keyValue}>{keyValue}</li>
            })}
          </ul>
      </div>
    </Link>
  )
}

Listing.propTypes = {
  kitchen: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
}

export default Listing
