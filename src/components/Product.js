// Code Product Component Here
import React from 'react'

export default class Product extends React.Component{
  
}

Product.propTypes = {
  name: PropTypes.string,
  size: PropTypes.string,
  scoops: PropTypes.arrayOf(PropTypes.string).isRequired,
  orderInfo: PropTypes.shape({
    customerName: PropTypes.string.isRequired,
    orderedAt: PropTypes.number.isRequired // We're using UNIX timestamps here
  }).isRequired