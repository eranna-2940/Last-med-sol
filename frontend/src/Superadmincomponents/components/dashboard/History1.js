import React, { useState } from "react";
import Menu from "../Menu";
import Navbar from "../Navbar";
import Subnavbar from "./Subnavbar";
import axios from "axios";
import { useParams } from "react-router-dom";

const History1 = () => {
  const {id} = useParams();

  const [values, setValues] = useState({
    appointment_id: id,
    complaint_date: "",
    present_illness: "",
    onset: "",
    duration: "",
    frequency: "",
    location: "",
    quality: "",
    severity: "",
    aggravating_factors: "",
    alleviating_factors: "",
    associated_symptoms: "",
  });

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  // console.log(values.appointment);
  const handleSubmit = (event) => {
    console.log(values);
    event.preventDefault();
    // setErrors(Validation(values));
    // if (errors.name === "" && errors.email === "" && errors.password === "" && errors.cnfpassword === "") {
    axios
      .post(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/history1`, values)
      .then((res) => {
        if (res.data === "Error") {
          alert("Error while submitting data. Please try again");
        } else {
          alert("Data added successfully");
          window.location.reload(false);
        }
      })
      .catch((err) => console.log(err));
    // }
  };

  return (
    <>
      <Navbar />
      <div className="d-flex">
        <div className="col-2 p-0">
          <Menu />
        </div>

        <div className="col-sm-12 col-md-12 col-lg-10 p-0 historybg">
          <div id="history_1" className="history_1">
            <div className="history_area">
              <Subnavbar />
              <h5 className="ms-2">History Of Present Illness</h5>
              <div className="rs1_accordion">
                <div className="accordion accordion-flush" id="accordionFlush">
                  <div className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded">
                    <h2 className="accordion-header" id="flush-headOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-dropOne"
                        aria-expanded="false"
                        aria-controls="flush-dropOne"
                      >
                        <div>
                          <span className="fs-5"> Current Complaints</span>
                        </div>
                      </button>
                    </h2>

                    <div
                      id="flush-dropOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="flush-headOne"
                      data-bs-parent="#accordionFlush"
                    >
                      <div className="accordion-body p-0">
                        <form
                          method="post"
                          action=""
                          className="historyform mb-5 p-lg-4 p-md-4 p-2"
                          onSubmit={handleSubmit}
                        >
                          <div id="content" className="content">
                            <ul className="list-unstyled" name="list_unstyled">
                               <li className="col-lg-3 col-md-5">
                                <label><b>Date : </b></label>
                                <br />
                                <input
                                  type="date"
                                  name="complaint_date"
                                  className="form-control border-2"
                                  onChange={handleInput}
                                />
                              </li>
                              <br />
                              <li className="col-12">
                                <label><b>History of Present Illness : </b></label>
                                <br />
                                <textarea
                                  rows="4"
                                  name="present_illness"
                                  className="form-control  border-2"
                                  onChange={handleInput}
                                ></textarea>
                              </li>
                              <br />
                              <li className="col-12">
                                <label><b>Place of Symptom(s) :</b></label>
                              </li>
                              
                              <div className="d-lg-flex flex-wrap mt-1">
                                <div className="col-lg-4 col-sm-12 col-md-12 d-lg-flex justify-content-between pt-2 pb-2">
                                  <label className="mt-2 me-2 w-25">
                                    Onset:
                                  </label>
                                  <input
                                      type="text"
                                      id="onset"
                                      name="onset"
                                      className="form-control  border-2"
                                      onChange={handleInput}
                                    />
                                </div>
                                <div className="col-lg-4 col-sm-12 col-md-12 d-lg-flex justify-content-between pt-2 pb-2">
                                  <label className="mt-2 me-2 w-25">
                                    Duration:
                                  </label>
                                  <input
                                      type="text"
                                      id="duration"
                                      name="duration"
                                      className="form-control border-2"
                                      onChange={handleInput}
                                    />
                                </div>
                                <div className="col-lg-4 col-sm-12 col-md-12 d-lg-flex justify-content-between  pt-2 pb-2">
                                  <label className="mt-2 me-2 w-25">
                                    Frequency:
                                  </label>
                                  <select
                                      id="frequency"
                                      name="frequency"
                                      className="form-select  border-2"
                                      onChange={handleInput}
                                    >
                                      <option value="" defaultValue>
                                        Values
                                      </option>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                    </select>
                                </div>

                                <div className="col-lg-4 col-sm-12 col-md-12 d-lg-flex justify-content-between pt-2 pb-2">
                                  <label className="mt-2 me-2 w-25">
                                    Location:
                                  </label>
                                  <input
                                      type="text"
                                      id="location"
                                      name="location"
                                      className="form-control border-2"
                                      onChange={handleInput}
                                    />
                                </div>
                                <div className="col-lg-4 col-sm-12 col-md-12 d-lg-flex justify-content-between pt-2 pb-2">
                                  <label className="mt-2 me-2 w-25">
                                    Quality:
                                  </label>
                                  <input
                                      type="text"
                                      id="quality"
                                      name="quality"
                                      className="form-control border-2"
                                      onChange={handleInput}
                                    />
                                </div>
                              </div>
                              <div className="col-lg-4 col-sm-12 col-md-12 d-lg-flex justify-content-between  pt-2 pb-5">
                                <label className="mt-2 me-2 w-25">
                                  <b>Severity</b>
                                </label>
                                <select
                                    id="severity"
                                    name="severity"
                                    className="form-select border-2"
                                    onChange={handleInput}
                                  >
                                    <option value="" defaultValue>
                                      Values
                                    </option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                  </select>
                              </div>

                              <li className="col-12">
                                <label><b>Aggravating Factors :</b></label>
                                <br/>
                                <textarea
                                  rows="4"
                                  id="aggravating_factors"
                                  name="aggravating_factors"
                                  className="form-control border-2"
                                  onChange={handleInput}
                                ></textarea>
                              </li>
                              <br/>
                              <li className="col-12">
                                <label><b>Alleviating Factors :</b> <br /></label>
                                <br/>
                                <textarea
                                  rows="4"
                                  id="alleviating_factors"
                                  name="alleviating_factors"
                                  className="form-control border-2"
                                  onChange={handleInput}
                                ></textarea>
                              </li>
                              <br/>
                              <li className="col-12">
                                <label><b>Associated Symptoms : </b></label>
                                <br />
                                <textarea
                                  rows="4"
                                  id="associated_symptoms"
                                  name="associated_symptoms"
                                  className="form-control border-2"
                                  onChange={handleInput}
                                ></textarea>
                              </li>
                            </ul>
                            <div className="m-4">
                              <button
                                type="submit"
                                name="save"
                                id="save"
                                className="btn btn-success me-2"
                              >
                                Save
                              </button>
                              {/* <button
                                type="submit"
                                name="update"
                                id="update"
                                className="btn btn-primary"
                              >
                                Update
                              </button> */}
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default History1;
