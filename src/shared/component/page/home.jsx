import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { withRouter } from 'react-router'

import { APP_NAME } from '../../config'
import Home from '../../container/home'

const HomePage = (props) => {
  return (
    <div>
      <Helmet
        meta={[
          { name: 'description', content: 'Hello App is an app to say hello' },
          { property: 'og:title', content: APP_NAME },
        ]}
      />
      <Home history={props.history} />
    </div>
  )
}

HomePage.propTypes = {
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
}

export default withRouter(HomePage)
