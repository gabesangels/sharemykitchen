import React from 'react'
import { connect } from 'react-redux'

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }
  render() {
    console.log('props', this.props)
    return (
      <div>
        <div className="text-center">
          <h2>{this.props.user.name}</h2>
          <img src={this.props.user.picture}></img>
          <h2>Email: {this.props.user.email}</h2>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    user: state.authentication.user
  }
}

export default connect(mapStateToProps)(Profile)
