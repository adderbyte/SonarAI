import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
  url: "",
  rangeValue: 5,
  radioOption: "",
  dropdown: "option1",
};

export const Contact = (props) => {
  const [{ url, rangeValue, radioOption, dropdown }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div id="contact" style={{ backgroundColor: "#f9f9f9", padding: "60px 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="section-title">
                <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#333" }}>Try it out!</h2>
                <p style={{ fontSize: "1.25rem", color: "#555", marginBottom: "30px" }}>
                  Upload your materials or provide a link to create your podcasts.
                </p>
              </div>

              <form
                name="sentMessage"
                onSubmit={handleSubmit}
                style={{
                  backgroundColor: "#fff",
                  padding: "30px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="form-group" style={{ marginBottom: "25px" }}>
                  <input
                    type="file"
                    id="file-upload"
                    name="file-upload"
                    className="form-control"
                    style={{ display: "none" }}
                  />
                  <label
                    htmlFor="file-upload"
                    style={{
                      cursor: "pointer",
                      display: "block",
                      textAlign: "center",
                      padding: "20px",
                      border: "2px dashed #ddd",
                      borderRadius: "6px",
                      color: "#888",
                    }}
                  >
                    <i className="fa fa-upload" style={{ fontSize: "48px" }}></i>
                    <p style={{ marginTop: "10px" }}>Click to upload your file</p>
                  </label>
                </div>

                <div className="form-group" style={{ marginBottom: "25px" }}>
                  <label
                    htmlFor="url"
                    style={{ fontWeight: "600", fontSize: "18px", color: "#444" }}
                  >
                    Or provide a URL to your file:
                  </label>
                  <textarea
                    id="url"
                    name="url"
                    className="form-control"
                    placeholder="Enter file link here"
                    value={url}
                    onChange={handleChange}
                    style={{
                      height: "100px",
                      padding: "10px",
                      borderRadius: "4px",
                      border: "1px solid #ddd",
                      fontSize: "1rem",
                      color: "#333",
                    }}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: "25px" }}>
                  <label
                    htmlFor="rangeInput"
                    style={{ fontWeight: "600", fontSize: "18px", color: "#444" }}
                  >
                    Length in Minutes (5-35)
                  </label>
                  <input
                    type="range"
                    id="rangeInput"
                    name="rangeValue"
                    className="form-control"
                    min="5"
                    max="35"
                    step="1"
                    value={rangeValue}
                    onChange={handleChange}
                    style={{ width: "100%" }}
                  />
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                    <span style={{ color: "#555" }}>5</span>
                    <span style={{ color: "#555" }}>{rangeValue}</span>
                    <span style={{ color: "#555" }}>35</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: "5px" }}>
                    {[10, 15, 20, 25, 30].map((val) => (
                      <span key={val} style={{ color: "#bbb" }}>
                        {val}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: "25px" }}>
                  <label
                    style={{ fontWeight: "600", fontSize: "18px", color: "#444", marginBottom: "10px", display: "block" }}
                  >
                    Radio Options
                  </label>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <label style={{ display: "flex", alignItems: "center" }}>
                      <input
                        type="radio"
                        name="radioOption"
                        value="option1"
                        checked={radioOption === "option1"}
                        onChange={handleChange}
                        style={{ marginRight: "10px" }}
                      />
                      Option 1
                    </label>
                    <label style={{ display: "flex", alignItems: "center" }}>
                      <input
                        type="radio"
                        name="radioOption"
                        value="option2"
                        checked={radioOption === "option2"}
                        onChange={handleChange}
                        style={{ marginRight: "10px" }}
                      />
                      Option 2
                    </label>
                    <label style={{ display: "flex", alignItems: "center" }}>
                      <input
                        type="radio"
                        name="radioOption"
                        value="option3"
                        checked={radioOption === "option3"}
                        onChange={handleChange}
                        style={{ marginRight: "10px" }}
                      />
                      Option 3
                    </label>
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: "25px" }}>
                  <label
                    htmlFor="dropdown"
                    style={{ fontWeight: "600", fontSize: "18px", color: "#444" }}
                  >
                    Voice Option
                  </label>
                  <select
                    id="dropdown"
                    name="dropdown"
                    value={dropdown}
                    onChange={handleChange}
                    className="form-control"
                    style={{
                      padding: "10px",
                      borderRadius: "4px",
                      border: "1px solid #ddd",
                      fontSize: "1rem",
                      color: "#333",
                    }}
                  >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                    <option value="option4">Option 4</option>
                    <option value="option5">Option 5</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="btn btn-custom btn-lg"
                  style={{
                    backgroundColor: "#5a67d8",
                    color: "#fff",
                    padding: "12px 30px",
                    fontSize: "1.25rem",
                    borderRadius: "4px",
                    border: "none",
                    width: "100%",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  Make my podcasts!
                </button>
              </form>
            </div>

            <div className="col-md-3 col-md-offset-1 contact-info" style={{ marginTop: "50px" }}>
              <div className="contact-item" style={{ marginBottom: "20px" }}>
                <h3 style={{ fontSize: "1.75rem", fontWeight: "bold", color: "#333" }}>Contact Info</h3>
                <p style={{ fontSize: "1.1rem", color: "#555" }}>
                  <span style={{ fontWeight: "600", color: "#444" }}>
                    <i className="fa fa-map-marker" style={{ marginRight: "8px" }}></i> Address
                  </span>
                  {props.data ? props.data.address : "loading"}
                </p>
              </div>
              <div className="contact-item" style={{ marginBottom: "20px" }}>
                <p style={{ fontSize: "1.1rem", color: "#555" }}>
                  <span style={{ fontWeight: "600", color: "#444" }}>
                    <i className="fa fa-phone" style={{ marginRight: "8px" }}></i> Phone
                  </span>
                  {props.data ? props.data.phone : "loading"}
                </p>
              </div>
              <div className="contact-item" style={{ marginBottom: "20px" }}>
                <p style={{ fontSize: "1.1rem", color: "#555" }}>
                  <span style={{ fontWeight: "600", color: "#444" }}>
                    <i className="fa fa-envelope" style={{ marginRight: "8px" }}></i> Email
                  </span>
                  {props.data ? props.data.email : "loading"}
                </p>
              </div>
              <div className="social">
                <ul style={{ display: "flex", gap: "15px", paddingLeft: 0, listStyle: "none" }}>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"} style={{ fontSize: "1.5rem", color: "#3b5998" }}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"} style={{ fontSize: "1.5rem", color: "#1da1f2" }}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"} style={{ fontSize: "1.5rem", color: "#ff0000" }}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.instagram : "/"} style={{ fontSize: "1.5rem", color: "#c13584" }}>
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
