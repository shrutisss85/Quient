import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <div class="footer">
        <div class="contain">
          <div class="col">
            <h1>Company</h1>
            <img
              src="/images/logo.jpeg"
              alt="Cinque Terre"
              width="150"
              height="150"
            />
          </div>
          <div class="col">
            <h1>Products</h1>
            <ul>
              <li>Quient</li>
              <li>Home</li>
              <li>About</li>
              <li>Testimony</li>
              <li>contact</li>
            </ul>
          </div>
          <div class="col">
            <h1>Accounts</h1>
            <ul>
              <li>Quient</li>
              <li>Home</li>
              <li>about</li>
              <li>Testimony</li>
              <li>contact</li>
            </ul>
          </div>
          <div class="col">
            <h1>Service</h1>
            <ul>
              <li>Quient</li>
              <li>Tranning</li>
              <li>Placement</li>
              <li>Technology</li>
              <li>Web templates</li>
              <li>Email templates</li>
            </ul>
          </div>
          <div class="col">
            <h1>Support</h1>
            <ul>
              <li>Contact us</li>
              <li>Web chat</li>
              <li>Open ticket</li>
            </ul>
          </div>
          <div class="col social">
            <h1>Social</h1>
            <div class="soc">
              <ul>
                <li>
                  <i class="fab fa-facebook fa-10px"></i>
                </li>
                <li>
                  <i class="fab fa-instagram"></i>
                </li>
                <li>
                  <i class=" fab fa-twitter"></i>
                </li>
              </ul>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
  );
}
