import React, { useState } from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Contact() {
  let history = useHistory();
  const [users, setUser] = useState({
    name: "",
    address: "",
    email: "",
  });

  const { name, address, email, message } = users;

  const onInputChange = (e) => {
    setUser({ ...users, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8800/users", users);
    console.log(e.target.value);
    history.push("/users");
  };
  return (
    <div>
      <sec>
        <div class="container">
          <div class="content">
            <div class="left-side">
              <div class="address details">
                <i class="fas fa-map-marker-alt"></i>
                <div class="topic">Address</div>
                <div class="text-one">AMC Engineering College</div>
                <div class="text-two">Kalkere</div>
              </div>
              <div class="phone details">
                <i class="fas fa-phone-alt"></i>
                <div class="topic">Phone</div>
                <div class="text-one">+919113690319</div>
                <div class="text-two">+919113690319</div>
              </div>
              <div class="email details">
                <i class="fas fa-envelope"></i>
                <div class="topic">Email</div>
                <div class="text-one">randhir0034@gmail.com</div>
                <div class="text-two">randhir0152@gmail.com</div>
              </div>
            </div>

            <div class="right-side">
              <div class="topic-text">Contact Form</div>
              <p>
                If you have any work from me or any types of quries related to
                my website, you can send me message from here. It's my pleasure
                to help you.
              </p>
              <form onSubmit={(e) => onSubmit(e)}>
                <div class="input-box">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    name="name"
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div class="input-box">
                  <input
                    type="text"
                    placeholder="Enter your address"
                    value={address}
                    name="address"
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div class="input-box">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    value={email}
                    name="email"
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div class="input-box message-box">
                  <input
                    type="text"
                    placeholder="message"
                    value={message}
                    name="message"
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div class="btn5">
                  <button type="submit">Send Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </sec>
    </div>
  );
}
