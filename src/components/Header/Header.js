import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from "../../asstes/logo.png";
import "./Header.css";

export default function Header(props) {
  const [activeSection, setActiveSection] = useState("whyParis");
  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: "smooth" });
  };

  const handleSetActiveSection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  };
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(handleSetActiveSection, {
      threshold: 0.5,
    });

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header id="main-header">
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid px-4">
          <a className="navbar-brand" href="#">
            <img src={Logo} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="row d-table-cell w-100">
              <div className="right-btn">
                <a
                  href="#downloadbrochure"
                  className="apply-btn"
                  style={{ marginRight: "15px", fontSize: "16px" }}
                >
                  Download Brochure
                </a>
                <a
                  rel="apply-own"
                  className="apply-btn"
                  href="#apply-to-own"
                  style={{ fontSize: "16px" }}
                  onClick={() => props.handleShow()}
                >
                  Apply to own
                </a>
              </div>
              <ul className="navbar-nav d-lg-flex justify-content-lg-end mb-2 mb-lg-0 w-100">
                <li className="nav-item">
                  <Link
                    className={
                      activeSection === "whyParis"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    aria-current="page"
                    to="#whyParis"
                    smooth={true}
                    duration={500}
                    onClick={() => handleNavClick("whyParis")}
                  >
                    why Paris baguette
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      activeSection === "markets"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="#markets"
                    smooth={true}
                    duration={500}
                    onClick={() => handleNavClick("markets")}
                  >
                    available Markets
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      activeSection === "openings"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="#openings"
                    smooth={true}
                    duration={500}
                    onClick={() => handleNavClick("openings")}
                  >
                    New openings
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      activeSection === "prototype"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="#prototype"
                    smooth={true}
                    duration={500}
                    onClick={() => handleNavClick("prototype")}
                  >
                    Our New prototype
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      activeSection === "franchisee"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="#franchisee"
                    smooth={true}
                    duration={500}
                    onClick={() => handleNavClick("franchisee")}
                  >
                    Franchisee stories
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      activeSection === "research"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="#research"
                    smooth={true}
                    duration={500}
                    onClick={() => handleNavClick("research")}
                  >
                    Research
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
