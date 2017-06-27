import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import LoginLink from './login-link'
import UserLinkButton from '../component/user-link-button'

const UserLink = ({ isLoggedIn, user }) => {
  return isLoggedIn ? <UserLinkButton {...user} /> : <LoginLink className="btn btn-primary" />
}

UserLink.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  user: PropTypes.object, // eslint-disable-line 
}

UserLink.defaultProps = {
  user: null,
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.authentication.isLoggedIn,
    user: state.authentication.user,
  }
}

export default connect(mapStateToProps)(UserLink)
