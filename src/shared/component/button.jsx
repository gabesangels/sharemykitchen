import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ label, handleClick, ...props }) => {
  return (
    <button {...props} onClick={handleClick}>{label}</button>
  )
}


Button.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default Button
