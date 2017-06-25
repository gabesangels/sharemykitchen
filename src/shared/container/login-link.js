import { connect } from 'react-redux'

import Link from '../component/link'

import { AUTH_FACEBOOK, AUTH_LOGOUT } from '../routes'

const mapStateToProps = (state) => {
  return {
    text: state.authentication.isLoggedIn ? 'logout' : 'login',
    href: state.authentication.isLoggedIn ? `/auth${AUTH_LOGOUT}` : `/auth${AUTH_FACEBOOK}`,
  }
}

export default connect(mapStateToProps)(Link)
