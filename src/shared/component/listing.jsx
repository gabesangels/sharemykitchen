import React from 'react'
import PropTypes from 'prop-types'

const Listing = (props) => {
  return (
    <div className="one-listing">
      <h2>{props.kitchen.name}</h2>
      <img className="listing-pic" src={props.kitchen.pictures[0]} alt="kitchen" />
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
    </div>
  )
}

Listing.propTypes = {
  kitchen: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
}

export default Listing
