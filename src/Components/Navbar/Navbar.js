import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <span className="navbar-brand">Ecomm</span>
            <div className="container">
              <div className="navbar-nav ml-auto">
                <Link to={'/cart'}>
                  <h4 className="span-total"><i className="fa fa-shopping-cart" aria-hidden="true"></i>{this.props.cart.length}</h4>
                </Link>
              </div>
            </div>
        </nav>
      </div>
    );
  }
}
