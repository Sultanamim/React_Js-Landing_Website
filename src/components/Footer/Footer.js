import React from "react";
import Logo from "../../asstes/footer-log.png";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container px-5">
        <div className="footer-top">
          <div className="row d-flex pb-5">
            <div className="col-12 col-md-6">
              <div className="logo">
                <img src={Logo} />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <h4 className="title">Home</h4>
              <div className="row d-flex justify-content-center">
                <div className="col-12 col-md-6 d-table-cell">
                  <li>
                    <a href="">why Paris baguette</a>
                  </li>
                  <li>
                    <a href="">available Markets</a>
                  </li>
                  <li>
                    <a href="">New openings</a>
                  </li>
                </div>
                <div className="col-12 col-md-6">
                  <li>
                    <a href="">Our New Prototype</a>
                  </li>
                  <li>
                    <a href="">Franchisee stories</a>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div className="border-row">
            <ul className="social-list d-block">
              <li>
                <i class="fa-brands fa-facebook"></i>
              </li>
              <li>
                <i class="fa-brands fa-twitter"></i>
              </li>
              <li>
                <i class="fa-brands fa-instagram"></i>
              </li>
            </ul>
            <ul className="social-list d-block">
              <li className="px-4">
                <a href="">Privacy policy</a>
              </li>
              <li>
                <a href="">Terms Of Use</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <strong>© 2023 Paris baguette bakery cafe</strong>
          <p>
            This website and the information contained on this website is for
            information purposes only. This is not an offer to sell, or the
            solicitation of an offer to buy, a franchise. This franchise is
            offered only by our delivery of a franchise disclosure document to
            you in compliance with the Federal Trade Commission’s rule on
            franchising and various state and provincial/territorial franchise
            sales laws. Franchise offerings cannot be made by us, or on our
            behalf, in any state unless we are registered, exempt or otherwise
            qualified to offer franchises in that state. The communications on
            this website are not directed towards residents of any state where
            we are not currently authorized to sell franchises and we will not
            sell franchises in those states or to residents of those states
            until we are authorized. The following states regulate the offer and
            sale of franchises: CA, HI, IN, IL, MD, MI, MN, NY, ND, RI, SD, VA,
            WA and WI. If you reside in one of these states, you may have
            certain rights under applicable franchise laws.
          </p>
          <p>
            FOR THE STATE OF NEW YORK: This advertisement is not an offering. An
            offering can be made only by a prospectus filed first with the
            Department of Law of the State of New York. Such filing does not
            constitute approval by the Department of Law. FOR THE STATE OF
            MINNESOTA: Minn. Reg # 9691; Paris Baguette Family, Inc., 137 West
            Commercial Avenue, Moonachie, New Jersey 07074
          </p>
        </div>
      </div>
    </div>
  );
}
