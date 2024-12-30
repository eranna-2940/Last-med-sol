import React, { useState } from "react";
import Menu from "../Menu";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar";

const Addpackage = () => {
  const [values, setValues] = useState({
    packagename: "",
    description: "",
    amount: "",
    imageurl: "",
    service1: "",
    service2: "",
    service3: "",
    service4: "",
    service5: "",
    service6: "",
    service7: "",
    service8: "",
    service9: "",
    service10: "",
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
      .post(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/addpackage`, values)
      .then((res) => {
        if (res.data === "Error") {
          alert(
            "Error while adding center. Please try again filling all the fields"
          );
        } else {
          alert("Package added successfully");
          window.location.reload(false);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleChecked = (e) => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    if (e.currentTarget.checked) {
      for (let i = 1; i < checkboxes.length; i++) {
        checkboxes[i].checked = true;
        setValues((prev) => ({
          ...prev,
          [checkboxes[i].name]: [checkboxes[i].value],
        }));
      }
    } else {
      for (let i = 1; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
      }
    }
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
            <Link to="/managepackage" className="text-decoration-none">
              Packages
            </Link>{" "}
            &gt; Add Package
          </nav>
          <h4 className="mt-2 ms-2">Add Package</h4>
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
                    htmlFor="packagename"
                  >
                    Package Name{" "}
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      placeholder="Package Name"
                      className="col-xs-10 col-sm-5 form-control"
                      id="packagename"
                      name="packagename"
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
                    htmlFor="description"
                  >
                    {" "}
                    Description{" "}
                  </label>
                  <div className="col-sm-8">
                    <textarea
                      placeholder="Package Description"
                      className="col-xs-10 col-sm-5 form-control"
                      id="description"
                      name="description"
                      onChange={handleInput}
                      required
                    />
                  </div>
                </div>
                <div className="form-group d-md-flex">
                  <label
                    className="col-sm-4 text-md-end text-primary"
                    htmlFor="amount"
                  >
                    {" "}
                    Price
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="number"
                      placeholder="package amount"
                      className="col-xs-10 col-sm-5 form-control"
                      id="amount"
                      name="amount"
                      onChange={handleInput}
                      required
                    />
                  </div>
                </div>
                <div className="form-group d-md-flex">
                  <label
                    className="col-sm-4 text-md-end text-primary"
                    htmlFor="imageurl"
                  >
                    {" "}
                    Image URL{" "}
                  </label>
                  <div className="col-sm-8">
                    <textarea
                      placeholder="Image URL"
                      className="col-xs-10 col-sm-5 form-control"
                      id="imageurl"
                      name="imageurl"
                      onChange={handleInput}
                      required
                    />
                  </div>
                </div>
                <div className="form-group d-md-flex">
                  <label
                    className="col-sm-4 text-md-end text-primary"
                    htmlFor="service1"
                  >
                    {" "}
                    Services
                  </label>
                  <div className="col-sm-8">
                    <div className="d-lg-flex gap-5 mb-1">
                      <div>
                        <label>
                          <input
                            type="checkbox"
                            id="selectall"
                            name="selectall"
                            value=""
                            onChange={handleChecked}
                          />
                          &nbsp; Select All
                        </label>
                      </div>

                    </div>
                    <div className="d-lg-flex gap-5">
                      <div className="d-flex flex-column">
                        <div>
                          <label>
                            <input
                              type="checkbox"
                              id="service1"
                              name="service1"
                              value="MohTV Access"
                              onChange={handleInput}
                            />
                            &nbsp; MohTV Access
                          </label>
                        </div>
                        <div>
                          <label>
                            <input
                              type="checkbox"
                              id="service2"
                              name="service2"
                              value="Assistance From Prevmedsol Daughter"
                              onChange={handleInput}
                            />
                            &nbsp; Assistance From Prevmedsol Daughter
                          </label>
                        </div>
                        <div>
                          <label>
                            <input
                              type="checkbox"
                              id="service3"
                              name="service3"
                              value="24/7 Emergency Support"
                              onChange={handleInput}
                            />
                            &nbsp; 24/7 Emergency Support
                          </label>
                        </div>
                        <div>
                          <label>
                            <input
                              type="checkbox"
                              id="service4"
                              name="service4"
                              value="Unlimited Doctor Teleconsultation"
                              onChange={handleInput}
                            />
                            &nbsp; Unlimited Doctor Teleconsultation
                          </label>
                        </div>
                        <div>
                          <label>
                            <input
                              type="checkbox"
                              id="service5"
                              name="service5"
                              value="Eldercare Helpdesk"
                              onChange={handleInput}
                            />
                            &nbsp; Eldercare Helpdesk
                          </label>
                        </div>
                      </div>
                      <div className="d-flex flex-column">
                        <div>
                          <label>
                            <input
                              type="checkbox"
                              id="service6"
                              name="service6"
                              value="Prevmedsol Companion"
                              onChange={handleInput}
                            />
                            &nbsp; Prevmedsol Companion
                          </label>
                        </div>
                        <div>
                          <label>
                            <input
                              type="checkbox"
                              id="service7"
                              name="service7"
                              value="Doctors Appointment"
                              onChange={handleInput}
                            />
                            &nbsp; Doctors Appointment
                          </label>
                        </div>
                        <div>
                          <label>
                            <input
                              type="checkbox"
                              id="service8"
                              name="service8"
                              value="Ambulance Expense"
                              onChange={handleInput}
                            />
                            &nbsp; Ambulance Expense
                          </label>
                        </div>
                        <div>
                          <label>
                            <input
                              type="checkbox"
                              id="service9"
                              name="service9"
                              value="Virtual Community"
                              onChange={handleInput}
                            />
                            &nbsp; Virtual Community
                          </label>
                        </div>
                        <div>
                          <label>
                            <input
                              type="checkbox"
                              id="service10"
                              name="service10"
                              value="Full-body Checkup"
                              onChange={handleInput}
                            />
                            &nbsp; Full-body Checkup
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* <div className="text-end">
                      <input
                        className="btn btn-success"
                        type="button"
                        id="addservices"
                        name="addservices"
                        value="Add Services"
                        // onChange={handleChecked}
                      />
                    </div> */}
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

export default Addpackage;
