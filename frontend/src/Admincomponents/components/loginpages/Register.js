import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Mainnavbar from '../Mainnavbar';

const Register = () => {

  const [captchacheck, setCaptchacheck] = useState("");
  const [values, setValues] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    password: "",
    cpassword: "",
    phone: "",
    gender: "",
    dob: "",
    bloodgroup: "",
    country: "",
    state: "",
    city: "",
    street1: "",
    street2: "",
    zipcode: "",
  });

  const navigate = useNavigate();


  useEffect(() => {
    // Get the current date in the format "YYYY-MM-DD"
    const getCurrentDate = () => {
      const today = new Date();
      const day = String(today.getDate()).padStart(2, '0');
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const year = today.getFullYear();
      return `${year}-${month}-${day}`;
    };

    // Set the max attribute of the date input to the current date
    const dateInput = document.getElementById('dob');
    if (dateInput) {
      dateInput.max = getCurrentDate();
    }
  }, []);


  useEffect(() => {
    if (localStorage.getItem('firstLoadDone') === null) {
      localStorage.setItem('firstLoadDone', 1);
      generate();
    } else {
      generate();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  var captcha;
  function generate() {

    document.getElementById("submit").value = "";
    captcha = document.getElementById("image");
    var uniquechar = "";
    const randomchar ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 1; i < 7; i++) {
      uniquechar += randomchar.charAt(Math.random() * randomchar.length);
    }
    captcha.innerHTML = uniquechar;
    setCaptchacheck(uniquechar);
  }

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.password[0] === values.cpassword[0]){
      const usr_input = document.getElementById("submit").value;
          if (usr_input === captchacheck) {
            navigate("/emailverification", {state: {values}})
          }
          else if(usr_input === ""){
            document.getElementById("key").innerHTML = "Please Enter CAPTCHA";
          }
          else {
            document.getElementById("key").innerHTML = "Invalid CAPTCHA";
            generate();
          }
    }
    else{
      alert('Passwords do not match')
    }
  };



  return (
    <>
    <Mainnavbar/>
      <div className="">
        <div
          className="m-4"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="">
            <form id="form1" action="" method="post" onSubmit={handleSubmit}>
              <div className="row">
                <div className="">
                  <div className="form-heading">
                    <h4 className="text-center">
                      Registration Form
                    </h4>
                  </div>

                  <div className="row">
                    <div className="col-md-4">
                      <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        placeholder="First Name"
                        className="form-control m-1"
                        onChange={handleInput}
                        pattern="[A-Z][a-z]*\s*\w*"
                        title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                        required
                      />
                    </div>

                    <div className="col-md-4">
                      <input
                        type="text"
                        name="middlename"
                        id="middlename"
                        placeholder="Middle Name"
                        className="form-control m-1"
                        onChange={handleInput}
                        pattern="[A-Z][a-z]*\s*\w*"
                        title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                        // required
                      />
                    </div>

                    <div className="col-md-4">
                      <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        placeholder="Last Name"
                        className="form-control m-1"
                        onChange={handleInput}
                        pattern="[A-Z][a-z]*\s*\w*"
                        title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Email ID"
                    className="form-control m-1"
                    onChange={handleInput}
                    required
                  />
                  {/* <span id="email_validation" className="error"></span> */}
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="form-control m-1"
                    onChange={handleInput}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    placeholder="Confirm Password"
                    className="form-control m-1"
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Mobile Number"
                    className="form-control m-1"
                    maxLength="10"
                    onChange={handleInput}
                    pattern="[0-9]{10}"
                    title="10 digit numeric value only"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <div className="form-group2">
                    <select
                      id="bloodgroup"
                      name="bloodgroup"
                      className="form-select m-2"
                      onChange={handleInput}
                      required
                    >
                      <option value="">Select Blood group</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="Dontknow">Don`t know</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4 d-flex">
                  <div className="me-3 mt-2">
                    <input
                      type="radio"
                      id="radio1"
                      value="male"
                      name="gender"
                      className="m-1"
                      onChange={handleInput}
                      required
                    />
                    <label htmlFor="radio1"> Male </label>
                  </div>
                  <div className="mt-2">
                    <input
                      type="radio"
                      id="radio2"
                      value="female"
                      name="gender"
                      className="m-1"
                      onChange={handleInput}
                      required
                    />
                    <label htmlFor="radio2"> Female </label>
                  </div>
                </div>
                <div className="col-md-8">
                  <input
                    type="date"
                    name="dob"
                    id="dob"
                    className="form-control m-1"
                    placeholder="Date of Birth (month/day/year)"
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="">
                  
                  <div className="form-group2">
                    <input
                      type="text"
                      name="country"
                      id="country"
                      placeholder="Country"
                      className="form-control m-2"
                      onChange={handleInput}
                      pattern="[A-Z][a-z]*\s*\w*"
                      title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                      required
                    />
                  </div>
                  <div className="form-group2">
                    <input
                      type="text"
                      name="state"
                      id="state"
                      placeholder="State"
                      className="form-control m-2"
                      onChange={handleInput}
                      pattern="[A-Z][a-z]*\s*\w*"
                      title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                      required
                    />
                  </div>
                  <div className="form-group2">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      placeholder="City"
                      className="form-control m-2"
                      onChange={handleInput}
                      pattern="[A-Z][a-z]*\s*\w*"
                      title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                      required
                    />
                  </div>

                  <div className="form-group2">
                    <input
                      type="text"
                      name="street1"
                      id="street1"
                      placeholder="Street1"
                      className="form-control m-2"
                      onChange={handleInput}
                      pattern="[A-Z][a-z]*\s*\w*"
                      title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                      required
                    />
                  </div>
                  <div className="form-group2">
                    <input
                      type="text"
                      name="street2"
                      id="street2"
                      placeholder="Street2"
                      className="form-control m-2"
                      onChange={handleInput}
                      pattern="[A-Z][a-z]*\s*\w*"
                      title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                      required
                    />
                  </div>
                  <div className="form-group2">
                    <input
                      type="number"
                      name="zipcode"
                      id="zipcode"
                      placeholder="Zip Code"
                      className="form-control m-2"
                      onChange={handleInput}
                      pattern="[0-9]{6}"
                      required
                    />
                  </div>
                  {/* <Captcha /> */}
                  <div className="d-flex justify-content-center">
              <div id="user-input" className="d-flex m-2">
                <input
                  type="text"
                  className="mr-2"
                  id="submit"
                  placeholder="Enter Captcha"
                />
                <div className="mr-2" onClick={generate}>
                  <i className="fas fa-sync"></i>
                </div>
                <div
                  id="image"
                  className="bg-secondary text-decoration-line-through fst-italic p-1 rounded fs-5"
                  selectable="False"
                ></div>
              </div>
            </div>
            <p id="key"></p>
            {/* <Captcha /> */}
                  <div className="row">
                    <div className="col-md-12">
                      <button
                        type="submit"
                        className="btn bodybutton text-white m-2 w-100"
                        id="btnregister"
                        name="btnregister"
                      >
                        Submit
                      </button>
                      <div className="text-center">
                        Existing User ?{" "}
                        <Link to='/patient' style={{ textDecoration: "none" }}>
                        Go to login
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
