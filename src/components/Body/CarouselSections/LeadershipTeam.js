import React from "react";
import Img1 from "../../../asstes/man-1.jpg";
import Img2 from "../../../asstes/man-2.jpg";
import Img3 from "../../../asstes/man-3.jpg";
import Img4 from "../../../asstes/man-4.jpg";
import Img5 from "../../../asstes/man-5.jpg";
import Img6 from "../../../asstes/man-6.jpg";
import Img7 from "../../../asstes/man-7.jpg";
import Img8 from "../../../asstes/man-8.jpg";
import Img9 from "../../../asstes/man-9.jpg";
import Img10 from "../../../asstes/man-10.webp";
import LinkedIn from "../../../asstes/linkdin.png";

export default function LeadershipTeam() {
  return (
    <div className="slide-item-2">
      <div className="container">
        <h2>Leadership Team</h2>
        <p>Meet the Paris Baguette Leadership Team</p>
        <div className="row d-flex mt-5">
          <div className="col-12 col-lg-6 d-flex align-items-center text-left mt-4">
            <span>
              <img src={Img1} alt="man" />
            </span>
            <div
              className=""
              style={{ paddingLeft: "14px", display: "table-cell" }}
            >
              <h3>
                <p>Darren Tipton</p>
              </h3>
              <p style={{ fontSize: "21px", textAlign: "left" }}>
                Chief Executive Officer
              </p>
              <img src={LinkedIn} />
            </div>
          </div>
          <div className="col-12 col-lg-6 d-flex align-items-center text-left mt-4">
            <span>
              <img src={Img2} alt="man" />
            </span>
            <div
              className=""
              style={{ paddingLeft: "14px", display: "table-cell" }}
            >
              <h3>
                <p>Eric Lavinder</p>
              </h3>
              <p style={{ fontSize: "21px", textAlign: "left" }}>
                Chief Development Officer
              </p>
              <img src={LinkedIn} />
            </div>
          </div>
          <div className="col-12 col-lg-6 d-flex align-items-center text-left mt-4">
            <span>
              <img src={Img3} alt="man" />
            </span>
            <div
              className=""
              style={{ paddingLeft: "14px", display: "table-cell" }}
            >
              <h3>
                <p>Nick Scaccio</p>
              </h3>
              <p style={{ fontSize: "21px", textAlign: "left" }}>
                Vice President of Operations
              </p>
              <img src={LinkedIn} />
            </div>
          </div>
          <div className="col-12 col-lg-6 d-flex align-items-center text-left mt-4">
            <span>
              <img src={Img4} alt="man" />
            </span>
            <div
              className=""
              style={{ paddingLeft: "14px", display: "table-cell" }}
            >
              <h3>
                <p>Eric Galkin</p>
              </h3>
              <p style={{ fontSize: "21px", textAlign: "left" }}>
                Vice President of Supply Chain
              </p>
              <img src={LinkedIn} />
            </div>
          </div>
          <div className="col-12 col-lg-6 d-flex align-items-center text-left mt-4">
            <span>
              <img src={Img5} alt="man" />
            </span>
            <div
              className=""
              style={{ paddingLeft: "14px", display: "table-cell" }}
            >
              <h3>
                <p>Saeyong Park</p>
              </h3>
              <p style={{ fontSize: "21px", textAlign: "left" }}>
                Vice President of Accounting
              </p>
              <img src={LinkedIn} />
            </div>
          </div>
          <div className="col-12 col-lg-6 d-flex align-items-center text-left mt-4">
            <span>
              <img src={Img6} alt="man" />
            </span>
            <div
              className=""
              style={{ paddingLeft: "14px", display: "table-cell" }}
            >
              <h3>
                <p>Cathy Chavenet</p>
              </h3>
              <p style={{ fontSize: "21px", textAlign: "left" }}>
                Senior Vice President of Marketing
              </p>
              <img src={LinkedIn} />
            </div>
          </div>
          <div className="col-12 col-lg-6 d-flex align-items-center text-left mt-4">
            <span>
              <img src={Img7} alt="man" />
            </span>
            <div
              className=""
              style={{ paddingLeft: "14px", display: "table-cell" }}
            >
              <h3>
                <p>William Zuccarello</p>
              </h3>
              <p style={{ fontSize: "21px", textAlign: "left" }}>
                Vice President of Construction and Design
              </p>
              <img src={LinkedIn} />
            </div>
          </div>
          <div className="col-12 col-lg-6 d-flex align-items-center text-left mt-4">
            <span>
              <img src={Img8} alt="man" />
            </span>
            <div
              className=""
              style={{ paddingLeft: "14px", display: "table-cell" }}
            >
              <h3>
                <p>Michelle Jagroop</p>
              </h3>
              <p style={{ fontSize: "21px", textAlign: "left" }}>
                Vice President of Human Resources
              </p>
              <img src={LinkedIn} />
            </div>
          </div>
          <div className="col-12 col-lg-6 d-flex align-items-center text-left mt-4">
            <span>
              <img src={Img9} alt="man" />
            </span>
            <div
              className=""
              style={{ paddingLeft: "14px", display: "table-cell" }}
            >
              <h3>
                <p>Mike Spinelli</p>
              </h3>
              <p style={{ fontSize: "21px", textAlign: "left" }}>
                Vice President of Food and Beverage
              </p>
              <img src={LinkedIn} />
            </div>
          </div>
          <div className="col-12 col-lg-6 d-flex align-items-center text-left mt-4">
            <span>
              <img src={Img10} alt="man" />
            </span>
            <div
              className=""
              style={{ paddingLeft: "14px", display: "table-cell" }}
            >
              <h3>
                <p>Jin Soo Hur</p>
              </h3>
              <p style={{ fontSize: "21px", textAlign: "left" }}>
                Executive Vice President
              </p>
              <img src={LinkedIn} />
            </div>
          </div>
          <div className="row d-flex align-items-center justify-content-center">
            <button data-bs-target="#apply-form" className="apply-btn">
              Apply To Own
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
