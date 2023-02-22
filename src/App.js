import React from "react";
import { Routes, Route } from "react-router-dom";
import AddUser from "./Components/AddUser/AddUser";
import User from "./Components/Users/User";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/add" element={<AddUser />} />
      </Routes>
    </div>
  );
  }