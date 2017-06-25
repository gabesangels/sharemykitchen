/* eslint-disable react/no-array-index-key */

import React from 'react'
import PropTypes from 'prop-types'
import { DateRangePicker } from 'react-dates'
import querystring from 'querystring'

import { FEATURE_TYPES } from '../config'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
      stove: '',
      oven: '',
      mixer: '',
      blender: '',
      refrigerator: '',
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()
    const qsObj = {
      ...this.state,
      endDate: this.state.endDate && this.state.endDate.toString(),
      startDate: this.state.startDate && this.state.startDate.toString(),
      focusedInput: '',
    }
    const qs = querystring.stringify(qsObj)
    this.props.history.push({
      pathname: '/listings',
      search: `?${qs}`,
    })
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h3> Pick Your Dates </h3>
          <DateRangePicker
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onDatesChange={({ startDate, endDate }) => {
              this.setState({ startDate, endDate })
            }}
            focusedInput={this.state.focusedInput}
            onFocusChange={(focusedInput) => {
              this.setState({ focusedInput })
            }}
          />
          {FEATURE_TYPES.map((feature, i) => {
            return (
              <div key={i}>
                <h3>{feature.type}</h3>
                {feature.children.map((child, j) => {
                  return (
                    <label key={j} htmlFor={child.name}>
                      <input
                        type="radio"
                        name={child.name}
                        value={child.value}
                        onChange={this.onChange}
                      />
                      {child.label}
                    </label>
                  )
                })}
              </div>
            )
          })}
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

Home.propTypes = {
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
}

export default Home
