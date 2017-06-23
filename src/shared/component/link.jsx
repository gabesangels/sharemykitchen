import React from 'react'

const Link = (props) => {
  const aProps = Object.assign({}, props)
  const text = aProps.text
  delete aProps.dispatch
  delete aProps.text

  return (
    <a {...aProps}>{text}</a>
  )
}

export default Link
