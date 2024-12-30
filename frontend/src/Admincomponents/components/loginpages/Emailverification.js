import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation, Link } from "react-router-dom";

export default function Emailverification() {
  const { state } = useLocation();
  const [values,setValues] = useState(state.values);
  const [partialemail, setPartialemail] = useState("");
  const [errormsg, setErrormsg] = useState("");
  const [isVerification, setIsVerification] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [usermail, setUsermail] = useState(values.email);

  const navigate = useNavigate();
  var regex = new RegExp("[a-zA-Z0-9]+@[a-z]+.[a-z]{2,3}");
  var otp_check = "";
  
  function verifyOTP() {
    otp_check = document.querySelector(".otp_num").value;
    fetch("http://localhost:8080/verify", {
      method: "POST",
      body: JSON.stringify({
        email: `${usermail}`,
        otp: `${otp_check}`,
      }),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.status === 200) {
        setIsVerification(false);
        setIsSuccess(true);
        setIsError(false);
  
        axios
        .post(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/register`, values)
        .then((res) => {
          if(res.data === "Error"){
            alert('User Registration Failed');
          }
          else{
            alert("New user registered successfully");
            navigate("/patient")
          }
        })
        .catch((err) => console.log(err));
      } else {
        setIsError(true);
        setErrormsg("Invalid OTP");
        setIsSuccess(false);
      }
    });
  }

  function sendOTP() {
    if (regex.test(usermail)) {
      fetch("http://localhost:8080/sendotp", {
        method: "POST",
        body: JSON.stringify({
          email: `${usermail}`,
        }),
        headers: { "Content-Type": "application/json" },
      }).then((res) => {
        if (res.status === 200) {
          setIsVerification(true);
          setPartialemail("***" + usermail[0].slice(3));
          document.getElementById("getEmail").value = "";
        } else {
          setIsError(true);
          setErrormsg("Email does not exists.");
          setIsSuccess(false);
        }
      });
    } else {
      setIsError(true);
      setErrormsg("Please enter a valid email address!");
      setIsSuccess(false);
    }
  }

  const handleChange = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: [e.target.value],
    }));
    if(e.target.name === 'email'){
      setUsermail(e.target.value);
    }
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="container m-4">
        <div className="text-end">
          <Link to="/register" className="text-decoration-none">Back to Registration</Link>
        </div>
        <h3 className="text-primary text-center">Email Verification</h3>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-auto">
            <input 
              type="email" 
              name="email" 
              className="form-control"
              id="getEmail" 
              defaultValue={(values.email)} 
              onChange={handleChange}
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-primary" onClick={sendOTP}>
              Send OTP
            </button>
          </div>
        </div>
        {
          isSuccess && (
            <div className="success text-success text-center">
              OTP verified Success fully
            </div>
          )
        }

        {
          isVerification && (
          <div className="verification mt-4">
            <div className="title text-center">
              <p>
                An OTP has been sent to {partialemail}
              </p>
            </div>
            <div
              className="otp-input-fields m-auto d-flex justify-content-around p-4 shadow rounded"
              style={{ maxWidth: "320px" }}
            >
              <input
                type="number"
                className="otp_num w-auto text-center rounded border border-success"
                maxLength={4}
              />
              <button onClick={verifyOTP} className="btn btn-primary">
                Verify
              </button>
            </div>
          </div>
          )
        }

        {
          isError && (
            <div className="text-danger text-center">{errormsg}</div>
            // <div className="error text-danger text-center">Invalid otp</div>
          )
        }
      </div>
    </div>
  );
}
