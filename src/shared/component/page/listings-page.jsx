import 'babel-polyfill'
import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

import ListingList from '../../container/listing-list'

const ListingsPage = (props) => {
  const qs = props.location.search
  return (
    <div>
      <h2 className="text-center">Available Listings</h2>
      <ListingList query={qs} />
    </div>
  )
}

ListingsPage.propTypes = {
  location: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
}

export default withRouter(ListingsPage)
