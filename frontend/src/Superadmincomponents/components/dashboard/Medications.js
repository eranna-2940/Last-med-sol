import React, { useState } from "react";
import Menu from "../Menu";
import Navbar from "../Navbar";
import Subnavbar from "./Subnavbar";
import axios from "axios";
import { useParams } from "react-router-dom";

const Medications = () => {
  const { id } = useParams();

  const [values, setValues] = useState({
    medications_id: id,
    medications: "",
    medicineData: [
      {
        medicine_type: "",
        medicine_name: "",
        dose: "",
        frequency: "",
        duration: "",
        reason_for_taking: "",
        compliance: "",
        takes_as_prescribed: "",
      },
    ],
    allergies: "",
    allergic_reaction: "",
    allergy_type: "",
  });

  const handleInput = (index, field, value) => {
    setValues((prev) => {
      const medicineData = [...prev.medicineData];
      medicineData[index][field] = value;
      return { ...prev, medicineData };
    });
  };

  const handleAddMore = () => {
    setValues((prev) => {
      const medicineData = [
        ...prev.medicineData,
        {
          medicine_type: "",
          medicine_name: "",
          dose: "",
          frequency: "",
          duration: "",
          reason_for_taking: "",
          compliance: "",
          takes_as_prescribed: "",
        },
      ];
      return { ...prev, medicineData };
    });
  };

  const handleSubmit = (event) => {
    console.log(values);
    event.preventDefault();

    axios
      .post(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/medication`, values)
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
              <p className="ms-2">Please fill the form carefully</p>

              <div className="rs1_accordion">
                <div
                  className="accordion accordion-flush mb-4"
                  id="accordionFlush"
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
                          <span className="fs-5"> Medications</span>
                        </div>
                      </button>
                    </h2>

                    <div
                      id="flush-dropOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="flush-headOne"
                      data-bs-parent="#accordionFlush"
                    >
                      <div className="accordion-body p-4">
                        <div className="col-xs-12">
                          <div className="form-group row">
                            <label className="col-xs-12" htmlFor="medications">Medications</label>
                            <div className="col-xs-12">
                              <textarea
                                name="medications"
                                id="medications"
                                cols="30"
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
                          <span className="fs-5"> Current Medicines</span>
                        </div>
                      </button>
                    </h2>

                    <div
                      id="flush-dropTwo"
                      className="accordion-collapse collapse show"
                      aria-labelledby="flush-headTwo"
                      data-bs-parent="#accordionFlush2"
                    >
                      <div className="accordion-body p-4">
                      {values.medicineData.map((medicine, index) => (
                  <div className="row" key={index}>
                    <div className="col-xs-12 col-sm-6">
                      <div className="form-group row">
                        <label className="col-xs-12" htmlFor={`medicine_type_${index}`}>Type</label>
                        <div className="col-xs-12">
                          <select
                            name={`medicine_type_${index}`}
                            id={`medicine_type_${index}`}
                            className="form-select border-2"
                            onChange={(e) => handleInput(index, 'medicine_type', e.target.value)}
                            value={medicine.medicine_type}
                          >
                            <option value="">Select</option>
                            <option value="prescribed">Prescribed</option>
                            <option value="over_the_counter">Over the counter</option>
                            <option value="herbal">Herbal</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6">
                      <div className="form-group row">
                        <label className="col-xs-12" htmlFor={`medicine_name_${index}`}>Name</label>
                        <div className="col-xs-12">
                          <input
                            type="text"
                            name={`medicine_name_${index}`}
                            id={`medicine_name_${index}`}
                            className="form-control border-2"
                            onChange={(e) => handleInput(index, 'medicine_name', e.target.value)}
                            value={medicine.medicine_name}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6">
      <div className="form-group row">
        <label className="col-xs-12" htmlFor={`dose_${index}`}>Dose</label>
        <div className="col-xs-12">
          <input
            type="text"
            name={`dose_${index}`}
            id={`dose_${index}`}
            className="form-control border-2"
            onChange={(e) => handleInput(index, 'dose', e.target.value)}
            value={medicine.dose}
          />
        </div>
      </div>
    </div>
    <div className="col-xs-12 col-sm-6">
      <div className="form-group row">
        <label className="col-xs-12" htmlFor={`frequency_${index}`}>Frequency</label>
        <div className="col-xs-12">
          <input
            type="text"
            name={`frequency_${index}`}
            id={`frequency_${index}`}
            className="form-control border-2"
            onChange={(e) => handleInput(index, 'frequency', e.target.value)}
            value={medicine.frequency}
          />
        </div>
      </div>
    </div>
    <div className="col-xs-12 col-sm-6">
      <div className="form-group row">
        <label className="col-xs-12" htmlFor={`duration_${index}`}>Duration</label>
        <div className="col-xs-12">
          <input
            type="text"
            name={`duration_${index}`}
            id={`duration_${index}`}
            className="form-control border-2"
            onChange={(e) => handleInput(index, 'duration', e.target.value)}
            value={medicine.duration}
          />
        </div>
      </div>
    </div>
    <div className="col-xs-12 col-sm-6">
      <div className="form-group row">
        <label className="col-xs-12" htmlFor={`reason_for_taking_${index}`}>Reason for taking</label>
        <div className="col-xs-12">
          <input
            type="text"
            name={`reason_for_taking_${index}`}
            id={`reason_for_taking_${index}`}
            className="form-control border-2"
            onChange={(e) => handleInput(index, 'reason_for_taking', e.target.value)}
            value={medicine.reason_for_taking}
          />
        </div>
      </div>
    </div>
    <div className="col-xs-12">
      <div className="form-group form-horizontal row">
        <label className="col-xs-5 col-sm-3 col-md-3" htmlFor={`compliance_${index}`}>Compliance</label>
        <div className="col-xs-7 col-sm-5 col-md-4">
          <label className="radio-inline me-4">
            <input
              type="radio"
              name={`compliance_${index}`}
              id={`compliance_yes_${index}`}
              value="yes"
              onChange={(e) => handleInput(index, 'compliance', e.target.value)}
              checked={medicine.compliance === 'yes'}
            />
            {' '}Yes
          </label>
          <label className="radio-inline me-4">
            <input
              type="radio"
              name={`compliance_${index}`}
              id={`compliance_no_${index}`}
              value="no"
              onChange={(e) => handleInput(index, 'compliance', e.target.value)}
              checked={medicine.compliance === 'no'}
            />
            {' '}No
          </label>
        </div>
      </div>
    </div>
    <div className="col-xs-12">
      <div className="form-group form-horizontal row">
        <label className="col-xs-5 col-sm-3 col-md-3" htmlFor={`takes_as_prescribed_${index}`}>Takes as Prescribed</label>
        <div className="col-xs-7 col-sm-5 col-md-4">
          <label className="radio-inline me-4">
            <input
              type="radio"
              name={`takes_as_prescribed_${index}`}
              id={`takes_as_prescribed_yes_${index}`}
              value="yes"
              onChange={(e) => handleInput(index, 'takes_as_prescribed', e.target.value)}
              checked={medicine.takes_as_prescribed === 'yes'}
            />
            {' '}Yes
          </label>
          <label className="radio-inline me-4">
            <input
              type="radio"
              name={`takes_as_prescribed_${index}`}
              id={`takes_as_prescribed_no_${index}`}
              value="no"
              onChange={(e) => handleInput(index, 'takes_as_prescribed', e.target.value)}
              checked={medicine.takes_as_prescribed === 'no'}
            />
            {' '}No
          </label>
        </div>
      </div>
    </div>
    </div>
                ))}

              <div className="col-xs-12">
                                <button className="btn btn-primary m-2" onClick={handleAddMore}>
                                  + Add More
                                </button>
                                <hr className="col-xs-10" />
                              </div>

                          <div className="col-xs-12">
                            <div className="form-group form-horizontal row">
                              <label className="col-xs-5 col-sm-3 col-md-3" htmlFor="allergies_yes">
                                Allergies
                              </label>
                              <div className="col-xs-7 col-sm-5 col-md-4">
                                <label className="radio-inline me-4">
                                  <input
                                    type="radio"
                                    name="allergies"
                                    id="allergies_yes"
                                    value="yes"
                                  onChange={handleInput}

                                  />{" "}
                                  Yes
                                </label>
                                <label className="radio-inline me-4">
                                  <input
                                    type="radio"
                                    name="allergies"
                                    id="allergies_no"
                                    value="no"
                                  onChange={handleInput}

                                  />{" "}
                                  No
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="col-xs-12 col-sm-6 p-0">
                            <div className="form-group row">
                              <label className="col-xs-12" htmlFor="allergy_type">Type</label>
                              <div className="col-xs-12">
                                <select
                                  name="allergy_type"
                                  id="allergy_type"
                                  className="form-select border-2"
                                  onChange={handleInput}
                                >
                                  <option value="">Select</option>
                                  <option value="medicines">Medicines</option>
                                  <option value="food">Food</option>
                                  <option value="insects">Insects</option>
                                  <option value="animals">Animals</option>
                                  <option value="other">Others</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className="col-xs-12 col-sm-6 p-0">
                            <div className="form-group row">
                              <label className="col-xs-12" htmlFor="allergic_reaction">
                                Allergic reaction
                              </label>
                              <div className="col-xs-12">
                                <select
                                  name="allergic_reaction"
                                  id="allergic_reaction"
                                  className="form-select border-2"
                                  onChange={handleInput}
                                >
                                  <option value="">Select</option>
                                  <option value="itching">Itching</option>
                                  <option value="swelling">Swelling</option>
                                  <option value="other">Other</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn btn-success m-2 mb-5 ms-2 p-2 ps-4 pe-4" onClick={handleSubmit}>
                Save
              </button>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Medications;
