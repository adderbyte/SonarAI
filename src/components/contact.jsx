import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    
    {/* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */ }
    
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2> Try it out! </h2>
                <p>
                  Simply upload your materials and enjoy your  podcasts.
                </p>
              </div>


               <form name="sentMessage" validate onSubmit={handleSubmit}>
                
                <div className="form-group" style={{ width: "100%", height: "200px", padding: "20px", border: "2px dashed #ccc", textAlign: "center", backgroundColor: "#f0f0f0" }}>
                 <input type="file" id="file-upload" name="file-upload" className="form-control" style={{ display: "none" }} />
                <label htmlFor="file-upload" style={{ cursor: "pointer", display: "block", marginTop: "60px" }}> 
                <i className="fa fa-upload" style={{ fontSize: "48px", color: "#888" }}></i>
                <p style={{ color: "black" }} >Click to upload your file</p> </label> 
                <p className="help-block text-danger"></p> 


                </div>
            


             <div className="row"> {/* Range Slider */} <div className="col-md-6"> <div className="form-group"> <label htmlFor="rangeInput" style={{ fontWeight: 'bold',fontSize: '18px'  }}> Length in Minutes (5-35)</label> <input type="range" id="rangeInput" name="rangeInput" className="form-control" min="5" max="35" step="1" onChange={handleChange} /> <p id="rangeValue">Value: 5</p> <p className="help-block text-danger"></p> </div> </div> {/* Radio Buttons */} <div className="col-md-6"> <div className="form-group"> <label style={{ fontWeight: 'bold',fontSize: '18px'  }} >Radio Options</label> <div style={{ display: 'flex', justifyContent: 'space-around' }}> <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}> <label htmlFor="radio1">Option 1</label> <input type="radio" id="radio1" name="radioOption" value="option1" onChange={handleChange} style={{ margin: '0 auto' }} /> </div> <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}> <label htmlFor="radio2">Option 2</label> <input type="radio" id="radio2" name="radioOption" value="option2" onChange={handleChange} style={{ margin: '0 auto' }} /> </div> <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}> <label htmlFor="radio3">Option 3</label> <input type="radio" id="radio3" name="radioOption" value="option3" onChange={handleChange} style={{ margin: '0 auto' }} /> </div> </div> <p className="help-block text-danger"></p> </div> </div> </div>

             <div className="row"> {/* Dropdown Menu */} <div className="col-md-6"> <div className="form-group"> <label htmlFor="dropdown" style={{ fontWeight: 'bold', fontSize: '18px' }}> Voice  Option </label> <select id="dropdown" name="dropdown" className="form-control"> <option value="option1">Option 1</option> <option value="option2">Option 2</option> <option value="option3">Option 3</option> <option value="option4">Option 4</option> <option value="option5">Option 5</option> </select> </div> </div> </div>

              




                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Make my podcasts!
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
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
