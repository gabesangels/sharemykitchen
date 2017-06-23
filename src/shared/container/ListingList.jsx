/* eslint-disable react/no-array-index-key */

import React from 'react'
import PropTypes from 'prop-types'

import { LISTINGS_INDEX } from '../routes'
import Listing from '../component/listing'

class ListingList extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      listings: [],
    }
  }

  componentDidMount() {
    const that = this
    const url = `/api${LISTINGS_INDEX + this.props.query}`
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((listings) => {
        that.setState({
          listings,
        })
      })
  }

  render() {
    return (
      <div className="listing-list">
        {this.state.listings.map((kitchen, i) => {
          return <Listing kitchen={kitchen} key={i} />
        })}
      </div>
    )
  }
}

ListingList.propTypes = {
  query: PropTypes.string.isRequired,
}

export default ListingList
