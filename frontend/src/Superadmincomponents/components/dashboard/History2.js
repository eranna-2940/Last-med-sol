import React, { useState } from "react";
import Menu from "../Menu";
import Navbar from "../Navbar";
import Subnavbar from "./Subnavbar";
import axios from "axios";
import { useParams } from "react-router-dom";

const History2 = () => {
  const {id} = useParams();

  const [values, setValues] = useState({
    history2_id: id,
    diabetes: "",
    heartdisease: "",
    heartdisease_desc: "",
    hypertension: "",
    stroke: "",
    asthama: "",
    asthama_desc: "",
    cancer: "",
    arthritis: "",
    tuberculosis: "",
    epilepsy: "",
    epilepsy_desc: "",
    operation_date: "",
    operation_type: "",
    operation_reason: "",
    operation_outcome: "",
    operation_complication: "",
    polio:"",
    measles: "",
    mumps: "",
    rubella: "",
    whooping_cough: "",
    chicken_pox: "",
    rheumatic_fever: "",
    bcg: "",
    mmr: "",
    polio_immune: "",
    hepatitis: "",
    influenza: "",
    pneumonia: "",
    varicella: "",
    motor_vehicle_accidents: "",
    motor_vehicle_accidents_desc: "",
    blood_group: "",
    blood_transfusions_received: "",
    blood_transfusions_given: "",
    hospitalizations: "",
    hospitalized_date: "",
    hospitalized_reason: "",
    hospitalized_outcome: "",
    parents_living: "",
    cause_of_death: "",
    siblings: "",
    medical_issues_with_siblings: "",
    no_of_children: "",
    medical_issues_with_children: "",
    spouse: "",
    hemoccults: "",
    blood_pressure: "",
    xray_chest: "",
    hepotitis_b: "",
    cholestorol_screen: "",
    basic_metabolic_panel: "",
    foot_exam: "",
    tuberculin_skin_test: "",
    random_blood_sugar: "",
    vision_check: "",
    hepatitis_c: "",
    pap_smear: "",
    liver_function_tests: "",
    hepotitis_a: "",
    urine_analysis: "",
    CBC_with_differential: "",
    diabetics_urine: "",
    hiv: "",
    living_accommodations: "",
    birthplace: "",
    education: "",
    hobbies: "",
    religion: "",
    persons_at_home: "",
    employment: "",
    diet: "",
    marriage_divorce: "",
    exercise: "",
    secondary_smoking: "",
    history_of_secondary_smoking: "",
    tobacco: "",
    tobacco_no_of_years: "",
    drugs: "",
    drugs_no_of_years: "",
    alcohol: "",
    alcohol_no_of_years: "",
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
  
    axios
      .post(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/history2`, values)
      .then((res) => {
        if (res.data === "Error") {
          alert("Error while submitting data. Please try again");
        } else {
          alert("Data added successfully");
          window.location.reload(false);
        }
      })
      .catch((err) => console.log(err));

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
              <h5 className="ms-2">Past Medical History</h5>

              <div className="rs1_accordion">
                <div
                  className="accordion accordion-flush mb-4"
                  id="accordionFlush1"
                >
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
                          <span className="fs-5">
                            {" "}
                            Illness History in the family
                          </span>
                        </div>
                      </button>
                    </h2>

                    <div
                      id="flush-dropOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="flush-headOne"
                      data-bs-parent="#accordionFlush1"
                    >
                      <div className="accordion-body p-2">
                        <div className="col-xs-12 p-2">
                          <div className="form-group p-1">
                            <div className="">
                              <label className="checkbox-inline me-4">
                                <input
                                  type="checkbox"
                                  name="diabetes"
                                  id="diabetes"
                                  value="Diabetes"
                                  onChange={handleInput}
                                />{" "}
                                Diabetes
                              </label>
                              <label className="checkbox-inline me-4">
                                <input
                                  type="checkbox"
                                  name="heartdisease"
                                  id="heartdisease"
                                  value="HeartDisease"
                                  onChange={handleInput}
                                />{" "}
                                Heart Disease
                              </label>
                            </div>
                            <div className="col-xs-12">
                              <textarea
                                name="heartdisease_desc"
                                id="heartdisease_desc"
                                rows="4"
                                className="form-control border-2"
                                onChange={handleInput}
                              ></textarea>
                            </div>
                          </div>
                          <div className="form-group p-1">
                            <div className="">
                              <label className="checkbox-inline me-4">
                                <input
                                  type="checkbox"
                                  name="hypertension"
                                  id="hypertension"
                                  value="Hypertension"
                                  onChange={handleInput}
                                />{" "}
                                Hypertension
                              </label>
                              <label className="checkbox-inline me-4">
                                <input
                                  type="checkbox"
                                  name="stroke"
                                  id="stroke"
                                  value="Stroke"
                                  onChange={handleInput}
                                />{" "}
                                Stroke
                              </label>
                              <label className="checkbox-inline me-4">
                                <input
                                  type="checkbox"
                                  name="asthama"
                                  id="asthama"
                                  value="Asthma"
                                  onChange={handleInput}
                                />{" "}
                                Asthma
                              </label>
                            </div>
                            <div className="col-xs-12">
                              <textarea
                                name="asthama_desc"
                                id="asthama_desc"
                                rows="4"
                                className="form-control border-2"
                                onChange={handleInput}
                              ></textarea>
                            </div>
                          </div>

                          <div className="form-group p-1">
                            <div className="">
                              <label className="checkbox-inline me-4">
                                <input
                                  type="checkbox"
                                  name="cancer"
                                  id="cancer"
                                  value="Cancer"
                                  onChange={handleInput}
                                />{" "}
                                Cancer
                              </label>
                              <label className="checkbox-inline me-4">
                                <input
                                  type="checkbox"
                                  name="arthritis"
                                  id="arthritis"
                                  value="Arthritis"
                                  onChange={handleInput}
                                />{" "}
                                Arthritis
                              </label>
                              <label className="checkbox-inline me-4">
                                <input
                                  type="checkbox"
                                  name="tuberculosis"
                                  id="tuberculosis"
                                  value="Tuberculosis"
                                  onChange={handleInput}
                                />{" "}
                                Tuberculosis
                              </label>
                              <label className="checkbox-inline me-4">
                                <input
                                  type="checkbox"
                                  name="epilepsy"
                                  id="epilepsy"
                                  value="Epilepsy"
                                  onChange={handleInput}
                                />{" "}
                                Epilepsy
                              </label>
                            </div>
                            <div className="col-xs-12">
                              <textarea
                                name="epilepsy_desc"
                                id="epilepsy_desc"
                                rows="4"
                                className="form-control border-2"
                                onChange={handleInput}
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rs1_accordion">
                <div
                  className="accordion accordion-flush mb-4"
                  id="accordionFlush2"
                >
                  <div className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded">
                    <h2 className="accordion-header" id="flush-headTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-dropTwo"
                        aria-expanded="false"
                        aria-controls="flush-dropTwo"
                      >
                        <div>
                          <span className="fs-5"> Past Surgical History</span>
                        </div>
                      </button>
                    </h2>

                    <div
                      id="flush-dropTwo"
                      className="accordion-collapse collapse show"
                      aria-labelledby="flush-headTwo"
                      data-bs-parent="#accordionFlush2"
                    >
                      <div className="accordion-body p-2">
                        <form
                          method=""
                          action=""
                          className="historyform mb-4"
                        >
                          <div id="content" className="content m-2">
                            <ul className="list-unstyled" name="past_surgical_history">
                              <li className="col-lg-3 col-md-5">
                                <label><b>Operation Date :</b></label>
                                <br/>
                                <input
                                  type="date"
                                  name="operation_date"
                                  className="form-control border-2"
                                  onChange={handleInput}
                                />
                              </li>
                              <br />

                              <li className="col-12">
                                <label><b>Type :</b> </label>
                                <br />
                                <textarea
                                  rows="4"
                                  name="operation_type"
                                  className="form-control border-2"
                                  onChange={handleInput}
                                ></textarea>
                              </li>
                              <br/>
                              <li className="col-12">
                               <label> <b>Reason :</b></label>
                                 <br />
                                <textarea
                                  rows="4"
                                  name="operation_reason"
                                  className="form-control border-2"
                                  onChange={handleInput}
                                ></textarea>
                              </li>
                              <br/>
                              <li className="col-12">
                               <label> <b>Outcome : </b></label>
                                <br />
                                <textarea
                                  rows="4"
                                  name="operation_outcome"
                                  className="form-control border-2"
                                  onChange={handleInput}
                                ></textarea>
                              </li>
                              <br/>
                              <li className="col-12">
                               <label> <b>Complications : </b></label>
                                <br />
                                <textarea
                                  rows="4"
                                  name="operation_complication"
                                  className="form-control border-2"
                                ></textarea>
                              </li>
                            </ul>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rs1_accordion">
                <div
                  className="accordion accordion-flush mb-4"
                  id="accordionFlush3"
                >
                  <div className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded">
                    <h2 className="accordion-header" id="flush-headThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-dropThree"
                        aria-expanded="false"
                        aria-controls="flush-dropThree"
                      >
                        <div>
                          <span className="fs-5">
                            {" "}
                            Childhood Illness & Immunizations
                          </span>
                        </div>
                      </button>
                    </h2>

                    <div
                      id="flush-dropThree"
                      className="accordion-collapse collapse show"
                      aria-labelledby="flush-headThree"
                      data-bs-parent="#accordionFlush3"
                    >
                      <div className="accordion-body p-4">
                        <div className="col-xs-12">
                          <div className="row">
                            <div
                              className="col-xs-12 col-sm-4 col-md-6"
                              style={{ borderRight: "1px solid #ccc" }}
                            >
                              <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12">
                                  <span className="HeadingTxt">
                                    <strong>Childhood Illness</strong>
                                  </span>
                                </div>
                              </div>
                              <br />
                              <div className="form-group">
                                <label className="col-xs-12 col-md-12">
                                  <input
                                    type="checkbox"
                                    name="polio"
                                    id="polio"
                                    value="Polio"
                                    onChange={handleInput}
                                  />{" "}
                                  Polio
                                </label>
                              </div>
                              <div className="form-group">
                                <label className="col-xs-12 col-md-12">
                                  <input
                                    type="checkbox"
                                    name="measles"
                                    id="measles"
                                    value="Measles"
                                    onChange={handleInput}
                                  />{" "}
                                  Measles
                                </label>
                              </div>
                              <div className="form-group">
                                <label className="col-xs-12 col-md-12">
                                  <input
                                    type="checkbox"
                                    name="mumps"
                                    id="mumps"
                                    value="Mumps"
                                    onChange={handleInput}
                                  />{" "}
                                  Mumps
                                </label>
                              </div>
                              <div className="form-group">
                                <label className="col-xs-12 col-md-12">
                                  <input
                                    type="checkbox"
                                    name="rubella"
                                    id="rubella"
                                    value="Rubella"
                                    onChange={handleInput}
                                  />{" "}
                                  Rubella
                                </label>
                              </div>
                              <div className="form-group">
                                <label className="col-xs-12 col-md-12">
                                  <input
                                    type="checkbox"
                                    name="whooping_cough"
                                    id="whooping_cough"
                                    value="WhoopingCough"
                                    onChange={handleInput}
                                  />{" "}
                                  Whooping Cough
                                </label>
                              </div>
                              <div className="form-group ">
                                <label className="col-xs-12 col-md-12">
                                  <input
                                    type="checkbox"
                                    name="chicken_pox"
                                    id="chicken_pox"
                                    value="ChickenPox"
                                    onChange={handleInput}
                                  />{" "}
                                  Chicken Pox
                                </label>
                              </div>
                              <div className="form-group">
                                <label className="col-xs-12 col-md-12">
                                  <input
                                    type="checkbox"
                                    name="rheumatic_fever"
                                    id="rheumatic_fever"
                                    value="RheumaticFever"
                                    onChange={handleInput}
                                  />{" "}
                                  Rheumatic Fever
                                </label>
                              </div>
                            </div>
                            <div className="col-xs-12 col-sm-8 col-md-6">
                              <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12">
                                  <span className="HeadingTxt">
                                    <strong>Immunizations</strong>
                                  </span>
                                </div>
                              </div>
                              <br />

                              <div className="form-group row ps-3">
                                <label className="col-xs-5 col-sm-4 text-secondary fw-bolder" htmlFor="bcg_yes">BCG</label>
                                <div className="col-xs-7 col-sm-8 col-md-8">
                                  <label className="radio-inline me-3">
                                    <input
                                      type="radio"
                                      name="bcg"
                                      id="bcg_yes"
                                      value="yes"
                                      onChange={handleInput}
                                    />{" "}
                                    Yes
                                  </label>
                                  <label className="radio-inline me-3">
                                    <input
                                      type="radio"
                                      name="bcg"
                                      id="bcg_no"
                                      value="no"
                                      onChange={handleInput}
                                    />{" "}
                                    No
                                  </label>
                                  <label className="radio-inline me-3">
                                    <input
                                      type="radio"
                                      name="bcg"
                                      id="bcg_unknown"
                                      value="unknown"
                                      onChange={handleInput}
                                    />{" "}
                                    Unknown
                                  </label>
                                </div>
                              </div>
                              <div className="form-group row ps-3">
                                <label className="col-xs-5 col-sm-4 text-secondary fw-bolder" htmlFor="mmr_yes">MMR</label>
                                <div className="col-xs-7 col-sm-8 col-md-8">
                                  <label className="radio-inline me-3">
                                    <input
                                      type="radio"
                                      name="mmr"
                                      id="mmr_yes"
                                      value="yes"
                                      onChange={handleInput}
                                    />{" "}
                                    Yes
                                  </label>
                                  <label className="radio-inline me-3">
                                    <input
                                      type="radio"
                                      name="mmr"
                                      id="mmr_no"
                                      value="no"
                                      onChange={handleInput}
                                    />{" "}
                                    No
                                  </label>
                                  <label className="radio-inline me-3">
                                    <input
                                      type="radio"
                                      name="mmr"
                                      id="mmr_unknown"
                                      value="unknown"
                                      onChange={handleInput}
                                    />{" "}
                                    Unknown
                                  </label>
                                </div>
                              </div>
                              <div className="form-group row ps-3">
                                <label className="col-xs-5 col-sm-4 text-secondary fw-bolder" htmlFor="polio_immune_yes">
                                  Polio
                                </label>
                                <div className="col-xs-7 col-sm-8 col-md-8">
                                  <label className="radio-inline me-3">
                                    <input
                                      type="radio"
                                      name="polio_immune"
                                      id="polio_immune_yes"
                                      value="yes"
                                      onChange={handleInput}
                                    />{" "}
                                    Yes
                                  </label>
                                  <label className="radio-inline me-3">
                                    <input
                                      type="radio"
                                      name="polio_immune"
                                      id="polio_immune_no"
                                      value="no"
                                      onChange={handleInput}
                                    />{" "}
                                    No
                                  </label>
                                  <label className="radio-inline me-3">
                                    <input
                                      type="radio"
                                      name="polio_immune"
                                      id="polio_immune_unknown"
                                      value="unknown"
                                      onChange={handleInput}
                                    />{" "}
                                    Unknown
                                  </label>
                                </div>
                              </div>
                              <div className="form-group row ps-3">
                                <label className="col-xs-5 col-sm-4 text-secondary fw-bolder" htmlFor="hepatitis_yes">
                                  Hepatitis
                                </label>
                                <div className="col-xs-7 col-sm-8 col-md-8">
                                  <label className="radio-inline me-3">
                                    <input
                                      type="radio"
                                      name="hepatitis"
                                      id="hepatitis_yes"
                                      value="yes"
                                      onChange={handleInput}
                                    />{" "}
                                    Yes
                                  </label>
                                  <label className="radio-inline me-3">
                                    <input
                                      type="radio"
                                      name="hepatitis"
                                      id="hepatitis_no"
                                      value="no"
                                      onChange={handleInput}
                                    />{" "}
                                    No
                                  </label>
                                  <label className="radio-inline me-3">
                                    <input
                                      type="radio"
                                      name="hepatitis"
                                      id="hepatitis_unknown"
                                      value="unknown"
                                      onChange={handleInput}
                                    />{" "}
                                    Unknown
                                  </label>
                                </div>
                              </div>
                              <div className="form-group row ps-3">
                                <label className="col-xs-5 col-sm-4 text-secondary fw-bolder" htmlFor="influenza_yes">
                                  H Influenza
                                </label>
                                <div className="col-xs-7 col-sm-8 col-md-8">
                                  <label className="radio-inline me-3">
                                    <input
                                      type="radio"
                                      name="influenza"
                                      id="influenza_yes"
                                      value="yes"
                                      onChange={handleInput}
                                    />{" "}
                                    Yes
                                  </label>
                                  <label className="radio-inline me-3">
                                    <input
                                      type="radio"
                                      name="influenza"
                                      id="influenza_no"
                                      value="no"
                                      onChange={handleInput}
                                    />{" "}
                                    No
                                  </label>
                                  <label className="radio-inline me-3">
                                    <input
                                      type="radio"
                                      name="influenza"
                                      id="influenza_unknown"
                                      value="unknown"
                                      onChange={handleInput}
                                    />{" "}
                                    Unknown
                                  </label>
                                </div>
                              </div>
                              <div className="form-group row ps-3">
                                <label className="col-xs-5 col-sm-4 text-secondary fw-bolder" htmlFor="pneumonia_yes">
                                  Pnueumonia
                                </label>
                                <div className="col-xs-7 col-sm-8 col-md-8">
                                  <label className="radio-inline me-3">
                                    <input
                                      type="radio"
                                      name="pneumonia"
                                      id="pneumonia_yes"
                                      value="yes"
                                      onChange={handleInput}
                                    />{" "}
                                    Yes
                                  </label>
                                  <label className="radio-inline me-3">
                                    <input
                                      type="radio"
                                      name="pneumonia"
                                      id="pneumonia_no"
                                      value="no"
                                      onChange={handleInput}
                                    />{" "}
                                    No
                                  </label>
                                  <label className="radio-inline me-3">
                                    <input
                                      type="radio"
                                      name="pneumonia"
                                      id="pneumonia_known"
                                      value="unknown"
                                      onChange={handleInput}
                                    />{" "}
                                    Unknown
                                  </label>
                                </div>
                              </div>
                              <div className="form-group row ps-3">
                                <label className="col-xs-5 col-sm-4 text-secondary fw-bolder" htmlFor="varicella_yes">
                                  Vericella
                                </label>
                                <div className="col-xs-7 col-sm-8 col-md-8">
                                  <label className="radio-inline me-3">
                                    <input
                                      type="radio"
                                      name="varicella"
                                      id="varicella_yes"
                                      value="yes"
                                      onChange={handleInput}
                                    />{" "}
                                    Yes
                                  </label>
                                  <label className="radio-inline me-3">
                                    <input
                                      type="radio"
                                      name="varicella"
                                      id="varicella_no"
                                      value="no"
                                      onChange={handleInput}
                                    />{" "}
                                    No
                                  </label>
                                  <label className="radio-inline me-3">
                                    <input
                                      type="radio"
                                      name="varicella"
                                      id="varicella_unknown"
                                      value="unknown"
                                      onChange={handleInput}
                                    />{" "}
                                    Unknown
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rs1_accordion">
                <div
                  className="accordion accordion-flush mb-4"
                  id="accordionFlush4"
                >
                  <div className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded">
                    <h2 className="accordion-header" id="flush-headFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-dropFour"
                        aria-expanded="false"
                        aria-controls="flush-dropFour"
                      >
                        <div>
                          <span className="fs-5"> Accidents</span>
                        </div>
                      </button>
                    </h2>

                    <div
                      id="flush-dropFour"
                      className="accordion-collapse collapse show"
                      aria-labelledby="flush-headFour"
                      data-bs-parent="#accordionFlush4"
                    >
                      <div className="accordion-body p-4">
                        <div className="col-xs-12">
                          <div className="row eachFormRow">
                            <div className="col-xs-12">
                              <div className="form-group row">
                                <label className="col-xs-5 col-sm-4 col-md-3" htmlFor="motor_vehicle_accidents_yes">
                                  Motor vehicle accidents
                                </label>
                                <div className="col-xs-7 col-sm-8 col-md-8">
                                  <label className="radio-inline me-4">
                                    <input
                                      type="radio"
                                      name="motor_vehicle_accidents"
                                      id="motor_vehicle_accidents_yes"
                                      value="yes"
                                      onChange={handleInput}
                                    />{" "}
                                    Yes
                                  </label>
                                  <label className="radio-inline me-4">
                                    <input
                                      type="radio"
                                      name="motor_vehicle_accidents"
                                      id="motor_vehicle_accidents_no"
                                      value="no"
                                      onChange={handleInput}
                                    />{" "}
                                    No
                                  </label>
                                </div>
                              </div>
                              <div className="form-group row">
                                <div className="col-xs-12">
                                  <textarea
                                    name="motor_vehicle_accidents_desc"
                                    id="motor_vehicle_accidents_desc"
                                    cols="30"
                                    rows="4"
                                    className="form-control border-2"
                                    onChange={handleInput}
                                  ></textarea>
                                </div>
                              </div>
                              <div className="form-group row mt-4">
                                <label className="col-xs-5 col-sm-4 col-md-3" htmlFor="blood_group">
                                  Blood Group
                                </label>
                                <div className="col-xs-7 col-sm-5 col-md-4">
                                  <select
                                    name="blood_group"
                                    id="blood_group"
                                    className="form-select border-2"
                                    onChange={handleInput}
                                  >
                                    <option value="">Select</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                  </select>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-xs-5 col-sm-4 col-md-3" htmlFor="blood_transfusions_received_yes">
                                  Blood Transfusion received
                                </label>
                                <div className="col-xs-7 col-sm-8 col-md-8">
                                  <label className="radio-inline me-4">
                                    <input
                                      type="radio"
                                      name="blood_transfusions_received"
                                      id="blood_transfusions_received_yes"
                                      value="yes"
                                      onChange={handleInput}
                                    />{" "}
                                    Yes
                                  </label>
                                  <label className="radio-inline me-4">
                                    <input
                                      type="radio"
                                      name="blood_transfusions_received"
                                      id="blood_transfusions_received_no"
                                      value="no"
                                      onChange={handleInput}
                                    />{" "}
                                    No
                                  </label>
                                  <label className="radio-inline me-4">
                                    <input
                                      type="radio"
                                      name="blood_transfusions_received"
                                      id="blood_transfusions_received1"
                                      value="before1992"
                                      onChange={handleInput}
                                    />{" "}
                                    Before 1992
                                  </label>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-xs-5 col-sm-4 col-md-3" htmlFor="blood_transfusions_given1">
                                  Blood Transfusion given
                                </label>
                                <div className="col-xs-7 col-sm-8 col-md-8">
                                  <label className="radio-inline me-4">
                                    <input
                                      type="radio"
                                      name="blood_transfusions_given"
                                      id="blood_transfusions_given1"
                                      value="yes"
                                      onChange={handleInput}
                                    />{" "}
                                    Yes
                                  </label>
                                  <label className="radio-inline me-4">
                                    <input
                                      type="radio"
                                      name="blood_transfusions_given"
                                      id="blood_transfusions_given2"
                                      value="no"
                                      onChange={handleInput}
                                    />{" "}
                                    No
                                  </label>
                                  <label className="radio-inline me-4">
                                    <input
                                      type="radio"
                                      name="blood_transfusions_given"
                                      id="blood_transfusions_given3"
                                      value="before1992"
                                      onChange={handleInput}
                                    />{" "}
                                    Before 1992
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rs1_accordion">
                <div
                  className="accordion accordion-flush mb-4"
                  id="accordionFlush5"
                >
                  <div className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded">
                    <h2 className="accordion-header" id="flush-headFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-dropFive"
                        aria-expanded="false"
                        aria-controls="flush-dropFive"
                      >
                        <div>
                          <span className="fs-5"> Hospitalizations</span>
                        </div>
                      </button>
                    </h2>

                    <div
                      id="flush-dropFive"
                      className="accordion-collapse collapse show"
                      aria-labelledby="flush-headFive"
                      data-bs-parent="#accordionFlush5"
                    >
                      <div className="accordion-body p-2">
                        <div className="col-xs-12">
                          <div className="row">
                            <div className="col-xs-12">
                              <div className="form-group d-flex">
                                <label className="col-xs-5 col-sm-4 col-md-3" htmlFor="hospitalizations1">
                                  Hospitalizations
                                </label>
                                <div className="col-xs-7 col-sm-8 col-md-8">
                                  <label className="radio-inline me-4">
                                    <input
                                      type="radio"
                                      name="hospitalizations"
                                      id="hospitalizations1"
                                      value="yes"
                                      onChange={handleInput}
                                    />{" "}
                                    Yes
                                  </label>
                                  <label className="radio-inline me-4">
                                    <input
                                      type="radio"
                                      name="hospitalizations"
                                      id="hospitalizations2"
                                      value="no"
                                      onChange={handleInput}
                                    />{" "}
                                    No
                                  </label>
                                </div>
                              </div>

                              <div className="form-group row  p-3">
                                <label className="col-xs-5 col-sm-4 col-md-3 mt-lg-2 mt-md-2" htmlFor="hospitalized_date">
                                  Date
                                </label>
                                <div className="col-xs-7 col-sm-5 col-md-4">
                                  <input
                                    type="date"
                                    id="hospitalized_date"
                                    name="hospitalized_date"
                                    placeholder="Date"
                                    className="form-control border-2"
                                    onChange={handleInput}
                                  />
                                </div>
                              </div>
                              <div id="content" className="content m-2">
                                <ul className="list-unstyled">
                                  <li className="col-12">
                                    <label><b>Reason :</b></label>
                                    <br />
                                    <textarea
                                      rows="4"
                                      name="hospitalized_reason"
                                      className="form-control border-2"
                                      onChange={handleInput}
                                    ></textarea>
                                  </li>
                                  <br/>
                                  <li className="col-12">
                                    <label><b>Outcome : </b></label>
                                    <br />
                                    <textarea
                                      rows="4"
                                      name="hospitalized_outcome"
                                      className="form-control border-2 "
                                      onChange={handleInput}
                                    ></textarea>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rs1_accordion">
                <div
                  className="accordion accordion-flush mb-4"
                  id="accordionFlush6"
                >
                  <div className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded">
                    <h2 className="accordion-header" id="flush-headSix">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-dropSix"
                        aria-expanded="false"
                        aria-controls="flush-dropSix"
                      >
                        <div>
                          <span className="fs-5"> Family History</span>
                        </div>
                      </button>
                    </h2>

                    <div
                      id="flush-dropSix"
                      className="accordion-collapse collapse show"
                      aria-labelledby="flush-headSix"
                      data-bs-parent="#accordionFlush6"
                    >
                      <div className="accordion-body p-2">
                        <div className="col-xs-12">
                          <div className="row">
                            <div className="col-xs-12">
                              <div className="form-group d-flex">
                                <label className="col-xs-5 col-sm-4 col-md-3" htmlFor="parents_living1">
                                  Parents Living?
                                </label>
                                <div className="col-xs-7 col-sm-8 col-md-8">
                                  <label className="radio-inline me-4">
                                    <input
                                      type="radio"
                                      name="parents_living"
                                      id="parents_living1"
                                      value="yes"
                                      className="border-2"
                                      onChange={handleInput}
                                    />{" "}
                                    Yes
                                  </label>
                                  <label className="radio-inline me-4">
                                    <input
                                      type="radio"
                                      name="parents_living"
                                      id="parents_living2"
                                      value="no"
                                      className="border-2"
                                      onChange={handleInput}
                                    />{" "}
                                    No
                                  </label>
                                </div>
                              </div>
                              <div className="form-group row p-2">
                                <label className="col-xs-12" htmlFor="cause_of_death">
                                  Cause of Death
                                </label>
                                <div className="col-xs-12">
                                  <textarea
                                    name="cause_of_death"
                                    id="cause_of_death"
                                    cols="30"
                                    rows="4"
                                    className="form-control border-2"
                                    onChange={handleInput}
                                  ></textarea>
                                </div>
                              </div>
                              <div className="form-group row p-2">
                                <div className="col-xs-12 col-sm-6">
                                  <div className="form-group row">
                                    <label className="col-xs-12" htmlFor="siblings">
                                      How many Siblings?
                                    </label>
                                    <div className="col-xs-12">
                                      <input
                                        type="text"
                                        className="form-control border-2"
                                        name="siblings"
                                        id="siblings"
                                        onChange={handleInput}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xs-12 col-sm-6">
                                  <div className="form-group row">
                                    <label className="col-xs-12" htmlFor="medical_issues_with_siblings">
                                      Any Medical Issue with Siblings
                                    </label>
                                    <div className="col-xs-12">
                                      <input
                                        type="text"
                                        className="form-control border-2"
                                        name="medical_issues_with_siblings"
                                        id="medical_issues_with_siblings"
                                        onChange={handleInput}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xs-12 col-sm-6">
                                  <div className="form-group row">
                                    <label className="col-xs-12" htmlFor="no_of_children">
                                      How Many Children?
                                    </label>
                                    <div className="col-xs-12">
                                      <input
                                        type="text"
                                        className="form-control border-2"
                                        name="no_of_children"
                                        id="no_of_children"
                                        onChange={handleInput}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xs-12 col-sm-6">
                                  <div className="form-group row">
                                    <label className="col-xs-12" htmlFor="medical_issues_with_children">
                                      Any Medical Issue with Children ?
                                    </label>
                                    <div className="col-xs-12">
                                      <input
                                        type="text"
                                        className="form-control border-2"
                                        name="medical_issues_with_children"
                                        id="medical_issues_with_children"
                                        onChange={handleInput}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xs-12">
                                  <div className="form-group row">
                                    <label className="col-xs-12" htmlFor="spouse">Spouse</label>
                                    <div className="col-xs-12">
                                      <input
                                        type="text"
                                        className="form-control border-2"
                                        name="spouse"
                                        id="spouse"
                                        onChange={handleInput}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rs1_accordion">
                <div
                  className="accordion accordion-flush mb-4"
                  id="accordionFlush7"
                >
                  <div className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded">
                    <h2 className="accordion-header" id="flush-headSeven">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-dropSeven"
                        aria-expanded="false"
                        aria-controls="flush-dropSeven"
                      >
                        <div>
                          <span className="fs-5"> Previous Tests</span>
                        </div>
                      </button>
                    </h2>

                    <div
                      id="flush-dropSeven"
                      className="accordion-collapse collapse show"
                      aria-labelledby="flush-headSeven"
                      data-bs-parent="#accordionFlush7"
                    >
                      <div className="accordion-body p-4">
                        <div className="col-xs-12">
                          <div className="form-group row">
                            <label className="col-xs-12 col-sm-6 col-md-3">
                              <input
                                type="checkbox"
                                name="hemoccults"
                                id="hemoccults"
                                value="Hemoccults"
                                onChange={handleInput}
                              />{" "}
                              Hemoccults
                            </label>

                            <label className="col-xs-12 col-sm-6 col-md-3">
                              <input
                                type="checkbox"
                                name="vision_check"
                                id="vision_check"
                                value="Vision Check"
                                onChange={handleInput}
                              />{" "}
                              Vision Check
                            </label>

                            <label className="col-xs-12 col-sm-6 col-md-3">
                              <input
                                type="checkbox"
                                name="random_blood_sugar"
                                id="random_blood_sugar"
                                value="Random Blood Sugar"
                                onChange={handleInput}
                              />{" "}
                              Random Blood Sugar
                            </label>

                            <label className="col-xs-12 col-sm-6 col-md-3">
                              <input
                                type="checkbox"
                                name="tuberculin_skin_test"
                                id="tuberculin_skin_test"
                                value="Tuberculin Skin Test"
                                onChange={handleInput}
                              />{" "}
                              Tuberculin Skin Test
                            </label>
                          </div>

                          <div className="form-group row">
                            <label className="col-xs-12 col-sm-6 col-md-3">
                              <input
                                type="checkbox"
                                name="foot_exam"
                                id="foot_exam"
                                value="Foot Exam"
                                onChange={handleInput}
                              />{" "}
                              Foot Exam
                            </label>

                            <label className="col-xs-12 col-sm-6 col-md-3">
                              <input
                                type="checkbox"
                                name="basic_metabolic_panel"
                                id="basic_metabolic_panel"
                                value="Basic Metabolic Panel"
                                onChange={handleInput}
                              />{" "}
                              Basic Metabolic Panel
                            </label>

                            <label className="col-xs-12 col-sm-6 col-md-3">
                              <input
                                type="checkbox"
                                name="cholestorol_screen"
                                id="cholestorol_screen"
                                value="Cholesterol Screen"
                                onChange={handleInput}
                              />{" "}
                              Cholesterol Screen
                            </label>

                            <label className="col-xs-12 col-sm-6 col-md-3">
                              <input
                                type="checkbox"
                                name="hepotitis_b"
                                id="hepotitis_b"
                                value="Hepatitis B"
                                onChange={handleInput}
                              />{" "}
                              Hepatitis B
                            </label>
                          </div>

                          <div className="form-group row">
                            <label className="col-xs-12 col-sm-6 col-md-3">
                              <input
                                type="checkbox"
                                name="xray_chest"
                                id="xray_chest"
                                value="X-ray Chest"
                                onChange={handleInput}
                              />{" "}
                              X-ray Chest
                            </label>

                            <label className="col-xs-12 col-sm-6 col-md-3">
                              <input
                                type="checkbox"
                                name="blood_pressure"
                                id="blood_pressure"
                                value="Blood Pressure"
                                onChange={handleInput}
                              />{" "}
                              Blood Pressure
                            </label>

                            <label className="col-xs-12 col-sm-6 col-md-3">
                              <input
                                type="checkbox"
                                name="hiv"
                                id="hiv"
                                value="HIV"
                                onChange={handleInput}
                              />{" "}
                              HIV
                            </label>

                            <label className="col-xs-12 col-sm-6 col-md-3">
                              <input
                                type="checkbox"
                                name="diabetics_urine"
                                id="diabetics_urine"
                                value="In Diabetic's Urine"
                                onChange={handleInput}
                              />{" "}
                              In Diabetic's Urine
                            </label>
                          </div>

                          <div className="form-group row">
                            <label className="col-xs-12 col-sm-6 col-md-3">
                              <input
                                type="checkbox"
                                name="CBC_with_differential"
                                id="CBC_with_differential"
                                value="CBC with differential"
                                onChange={handleInput}
                              />{" "}
                              CBC with differential
                            </label>

                            <label className="col-xs-12 col-sm-6 col-md-3">
                              <input
                                type="checkbox"
                                name="urine_analysis"
                                id="urine_analysis"
                                value="Urine Analysis"
                                onChange={handleInput}
                              />{" "}
                              Urine Analysis
                            </label>

                            <label className="col-xs-12 col-sm-6 col-md-3">
                              <input
                                type="checkbox"
                                name="hepotitis_a"
                                id="hepotitis_a"
                                value="Hepatitis A"
                                onChange={handleInput}
                              />{" "}
                              Hepatitis A
                            </label>

                            <label className="col-xs-12 col-sm-6 col-md-3">
                              <input
                                type="checkbox"
                                name="liver_function_tests"
                                id="liver_function_tests"
                                value="Liver Function Test"
                                onChange={handleInput}
                              />{" "}
                              Liver Function Test
                            </label>
                          </div>

                          <div className="form-group row ">
                            <label className="col-xs-12 col-sm-6 col-md-3">
                              <input
                                type="checkbox"
                                name="pap_smear"
                                id="pap_smear"
                                value="Pap Smear"
                                onChange={handleInput}
                              />{" "}
                              Pap Smear
                            </label>

                            <label className="col-xs-12 col-sm-6 col-md-3">
                              <input
                                type="checkbox"
                                name="hepatitis_c"
                                id="hepatitis_c"
                                value="Hepatitis C"
                                onChange={handleInput}
                              />{" "}
                              Hepatitis C
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rs1_accordion">
                <div
                  className="accordion accordion-flush mb-4"
                  id="accordionFlush8"
                >
                  <div className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded">
                    <h2 className="accordion-header" id="flush-headEight">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-dropEight"
                        aria-expanded="false"
                        aria-controls="flush-dropEight"
                      >
                        <div>
                          <span className="fs-5"> Social History</span>
                        </div>
                      </button>
                    </h2>

                    <div
                      id="flush-dropEight"
                      className="accordion-collapse collapse show"
                      aria-labelledby="flush-headEight"
                      data-bs-parent="#accordionFlush8"
                    >
                      <div className="accordion-body p-4">
                        <div className="row">
                          <div className="col-xs-12 col-sm-6">
                            <div className="form-group row">
                              <label className="col-xs-12" htmlFor="birthplace">Birth Place</label>
                              <div className="col-xs-12">
                                <input
                                  type="text"
                                  name="birthplace"
                                  id="birthplace"
                                  className="form-control border-2"
                                  onChange={handleInput}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-xs-12 col-sm-6">
                            <div className="form-group row">
                              <label className="col-xs-12" htmlFor="living_accommodations">
                                Living Accommodations
                              </label>
                              <div className="col-xs-12">
                                <input
                                  type="text"
                                  name="living_accommodations"
                                  id="living_accommodations"
                                  className="form-control border-2"
                                  onChange={handleInput}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-xs-12 col-sm-6">
                            <div className="form-group row">
                              <label className="col-xs-12" htmlFor="education">Education</label>
                              <div className="col-xs-12">
                                <input
                                  type="text"
                                  name="education"
                                  id="education"
                                  className="form-control border-2"
                                  onChange={handleInput}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-xs-12 col-sm-6">
                            <div className="form-group row">
                              <label className="col-xs-12" htmlFor="hobbies">Hobbies</label>
                              <div className="col-xs-12">
                                <input
                                  type="text"
                                  name="hobbies"
                                  id="hobbies"
                                  className="form-control border-2"
                                  onChange={handleInput}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-xs-12 col-sm-6">
                            <div className="form-group row">
                              <label className="col-xs-12" htmlFor="religion">Religion</label>
                              <div className="col-xs-12">
                                <input
                                  type="text"
                                  name="religion"
                                  id="religion"
                                  className="form-control border-2"
                                  onChange={handleInput}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-xs-12 col-sm-6">
                            <div className="form-group row">
                              <label className="col-xs-12" htmlFor="persons_at_home">
                                Persons at home
                              </label>
                              <div className="col-xs-12">
                                <input
                                  type="text"
                                  name="persons_at_home"
                                  id="persons_at_home"
                                  className="form-control border-2"
                                  onChange={handleInput}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-xs-12 col-sm-6">
                            <div className="form-group row">
                              <label className="col-xs-12" htmlFor="employment">Employment</label>
                              <div className="col-xs-12">
                                <input
                                  type="text"
                                  name="employment"
                                  id="employment"
                                  className="form-control border-2"
                                  onChange={handleInput}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-xs-12 col-sm-6">
                            <div className="form-group row">
                              <label className="col-xs-12" htmlFor="diet">Diet</label>
                              <div className="col-xs-12">
                                <input
                                  type="text"
                                  name="diet"
                                  id="diet"
                                  className="form-control border-2"
                                  onChange={handleInput}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-xs-12 col-sm-6">
                            <div className="form-group row">
                              <label className="col-xs-12" htmlFor="marriage_divorce">
                                Marriage / divorce
                              </label>
                              <div className="col-xs-12">
                                <input
                                  type="text"
                                  name="marriage_divorce"
                                  id="marriage_divorce"
                                  className="form-control border-2"
                                  onChange={handleInput}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-xs-12 col-sm-6">
                            <div className="form-group row">
                              <label htmlFor="exercise" className="col-xs-12" >
                                Exercise
                              </label>
                              <div className="col-xs-12">
                                <input
                                  type="text"
                                  name="exercise"
                                  id="exercise"
                                  className="form-control border-2"
                                  onChange={handleInput}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-xs-12">
                            <div className="form-group row">
                              <label className="col-xs-5 col-sm-4 col-md-3" htmlFor="secondary_smoking1">
                                Secondary Smoking?
                              </label>
                              <div className="col-xs-7 col-sm-8 col-md-8">
                                <label className="radio-inline me-4">
                                  <input
                                    type="radio"
                                    name="secondary_smoking"
                                    id="secondary_smoking1"
                                    value="yes"
                                    onChange={handleInput}
                                  />{" "}
                                  Yes
                                </label>
                                <label className="radio-inline me-4">
                                  <input
                                    type="radio"
                                    name="secondary_smoking"
                                    id="secondary_smoking2"
                                    value="no"
                                    onChange={handleInput}
                                  />{" "}
                                  No
                                </label>
                              </div>
                            </div>

                            <div className="row form-group">
                              <div className="col-xs-12 m-2">
                                History of secondary smoking
                              </div>
                              <div className="col-xs-12">
                                <textarea
                                  name="history_of_secondary_smoking"
                                  id="history_of_secondary_smoking"
                                  rows="3"
                                  className="form-control border-2"
                                  onChange={handleInput}
                                ></textarea>
                              </div>
                            </div>
                          </div>

                          <div className="col-xs-12">
                            <div className="form-group row">
                              <label className="col-xs-12 fst-italic" htmlFor="tobacco1">Tobacco</label>

                              <div className="col-xs-12">
                                <div className="row">
                                  <label className="col-xs-4 col-sm-3 col-md-2">
                                    <input
                                      type="radio"
                                      name="tobacco"
                                      id="tobacco1"
                                      value="no"
                                      onChange={handleInput}
                                    />{" "}
                                    No
                                  </label>

                                  <label className="col-xs-4 col-sm-3 col-md-2">
                                    <input
                                      type="radio"
                                      name="tobacco"
                                      id="tobacco2"
                                      value="quit"
                                      onChange={handleInput}
                                    />{" "}
                                    Quit
                                  </label>

                                  <label className="col-xs-4 col-sm-3 col-md-2">
                                    <input
                                      type="radio"
                                      name="tobacco"
                                      id="tobacco3"
                                      value="remote_exposure"
                                      onChange={handleInput}
                                    />{" "}
                                    Remote Exposure
                                  </label>

                                  <label className="col-xs-4 col-sm-3 col-md-2">
                                    <input
                                      type="radio"
                                      name="tobacco"
                                      id="tobacco4"
                                      value="currently_continuing"
                                      onChange={handleInput}
                                    />{" "}
                                    Currently Continuing
                                  </label>

                                  <label className="col-xs-4 col-sm-3 col-md-2">
                                    <input
                                      type="text"
                                      className="form-control border-2"
                                      name="tobacco_no_of_years"
                                      id="tobacco_no_of_years"
                                      placeholder="Years"
                                      onChange={handleInput}
                                    />
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-xs-12">
                            <div className="form-group row eachFormRow">
                              <label className="col-xs-12 fst-italic" htmlFor="drugs1">Drugs</label>

                              <div className="col-xs-12">
                                <div className="row">
                                  <label className="col-xs-4 col-sm-3 col-md-2">
                                    <input
                                      type="radio"
                                      name="drugs"
                                      id="drugs1"
                                      value="no"
                                      onChange={handleInput}
                                    />{" "}
                                    No
                                  </label>

                                  <label className="col-xs-4 col-sm-3 col-md-2">
                                    <input
                                      type="radio"
                                      name="drugs"
                                      id="drugs2"
                                      value="quit"
                                      onChange={handleInput}
                                    />{" "}
                                    Quit
                                  </label>

                                  <label className="col-xs-4 col-sm-3 col-md-2">
                                    <input
                                      type="radio"
                                      name="drugs"
                                      id="drugs3"
                                      value="remote_exposure"
                                      onChange={handleInput}
                                    />{" "}
                                    Remote Exposure
                                  </label>

                                  <label className="col-xs-4 col-sm-3 col-md-2">
                                    <input
                                      type="radio"
                                      name="drugs"
                                      id="drugs4"
                                      value="currently_continuing"
                                      onChange={handleInput}
                                    />{" "}
                                    Currently Continuing
                                  </label>

                                  <label className="col-xs-4 col-sm-3 col-md-2">
                                    <input
                                      type="text"
                                      className="form-control border-2"
                                      name="drugs_no_of_years"
                                      id="h2_drugs_no_of_years"
                                      placeholder="Years"
                                      onChange={handleInput}
                                    />
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-xs-12">
                            <div className="form-group row">
                              <label className="col-xs-12 fst-italic" htmlFor="alcohol1">Alcohol</label>

                              <div className="col-xs-12">
                                <div className="row">
                                  <label className="col-xs-4 col-sm-3 col-md-2">
                                    <input
                                      type="radio"
                                      name="alcohol"
                                      id="alcohol1"
                                      value="no"
                                      onChange={handleInput}
                                    />{" "}
                                    No
                                  </label>

                                  <label className="col-xs-4 col-sm-3 col-md-2">
                                    <input
                                      type="radio"
                                      name="alcohol"
                                      id="alcohol2"
                                      value="quit"
                                      onChange={handleInput}
                                    />{" "}
                                    Quit
                                  </label>

                                  <label className="col-xs-4 col-sm-3 col-md-2">
                                    <input
                                      type="radio"
                                      name="alcohol"
                                      id="alcohol3"
                                      value="remote_exposure"
                                      onChange={handleInput}
                                    />{" "}
                                    Remote Exposure
                                  </label>

                                  <label className="col-xs-4 col-sm-3 col-md-2">
                                    <input
                                      type="radio"
                                      name="alcohol"
                                      id="alcohol4"
                                      value="currently_continuing"
                                      onChange={handleInput}
                                    />{" "}
                                    Currently Continuing
                                  </label>

                                  <label className="col-xs-4 col-sm-3 col-md-2">
                                    <input
                                      type="text"
                                      className="form-control border-2"
                                      name="alcohol_no_of_years"
                                      id="alcohol_no_of_years"
                                      placeholder="Years"
                                      onChange={handleInput}
                                    />
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button className="btn btn-success mb-5 ms-2 p-2 ps-4 pe-4" onClick={handleSubmit}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default History2;
