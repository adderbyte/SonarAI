import React from "react";

export const Header = (props) => {
  return (
    <header
      id="header"
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#333",
        color: "#fff",
        padding: "80px 0",
      }}
    >
      <div
        className="intro"
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 0,
          }}
        ></div>
        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 1,
            padding: "0 15px",
          }}
        >
          <div className="row">
            <div
              className="col-md-8 col-md-offset-2 intro-text"
              style={{
                textAlign: "center",
                color: "#fff",
                marginBottom: "30px",
              }}
            >
              <h1
                style={{
                  fontSize: "3rem",
                  fontWeight: "700",
                  marginBottom: "20px",
                  lineHeight: "1.2",
                }}
              >
                {props.data ? props.data.title : "Loading..."}
              </h1>
              <p
                style={{
                  fontSize: "1.25rem",
                  marginBottom: "30px",
                  lineHeight: "1.6",
                }}
              >
                {props.data ? props.data.paragraph : "Loading..."}
              </p>
              <a
                href="#features"
                className="btn btn-custom btn-lg page-scroll"
                style={{
                  backgroundColor: "#007bff",
                  color: "#fff",
                  padding: "12px 25px",
                  fontSize: "1rem",
                  borderRadius: "5px",
                  textDecoration: "none",
                  transition: "background-color 0.3s ease",
                  display: "inline-block",
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
