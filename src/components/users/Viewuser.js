import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./Viewuser.css";

const User = () => {
  const [users, setUser] = useState({
    name: "",
    address: "",
    email: "",
    message: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:8800/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Name: {users.name}</li>
        <li className="list-group-item">Address: {users.address}</li>
        <li className="list-group-item">Email: {users.email}</li>
        <li className="list-group-item">Message: {users.message}</li>
      </ul>
      <br />
      <Link className="btn4" to="/">
        Back to Home
      </Link>
    </div>
  );
};

export default User;
