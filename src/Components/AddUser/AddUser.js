import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AddUser() {
  const [users, setUsers] = useState({});

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.name.value, e.target.username.value, e.target.email.value);
    e.target.name.value = "";
    e.target.surname.value = "";
    e.target.email.value = "";
  };

  const onAdd = async (name, email, username) => {
    await fetch("https://jsonplaceholder.typicode.com/users/", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        username: username,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-md-6 mx-auto col-sm-12">
          <form onSubmit={handleOnSubmit}>
            <h3 className="my-4 text-bold">ADD USER</h3>
            <input
              className="my-2 form-control"
              placeholder="Name"
              name="name"
            />{" "}
            <br></br>
            <input
              className="my-2 form-control"
              placeholder="UserName"
              name="username"
            />{" "}
            <br></br>
            <input
              className="my-2 form-control"
              placeholder="Email"
              name="email"
            />{" "}
            <br></br>
            <Link
              to="/"
              className="btn btn-success d-block"
              onSubmit={handleOnSubmit}
            >
              Add
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
