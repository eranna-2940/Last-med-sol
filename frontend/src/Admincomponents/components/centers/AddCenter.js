import React, { useState } from "react";
import Menu from "../Menu";
import { Link} from "react-router-dom";
import axios from "axios";
import Navbar from '../Navbar';
import Time from "../time.json";

const Addcenter = () => {
  const [values, setValues] = useState({
    centername: "",
    phone: "",
    email: "",
    password: "",
    fromtiming: "",
    totiming: "",
    address: "",
    state: "",
    city: "",
  });

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    console.log(values);
    event.preventDefault();
      axios
      .post(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/addcenter`, values)
      .then((res) => {
        if(res.data === "Error"){
          alert('Error while adding center. Please try again filling all the fields');
        }
        else{
          alert("Center added successfully");
          window.location.reload(false);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
    <Navbar/>
    <div className="d-flex">
      <div className="col-2 p-0">
        <Menu />
      </div>

      <div className="col-sm-12 col-md-12 col-lg-10 p-0">
        <nav className="d-flex bg-light border border-bottom-info p-2">
        <i className="bi bi-house-fill"></i>
          <Link to="/dashboardPage" className="text-decoration-none">
            &nbsp;Home&nbsp;
          </Link>
          &gt;&nbsp; <Link to="/managecenters"  className="text-decoration-none">Centers</Link>&nbsp; &gt; Add Center
        </nav>
        <h4 className="mt-2 ms-2">Add Center</h4>
        <hr className="ms-4 me-4" />
        <div className="">
          <div className="col-xs-12">
            <form
              className="form-horizontal mb-4"
              action=""
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="form-group d-md-flex">
                <label htmlFor="centername" className="col-sm-4 text-md-end text-primary">
                  Center Name{" "}
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="Center Name"
                    className="col-xs-10 col-sm-5 form-control"
                    id="centername"
                    name="centername"
                    onChange={handleInput}
                    pattern="[A-Z][a-z]*\s*\w*"
                    title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                    required
                  />
                </div>
              </div>
              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  htmlFor="phone"
                >
                  {" "}
                  Mobile{" "}
                </label>
                <div className="col-sm-8">
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    className="col-xs-10 col-sm-5 form-control"
                    id="phone"
                    name="phone"
                    onChange={handleInput}
                    pattern="[0-9]{10}"
                    title="10 digit numeric values only"
                    required
                  />
                </div>
              </div>
              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  htmlFor="email"
                >
                  {" "}
                  Email
                </label>
                <div className="col-sm-8">
                  <input
                    type="email"
                    placeholder="sample@gmail.com"
                    className="col-xs-10 col-sm-5 form-control"
                    id="email"
                    name="email"
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>

              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  htmlFor="password"
                >
                  {" "}
                  Password
                </label>
                <div className="col-sm-8">
                  <input
                    type="password"
                    placeholder="Password"
                    className="col-xs-10 col-sm-5 form-control"
                    id="password"
                    name="password"
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>

              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  htmlFor="fromtiming"
                >
                  {" "}
                  Timings
                </label>
                <div className="col-sm-8">
                  <select
                    className="col-xs-10 col-sm-5 form-select"
                    id="fromtiming"
                    name="fromtiming"
                    onChange={handleInput}
                    required
                  >
                    <option value="">From</option>
                    {
                      Time.map((item, index) => {
                        if(item.id <= 12){
                          return  <option key={index} value={item.time}>{item.time}</option>
                        } 
                        return null;                       
                      })
                    }
                  </select>
                </div>
              </div>
              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  htmlFor="totiming"
                >
                  {" "}
                </label>
                <div className="col-sm-8">
                  <select
                    className="col-xs-10 col-sm-5 form-select"
                    id="totiming"
                    name="totiming"
                    onChange={handleInput}
                    required
                  >
                    <option value="">To</option>
                    {
                      Time.map((item, index) => {
                        if(item.id > 12){
                          return  <option key={index} value={item.time}>{item.time}</option>
                        } 
                        return null;                       
                      })
                    }
                  </select>
                </div>
              </div>

              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  htmlFor="address"
                >
                  {" "}
                  Address
                </label>
                <div className="col-sm-8">
                  <textarea
                    type="text"
                    className="col-xs-10 col-sm-5 form-control"
                    id="address"
                    name="address"
                    placeholder="Enter your address"
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>
              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  htmlFor="state"
                >
                  {" "}
                  Select State
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="State"
                    className="col-xs-10 col-sm-5 form-control"
                    id="state"
                    name="state"
                    onChange={handleInput}
                    pattern="[A-Z][a-z]*\s*\w*"
                    title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                    required
                  />
                </div>
              </div>
              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  htmlFor="city"
                >
                  {" "}
                  Select City
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="City"
                    className="col-xs-10 col-sm-5 form-control"
                    id="city"
                    name="city"
                    onChange={handleInput}
                    pattern="[A-Z][a-z]*\s*\w*"
                    title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                    required
                  />
                </div>
              </div>

              <div className="text-center">
                <div className="col-md-offset-3">
                  <button
                    className="btn btn-success"
                    type="submit"
                    id="btn-save"
                    name="btn-save"
                  >
                    <i className="bi bi-save2-fill"></i>&nbsp; Save
                  </button>
                  &nbsp; &nbsp;
                  <button className="btn btn-danger" type="reset">
                    <i className="bi bi-trash-fill"></i>&nbsp; Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <hr></hr>
        <footer className="page-footer font-small bg-blue m-4">
          <div className="footer-copyright text-center">
            <span className="text-primary fs-6">PrevMed Sol&nbsp;</span>
            Copyrights © 2023
          </div>
        </footer>
      </div>
    </div>
    </>
  );
};

export default Addcenter;
