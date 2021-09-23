import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Allusers.css";

function Allusers() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, [0]);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8800/users");
    setUser(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8800/users/${id}`);
    loadUsers();
  };
  return (
    <div className="main1">
      <table className="main2 ">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Email</th>
            <th scope="col">Message</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((users, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{users.name}</td>
              <td>{users.address}</td>
              <td>{users.email}</td>
              <td>{users.message}</td>
              <div className="button">
                <td>
                  <Link class="btn1" to={`/users/view/${users.id}`}>
                    View
                  </Link>
                  <Link class="btn2" to={`/users/edit/${users.id}`}>
                    Edit
                  </Link>
                  <Link class="btn3" onClick={() => deleteUser(users.id)}>
                    Delete
                  </Link>
                </td>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Allusers;
