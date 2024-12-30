import React, { useState } from "react";
import Navbar from "../Navbar";
import Menu from "../Menu";
import Subnavbar from "./Subnavbar";
import axios  from "axios";
import { useParams } from "react-router-dom";

const PhysicalExam1 = () => {
  const {id} = useParams();
  const [activeIndexAccordion1, setActiveIndexAccordion1] = useState(0);
  const [activeIndexAccordion2, setActiveIndexAccordion2] = useState(0);
  const [activeIndexAccordion3, setActiveIndexAccordion3] = useState(0);
  const [activeIndexAccordion4, setActiveIndexAccordion4] = useState(0);
  const [activeIndexAccordion5, setActiveIndexAccordion5] = useState(0);
  const [activeIndexAccordion6, setActiveIndexAccordion6] = useState(0);
  const [activeIndexAccordion7, setActiveIndexAccordion7] = useState(0);

  const handleToggle = (index, accordion) => {
    if (accordion === 1) {
      setActiveIndexAccordion1(index);
    } else if (accordion === 2) {
      setActiveIndexAccordion2(index);
    } else if (accordion === 3) {
      setActiveIndexAccordion3(index);
    } else if (accordion === 4) {
      setActiveIndexAccordion4(index);
    } else if (accordion === 5) {
      setActiveIndexAccordion5(index);
    } else if (accordion === 6) {
      setActiveIndexAccordion6(index);
    } else if (accordion === 7) {
      setActiveIndexAccordion7(index);
    }
  };

  const getTitleStyles = (currentIndex, titleIndex) => ({
    backgroundColor: currentIndex === titleIndex ? "#237a57" : "#f1f1f1",
    color: currentIndex === titleIndex ? "white" : "black",
    margin: "4px",
    border: "1px solid lightgray",
    padding: "5px",
    borderRadius: "4px",
    cursor: "pointer",
  });

  const accordion1Titles = [
    "Blood Pressure",
    "Pulse",
    "Respirations",
    "Temperature",
  ];
  const accordion2Titles = ["State of Health", "Stature", "Dress", "Hygiene"];
  const accordion3Titles = [
    "Skin scars",
    "Rashes",
    "Bruises",
    "Tattoos",
    "Hair Consistency",
    "Nail Pitting",
  ];
  const accordion4Titles = [
    "Pupil size",
    "Shape",
    "Reactivity",
    "Conjunctival",
    "Scelral icterus",
    "Fundal Papiledema",
    "Hemorrhage",
    "Lids",
    "Extraocular Movements",
    "Visual Fields",
    "Acuity",
  ];
  const accordion5Titles = [
    "Shape - Symmetry",
    "Tenderness",
    "Discharge",
    "External Canal",
    "Tympanic Membrone Inflammation",
    "Gross Auditory Acuity",
  ];
  const accordion6Titles = [
    "Symmetry",
    "Nose-Tenderness",
    "Nose-Discharge",
    "Mucosa",
    "Turbinate Inflammation",
    "Frontal Maxillary Sinus Tenderness",
  ];
  const accordion7Titles = [
    "Mouth Hygiene",
    "Dentures",
    "Erythema",
    "Exudates",
  ];

  const [accordionContents, setAccordionContents] = useState({
    physical1_id: id,
    "Blood Pressure": "",
    "Pulse": "",
    "Respirations": "",
    "Temperature": "",
    "State of Health": "",
    "Stature": "",
    "Dress": "",
    "Hygiene": "",
    "Skin scars": "",
    "Rashes": "",
    "Bruises": "",
    "Tattoos": "",
    "Hair Consistency": "",
    "Nail Pitting": "",
    "Pupil size": "",
    "Shape": "",
    "Reactivity": "",
    "Conjunctival": "",
    "Scelral icterus": "",
    "Fundal Papiledema": "",
    "Hemorrhage": "",
    "Lids": "",
    "Extraocular Movements": "",
    "Visual Fields": "",
    "Acuity": "",
    "Shape - Symmetry": "",
    "Tenderness": "",
    "Discharge": "",
    "External Canal": "",
    "Tympanic Membrone Inflammation": "",
    "Gross Auditory Acuity": "",
    "Symmetry": "",
    "Nose-Tenderness": "",
    "Nose-Discharge": "",
    "Mucosa": "",
    "Turbinate Inflammation": "",
    "Frontal Maxillary Sinus Tenderness": "",
    "Mouth Hygiene": "",
    "Dentures": "",
    "Erythema": "",
    "Exudates": "",
    "selectedValue": '' 
  });

  const handleSave = () => {
    const serverUrl = `${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/physicalexam1`;

    const data = {
      accordionContents: { ...accordionContents },
    };

    console.log(data);
    axios.post(serverUrl, data)
      .then(response => {
        alert('Data saved successfully:', response.data);
        window.location.reload(false);

        // Optionally, you can perform additional actions after a successful save
      })
      .catch(error => {
        console.error('Error saving data:', error);
        // Handle error, show the user a message, etc.
      });
  };

  const handleBMI = (e) => {
    e.preventDefault();
    let weight = document.getElementById("p1_weight").value;
    let height = document.getElementById("p1_height").value;
    let BMI = document.getElementById("p1_bmi");
    if(weight === "" || height === ""){
      alert("Please enter your Weight and Height");
    }
    else{
      let denom = (height/100) * (height/100);
      BMI.value = (weight/denom).toFixed(1);
    }
  }

  return (
    <>
      <Navbar />
      <div className="d-flex">
        <div className="col-2 p-0">
          <Menu />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-10 p-0">
          <Subnavbar />
          <p className="text-dark ml-2">Please fill the form carefully</p>
          <div className="rs1_accordion">
            <div
              className="accordion  accordion-flush mb-4"
              id="accordionFlush1"
            >
              <div
                className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded"
                id="assessmentHeading1"
              >
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
                      <span className="fs-5">Vitals</span>
                    </div>
                  </button>
                </h2>

                <div
                  id="flush-dropOne"
                  className="accordion-collapse collapse show pb-3"
                  aria-labelledby="flush-headOne"
                  data-bs-parent="#accordionFlush1"
                >
                  <div className="accordion-body">
                    <div className="eachAccordInputBlock">
                      <div className="">
                        <div className="row form-group">
                          <label className="col-md-3">Weight</label>
                          <div className=" col-md-6 d-flex">
                            <input
                              type="input"
                              className="form-control w-75"
                              name="p1_weight"
                              id="p1_weight"
                              placeholder="Weight in KG"
                              required
                            />
                            &nbsp;&nbsp;<span>KGS</span>
                          </div>
                        </div>
                        <div className="row form-group">
                          <label className="col-md-3">Height</label>
                          <div className="col-md-6 d-flex">
                            <input
                              type="input"
                              className="form-control w-75"
                              name="p1_height"
                              id="p1_height"
                              placeholder="Height in CM"
                              required
                            />
                            &nbsp;&nbsp;<span>CMS</span>
                          </div>
                          <div className="col-md-3">
                            <button
                              className="btn btn-success mt-1"
                              id="btn-bmi"
                              name="btn-bmi"
                              onClick={handleBMI}
                            >
                              Get BMI  
                            </button>
                          </div>
                        </div>
                        <div className="row form-group">
                          <label className="col-md-3">BMI</label>
                          <div className="col-md-6 d-flex">
                            <input
                              type="input"
                              className="form-control w-75"
                              name="p1_bmi"
                              id="p1_bmi"
                              placeholder="BMI"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="d-md-flex mt-3">
                        <div className="col-md-4 col-xs-5">
                          {/* Accordion titles */}
                          {accordion1Titles.map((title, index) => (
                            <div
                              key={index}
                              className={`eachAccordTab`}
                              onClick={() => handleToggle(index, 1)}
                              style={getTitleStyles(
                                activeIndexAccordion1,
                                index
                              )}
                            >
                              <div className={`eachAccordLink`}>{title}</div>
                            </div>
                          ))}
                        </div>
                        <div className="col-md-8 col-xs-7">
                          {/* Accordion textarea */}
                          <div className="eachAccordInputBlock">
                            <textarea
                              rows="3"
                              className="form-control mt-2"
                              placeholder={`${accordion1Titles[activeIndexAccordion1]}`}
                              value={
                                accordionContents[
                                  `${accordion1Titles[activeIndexAccordion1]}`
                                ]
                              }
                              onChange={(e) => {
                                setAccordionContents({
                                  ...accordionContents,
                                  [`${accordion1Titles[activeIndexAccordion1]}`]:
                                    e.target.value,
                                });
                              }}
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="accordion accordion-flush mb-4"
              id="accordionFlush2"
            >
              <div
                className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded"
                id="assessmentHeading2"
              >
                <h2 className="accordion-header" id="flush-headOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-droptwo"
                    aria-expanded="false"
                    aria-controls="flush-droptwo"
                  >
                    <div>
                      <span className="fs-5">General</span>
                    </div>
                  </button>
                </h2>

                <div
                  id="flush-droptwo"
                  className="accordion-collapse collapse show pb-3"
                  aria-labelledby="flush-headOne"
                  data-bs-parent="#accordionFlush2"
                >
                  <div className="accordion-body p-0">
                   <div className="d-md-flex mt-2">
                    <div className="col-md-4 col-xs-5">
                      <h5 className="ml-1">Development</h5>
                     
                    </div>
                    <div className="col-md-8 col-xs-7">
                    <select
                    className="mb-3 w-100"
                    style={{ height: "40px" }}
                    value={accordionContents.selectedValue || ''}
                    onChange={(e) => {
                      const selectedValue = e.target.value;
                      setAccordionContents((prevContents) => ({
                        ...prevContents,
                        selectedValue: selectedValue,
                      }));
                    }}
                  >
              <option value="">select</option>
              <option value="well_nourished">well_nourished</option>
              <option value="poorly_nourished">poorly_nourished</option>
            </select>

                    </div>
                   </div>
                   <div className="d-md-flex">
                   <div className="col-md-4 col-xs-5">
                      {/* Accordion titles */}
                      {accordion2Titles.map((title, index) => (
                        <div
                          key={index}
                          className={`eachAccordTab`}
                          onClick={() => handleToggle(index, 2)}
                          style={getTitleStyles(activeIndexAccordion2, index)}
                        >
                          <div className={`eachAccordLink`}>{title}</div>
                        </div>
                      ))}
                    </div>
                    <div className="col-md-8 col-xs-7">
                      {/* Accordion textarea */}
                      <div className="eachAccordInputBlock">
                      <textarea
                          rows="3"
                          className="form-control mt-2"
                          placeholder={`${accordion2Titles[activeIndexAccordion2]}`}
                          value={
                            accordionContents[
                              `${accordion2Titles[activeIndexAccordion2]}`
                            ]
                          }
                          onChange={(e) => {
                            setAccordionContents({
                              ...accordionContents,
                              [`${accordion2Titles[activeIndexAccordion2]}`]:
                                e.target.value,
                            });
                          }}
                        ></textarea>
                      </div>
                    </div>
                   </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="accordion accordion-flush mb-4"
              id="accordionFlush3"
            >
              <div
                className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded"
                id="assessmentHeading2"
              >
                <h2 className="accordion-header" id="flush-headOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-dropthree"
                    aria-expanded="false"
                    aria-controls="flush-dropthree"
                  >
                    <div>
                      <span className="fs-5">Skin</span>
                    </div>
                  </button>
                </h2>

                {/* Accordion body */}
                <div
                  id="flush-dropthree"
                  className="accordion-collapse collapse show pb-3"
                  aria-labelledby="flush-headOne"
                  data-bs-parent="#accordionFlush3"
                >
                  <div className="accordion-body d-md-flex p-0">
                    <div className="col-md-4 col-xs-5">
                      {/* Accordion titles */}
                      {accordion3Titles.map((title, index) => (
                        <div
                          key={index}
                          className={`eachAccordTab`}
                          onClick={() => handleToggle(index, 3)}
                          style={getTitleStyles(activeIndexAccordion3, index)}
                        >
                          <div className={`eachAccordLink`}>{title}</div>
                        </div>
                      ))}
                    </div>
                    <div className="col-md-8 col-xs-7">
                      {/* Accordion textarea */}
                      <div className="eachAccordInputBlock">
                        <textarea
                          rows="3"
                          className="form-control mt-2"
                          placeholder={`${accordion3Titles[activeIndexAccordion3]}`}
                          value={
                            accordionContents[
                              `${accordion3Titles[activeIndexAccordion3]}`
                            ]
                          }
                          onChange={(e) => {
                            setAccordionContents({
                              ...accordionContents,
                              [`${accordion3Titles[activeIndexAccordion3]}`]:
                                e.target.value,
                            });
                          }}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="accordion accordion-flush mb-4"
              id="accordionFlush4"
            >
              <div
                className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded"
                id="assessmentHeading2"
              >
                <h2 className="accordion-header" id="flush-headOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-dropfour"
                    aria-expanded="false"
                    aria-controls="flush-dropfour"
                  >
                    <div>
                      <span className="fs-5">Eyes</span>
                    </div>
                  </button>
                </h2>

                {/* Accordion body */}
                <div
                  id="flush-dropfour"
                  className="accordion-collapse collapse show pb-3"
                  aria-labelledby="flush-headOne"
                  data-bs-parent="#accordionFlush4"
                >
                  <div className="accordion-body d-md-flex p-0">
                    <div className="col-md-4 col-xs-5">
                      {/* Accordion titles */}
                      {accordion4Titles.map((title, index) => (
                        <div
                          key={index}
                          className={`eachAccordTab`}
                          onClick={() => handleToggle(index, 4)}
                          style={getTitleStyles(activeIndexAccordion4, index)}
                        >
                          <div className={`eachAccordLink`}>{title}</div>
                        </div>
                      ))}
                    </div>
                    <div className="col-md-8 col-xs-7">
                      {/* Accordion textarea */}
                      <div className="eachAccordInputBlock">
                        <textarea
                          rows="3"
                          className="form-control mt-2"
                          placeholder={`${accordion4Titles[activeIndexAccordion4]}`}
                          value={
                            accordionContents[
                              `${accordion4Titles[activeIndexAccordion4]}`
                            ]
                          }
                          onChange={(e) => {
                            setAccordionContents({
                              ...accordionContents,
                              [`${accordion4Titles[activeIndexAccordion4]}`]:
                                e.target.value,
                            });
                          }}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="accordion  accordion-flush mb-4"
              id="accordionFlush8"
            >
              <div
                className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded"
                id="assessmentHeading1"
              >
                <h2 className="accordion-header" id="flush-headOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-dropeight"
                    aria-expanded="false"
                    aria-controls="flush-dropeight"
                  >
                    <div>
                      <span className="fs-5">Head</span>
                    </div>
                  </button>
                </h2>

                <div
                  id="flush-dropeight"
                  className="accordion-collapse collapse show pb-3"
                  aria-labelledby="flush-headOne"
                  data-bs-parent="#accordionFlush8"
                >
                  <div className="accordion-body">
                    <div class="col-xs-12">
                      <div class="form-group form-horizontal row eachFormRow">
                        <label class="col-xs-5 col-sm-3 col-md-2">Trauma</label>
                        <div class="col-xs-7 col-sm-5 col-md-4">
                          <label class="radio-inline me-4">
                            <input
                              type="radio"
                              name="p1_trauma"
                              id="p1_trauma"
                              value="yes"
                            />{" "}
                            Yes
                          </label>
                          <label class="radio-inline">
                            <input
                              type="radio"
                              name="p1_trauma"
                              id="p1_trauma"
                              value="no"
                              checked="checked"
                            />{" "}
                            No
                          </label>
                        </div>
                      </div>

                      <div class="form-group form-horizontal row eachFormRow">
                        <label class="col-xs-5 col-sm-3 col-md-2">&nbsp;</label>
                        <div class="col-xs-7 col-sm-5 col-md-4">
                          <textarea
                            name="p1_trauma_desc"
                            id="p1_trauma_desc"
                            cols=""
                            rows="4"
                            class="form-control"
                          ></textarea>
                        </div>
                      </div>

                      <div class="form-group form-horizontal row eachFormRow">
                        <label class="col-xs-5 col-sm-3 col-md-2">Shape</label>
                        <div class="col-xs-7 col-sm-5 col-md-4">
                          <textarea
                            name="p1_shape"
                            id="p1_shape"
                            cols=""
                            rows="4"
                            class="form-control"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="accordion accordion-flush mb-4"
              id="accordionFlush5"
            >
              <div
                className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded"
                id="assessmentHeading2"
              >
                <h2 className="accordion-header" id="flush-headOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-dropfive"
                    aria-expanded="false"
                    aria-controls="flush-dropfive"
                  >
                    <div>
                      <span className="fs-5">Ears</span>
                    </div>
                  </button>
                </h2>

                {/* Accordion body */}
                <div
                  id="flush-dropfive"
                  className="accordion-collapse collapse show pb-3"
                  aria-labelledby="flush-headOne"
                  data-bs-parent="#accordionFlush5"
                >
                  <div className="accordion-body d-md-flex p-0">
                    <div className="col-md-4 col-xs-5">
                      {/* Accordion titles */}
                      {accordion5Titles.map((title, index) => (
                        <div
                          key={index}
                          className={`eachAccordTab`}
                          onClick={() => handleToggle(index, 5)}
                          style={getTitleStyles(activeIndexAccordion5, index)}
                        >
                          <div className={`eachAccordLink`}>{title}</div>
                        </div>
                      ))}
                    </div>
                    <div className="col-md-8 col-xs-7">
                      {/* Accordion textarea */}
                      <div className="eachAccordInputBlock">
                        <textarea
                          rows="3"
                          className="form-control mt-2"
                          placeholder={`${accordion5Titles[activeIndexAccordion5]}`}
                          value={
                            accordionContents[
                              `${accordion5Titles[activeIndexAccordion5]}`
                            ]
                          }
                          onChange={(e) => {
                            setAccordionContents({
                              ...accordionContents,
                              [`${accordion5Titles[activeIndexAccordion5]}`]:
                                e.target.value,
                            });
                          }}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="accordion accordion-flush mb-4"
              id="accordionFlush6"
            >
              <div
                className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded"
                id="assessmentHeading2"
              >
                <h2 className="accordion-header" id="flush-headOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-dropsix"
                    aria-expanded="false"
                    aria-controls="flush-dropsix"
                  >
                    <div>
                      <span className="fs-5">Nose</span>
                    </div>
                  </button>
                </h2>

                {/* Accordion body */}
                <div
                  id="flush-dropsix"
                  className="accordion-collapse collapse show pb-3"
                  aria-labelledby="flush-headOne"
                  data-bs-parent="#accordionFlush6"
                >
                  <div className="accordion-body d-md-flex p-0">
                    <div className="col-md-4 col-xs-5">
                      {/* Accordion titles */}
                      {accordion6Titles.map((title, index) => (
                        <div
                          key={index}
                          className={`eachAccordTab`}
                          onClick={() => handleToggle(index, 6)}
                          style={getTitleStyles(activeIndexAccordion6, index)}
                        >
                          <div className={`eachAccordLink`}>{title}</div>
                        </div>
                      ))}
                    </div>
                    <div className="col-md-8 col-xs-7">
                      {/* Accordion textarea */}
                      <div className="eachAccordInputBlock">
                        <textarea
                          rows="3"
                          className="form-control mt-2"
                          placeholder={`${accordion6Titles[activeIndexAccordion6]}`}
                          value={
                            accordionContents[
                              `${accordion6Titles[activeIndexAccordion6]}`
                            ]
                          }
                          onChange={(e) => {
                            setAccordionContents({
                              ...accordionContents,
                              [`${accordion6Titles[activeIndexAccordion6]}`]:
                                e.target.value,
                            });
                          }}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="accordion accordion-flush mb-4"
              id="accordionFlush7"
            >
              <div
                className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded"
                id="assessmentHeading2"
              >
                <h2 className="accordion-header" id="flush-headOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-dropseven"
                    aria-expanded="false"
                    aria-controls="flush-dropseven"
                  >
                    <div>
                      <span className="fs-5">Mouth and Throat</span>
                    </div>
                  </button>
                </h2>

                {/* Accordion body */}
                <div
                  id="flush-dropseven"
                  className="accordion-collapse collapse show pb-3"
                  aria-labelledby="flush-headOne"
                  data-bs-parent="#accordionFlush7"
                >
                  <div className="accordion-body d-md-flex p-0">
                    <div className="col-md-4 col-xs-5">
                      {/* Accordion titles */}
                      {accordion7Titles.map((title, index) => (
                        <div
                          key={index}
                          className={`eachAccordTab`}
                          onClick={() => handleToggle(index, 7)}
                          style={getTitleStyles(activeIndexAccordion7, index)}
                        >
                          <div className={`eachAccordLink`}>{title}</div>
                        </div>
                      ))}
                    </div>
                    <div className="col-md-8 col-xs-7">
                      {/* Accordion textarea */}
                      <div className="eachAccordInputBlock">
                        <textarea
                          rows="3"
                          className="form-control mt-2"
                          placeholder={`${accordion7Titles[activeIndexAccordion7]}`}
                          value={
                            accordionContents[
                              `${accordion7Titles[activeIndexAccordion7]}`
                            ]
                          }
                          onChange={(e) => {
                            setAccordionContents({
                              ...accordionContents,
                              [`${accordion7Titles[activeIndexAccordion7]}`]:
                                e.target.value,
                            });
                          }}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="btn btn-success ml-4" onClick={handleSave}>
            Save
          </button>

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

export default PhysicalExam1;
