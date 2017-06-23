/* eslint-disable react/no-array-index-key */

import React from 'react'
import PropTypes from 'prop-types'
import { DateRangePicker } from 'react-dates'
import querystring from 'querystring'

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
          {[
            {
              header: 'Stove Type',
              children: [
                { name: 'stove', label: 'Gas Stove', value: 'gas' },
                { name: 'stove', label: 'Electric Stove', value: 'electric' },
                { name: 'stove', label: 'No Preference', value: '' },
              ],
            },
            {
              header: 'Oven Type',
              children: [
                { name: 'oven', label: 'Gas Oven', value: 'gas' },
                { name: 'oven', label: 'Electric Oven', value: 'electric' },
                { name: 'oven', label: 'No Preference', value: '' },
              ],
            },
            {
              header: 'Mixer Type',
              children: [
                { name: 'mixer', label: 'KitchenAid', value: 'kitchenaid' },
                { name: 'mixer', label: 'Other Mixer', value: 'other' },
                { name: 'mixer', label: 'No Preference', value: '' },
              ],
            },
            {
              header: 'Blender Type',
              children: [
                { name: 'blender', label: 'Vitamix Blender', value: 'vitamix' },
                { name: 'blender', label: 'Other Blender', value: 'other' },
                { name: 'blender', label: 'No Preference', value: '' },
              ],
            },
            {
              header: 'Refrigerator Type',
              children: [
                {
                  name: 'refrigerator',
                  label: 'Stainless Steel Refrigerator',
                  value: 'stainless',
                },
                {
                  name: 'refrigerator',
                  label: 'Black Refrigerator',
                  value: 'black',
                },
                {
                  name: 'refrigerator',
                  label: 'No Preference',
                  value: '',
                },
              ],
            },
          ].map((feature, i) => {
            return (
              <div key={i}>
                <h3>{feature.header}</h3>
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
