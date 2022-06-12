import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./../ProductCard/ProductCard";
import "./ProductList.css";

export default class ProductList extends Component {
  render() {
    return (
      <div className="list-product">
        {this.props.products.map((item) => {
          return (
            <div key={item.id}>
              <Link to={`/product/${item.id}`} className="link-color">
                <ProductCard
                  productCount={this.props.productCount}
                  item={item}
                  incrementProduct={this.props.incrementProduct}
                  decrementProduct={this.props.decrementProduct}
                />
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}
