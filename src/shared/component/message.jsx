import React from 'react'
import PropTypes from 'prop-types'

const Message = (props) => {
  return (
    <p>{props.message}</p>
  )
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Message
