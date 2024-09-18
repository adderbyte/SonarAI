import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center" style={{ padding: "60px 0", backgroundColor: "#f7f7f7" }}>
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2 style={{ fontWeight: "600", marginBottom: "40px" }}>Features</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3" style={{ marginBottom: "30px" }}>
                  <i className={d.icon} style={{ fontSize: "3rem", color: "#555", marginBottom: "20px" }}></i>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "10px" }}>{d.title}</h3>
                  <p style={{ fontSize: "1rem", color: "#666" }}>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
