import React from "react";

export const AddUser = ({ onAdd }) => {
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    onAdd(evt.target.name.value, evt.target.email.value);
    evt.target.name.value = "";
    evt.target.email.value = "";
  };

  return (
    <div className="container ">
      <div className="row " >
        <div className="col-md-6 mx-auto">
      <form onSubmit={handleOnSubmit}>
        <h3>Add User</h3>
        <input placeholder="Name" className="form-control my-3" name="name" />
        <input placeholder="Email" className="form-control my-2 " name="email" />
        <button className="btn btn-primary d-block" onSubmit={handleOnSubmit}>Add</button>
        <hr />
      </form>
      </div>
      </div>
    </div>
  );
};
