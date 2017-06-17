import { connect } from 'react-redux'

import Message from '../component/message'

const mapStateToProps = (state) => {
  return {
    message: state.hello.messageAsync,
  }
}

export default connect(mapStateToProps)(Message)
