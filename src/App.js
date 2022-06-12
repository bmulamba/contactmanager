import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Card from "./Components/Card/Card";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ProductList from "./Components/ProductList/ProductList";
import ProductDetail from "./Components/ProductDetails/ProductDetail";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      cart: [],
      productCount: 1,
    };
  }

  incrementProduct = () => {
    this.setState(({ productCount }) => ({ productCount: productCount + 1 }));
  };

  decrementProduct = () => {
    this.setState(({ productCount }) => ({ productCount: productCount - 1 }));
  };

  componentDidMount() {
    fetch("https://apifakeapi.herokuapp.com/data")
      .then((res) => res.json())
      .then((data) => this.setState({ products: data }));
  }

  render() {
    return (
      <div>
        <Navbar cart={this.state.cart} total={this.state.total} />
        <Routes>
          <Route
            path="/"
            element={
              <ProductList
                products={this.state.products}
                incrementProduct={this.incrementProduct}
                productCount={this.state.productCount}
                decrementProduct={this.decrementProduct}
              />
            }
          />
          <Route
            path="/product/:id"
            element={<ProductDetail products={this.state.products} />}
          />
          <Route path="/cart" element={<Card />} />
        </Routes>
      </div>
    );
  }
}
