import React, { useEffect, useState } from "react";
import Menu from "../Menu";
import { Link, useParams} from "react-router-dom";
import axios from "axios";
import Navbar from '../Navbar';

export default function EditPackages() {
  const {id} = useParams();
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

  useEffect(()=> {
    axios
    .get(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/packages`)
    .then((res) => {
      res.data.map((item) => {
        if(item.package_id === parseInt(id)){
        return setValues((oldArray) => ({
          ...oldArray,
          packagename: (item.packagename === null) ? ("") : (item.packagename),
          description: (item.packagedescription === null) ? ("") : (item.packagedescription),
          amount: (item.amount === null) ? ("") : (item.amount),
          imageurl: (item.imageurl === null) ? ("") : (item.imageurl),
          service1: (item.service1 === null) ? ("") : (item.service1),
          service2: (item.service2 === null) ? ("") : (item.service2),
          service3: (item.service3 === null) ? ("") : (item.service3),
          service4: (item.service4 === null) ? ("") : (item.service4),
          service5: (item.service5 === null) ? ("") : (item.service5),
          service6: (item.service6 === null) ? ("") : (item.service6),
          service7: (item.service7 === null) ? ("") : (item.service7),
          service8: (item.service8 === null) ? ("") : (item.service8),
          service9: (item.service9 === null) ? ("") : (item.service9),
          service10: (item.service10 === null) ? ("") : (item.service10),
          }));
        }
        return null;
      });
    })
    .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

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
      .post(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/managepackages`, values)
      .then((res) => {
        if (res.data === "Error") {
          alert(
            "Error while updating packages. Please try again filling all the fields"
          );
        } else {
          alert("Package updated successfully");
          window.location.replace("/Prevmedsol/managepackage");
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
          &gt; &nbsp; <Link to="/managepackage" className="text-decoration-none">Packages</Link>&nbsp; &gt; Edit Packages
        </nav>
        <h4 className="mt-2 ms-2">Edit Packages</h4>
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
                <label className="col-sm-4 text-md-end text-primary" htmlFor="packagename">
                Package Name{" "}
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="Package Name"
                    className="col-xs-10 col-sm-5 form-control"
                    id="packagename"
                    name="packagename"
                    pattern="[A-Z][a-z]*\s*\w*"
                    title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                    onChange={handleInput}
                    defaultValue={values.packagename}
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
                      defaultValue={values.description}
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
                <div className="col-md-8">
                    <input
                      type="number"
                      placeholder="package amount"
                      className="col-xs-10 col-sm-5 form-control"
                      id="amount"
                      name="amount"
                      onChange={handleInput}
                      defaultValue={values.amount}
                      required
                    />
                </div>
              </div>

              <div className="form-group d-md-flex">
                  <label className="col-sm-4 text-md-end text-primary" htmlFor="service1">
                    {" "}
                    Services
                  </label>
                  <div className="col-sm-8 d-lg-flex gap-5">
                    <div className="d-flex flex-column">
                      <div>
                        <label>
                        <input
                          type="checkbox"
                          id="service1"
                          name="service1"
                          value="MohTV Access"
                          onChange={handleInput}
                          defaultChecked={values.service1.toString() === "MohTV Access"}
                        />&nbsp;
                        MohTV Access</label>
                      </div>
                      <div>
                        <label> 
                        <input
                          type="checkbox"
                          id="service2"
                          name="service2"
                          value="Assistance From Prevmedsol Daughter"
                          onChange={handleInput}
                          defaultChecked={values.service2}
                          
                        />&nbsp;
                        Assistance From Prevmedsol Daughter</label>
                      </div>
                      <div>
                        <label> 
                        <input
                          type="checkbox"
                          id="service3"
                          name="service3"
                          value="24/7 Emergency Support"
                          onChange={handleInput}
                          defaultChecked={values.service3}

                        />&nbsp;
                        24/7 Emergency Support</label>
                      </div>
                      <div>
                      <label> 
                        <input
                          type="checkbox"
                          id="service4"
                          name="service4"
                          value="Unlimited Doctor Teleconsultation"
                          onChange={handleInput}
                          defaultChecked={values.service4}

                        />&nbsp;
                        Unlimited Doctor Teleconsultation</label>
                      </div>
                      <div>
                      <label> 
                        <input
                          type="checkbox"
                          id="service5"
                          name="service5"
                          value="Eldercare Helpdesk"
                          onChange={handleInput}
                          defaultChecked={values.service5}

                        />&nbsp;
                        Eldercare Helpdesk</label>
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
                          defaultChecked={values.service6}

                        />&nbsp;
                         Prevmedsol Companion</label>
                      </div>
                      <div>
                      <label> 
                        <input
                          type="checkbox"
                          id="service7"
                          name="service7"
                          value="Doctors Appointment"
                          onChange={handleInput}
                          defaultChecked={values.service7}

                        />&nbsp;
                        Doctors Appointment</label>
                      </div>
                      <div>
                      <label> 
                        <input
                          type="checkbox"
                          id="service8"
                          name="service8"
                          value="Ambulance Expense"
                          onChange={handleInput}
                          defaultChecked={values.service8}

                        />&nbsp;
                        Ambulance Expense</label>
                      </div>
                      <div>
                      <label> 
                        <input
                          type="checkbox"
                          id="service9"
                          name="service9"
                          value="Virtual Community"
                          onChange={handleInput}
                          defaultChecked={values.service9}

                        />&nbsp;
                         Virtual Community</label>
                      </div>
                      <div>
                      <label> 
                        <input
                          type="checkbox"
                          id="service10"
                          name="service10"
                          value="Full-body Checkup"
                          onChange={handleInput}
                          defaultChecked={values.service10}

                        />&nbsp;
                        Full-body Checkup</label>
                      </div>
                    </div>
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
                  <Link to="/managepackage">
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
  )
}
