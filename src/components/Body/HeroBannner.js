import React, { useState } from "react";
import VedioImg from "../../asstes/vedio-img.png";
import ReactPlayer from "react-player";

export default function HeroBannner() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="hero-sec d-flex align-items-center justify-content-center">
      {showVideo ? (
        <div className="video">
          <div className="container">
            <button className="close-modal" onClick={() => setShowVideo(false)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <ReactPlayer
              url="https://ownaparisbaguette.com/wp-content/uploads/2023/07/ParisBaguette_FINAL_compressed.mp4"
              controls={true}
              width="100%"
              height="100%"
            />
          </div>
        </div>
      ) : null}
      <div className="container">
        <div className="row d-flex flex-row align-items-center px-5">
          <div className="col-12 col-md-4 flex-col">
            <h3>Entrepreneur Magazine’s Number One Bakery Brand</h3>
            <p>
              Has nearly 140 units open in 30 states and added 40 Signings since
              the start of 2023.
            </p>
            <p>
              {" "}
              <a
                href="#"
                target="_blank"
                className="custom-link"
                rel="noopener"
              >
                Read more on 1851
              </a>
            </p>
          </div>
          <div className="col-12 col-md-8">
            <img
              onClick={() => setShowVideo(true)}
              src={VedioImg}
              alt="video-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
