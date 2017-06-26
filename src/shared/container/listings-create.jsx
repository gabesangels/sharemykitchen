import 'babel-polyfill'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { listingsCreateAsync } from '../action/listings'
import AddMoreSelect from '../component/add-more-select'
import ImageUpload from './image-upload'
import ListingPreview from '../component/listing-preview'

import { listingsShowRoute } from '../routes'

const FORM_FIELDS = [
  { name: 'name', label: 'Name', type: 'text' },
  { name: 'address', label: 'Address', type: 'adress' },
  { name: 'rate', label: 'Rate (USD/Day)', type: 'number' },
  { name: 'area', label: 'Area', type: 'text', tagName: 'textarea' },
]

class ListingsCreate extends Component {
  constructor(props) {
    super(props)
    this.state = FORM_FIELDS.reduce((acc, curr) => {
      return Object.assign({}, acc, { [curr.name]: null })
    }, {
      features: [],
      pictures: []
    })
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onAddMoreSelectChange = this.onAddMoreSelectChange.bind(this)
    this.onFileUpload = this.onFileUpload.bind(this)
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

  onFileUpload(url) {
    if (url) {
      const pictures = this.state.pictures.concat(url)
      this.setState({ pictures })
    }
  }

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        className="columns"
      >
        <div className="column col-7">
          {FORM_FIELDS.map((field) => {
            const TagName = field.tagName ? field.tagName : 'input'
            return (
              <div 
                key={field.name}
                className="form-group">
                <label 
                  className="form-label text-bold" 
                  htmlFor={field.name}
                >
                  {field.label}
                </label>
                <TagName
                  id={field.name}
                  type={field.type}
                  name={field.name}
                  className="form-input"
                  onChange={this.onChange}
                  placeholder={field.placeholder}
                  {...Object.assign(
                    {},
                    TagName === 'textarea' && { rows: 3 },
                  )}
                />
              </div>
            )
          })}
          <ImageUpload onUploadSuccess={this.onFileUpload} />
          <AddMoreSelect onChange={this.onAddMoreSelectChange} />
          <input 
            className="btn btn-primary btn-lg"
            type="submit"
            value="Publish"
          />
        </div>
        <div className="column col-5">
          <ListingPreview {...this.state} />
        </div>
      </form>
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
