import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  {
    /*var index = 0;
  var slides = document.querySelectorAll(".slides");
  var dot = document.querySelectorAll(".dot");

  function changeSlide() {
    if (index < 0) {
      index = slides.length - 1;
    }

    if (index > slides.length - 1) {
      index = 0;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      dot[i].classList.remove("active");
    }

    slides[index].style.display = "block";
    dot[index].classList.add("active");

    index++;

    setTimeout(changeSlide, 2000);
  }

changeSlide(); */
  }
  return (
    <div>
      <nav>
        <label className="logo1">
          {" "}
          <img src="images/logo2.png" height="50px" width="50px" />
        </label>
        <label className="logo">
          <span style={{ color: "rgb(202, 62, 11)" }}>Queint </span>Tech
        </label>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">Aboutus</Link>
          </li>
          <li>
            <Link to="/testimonial">Testimonials</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <div id="slider">
        <div className="slides">
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            width="100%"
            height="455px"
          />
        </div>

        <div className="slides">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
            width="100%"
            height="455px"
          />
        </div>

        <div className="slides">
          <img
            src="https://images.unsplash.com/photo-1601807576163-587225545555?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=666&q=80"
            width="100%"
            height="455px"
          />
        </div>

        <div className="slides">
          <img
            src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
            width="100%"
            height="455px"
          />
        </div>

        <div className="slides">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
            width="100%"
            height="455px"
          />
        </div>

        <div id="dot">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
      <div className="welcome">
        <div className="left">
          <img
            src="images/Professional-Development.png"
            height="400px"
            width="400px"
          />
        </div>
        <div className="right">
          <h1>
            Welcome to{" "}
            <span style={{ color: "orangered" }}> Quient Technologies.</span>
          </h1>
          <h3>
            Quient Technologies Private Limited is a Bangalore based Training &
            Recruitment company delivering classNameroom and online trainings in
            India, USA and UK.
          </h3>

          <p>
            {" "}
            Providing high quality training at affordable fees is our core
            value. We offer classNameroom and online training on niche
            technologies which are in high demand. All our trainers are IT
            professionals with rich experience. Excellent Trainers and Fabulous
            Lab this is what you can expect from us. Free training materials,
            Free Career consulting, Career guidance by experienced IT
            professionals, Pleasant and modern training rooms.
          </p>
        </div>
      </div>
    </div>
  );
}
