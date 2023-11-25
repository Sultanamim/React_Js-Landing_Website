import React from "react";
import "./Footer.css";

export default function StickyFooter() {
  return (
    <div className="d-none d-xl-block sticky-form fixed-bottom">
      <form className="row d-flex flex-row align-items-center justify-content-center px-3 py-2">
        <div className="col-2">
          <div className="sticky-title">
            <h3>Apply to Own</h3>
            <p>Let’s start a conversation.</p>
          </div>
        </div>
        <div className="col-2">
          <input
            className="form-control"
            placeholder="First Name*"
            type="text"
          />
        </div>
        <div className="col-2">
          <input
            className="form-control"
            placeholder="Last Name*"
            type="text"
          />
        </div>
        <div className="col-2">
          <input className="form-control" placeholder="Phone*" type="text" />
        </div>
        <div className="col-2">
          <input className="form-control" placeholder="Email*" type="text" />
        </div>
        <div className="col-2">
          <button className="" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
