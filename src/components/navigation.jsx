import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: "#343a40", padding: "10px 20px" }}>
      <div className="container">
        <a className="navbar-brand" href="#page-top" style={{ color: "#fff", fontSize: "1.5rem", fontWeight: "700" }}>
          Sonar Education
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ border: "none" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#features" style={{ color: "#fff", fontSize: "1.1rem", padding: "10px 15px" }}>
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" style={{ color: "#fff", fontSize: "1.1rem", padding: "10px 15px" }}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
