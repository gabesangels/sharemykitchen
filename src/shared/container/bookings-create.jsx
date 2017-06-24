import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { bookingsCreateAsync } from '../action/bookings'

const BookingsCreate = (props) => {
  console.log(props)
  return (
    <button onClick={props.onClick} >{props.label}</button>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      const booking = {
        listing_id: ownProps.listing_id,
      }
      dispatch(bookingsCreateAsync(booking))
    },
  }
}

BookingsCreate.propTypes = { onClick: PropTypes.func.isRequired, label: PropTypes.string.isRequired }


export default connect(null, mapDispatchToProps)(BookingsCreate)
