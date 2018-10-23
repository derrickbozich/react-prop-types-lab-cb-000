// Code Product Component Here
import React from 'react'

export default class Product extends React.Component{
  render(){
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
  componentName = comopnentName || 'ANONYMOUS';

  if (props[propName]) {
    let value = props[propName];
    if (typeof value === 'number') {
        return (value > 80 && value < 300) ? null : new Error(propName + ' in ' + componentName + " must be between 80 and 300");
    }
  }

  // if prop value isn't inputted, will return new error
  return new Error();
}
