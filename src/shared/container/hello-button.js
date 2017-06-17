import { connect } from 'react-redux'

import { sayHello } from '../action/hello'
import Button from '../component/button'

const mapStateToProps = () => {
  return {
    label: 'Say hello',
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: () => { dispatch(sayHello('Hello!')) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button)
