import React from "react";
import { Link } from "react-router-dom";

export default function ViewContact() {
  return (
    <React.Fragment>
      <section className="view-contact-intro p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3 text-warning fw-bold">View Contact</p>
              <p className="fst-italic">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="view-contact mt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"
                alt="img"
                className="contact-img"
              />
            </div>
            <div className="col-md-8">
              <ul className="list-group">
                <li className="list-group-item list-group-item-action">
                  Name : <span className="fw-bolt"> Rajan</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Mobile : <span className="fw-bolt"> 76293292973</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Email : <span className="fw-bolt">warajan@gmail.com</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Company : <span className="fw-bolt">warajan@gmail.com</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Title : <span className="fw-bolt">warajan@gmail.com</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Group : <span className="fw-bolt">Familly</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Link to={"/contacts/list"} className="btn btn-warning">
                Back
              </Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
