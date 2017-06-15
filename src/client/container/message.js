import { connect } from 'react-redux'
import Message from '../component/message'

const mapStateToProps = (state) => {
  return {
    message: state.hello.message,
  }
}

export default connect(mapStateToProps)(Message)
