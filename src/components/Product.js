// Code Product Component Here
import React from 'react'

export default class Product extends React.Component{

}

Product.propTypes = {
  name: PropTypes.string,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.string.isRequired,
  weight: weightCheck
}

function weightCheck(props, propName, componentName) {
  componentName = comopnentName || 'ANONYMOUS';

  if (props[propName]) {
    let value = props[propName];
    if (typeof value === 'string') {
        return value.length <= 140 ? null : new Error(propName + ' in ' + componentName + " is longer than 140 characters");
    }
  }

  // assume all ok
  return null;
}
