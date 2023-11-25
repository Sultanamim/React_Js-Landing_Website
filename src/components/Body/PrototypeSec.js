import React from "react";
import Img1 from "../../asstes/proto-1.jpg";
import Img2 from "../../asstes/proto-2.jpg";
import Img3 from "../../asstes/proto-3.jpg";
import Img4 from "../../asstes/proto-4.jpg";
import Img5 from "../../asstes/proto-5.jpg";

export default function PrototypeSec() {
  return (
    <section className="proto-sec" id="prototype">
      <div className="container">
        <div
          id="carouselCaptions"
          className="carousel slide row d-flex justify-content-center"
        >
          <button
            className="carousel-control-prev  d-none d-lg-block d-xl-block"
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <div className="row d-flex align-items-center justify-content-center py-5">
            <div className="col-12 col-md-12 col-lg-5">
              <h3>Our New Prototype</h3>
              <p>
                The new design boasts an elevated guest experience through every
                consumer touchpoint: modern and welcoming café layouts,
                distinguished brand packaging and an enhanced digital and mobile
                presence.
              </p>
              <button data-bs-target="#apply-form" className="apply-btn">
                Read More On 1851
              </button>
            </div>
            <div className="col-12 col-md-12 col-lg-7">
              <div className="container">
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselCaptions"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselCaptions"
                    data-bs-slide-to="4"
                    aria-label="Slide 5"
                  ></button>
                </div>
                <div className="carousel-inner pt-5">
                  <div className="carousel-item active">
                    <img src={Img1} />
                  </div>
                  <div className="carousel-item">
                    <img src={Img2} />
                  </div>
                  <div className="carousel-item">
                    <img src={Img3} />
                  </div>
                  <div className="carousel-item">
                    <img src={Img4} />
                  </div>
                  <div className="carousel-item">
                    <img src={Img5} />
                  </div>
                </div>
                <button
                  className="carousel-control-next  d-none d-lg-block d-xl-block"
                  type="button"
                  data-bs-target="#carouselCaptions"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <ul className="custom-list d-none  d-xl-flex row d-flex justify-content-center">
                <li
                  data-bs-target="#carouselCaptions"
                  data-bs-slide-to="0"
                  aria-current="true"
                  aria-label="Slide 1"
                  className="active"
                >
                  <img src={Img1} />
                </li>
                <li
                  data-bs-target="#carouselCaptions"
                  data-bs-slide-to="1"
                  aria-current="true"
                  aria-label="Slide 2"
                >
                  <img src={Img2} />
                </li>
                <li
                  data-bs-target="#carouselCaptions"
                  data-bs-slide-to="2"
                  aria-current="true"
                  aria-label="Slide 3"
                >
                  <img src={Img3} />
                </li>
                <li
                  data-bs-target="#carouselCaptions"
                  data-bs-slide-to="3"
                  aria-current="true"
                  aria-label="Slide 4"
                >
                  <img src={Img4} />
                </li>
                <li
                  data-bs-target="#carouselCaptions"
                  data-bs-slide-to="4"
                  aria-current="true"
                  aria-label="Slide 5"
                >
                  <img src={Img5} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
