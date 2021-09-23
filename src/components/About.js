import React from "react";
import "./About.css";

export default function About() {
  return (
    <div>
      <div class="about">
        <div class="text">
          <h5>
            Setting a benchmark in the industry, Apponix Technologies Private
            Limited is the most innovative Training and Recruitment Company
            strategically located in Bangalore, <br /> delivering classroom and
            online trainings across India, UK and USA.
          </h5>{" "}
          <br />
          <h3>What We Focus On</h3> <br />
          <h6>
            Achieving ample exposure <br />
            Revolutionising the standard of learning and development <br />
            Addressing on-the-job challenges <br />
            Providing tailored training solutions <br />
            eLearning concept <br />
            Integration of classroom face-to-face learning experiences
          </h6>{" "}
          <br />
          <h5>
            QueniT stands for professionalism and quality of service, leading
            the way with INNOVATIVE concepts and constantly striving for
            EXCELLENCE... . <br /> <button>Read More</button>
          </h5>
        </div>
        <div class="pic">
          <img src="images/professional.jpg" height="300px" width="500px" />
        </div>
      </div>
      <div class="sec">
        <div class="sec1">
          <h1>
            Why Should you Choose <span> Quient Technologies ?.</span>
          </h1>
        </div>

        <div class="why">
          <div class="row1">
            <i class="fas fa-graduation-cap"></i>
            <h4>100%</h4>
            <p>
              Student Satisfaction Rate till Date, We believe education is a
              path not a destination,Grow your skills and better opportunities
              you will find.
            </p>
          </div>
          <div class="row2">
            <i class="fas fa-book-reader"></i>
            <h4>5000+</h4>
            <p>
              Students have attended our training programs till date and the
              number is growing rapidly due to the trust and credibility in our
              brand.
            </p>
          </div>
          <div class="row3">
            <i class="fas fa-at"></i>
            <h4>20+</h4>
            <p>
              Certification Courses, All our training courses have high in
              demand always, you jobs instantly after completing the training..
            </p>
          </div>
          <div class="row4">
            <i class="fas fa-award"></i>
            <h4>5</h4>
            <p>
              We providing training in latest technologies and confident. we
              will continue training on latest technologies for our valued
              students.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
