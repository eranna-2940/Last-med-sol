import React, {useState, useEffect } from "react";
import Mainnavbar from '../Mainnavbar';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useData } from "../Datacontext";

const Frontoffice = () => {
  const {setFrontData}=useData()
  const [captchacheck, setCaptchacheck] = useState("");
  const [values, setValues] = useState({
      username: "",
      password: "",
    });

      const navigate = useNavigate();
    
  useEffect(() => {
    if (localStorage.getItem('firstLoadDone') === null) {
      localStorage.setItem('firstLoadDone', 1);
      // console.log('This is the initial load');
      generate();
    } else {
      generate();
      // console.log('This is a page refresh');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  var captcha;
  function generate() {
    document.getElementById("submit").value = "";

    captcha = document.getElementById("image");
    let uniquechar = "";

    const randomchar =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

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
  const handleSubmit = (e) => {
    e.preventDefault();
    const usr_input = document.getElementById("submit").value;
    if (usr_input === captchacheck) {
      axios
      .post(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/front`, values)
        .then((res) => {
          if (res.data !== "Fail"  && res.data !== "Error") {
            const data = res.data;
            const token = data[0].email;
            const adminData = { email: res.data[0].email};
            setFrontData(adminData);
            if (!token) {
              alert('Unable to login. Please try after some time.');
              return;
            }
            localStorage.removeItem('Front-token');
            localStorage.setItem('Front-token', token);
            navigate("/patientmanagement");
          } else {
            alert("Invalid Username or Password");
            window.location.reload(false);
          }
        })
        .catch((err) => console.log(err));
    }
    else if(usr_input === ""){
      document.getElementById("key").innerHTML = "Please Enter CAPTCHA";
    }
    else {
      document.getElementById("key").innerHTML = "Invalid CAPTCHA";
      generate();
    }
  };


  return (
    <>
    <Mainnavbar/>
    <div
      className="d-flex justify-content-center "
    >
      <div>
        <div className="text-center">
          <h4 style={{ padding: "25px" }}>Front Office Log In</h4>
        </div>
        <form>
          <div className="form-group">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="User Name / Email"
              className="form-control"
              style={{ width: "350px" }}
              onChange={handleInput}
              required=""
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
              onChange={handleInput}
              required=""
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
              onClick={handleSubmit}
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

export default Frontoffice;
