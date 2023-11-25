import React from "react";
import CakeImg from "../../../asstes/cake.jpg";

export default function ParisBaguette() {
  return (
    <div className="slide-item-3" id="whyParis">
      <h2>Why Paris Baguette?</h2>
      <div className="container">
        <div className="row d-flex mt-5">
          <div className="col-12 col-lg-6 d-flex justify-content-end">
            <span>
              <img src={CakeImg} />
            </span>
          </div>
          <div className="col-12 col-lg-6">
            <p
              style={{
                textAlign: "left",
                fontSize: "20px",
                lineHeight: "1.3em",
                margin: "15px 0px",
              }}
            >
              Paris Baguette does two things better than any other bakery/café
              franchise: a comfortable, inviting customer experience and the
              highest-quality baked goods and coffees. While other bakery
              concepts continue to transition into full-service restaurants,
              leaving the lucrative segment largely free of competition, Paris
              Baguette remains focused on its mission to become the best
              neighborhood bakery café in the world.
            </p>
            <p
              style={{
                textAlign: "left",
                fontSize: "20px",
                lineHeight: "1.3em",
                margin: "15px 0px",
              }}
            >
              The brand has decades of experience, a globally beloved brand name
              with its 4,000 cafes, a proven record of 10 years in the U.S.,
              best-in-class operations, support, and infrastructure leading to a
              strong $2,658,943 in average unit sales volume.{" "}
            </p>
            <p
              style={{
                textAlign: "left",
                fontSize: "20px",
                lineHeight: "1.3em",
                margin: "15px 0px",
              }}
            >
              Paris Baguette opened more than 20 U.S. locations in 2020 and
              seeks to open 1,000 units across the country by 2030. Already,
              there are 52 new locations in the pipeline with an additional 30
              franchise agreements in place. Even in difficult economic times,
              Paris Baguette has attracted franchisees that see the value in
              dominating the neighborhood bakery café space, and the brand’s
              sales have remained strong.
            </p>
            <button data-bs-target="#apply-form" className="apply-btn">
              Apply To Own
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
