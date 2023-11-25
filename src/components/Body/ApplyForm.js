import React from "react";

export default function ApplyForm() {
  return (
    <div className="apply-form text-center" id="apply-form">
      <h3>Apply To Own A Bakery Café</h3>
      <p>
        Complete the form below to start a conversation about owning a Paris
        Baguette.
        <br />
      </p>
      <div className="container">
        <form>
          <div className="row d-flex">
            <div className="col-12 col-md-6 py-1">
              <input
                className="form-control"
                placeholder="First Name*"
                type="text"
              />
            </div>
            <div className="col-12 col-md-6 py-1">
              <input
                className="form-control"
                placeholder="Last Name*"
                type="text"
              />
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-12 col-md-6 py-1">
              <input
                className="form-control"
                placeholder="Phone*"
                type="text"
              />
            </div>
            <div className="col-12 col-md-6 py-1">
              <input
                className="form-control"
                placeholder="Email*"
                type="text"
              />
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-12 col-md-6 py-1">
              <input className="form-control" placeholder="City*" type="text" />
            </div>
            <div className="col-12 col-md-6 py-1">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option value="Country*">Country*</option>
                <option value="United State">United State</option>
                <option value="Canada*">Canada</option>
              </select>
            </div>
          </div>
          <div className="row d-flex mt-4">
            <div className="col-12 col-md-9 label">
              Minimum liquid capital investment is $500,000. Do You Meet This
              Requirement?
            </div>

            <div className="col-12 col-md-3">
              <div className="row d-flex align-items-center justify-content-start">
                <div class="form-check d-flex col-6">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    checked
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Yes
                  </label>
                </div>
                <div class="form-check d-flex col-6">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex mt-4">
            <div className="col-12 col-md-9 label">
              Do you have a net worth of at least $1.5 million?
            </div>

            <div className="col-12 col-md-3">
              <div className="row d-flex align-items-center justify-content-start">
                <div class="form-check d-flex col-6">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault3"
                    checked
                  />
                  <label class="form-check-label" for="flexRadioDefault3">
                    Yes
                  </label>
                </div>
                <div class="form-check d-flex col-6">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault4"
                  />
                  <label class="form-check-label" for="flexRadioDefault4">
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex align-items-center justify-content-center">
            <button className="" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
