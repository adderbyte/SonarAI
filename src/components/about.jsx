import React from "react";

export const About = (props) => {
  return (
    <div id="about" style={{ padding: "60px 0", backgroundColor: "#f9f9f9" }}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6" style={{ marginBottom: "30px" }}>
            <img
              src="img/about.jpg"
              className="img-responsive"
              alt="About Us"
              style={{ width: "100%", borderRadius: "10px", boxShadow: "0px 4px 20px rgba(0,0,0,0.1)" }}
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2 style={{ marginBottom: "20px", fontWeight: "600" }}>About Us</h2>
              <p style={{ fontSize: "1.1rem", color: "#555" }}>
                {props.data ? props.data.paragraph : "Content is loading, please wait..."}
              </p>
              <h3 style={{ marginTop: "30px", marginBottom: "20px", fontWeight: "600" }}>Why Choose Us?</h3>
              <div className="list-style row">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul style={{ paddingLeft: "20px" }}>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`} style={{ fontSize: "1rem", color: "#444", marginBottom: "10px" }}>
                            {d}
                          </li>
                        ))
                      : "Loading list..."}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul style={{ paddingLeft: "20px" }}>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`} style={{ fontSize: "1rem", color: "#444", marginBottom: "10px" }}>
                            {d}
                          </li>
                        ))
                      : "Loading list..."}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
