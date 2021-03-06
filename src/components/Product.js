// Code Product Component Here
import React from 'react'
// import PropTypes from 'prop-types'
import PropTypes from 'prop-types';

export default class Product extends React.Component{
  render(){
    return
    <div className="product">
      <p>name: {this.props.name}</p>
      <p>producer: {this.props.producer}</p>
      <p>has watermark: {this.props.hasWatermark}</p>
      <p>color: {this.props.color}</p>
      <p>weight: {this.props.weight}</p>
    </div>
  }


}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: weightCheck
}

function weightCheck(props, propName, componentName) {
  componentName = componentName || 'ANONYMOUS';

  const weight = props[propName];

  if (weight === undefined) {
    return new Error('The `weight` prop is required.');
  }

  if (isNaN(weight)) {
    return new Error('The `weight` prop is not a number.');
  }

  const isValidWeight = weight > 80 && weight < 300;

  if (!isValidWeight) {
    return new Error('The `weight` prop should range between 80 and 300.');
  }
}
