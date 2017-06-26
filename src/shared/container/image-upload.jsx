/* eslint-disable no-console,class-methods-use-this */

import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
  LISTING_PICTURE,
  LISTING_PICTURE_PROGRESS,
  LISTING_PICTURE_SUCCESS,
  LISTING_PICTURE_FAILURE,
} from '../config'

class ImageUpload extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      file: null,
      complete: false,
      loading: false,
      progress: 0,
    }

    this.onUploadProgress = this.onUploadProgress.bind(this)
    this.onUploadSuccess = this.onUploadSuccess.bind(this)
    this.onUploadFailure = this.onUploadFailure.bind(this)
    this.onFileChange = this.onFileChange.bind(this)
  }

  componentWillUnmount() {
    this.props.dispatch((dispatch, getState, { socket }) => {
      socket.off(`${LISTING_PICTURE_PROGRESS}`, this.onUploadProgress)
      socket.off(`${LISTING_PICTURE_SUCCESS}`, this.onUploadSuccess)
      socket.off(`${LISTING_PICTURE_FAILURE}`, this.onUploadFailure)
    })
  }

  onUploadProgress(progress) {
    this.setState({ progress: (progress.loaded / this.state.file.size) * 100 })
  }

  onUploadSuccess(data) {
    this.setState({ complete: true })
    if (this.props.onUploadSuccess) this.props.onUploadSuccess(data.Location)
  }

  onUploadFailure(error) {
    console.error(error)
  }

  onFileChange(e) {
    this.props.dispatch((dispatch, getState, { socket, ss }) => {
      const file = e.target.files[0]
      const stream = ss.createStream()
      this.setState({ file, loading: true }, () => {
        socket.on(`${LISTING_PICTURE_PROGRESS}`, this.onUploadProgress)
        socket.on(`${LISTING_PICTURE_SUCCESS}`, this.onUploadSuccess)
        socket.on(`${LISTING_PICTURE_FAILURE}`, this.onUploadFailure)
        ss(socket).emit(LISTING_PICTURE, stream, { fileName: file.name })
        ss.createBlobReadStream(file).pipe(stream)
      })
    })
  }

  render() {
    return (
      <input
        type="file"
        onChange={this.onFileChange}
        disabled={this.state.complete}
      />
    )
  }
}

ImageUpload.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onUploadSuccess: PropTypes.func.isRequired,

}

export default connect()(ImageUpload)
