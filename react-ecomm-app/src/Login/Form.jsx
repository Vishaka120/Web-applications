import React, { useState, useEffect } from "react";
import "./Form.css";
import { User } from "phosphor-react";
import { useNavigate } from "react-router-dom";
function Form() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const users = {
    username: "Vishaka",
    email: "vishaka@gmail.com",
    password: "password",
  };
  const validUser = users.username === formValues.username;
  const validPassword = users.password === formValues.password;
  const handleAuthentication = () => {
    if (validUser && validPassword) {
      console.log("authenticated");
      setIsAuthenticated(true);
      localStorage.setItem("authenticated", true);
      navigate("/product");
    } else {
      console.log("No");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    console.log(formErrors);
    setIsSubmit(true);
    handleAuthentication();
  };

  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(formValues);
  //   }
  // }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    console.log(errors);
    return errors;
  };
  const wrongCred =
    !isAuthenticated && isSubmit && Object.keys(formErrors).length === 0;

  return (
    <React.Fragment>
      <div className="form-container">
        <form id="login-form" onSubmit={handleSubmit}>
          <h2 className="login-header">Login Form</h2>
          <div className="form-field">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              //when we change the state we can change the value. two way binding
              value={formValues.username}
              //   call onChange event
              onChange={handleChange}
            />
            <p className="form-error">{formErrors.username}</p>
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              //give type as text so that it dosent use the default error message
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
            <p className="form-error">{formErrors.email}</p>
          </div>

          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
            <p className="form-error">{formErrors.password}</p>
          </div>
          {wrongCred && (
            <p className="form-error">Sorry! Wrong username or password</p>
          )}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}
export default Form;
// use state
//1. form values
//2.errors
//3.handle submit
//useEffect has dependency on error
//
