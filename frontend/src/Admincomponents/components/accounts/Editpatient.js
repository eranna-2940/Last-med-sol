import React, { useEffect, useState } from "react";
import Menu from "../Menu";
import { Link, useParams} from "react-router-dom";
import axios from "axios";
import Navbar from '../Navbar';

const Editpatient = () => {
  const {id} = useParams();
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    bloodgroup: "",
    dob: "",
    phone: "",
    email: "",
    password: "",
    address: "",
    state: "",
    city: "",
    status: "",
  });

  useEffect(()=> {
    axios
    .get(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/patients`)
    .then((res) => {
      res.data.map((item) => {
        if(item.patient_id === parseInt(id)){
        return setValues((oldArray) => ({
          ...oldArray,
          firstname: (item.firstname === null) ? ("") : (item.firstname),
          lastname: (item.lastname === null) ? ("") : (item.lastname),
          gender: (item.gender === null) ? ("") : (item.gender),
          bloodgroup: (item.bloodgroup === null) ? ("") : (item.bloodgroup),
          dob: (item.dob === null) ? ("") : (item.dob.slice(0,10)),
          phone: (item.phone === null) ? ("") : (item.phone),
          email: (item.email === null) ? ("") : (item.email),
          password: (item.password === null) ? ("") : (item.password),
          address: (item.address === null) ? ("") : (item.address),
          state: (item.state === null) ? ("") : (item.state),
          city: (item.city === null) ? ("") : (item.city),
          status: (item.status === null) ? ("") : (item.status),
          }));
        }
        return null;
      });
    })
    .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

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

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
     axios
      .post(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/patients`, values)
      .then((res) => {
        if(res.data === "Error"){
          alert('Error while Updating patient. Please try again filling all the fields');
        }
        else{
          alert("Patient Updating successfully");
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
        {/* Right side */}

        <nav className="d-flex bg-light border border-bottom-info p-2">
        <i className="bi bi-house-fill"></i>
          <Link to="/dashboardPage" className="text-decoration-none">
            &nbsp;Home&nbsp;
          </Link>
          &gt; &nbsp; <Link to="/patients" className="text-decoration-none">Users</Link>&nbsp; &gt; Add Patient
        </nav>
        <h4 className="mt-2 ms-2">Edit Patient</h4>
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
                <label className="col-sm-4 text-md-end text-primary" htmlFor="firstname">
                  First Name
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="First name"
                    className="col-xs-10 col-sm-5 form-control"
                    id="firstname"
                    name="firstname"
                    onChange={handleInput}
                    defaultValue={values.firstname}
                    pattern="[A-Z][a-z]*\s*\w*"
                    title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                    required
                  />
                </div>
              </div>
              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  htmlFor="lastname"
                >
                  Last Name
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="Last name"
                    className="col-xs-10 col-sm-5 form-control"
                    id="lastname"
                    name="lastname"
                    onChange={handleInput}
                    defaultValue={values.lastname}
                    pattern="[A-Z][a-z]*\s*\w*"
                    title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                    required
                  />
                </div>
              </div>
              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  htmlFor="mgender"
                >
                  Gender
                </label>
                <div className="col-md-8">
                  <div className="radio-inline">
                    <label className="me-4">
                      <input
                        type="radio"
                        className="pms"
                        id="mgender"
                        name="gender"
                        onChange={handleInput}
                        value="male"
                        checked={values.gender.toString() === 'male'}
                        required
                      />
                      <span className="lbl"> Male</span>
                    </label>
                    <label>
                      <input
                        type="radio"
                        className="pms"
                        id="fgender"
                        name="gender"
                        onChange={handleInput}
                        value="female"
                        checked={values.gender.toString() === 'female'}
                        required
                      />
                      <span className="lbl"> Female</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  htmlFor="bloodgroup"
                >
                  {" "}
                  Blood Group
                </label>
                <div className="col-sm-8">
                  <select
                    className="col-xs-10 col-sm-5 form-select"
                    onChange={handleInput}
                    value={values.bloodgroup}
                    id="bloodgroup"
                    name="bloodgroup"
                    required
                  >
                    <option value="">Select</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB-">AB-</option>
                    <option value="AB+">AB+</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
              </div>
              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  htmlFor="dob"
                >
                  {" "}
                  Date of Birth
                </label>
                <div className="col-sm-8">
                  <input
                    className="form-control col-xs-10 col-sm-5"
                    id="dob"
                    name="dob"
                    type="date"
                    onChange={handleInput}
                    defaultValue={values.dob}
                    data-date-format="mm-dd-yyyy"
                  />
                </div>
              </div>

              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  htmlFor="phone"
                >
                  Mobile
                </label>
                <div className="col-sm-8">
                  <input
                    type="number"
                    placeholder="Mobile Number"
                    className="col-xs-10 col-sm-5 form-control"
                    id="phone"
                    maxLength={10}
                    name="phone"
                    onChange={handleInput}
                    defaultValue={values.phone}
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
                    defaultValue={values.email}
                    required
                  />
                </div>
              </div>

              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  htmlFor="password"
                >
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
                    defaultValue={values.password}
                    required
                  />
                </div>
              </div>
              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  htmlFor="address"
                >
                  Address
                </label>
                <div className="col-sm-8">
                  <textarea
                    type="text"
                    placeholder="Enter your address"
                    className="col-xs-10 col-sm-5 form-control"
                    id="address"
                    name="address"
                    onChange={handleInput}
                    defaultValue={values.address}
                    required
                  />
                </div>
              </div>

              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  htmlFor="state"
                >
                  State
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="State"
                    className="col-xs-10 col-sm-5 form-control"
                    id="state"
                    name="state"
                    onChange={handleInput}
                    defaultValue={values.state}
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
                  City
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="City"
                    className="col-xs-10 col-sm-5 form-control"
                    id="city"
                    name="city"
                    onChange={handleInput}
                    defaultValue={values.city}
                    pattern="[A-Z][a-z]*\s*\w*"
                    title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                    required
                  />
                </div>
              </div>
              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  htmlFor="status"
                >
                  {" "}
                  Status
                </label>
                <div className="col-sm-8">
                  <select
                    className="col-xs-10 col-sm-5 form-select"
                    onChange={handleInput}
                    value={values.status}
                    id="status"
                    name="status"
                    required
                  >
                    <option value="">Select</option>
                    <option value="Active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
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
                  <Link to="/patients">
                  <button className="btn btn-danger" type="reset" >
                    <i className="bi bi-trash-fill"></i>&nbsp; Cancel
                  </button>
                  </Link>
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

export default Editpatient;
