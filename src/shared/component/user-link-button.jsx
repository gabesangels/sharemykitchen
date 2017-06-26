import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { AUTH_ME } from '../routes'

const UserLinkButton = ({ picture, ...rest }) => {
  return (
    <Link
      to={AUTH_ME}
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
