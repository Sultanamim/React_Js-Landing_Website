import React, { useState } from "react";
import Img1 from "../../../asstes/food-1.png";
import Img2 from "../../../asstes/food-2.png";
import Img3 from "../../../asstes/food-3.png";
import Img5 from "../../../asstes/food-5.png";
import Img6 from "../../../asstes/food-6.png";
import Img7 from "../../../asstes/food-7.png";
import Img8 from "../../../asstes/food-8.png";
import Img9 from "../../../asstes/food-9.png";
import Img10 from "../../../asstes/food-10.png";
import Img4 from "../../../asstes/food-4.png";

export default function ProductOffering() {
  return (
    <div className="slide-item-1">
      <div className="container">
        <h2>Our Product Offering</h2>
        <p>
          Paris Baguette’s primary mission, executed every day by its expert
          staff of bakers, cakers and baristas, is to share moments of joy with
          customers and help customers share moments of joy with their friends
          and family by providing world-class cakes, pastries, coffees, breads
          and other French-inspired bakery café fare.{" "}
        </p>
        <div className="row d-flex align-items-center justify-content-center mt-5">
          <div className="col-6 col-md-4 col-lg-2 col-xl-2">
            <img src={Img1} alt="img-1" />
          </div>
          <div className="col-6 col-md-4 col-lg-2 col-xl-2">
            <img src={Img2} alt="img-1" />
          </div>
          <div className="col-6 col-md-4 col-lg-2 col-xl-2">
            <img src={Img3} alt="img-1" />
          </div>
          <div className="col-6 col-md-4 col-lg-2 col-xl-2">
            <img src={Img4} alt="img-1" />
          </div>
          <div className="col-6 col-md-4 col-lg-2 col-xl-2">
            <img src={Img5} alt="img-1" />
          </div>
        </div>
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-6 col-md-4 col-lg-2 col-xl-2">
            <img src={Img6} alt="img-1" />
          </div>
          <div className="col-6 col-md-4 col-lg-2 col-xl-2">
            <img src={Img7} alt="img-1" />
          </div>
          <div className="col-6 col-md-4 col-lg-2 col-xl-2">
            <img src={Img8} alt="img-1" />
          </div>
          <div className="col-6 col-md-4 col-lg-2 col-xl-2">
            <img src={Img9} alt="img-1" />
          </div>
          <div className="col-6 col-md-4 col-lg-2 col-xl-2">
            <img src={Img10} alt="img-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
