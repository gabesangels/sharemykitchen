import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { listingsCreateAsync } from '../action/listings'
import AddMoreSelect from '../component/add-more-select'

import { listingsShowRoute } from '../routes'

class ListingsCreate extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onAddMoreSelectChange = this.onAddMoreSelectChange.bind(this)
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
