import React from "react";
import linkedin from "../../asstes/linkdin.png";

export default function MeetFranchies() {
  return (
    <section className="meet-sec" id="franchisee">
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="row d-flex">
              <div className="col-12 col-md-6 img-col1"></div>
              <div className="col-12 col-md-6">
                <div className="container my-5 px-5">
                  <h3>Meet Our Franchisee – Ai Lin</h3>
                  <p>
                    “When looking for the right franchise opportunity, Paris
                    Baguette was the ideal fit because of its amazing product
                    line, store design, and proven response from communities
                    throughout the United States."
                  </p>
                  <div className="d-flex align-items-center social mt-5">
                    <img src={linkedin} />
                    <p>Ai Lin, Ohio Franchisee</p>
                  </div>
                  <button data-bs-target="#apply-form" className="apply-btn">
                    Read More On 1851
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="row d-flex">
              <div className="col-12 col-md-6 img-col2"></div>
              <div className="col-12 col-md-6">
                <div className="container my-5 px-5">
                  <h3>Meet Our Franchisee – Meghna Negandhi</h3>
                  <p>Meet Our Franchisee – Meghna Negandhi</p>
                  <div className="d-flex align-items-center social mt-5">
                    <img src={linkedin} />
                    <p>Meghna Negandhi, New York Franchisee</p>
                  </div>
                  <button data-bs-target="#apply-form" className="apply-btn">
                    Read More On 1851
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="row d-flex">
              <div className="col-12 col-md-6 img-col3"></div>
              <div className="col-12 col-md-6">
                <div className="container my-5 px-5">
                  <h3>Meet Our Franchisee – Wei Zhu</h3>
                  <p>
                    "The number one reason I chose Paris Baguette was the
                    quality of their product. They have a consistent product
                    nationwide. Every time I have traveled out of state and
                    stopped by the café, I love the atmosphere and the food."
                  </p>
                  <div className="d-flex align-items-center social mt-5">
                    <img src={linkedin} />
                    <p>Wei Zhu, South Carolina Franchisee</p>
                  </div>
                  <button data-bs-target="#apply-form" className="apply-btn">
                    Read More On 1851
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="row d-flex">
              <div className="col-12 col-md-6 img-col3"></div>
              <div className="col-12 col-md-6">
                <div className="container my-5 px-5">
                  <h3>Meet Our Franchisee – Helen Kim</h3>
                  <p>
                    "I really believe in Paris Baguette’s brand. Whenever I come
                    back home to California, my first stop is Paris Baguette
                    because of the quality of the products sold there. I haven’t
                    found that same quality in any other bakery. Every time I
                    visit a Paris Baguette location, there’s a lot of traffic,
                    which allows me to feel comfortable with a brand that I
                    don’t see failing."
                  </p>
                  <div className="d-flex align-items-center social mt-5">
                    <img src={linkedin} />
                    <p>Helen Kim, Nevada</p>
                  </div>
                  <button data-bs-target="#apply-form" className="apply-btn">
                    Read More On 1851
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
