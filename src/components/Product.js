// Code Product Component Here
import React from 'react'

export default class Product extends React.Component{

}

Product.propTypes = {
  name: PropTypes.string,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.string.isRequired
  weight: PropTypes.number.isRequired
}
