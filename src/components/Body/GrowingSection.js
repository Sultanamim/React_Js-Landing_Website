import React from "react";
import Map from "../../asstes/map.png";

export default function GrowingSection(props) {
  return (
    <section className="growing-sec" id="markets">
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-12 col-md-12 col-lg-5">
            <h3>Where we are Growing</h3>
            <p>
              Paris Baguette has 4,000 units worldwide, more than 150 units open
              in 30 states, and is working toward reaching the 1,000-unit mark
              in the States by 2030. After a great end to 2022, the concept has
              kicked off 2023 with a bang, signing 40 franchise agreements and
              opening a restaurant/week.
            </p>
            <button
              data-bs-target="#apply-form"
              className="apply-btn"
              onClick={() => props.handleShow()}
            >
              Apply To Own
            </button>
          </div>
          <div className="col-12 col-md-12 col-lg-7">
            <img src={Map} />
          </div>
        </div>
      </div>
    </section>
  );
}
