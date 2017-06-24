import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

import ListingsCreate from '../../container/listings-create'
import BookingsCreate from '../../container/bookings-create'

const ListingsCreatePage = (props) => {
  return (
    <div>
      <h2>Listings Create Page</h2>
      <ListingsCreate />
      <BookingsCreate label="Book now" listing_id="594d7260f660a4e05e055457" />
    </div>
  )
}

export default withRouter(ListingsCreatePage)
