import 'babel-polyfill'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import io from 'socket.io-client'
import ss from 'socket.io-stream'

import { listingsCreateAsync } from '../action/listings'
import AddMoreSelect from '../component/add-more-select'

import { listingsShowRoute } from '../routes'

const socket = io.connect('http://localhost:8000')

class ListingsCreate extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onAddMoreSelectChange = this.onAddMoreSelectChange.bind(this)
  }

  componentDidMount() {
    socket.on('LISTING_PICTURE_PROGRESS', () => {})
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onAddMoreSelectChange(features) {
    this.setState({ features })
  }

  // eslint-disable-next-line class-methods-use-this
  onFileChange(e) {
    const file = e.target.files[0]
    const stream = ss.createStream()

    ss(socket).emit('LISTING_PICTURE', stream)
    ss.createBlobReadStream(file).pipe(stream)
  }

  render() {
    return (
      <div className="col-12 text-center">
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.onChange}
          />
          <br />
          <br />
          <input
            type="address"
            name="address"
            placeholder="Address"
            onChange={this.onChange}
          />
          <br />
          <br />
          <input
            type="number"
            name="rate"
            placeholder="Rate (USD/day)"
            onChange={this.onChange}
          />
          <br />
          <br />
          <input
            type="text"
            name="area"
            placeholder="Area"
            onChange={this.onChange}
          />
          <br />
          <br />
          <input
            type="file"
            onChange={this.onFileChange}
          />
          <br />
          <br />
          <AddMoreSelect onChange={this.onAddMoreSelectChange} />
          <br />
          <input className="btn btn-lg" type="submit" value="Post" />
        </form>
      </div>
    )
  }
}

ListingsCreate.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: (listing) => {
      dispatch(listingsCreateAsync(listing))
        .then((data) => {
          ownProps.history.push(`${listingsShowRoute(data._id)}`)
        })
    },
  }
}

export default connect(null, mapDispatchToProps)(ListingsCreate)
