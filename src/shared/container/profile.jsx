import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Profile = ({ name, picture, email }) => {
  return (
    <div>
      <div className="text-center">
        <h2>{name}</h2>
        <img src={picture} alt="" />
        <h2>Email: {email}</h2>
      </div>
    </div>
  )
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => {
  return {
    ...state.authentication.user,
  }
}

export default connect(mapStateToProps)(Profile)
