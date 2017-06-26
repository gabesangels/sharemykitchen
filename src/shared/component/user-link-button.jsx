import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


const UserLinkButton = ({ picture, ...rest }) => {
  return (
    <Link
      to="/profile"
      className="avatar avatar-md"
      {...rest}
    >
      <img
        src={picture}
        alt=""
      />
    </Link>
  )
}

UserLinkButton.propTypes = {
  picture: PropTypes.string.isRequired,
}

export default UserLinkButton
