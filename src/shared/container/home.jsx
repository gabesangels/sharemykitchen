/* eslint-disable react/no-array-index-key */

import React from 'react'
import PropTypes from 'prop-types'
import { DateRangePicker } from 'react-dates'
import querystring from 'querystring'

import { FEATURE_TYPES } from '../config'
import HomePageCarousel from '../component/home-page-carousel'

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
      <div className="container">
        <div className="columns">
          <div className="col-12 text-center">
            <form onSubmit={this.onSubmit}>
              <h3> Welcome! </h3>
              <HomePageCarousel />
              <p>Share My Kitchen is a place where foodies and entertainers can
              make their spaces and tools available to like-minded individuals.
              </p>
              <p>Looking for a kitchen to use for your next event or project?<br />
              Scroll down to customize your search.<br />
              Interested in advertising your fabulous space?<br />
              Click the host button above to get started!
              </p>
              <div className="divider"></div>
              <h4> Pick your dates: </h4>
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
              <div className="divider"></div>
              <h4> Pick your features: </h4>
              <div className="container">
                <div className="columns">
                  {FEATURE_TYPES.map((feature, i) => {
                    return (
                      <div key={i} className="col-2 centered">
                        <h5>{feature.type}</h5>
                        {feature.children.map((child, j) => {
                          return (
                            <label className="centered" key={j} htmlFor={child.name}>
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
                </div>
              </div>
              <button className="btn" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
}

export default Home
