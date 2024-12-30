import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Mainnavbar from '../Mainnavbar';
import { useData } from "../Datacontext";

const Doctor = () => {
  const { setDoctorData } = useData();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [captchacheck, setCaptchacheck] = useState("");

  const navigate = useNavigate();
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
    let uniquechar = "";
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
    const usr_input = document.getElementById("submit").value;
    if (usr_input === captchacheck) {
      axios
      .post(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/doctor`, values)
        .then((res) => {
          if (res.data !== "Fail"  && res.data !== "Error") {
            const data = res.data;
            const token = data[0].doctor_id;
            const doctorData = { firstname: res.data[0].firstname, lastname: res.data[0].lastname, email: res.data[0].email, hospital: res.data[0].hospital, specialization: res.data[0].specialization };
            setDoctorData(doctorData);
            if (!token) {
              alert('Unable to login. Please try after some time.');
              return;
            }
            localStorage.removeItem('doctor-token');
            localStorage.setItem('doctor-token', token);
            navigate("/doctorappointments", {state:doctorData});
          } else {
            alert("Invalid Username or Password");
            window.location.reload(false);
          }
        })
        .catch((err) => console.log(err));
    } else if (usr_input === "") {
      document.getElementById("key").innerHTML = "Please Enter CAPTCHA";
    } else {
      document.getElementById("key").innerHTML = "Invalid CAPTCHA";
      generate();
    }
  };

  // eslint-disable-next-line no-restricted-globals
  history.pushState(null, null, location.href);
  window.addEventListener('popstate', function(event) {
// eslint-disable-next-line no-restricted-globals
    history.pushState(null, null, location.href);
  });

  return (
    <>
    <Mainnavbar/>
    <div
      className="d-flex justify-content-center "
    >
      <div>
        <div className="text-center">
          <h4 style={{ padding: "25px" }}>Doctor Log In</h4>
        </div>
        <form action="" method="post" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="User Name / Email"
              className="form-control"
              style={{ width: "350px" }}
              onChange={handleInput}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              style={{ width: "350px" }}
              className="form-control"
              required
              onChange={handleInput}
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
          <div>
            <button
              type="submit"
              name="btn-login"
              className="btn bodybutton text-white w-100"
            >
              Log In
            </button>
          </div>
          <div className="text-center">
            <a href="http://prevmedsol.com/user/forgot_password">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Doctor;
