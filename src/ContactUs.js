import React from "react";
import "./Form.css";
import "./ContactUs.css"

// const FormSignup = ({ submitForm }) => {
//   const { handleChange, handleSubmit, values, errors } = useForm(
//     submitForm,
//     validate
//   );

const ContactUs = () => {
  return (
    <div className="Contact-us">
      <div className="form-inputs">
        <label  className="form-label">Username</label>
        <input
          className="form-input"
          type="text"
          name="username"
          placeholder="Enter your username"
        />
      </div>
      <div className="form-inputs">
        <label className="form-label">Username</label>
        <input
          className="form-input"
          type="text"
          name="username"
          placeholder="Enter your username"          
        />
      </div>
      <div className="form-inputs">
        <label className="form-label">Username</label>
        <input
          className="form-input"
          type="text"
          name="username"
          placeholder="Enter your username"         
        />
      </div>
      <div className="form-inputs">
        <label className="form-label">Username</label>
        <input
          className="form-input"
          type="text"
          name="username"
          placeholder="Enter your username"
          
        />
      </div>
    </div>
  );
};

export default ContactUs;
