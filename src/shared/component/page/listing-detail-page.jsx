import 'babel-polyfill'
import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

import OneListing from '../../container/one-listing'

const ListingDetailPage = (props) => {
  const urlWithId = props.location.pathname
  return (
    <div>
      <OneListing urlWithId={urlWithId} />
    </div>
  )
}

ListingDetailPage.propTypes = {
  location: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
}

export default withRouter(ListingDetailPage)
