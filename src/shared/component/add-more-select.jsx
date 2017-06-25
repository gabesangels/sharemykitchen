import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import _keyBy from 'lodash/keyBy'

import { FEATURE_TYPES } from '../config'

class AddMoreSelect extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      options: _keyBy(this.props.options, 'type'),
      currentKey: this.props.options[0].type,
      currentVal: null,
      features: {},
    }

    this.onChangeKey = this.onChangeKey.bind(this)
    this.onChangeValue = this.onChangeValue.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  onChangeKey(e) {
    this.setState({
      currentKey: e.target.value,
      currentVal: null,
    })
  }

  onChangeValue(e) {
    this.setState({
      currentVal: e.target.value,
    })
  }

  onClick() {
    const { options, currentKey, currentVal, features } = this.state
    const newFeature = { [options[currentKey].children[0].name]: currentVal }
    const newFeatures = Object.assign({}, features, newFeature)
    this.setState({ features: newFeatures }, () => {
      this.props.onChange(this.state.features)
    })
  }

  render() {
    return (
      <div>
        {Object.keys(this.state.features).map((key) => {
          return (
            <p key={key}>
              {key}: {this.state.features[key]}
            </p>
          )
        })}
        <select onChange={this.onChangeKey} className="form-select">
          {this.props.options.map((option) => {
            return (
              <option
                key={option.type}
                value={option.type}
              >
                {option.type}
              </option>
            )
          })}
        </select>
        <select onChange={this.onChangeValue} className="form-select">
          {this.state.options[this.state.currentKey].children.map((option) => {
            return (
              <option
                key={option.label}
                data-name={option.name}
                value={option.value}
              >
                {option.label}
              </option>
            )
          })}
        </select>
        <br />
        <br />
        <button
          type="button"
          onClick={this.onClick}
          disabled={!this.state.currentVal}
          className="btn"
        >
          Add Feature
        </button>
      </div>
    )
  }
}

AddMoreSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })),
  })),
  onChange: PropTypes.func,
}

AddMoreSelect.defaultProps = {
  options: FEATURE_TYPES,
  onChange: () => {},
}

export default AddMoreSelect
