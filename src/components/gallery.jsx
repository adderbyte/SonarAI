import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center" style={{ padding: "60px 0", backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="section-title" style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "700" }}>Gallery</h2>
          <p style={{ fontSize: "1.1rem", color: "#6c757d" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-sm-6 col-md-4 col-lg-3"
                  style={{ marginBottom: "30px" }}
                >
                  <Image
                    title={d.title}
                    largeImage={d.largeImage}
                    smallImage={d.smallImage}
                    style={{ borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
                  />
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
