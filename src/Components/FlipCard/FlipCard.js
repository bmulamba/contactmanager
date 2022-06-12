import React from "react";
import "./FlipCard.css";
import { Link } from "react-router-dom";

export const FlipCard = (props) => {
  return (
    <React.Fragment>
      <div className="card-flip">
        <div className="card-card-flip" >
          <div className="head-flip-card">
            <div className="head-flip-delivery">
              <input type="checkbox" />
              <span>DELIVERY</span>
            </div>
            <div className="head-flip-delivery">
              <input type="checkbox" />
              <span>COLLECTION</span>
            </div>
          </div>
          <h3>R {props.price}</h3>
        </div>
      <div className="buttons-bottom">
        <Link
          to="#"
          type="button"
          onClick={props.decrementProduct}
          className="btn-incredec"
        >
          <span>
          -
          </span>
        </Link>
        <span
        >{props.productCount}</span>
        <Link
          to="#"
          type="button"
          onClick={props.incrementProduct}
          className="btn-incredec"
        >
          <span>
          +
          </span>
        </Link>
      </div> 
      <button className="add-to-card-btn">ADD TO CART</button>
       </div>
    
    </React.Fragment>
  );
};
