import React from "react";

export const Testimonials = (props) => {
  return (
    <div id="testimonials" className="py-5">
      <div className="container">
        <div className="section-title text-center mb-5">
          <h2 style={{ fontSize: "2.5rem", fontWeight: "700" }}>What Our Clients Say</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4 mb-4">
                  <div className="testimonial border rounded p-4 shadow-sm">
                    <div className="testimonial-image mb-3">
                      <img src={d.img} alt={d.name} className="img-fluid rounded-circle" />
                    </div>
                    <div className="testimonial-content">
                      <p style={{ fontSize: "1.1rem", fontStyle: "italic" }}>"{d.text}"</p>
                      <div className="testimonial-meta" style={{ fontWeight: "600", color: "#333" }}>
                        - {d.name}
                      </div>
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
