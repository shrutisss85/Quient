import React from "react";
import "./Testimonial.css";

export default function Testimonial() {
  return (
    <div className="testimonials">
      <h1>WHAT CLIENTS SAY</h1> <br />
      <h6>
        The way y'all listen to your customer while also prioritizing product{" "}
        <br /> enhancment sholud be the gold standards
      </h6>{" "}
      <br />
      <div className="grid">
        <div className="grid1">
          <div className="subgrid1">
            <img src="/images/professional.jpg" alt="Avatar" height="120px" />
          </div>
          <div className="subgrid2">
            <h3> Randhir</h3>
          </div>

          <div className="subgrid3">
            <p>
              Peer review testimonials take advantage of the pieces of customer
              feedback that are left on review sites like Yelp and Angi
              (formerly Angie’s List). These reviews can be very influential for
              customers as many consumers look at these review sites during the
              decision-making process.
            </p>
          </div>
        </div>
        <div className="grid2">
          <div className="subgrid4">
            <img src="/images/professional.jpg" alt="Avatar" height="120px" />
          </div>
          <div className="subgrid5">
            <h3> Lenister</h3>
          </div>
          <div className="subgrid6">
            These reviews should be used as customer testimonials for your
            business because they can be quickly uploaded and shared to your
            company's website. They can be screenshotted and then posted on the
            home page for customers
          </div>
        </div>

        <div className="grid3">
          <div className="subgrid7">
            <img src="/images/professional.jpg" alt="Avatar" height="120px" />
          </div>
          <div className="subgrid8">
            <h3>Shruti</h3>
          </div>
          <div className="subgrid9">
            <p>
              Peer reviews are particularly helpful for customers interacting
              with your business for the first time. Studies show that 52% of
              consumers will only buy from a business if they have four or more
              stars on a review site
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
