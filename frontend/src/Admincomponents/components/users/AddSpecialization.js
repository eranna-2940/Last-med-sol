import React, { useState } from "react";
import Menu from "../Menu";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar";

export default function AddSpecialization() {
    const [values, setValues] = useState({
        specialization: "",
        description: "",
      });

    const handleInput = (event) => {
        // console.log(event.target.name)
        setValues((prev) => ({
          ...prev,
          [event.target.name]: [event.target.value],
        }));
      };
    
      const handleSubmit = (event) => {
        console.log(values);
        event.preventDefault();
        axios
          .post(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/addspecialization`, values)
          .then((res) => {
            if (res.data === "Error") {
              alert(
                "Error while adding center. Please try again filling all the fields"
              );
            } else {
              alert("Specialization added successfully");
              window.location.reload(false);
            }
          })
          .catch((err) => console.log(err));
      };
  return (
    <>
      <Navbar />
      <div className="d-flex ">
        <div className="col-2 p-0">
          <Menu />
        </div>
        <div className="col-10 p-0">
          <nav className="d-flex bg-light border border-bottom-info p-2">
          <i className="bi bi-house-fill"></i>
            <Link to="/dashboardPage" className="text-decoration-none">
              &nbsp;Home&nbsp;
            </Link>
            &gt;{" "}
            {/* <Link to="/managepackage" className="text-decoration-none"> */}
              Specialization
            {/* </Link>{" "} */}
            &gt; Add Specialization
          </nav>
          <h4 className="mt-2 ms-2">Add Specialization</h4>
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
                  <label
                    className="col-sm-4 text-md-end text-primary"
                    htmlFor="specialization"
                  >
                    Specialization{" "}
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      placeholder="Specialization Name"
                      className="col-xs-10 col-sm-5 form-control"
                      id="specialization"
                      name="specialization"
                      onChange={handleInput}
                      pattern="[A-Z][a-z]*[\s*\w*]*"
                      title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                      required
                    />
                  </div>
                </div>
                <div className="form-group d-md-flex">
                  <label
                    className="col-sm-4 text-md-end text-primary"
                    htmlFor="description"
                  >
                    {" "}
                    Description{" "}
                  </label>
                  <div className="col-sm-8">
                    <textarea
                      placeholder="Specialization Description"
                      className="col-xs-10 col-sm-5 form-control"
                      id="description"
                      name="description"
                      onChange={handleInput}
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
  )
}
