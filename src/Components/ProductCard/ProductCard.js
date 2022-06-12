import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FlipCard } from "../FlipCard/FlipCard";

import "./ProductCard.css";

export default class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flipcard: true,
    };
  }

  flipcard = () => {
    this.setState({ flipcard: !this.state.flipcard });
  };

  render() {
    return (
      <div className="ccard">
        <div className="full-card">
          {this.props.item.onlineBadge ? (
            <div className="badge-online">Online</div>
          ) : (
            ""
          )}
          <img
            src={this.props.item.images[0]}
            className="card-img-top item-image"
            alt={this.props.item.id}
          />
          <div className="card-body">
            <div className="card-foter">
              <h4>
                <b> {this.props.item.name}</b>
              </h4>
              <h4> R {this.props.item.price}</h4>
            </div>
          </div>
        </div>
        {this.state.flipcard ? <Link to="#" onClick={() => this.flipcard()} className="btn ">
          <b>SELECT</b> </Link>
           : 
            <FlipCard
              price={this.props.item.price}
              productCount={this.props.productCount}
              incrementProduct={this.props.incrementProduct}
              decrementProduct={this.props.decrementProduct}
              flipcard={this.flipcard}
            />
          }
    
      </div>
    );
  }
}
