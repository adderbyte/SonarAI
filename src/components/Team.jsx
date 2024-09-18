import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center py-5">
      <div className="container">
        <div className="section-title mb-5">
          <h2 style={{ fontSize: "2.5rem", fontWeight: "700" }}>Meet the Team</h2>
          <p style={{ fontSize: "1.1rem", color: "#6c757d" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 mb-4">
                  <div className="card border-0 shadow-sm">
                    <img src={d.img} alt={d.name} className="card-img-top" style={{ borderRadius: "50%" }} />
                    <div className="card-body text-center">
                      <h4 className="card-title" style={{ fontSize: "1.25rem", fontWeight: "600" }}>{d.name}</h4>
                      <p className="card-text" style={{ color: "#6c757d" }}>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
