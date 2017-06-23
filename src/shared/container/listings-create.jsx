import React from 'react'
import { connect } from 'react-redux'

import { listingsCreateAsync } from '../action/listings'

const ListingsCreate = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <input type="text" name="name" />
    </form>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (e) => {
      e.preventDefault()
      const listing = {
        name: e.target.name.value,
      }
      dispatch(listingsCreateAsync(listing))
    },
  }
}

export default connect(null, mapDispatchToProps)(ListingsCreate)
