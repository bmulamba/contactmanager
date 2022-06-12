import React, { Component } from 'react'
// import { useParams } from 'react-router-dom'

export default class ProductDetail extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       product : []
    }
  }

  // componentDidMount(){
  //   const prodId = useParams;
  //   fetch(`https://apifakeapi.herokuapp.com/data/${id}`)
  //   .then(res => res.json())
  //   .then(data => this.setState({ product : data}))
  // }

  render() {
    // console.log(this.props.products[0]);
    return (
      <div>ProductDetail</div>
    )
  }
}
