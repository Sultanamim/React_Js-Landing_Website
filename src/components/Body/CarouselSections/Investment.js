import React from "react";
import Img1 from "../../../asstes/inv1.png";
import Img2 from "../../../asstes/inv2.png";
import Img3 from "../../../asstes/inv3.png";

export default function Investment() {
  return (
    <div className="slide-item-4">
      <div className="container">
        <h2>Investment</h2>
        <nav>
          <div
            class="nav nav-tabs d-flex align-items-center justify-content-center"
            id="nav-tab"
            role="tablist"
          >
            <button
              class="nav-link active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              How Much Does It Cost?
            </button>
            <button
              class="nav-link"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              How Much can I make?
            </button>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
            tabindex="0"
          >
            <div className="container">
              <div className="row d-flex my-5">
                <div
                  className="col-12 col-md-4 d-flex align-items-center justify-content-center"
                  style={{ flexDirection: "column" }}
                >
                  <img src={Img1} />
                  <div className="d-table-cell text-center w-100">
                    <h4>$50,000</h4>
                    <p>Franchise Fee</p>
                  </div>
                </div>
                <div
                  className="col-12 col-md-4 d-flex align-items-center justify-content-center"
                  style={{ flexDirection: "column" }}
                >
                  <img src={Img2} />
                  <div className="d-table-cell text-center w-100">
                    <h4>$652,565-$1,750,900</h4>
                    <p>
                      Initial Investment
                      <br />
                      Including Franchise Fee
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-md-4 d-flex align-items-center justify-content-center"
                  style={{ flexDirection: "column" }}
                >
                  <img src={Img3} />
                  <div className="d-table-cell text-center w-100">
                    <h4>$500,000</h4>
                    <p>Liquidity Requirement</p>
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
          <div
            class="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
            tabindex="0"
          >
            <div className="container mt-5">
              <h3>Average unit sales for 2022</h3>
              <h2>$2,658,943</h2>
              <p className="mx-5">
                According to Item 19 of the Paris Baguette Franchise Disclosure
                Document with 46% of cafés exceeding that amount. Compared to
                the average unit volume of 2021, $2,244,757, this is a 18.44%
                increase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
