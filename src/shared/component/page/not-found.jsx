import React from 'react'
import Helmet from 'react-helmet'

const title = 'Page Not Found'

const NotFoundPage = () => {
  return (
    <div>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: 'A page to demo not found.' },
          { property: 'og:title', content: title },
        ]}
      />
      <p>Page Not Found.</p>
    </div>
  )
}

export default NotFoundPage
