import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./User.css";

export default function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users/")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = async (id) => {
    console.log(id);
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setUsers(
            users.filter((user) => {
              return user.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

    // const handleDelete = () => {
    //   onDelete(id);
    // };

  return (
    <div className="container" >
        <div>
            <Link to='/add' className="btn btn-primary my-2">
                ADD NEW +
            </Link>
        </div>
      
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td className="d-flex">
                    <span className="btn btn-warning mx-2">Edith</span>
                    <span className="btn btn-danger" onClick={handleDelete}  >Delete</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>   
  );
}
