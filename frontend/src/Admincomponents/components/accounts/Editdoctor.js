import React, { useEffect, useState } from "react";
import Menu from "../Menu";
import { Link, useParams} from "react-router-dom";
import axios from "axios";
import Navbar from '../Navbar';

export default function EditDoctor() {
  const {id} = useParams();
  const [centers, setCenters] = useState([]);
  const [specialization, setSpecialization] = useState([]);
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    phone: "",
    email: "",
    password: "",
    hospital: "",
    specialization: "",
    address: "",
    country: "",
    state: "",
    city: "",
  });

  useEffect(()=> {
    axios
    .get(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/doctors`)
    .then((res) => {
      res.data.map((item) => {
        if(item.doctor_id === parseInt(id)){
        return setValues((oldArray) => ({
          ...oldArray,
          firstname: (item.firstname === null) ? ("") : (item.firstname),
          lastname: (item.lastname === null) ? ("") : (item.lastname),
          gender: (item.gender === null) ? ("") : (item.gender),
          phone: (item.phone === null) ? ("") : (item.phone),
          email: (item.email === null) ? ("") : (item.email),
          password: (item.password === null) ? ("") : (item.password),
          hospital: (item.hospital === null) ? ("") : (item.hospital),
          specialization: (item.specialization === null) ? ("") : (item.specialization),
          address: (item.address === null) ? ("") : (item.address),
          country: (item.country === null) ? (""): (item.country),
          state: (item.state === null) ? ("") : (item.state),
          city: (item.city === null) ? (""): (item.city),
          }));
        }
        return null;
      });
    })
    .catch((err) => console.log(err));

    axios
    .get(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/managecenters`)
    .then((res) => {
      res.data.map((item) => {
        return setCenters((oldArray) => [...oldArray, item]);
      });
    })
    .catch((err) => console.log(err));

    axios
    .get(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/specialization`)
    .then((res) => {
      res.data.map((item) => {
        return setSpecialization((oldArray) => [...oldArray, item]);
      });
    })
    .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/doctors`, values)
      .then((res) => {
        if(res.data === "Error"){
          alert('Error while updating Doctor. Please try again filling all the fields');
        }
        else{
          alert("Doctor updated successfully");
          window.location.reload(false);
        }

      })
      .catch((err) => console.log(err));

  };

  return (
    <>
    <Navbar/>
    <div className="d-flex left-div">
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
          &gt; &nbsp; <Link to="/doctors" className="text-decoration-none">Users</Link>&nbsp; &gt; Add Doctor
        </nav>
        <h4 className="mt-2 ms-2">Edit Doctor</h4>
        <hr className="ms-4 me-4" />
        <div className="">
          <div className="col-xs-12">
            <form
              className="form-horizontal mb-4"
              action=''
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
                    pattern="[A-Z][a-z]*\s*\w*"
                    title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                    onChange={handleInput}
                    defaultValue={values.firstname}
                    required
                  />
                </div>
              </div>
              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  htmlFor="lastname"
                >
                  {" "}
                  Last Name{" "}
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="Last name"
                    className="col-xs-10 col-sm-5 form-control"
                    id="lastname"
                    name="lastname"
                    pattern="[A-Z][a-z]*\s*\w*"
                    title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                    onChange={handleInput}
                    defaultValue={values.lastname}
                    required
                  />
                </div>
              </div>
              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  htmlFor="Mgender"
                >
                  {" "}
                  Gender{" "}
                </label>
                <div className="col-md-8">
                  <div className="radio-inline">
                    <label className="me-4">
                      <input
                        type="radio"
                        className="pms"
                        id="Mgender"
                        name="gender"
                        value="male"
                        onChange={handleInput}
                        checked={values.gender.toString() === 'male'}
                        required
                      />
                      <span className="lbl"> Male</span>
                    </label>
                    <label>
                      <input
                        type="radio"
                        className="pms"
                        id="Fgender"
                        name="gender"
                        value="female"
                        onChange={handleInput}
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
                  htmlFor="phone"
                >
                  {" "}
                  Phone Number
                </label>
                <div className="col-sm-8">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="col-xs-10 col-sm-5 form-control"
                    id="phone"
                    maxLength="10"
                    name="phone"
                    onChange={handleInput}
                    defaultValue={values.phone}
                    pattern="[0-9]{10}"
                    title="10 digit numeric values only"
                    required
                  />
                  <span
                    id="phone_number_validation"
                    className="error"
                    style={{ color: "red" }}
                  ></span>
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
                    defaultValue={values.password}
                    required
                  />
                </div>
              </div>

              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  htmlFor="hospital"
                >
                  {" "}
                  Hospital
                </label>
                <div className="col-sm-8">
                  <select
                    className="col-xs-10 col-sm-5 form-select"
                    id="hospital"
                    name="hospital"
                    onChange={handleInput}
                    value={values.hospital}
                    required
                  >
                    <option value="">Select</option>
                    {centers.map((item,index)=>(
                        <option key={index} value={item.centername}>{item.centername}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  htmlFor="specialization"
                >
                  {" "}
                  Specialization
                </label>
                <div className="col-sm-8">
                  <select
                    className="col-xs-10 col-sm-5 form-select"
                    id="specialization"
                    name="specialization"
                    onChange={handleInput}
                    value={values.specialization}
                  >
                    <option value="">Select</option>
                    {specialization.map((item, index)=>(
                        <option key={index} value={item.specialization}>{item.specialization}</option>
                    ))}
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
                  htmlFor="country"
                >
                  {" "}
                  Country
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="Country"
                    className="col-xs-10 col-sm-5 form-control"
                    id="country"
                    name="country"
                    onChange={handleInput}
                    defaultValue={values.country}
                    pattern="[A-Z][a-z]*\s*\w*"
                    title="First letter should be uppercase, remaining letters are lowercase. No special characters"
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
                  {" "}
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
                  <Link to="/doctors">
                  <button className="btn btn-danger" type="reset">
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

        {/* Right side */}
      </div>
    </div>
    </>
  );
}
