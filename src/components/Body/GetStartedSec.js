import React from "react";

export default function GetStartedSec(props) {
  return (
    <div className="get-start-sec">
      <div className="container">
        <div className="row d-flex py-5">
          <h2>Ready to Get Started?</h2>
          <p>Learn more about franchising with Paris Baguette</p>
          <button
            data-bs-target="#apply-form"
            className="apply-btn"
            onClick={() => props.handleShow()}
          >
            Apply To Own
          </button>
          <button data-bs-target="#apply-form" className="apply-btn btn2">
            Download Brochure
          </button>
        </div>
      </div>
    </div>
  );
}
