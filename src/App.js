import React, { Component, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Card from "./Components/Card/Card";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Spinner from "./Components/Spinner/Spinner";

const ProductList = lazy(() => import("./Components/ProductList/ProductList"));
const ProductDetail = lazy(() =>
  import("./Components/ProductDetails/ProductDetail")
);

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      cart: [],
      product: [],
      productCount: 1,
    };
  }

  incrementProduct = () => {
    this.setState(({ productCount }) => ({ productCount: productCount + 1 }));
  };

  decrementProduct = () => {
    this.setState(({ productCount }) => ({ productCount: productCount - 1 }));
  };

  addToCard = (product) => {
    this.setState((state) => ({
      cart: [...state.cart, product],
    }));
  };

  componentDidMount() {
    fetch("https://apifakeapi.herokuapp.com/data")
      .then((res) => res.json())
      .then((data) => this.setState({ products: data }));
  }

  render() {
    return (
      <React.Fragment>
        <Navbar cart={this.state.cart} total={this.state.total} />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Spinner />}>
                <ProductList
                  products={this.state.products}
                  addToCard={this.addToCard}
                  handleProductDetail={this.handleProductDetail}
                  incrementProduct={this.incrementProduct}
                  productCount={this.state.productCount}
                  decrementProduct={this.decrementProduct}
                />
              </Suspense>
            }
          />
          <Route
            path="/product/:id"
            element={
              <Suspense fallback={<Spinner />}>
                <ProductDetail
                  incrementProduct={this.incrementProduct}
                  addToCard={this.addToCard}
                  productCount={this.state.productCount}
                  decrementProduct={this.decrementProduct}
                />{" "}
              </Suspense>
            }
          />
          <Route path="/cart" element={<Card />} />
        </Routes>
      </React.Fragment>
    );
  }
}
