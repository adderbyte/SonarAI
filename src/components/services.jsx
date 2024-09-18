import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center" style={{ padding: "60px 0", backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="section-title" style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "700" }}>Our Services</h2>
          <p style={{ fontSize: "1.1rem", color: "#6c757d" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4" style={{ marginBottom: "30px" }}>
                  <div style={{ fontSize: "3rem", color: "#007bff" }}>
                    <i className={d.icon}></i>
                  </div>
                  <div className="service-desc" style={{ marginTop: "20px" }}>
                    <h3 style={{ fontSize: "1.5rem", fontWeight: "600" }}>{d.name}</h3>
                    <p style={{ fontSize: "1rem", color: "#6c757d" }}>{d.text}</p>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
