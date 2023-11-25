import React, { useRef, useState } from "react";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import StickyFooter from "./components/Footer/StickyFooter";
import Modal from "react-bootstrap/Modal";

export default function Main() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Header handleShow={handleShow} />
      <Body handleShow={handleShow} />
      <Footer />
      <StickyFooter />

      <Modal className="modal-xl" show={show} onHide={handleClose}>
        <div className="wood-sec">
          <Modal.Header closeButton></Modal.Header>
          <div className="container">
            <div className="row d-flex py-5">
              <div className="col-12">
                <h3>Apply To Own</h3>
                <p>
                  Complete the form below to start a conversation about owning a
                  Paris Baguette.
                  <br />
                </p>
              </div>
              <div className="col-12">
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
                      <input
                        className="form-control"
                        placeholder="City*"
                        type="text"
                      />
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
                      Minimum liquid capital investment is $500,000. Do You Meet
                      This Requirement?
                    </div>

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

                  <div className="row d-flex mt-4">
                    <div className="col-12 col-md-9 label">
                      Do you have a net worth of at least $1.5 million?
                    </div>

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
                  <div className="row d-flex align-items-center justify-content-center">
                    <button className="" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
