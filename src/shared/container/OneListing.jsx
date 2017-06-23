import 'babel-polyfill'
import React from 'react'
import PropTypes from 'prop-types'

class OneListing extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      listing: null,
    }
  }

  componentDidMount() {
    const that = this
    const url = `/api${this.props.urlWithId}`
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((listing) => {
        that.setState({
          listing,
        })
      })
  }

  render() {
    const listing = this.state.listing
    return listing ?
      (
        <div className="one-listing">
          <h2>{listing.name}</h2>
          <div>
            <img src={listing.pictures[0]} alt="kitchen" />
            <h3>Features</h3>
            <ul>
              {Object.keys(listing.features).map((keyValue) => {
                return <li key={keyValue}>{keyValue}</li>
              })}
            </ul>
            <h3>Rating</h3>
            <p>{listing.rating}</p>
            <h3>Area:</h3>
            <p>{listing.area}</p>
          </div>
        </div>
      )
      : <h2>Loading...</h2>
  }
}

OneListing.propTypes = {
  urlWithId: PropTypes.string.isRequired,
}

export default OneListing
