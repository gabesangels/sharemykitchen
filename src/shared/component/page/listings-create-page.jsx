import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

import ListingsCreate from '../../container/listings-create'

const ListingsCreatePage = (props) => {
  return (
    <div>
      <h2>Listings Create Page</h2>
      <ListingsCreate />
    </div>
  )
}

export default withRouter(ListingsCreatePage)
