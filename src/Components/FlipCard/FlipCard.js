import React, { Component } from "react";
import "./FlipCard.css";
import { Link } from "react-router-dom";

export default class FlipCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addtoCard: true,
    };
  }

  handleTextAddtoCart = () => {
    this.setState({ addtoCard: !this.state.addtoCard });
  };

  render() {
    return (
      <React.Fragment>
        <div className="card-flip from-bottom">
          <div className="card-card-flip">
            {/* <div className="head-flip-card">
              <div className="head-flip-delivery">
                <input type="checkbox" />
                <span>DELIVERY</span>
              </div>
              <div className="head-flip-delivery">
                <input type="checkbox" />
                <span>COLLECTION</span>
              </div>
            </div> */}
            <h4> <b>R {this.props.price}.<small>00</small></b></h4>
          </div>
          <div className="buttons-bottom">
            <Link
              to="#"
              type="button"
              onClick={this.props.decrementProduct}
              className="btn-incredec"
            >
              <span>-</span>
            </Link>
            <span>{this.props.productCount}</span>
            <Link
              to="#"
              type="button"
              onClick={this.props.incrementProduct}
              className="btn-incredec"
            >
              <span>+</span>
            </Link>
          </div>
          <div className="">
            <Link
              to="#"
              className="add-to-card-btn "
              type="button"
              onClick={() => this.props.addToCard()}
            >
              ADD TO CART
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
