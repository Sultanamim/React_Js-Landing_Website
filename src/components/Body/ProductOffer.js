import React, { useEffect, useState } from "react";
import ProductOffering from "./CarouselSections/ProductOffering";
import LeaderShipTeam from "./CarouselSections/LeadershipTeam";
import ParisBagutte from "./CarouselSections/ParisBaguette";
import Investment from "./CarouselSections/Investment";

export default function ProductOffer() {
  const [active, setActive] = useState({
    slide1: false,
    slide2: false,
    slide3: false,
    slide4: false,
  });
  return (
    <section className="product-sec pb-5" id="whyParis">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-pause="carousel"
      >
        <ul className="custom-list">
          <li
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            data-bs-toggle="carousel"
            aria-current="true"
            aria-label="Slide 1"
          >
            <a href="#">Our Product Offering</a>
          </li>
          <li
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-current="true"
            aria-label="Slide 2"
            data-bs-toggle="carousel"
          >
            <a href="#">Leadership Team</a>
          </li>
          <li
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-current="true"
            aria-label="Slide 3"
            data-bs-toggle="carousel"
          >
            <a href="#">Paris Baguette</a>
          </li>
          <li
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-current="true"
            aria-label="Slide 4"
            data-bs-toggle="carousel"
          >
            <a href="#">Investment</a>
          </li>
        </ul>
        <div className="container">
          <div className="carousel-indicators mt-5">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner py-5">
            <div className="carousel-item active">
              <ProductOffering />
            </div>
            <div className="carousel-item">
              <LeaderShipTeam />
            </div>
            <div className="carousel-item">
              <ParisBagutte />
            </div>
            <div className="carousel-item">
              <Investment />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}
