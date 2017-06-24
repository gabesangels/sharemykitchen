import { connect } from 'react-redux'

import Button from '../component/button'
import { bookingsCreateAsync } from '../action/bookings'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleClick: () => {
      const booking = {
        listing_id: ownProps.listing_id,
      }
      dispatch(bookingsCreateAsync(booking))
    },
  }
}

export default connect(null, mapDispatchToProps)(Button)
