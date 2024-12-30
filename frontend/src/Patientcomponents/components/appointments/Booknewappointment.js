import React, { useState, useEffect } from "react";
import Menu from "../Menu";
import axios from "axios";
import Navbar from "../Navbar";
import { useData } from "../../../Admincomponents/components/Datacontext";
import Time from '../../../Admincomponents/components/time.json';

function Booknewappointment() {
  const { user } = useData();
  const [values, setValues] = useState({
    patient: user.firstname+" "+user.lastname,
    appointment: "",
    center: "",
    date: "",
    timing: "",
  });

  const [centers, setCenters] = useState([]);
  const [labs,setLabs] = useState([]);
  const [selectedcenter, setSelectedcenter] = useState("");

  useEffect(() => {
    // Get yesterday's date in the format "YYYY-MM-DD"
    const getYesterday = () => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate());
      const day = String(yesterday.getDate()).padStart(2, '0');
      const month = String(yesterday.getMonth() + 1).padStart(2, '0');
      const year = yesterday.getFullYear();
      return `${year}-${month}-${day}`;
    };

    // Set the min attribute of the date input to yesterday
    const dateInput = document.getElementById('date');
    if (dateInput) {
      dateInput.min = getYesterday();
    }
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/addappointment`)
      .then((res) => {
        res.data.data2.map((item)=>{
          return setCenters(oldArray => [...oldArray, item]);
        })
        res.data.data3.map((item)=>{
          return setLabs(oldArray => [...oldArray, item]);
        })
      })
      .catch((err) => console.log(err));
  }, []);

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));

    if(event.target.name === "center"){
      setSelectedcenter(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/addappointment", values)
      .then((res) => {
        if (res.data === "Error") {
          alert(
            "Error while adding appointment. Please try again filling all the fields"
          );
        } else {
          alert("Patient appointment added successfully");
          window.location.reload(false);
        }
      })
      .catch((err) => console.log(err));
  };

  const findIdByTime = (targetTime) => {
    const result = Time.find(item => item.time === targetTime);
    return result ? result.id : null;
  }

  return (
    <>
      <Navbar />
      <div className="d-flex">
        <div className="col-2 p-0">
          <Menu />
        </div>

        <div className="col-sm-12 col-md-12 col-lg-10 p-0 d-flex justify-content-center">
          <div className="col-md-10">
            <p className="fs-6 text-center p-3 border m-2  border-start-0 border-end-0">
              Choose the Date, Time and Center
            </p>
            <form>
              <div className="d-lg-flex mt-5">
                <div className="col-md-6">
                  <label className="fw-bold" htmlFor="appointment">Choose Appointment Type</label>
                  <select
                    className="form-select w-100  m-1"
                    name="appointment"
                    onChange={handleInput}
                    id="appointment"
                  >
                    <option value="">Select Appointment Type</option>
                    <option value="checkup">Checkup</option>
                    <option value="tests">Tests</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="fw-bold" htmlFor="center">Center</label>
                  <select
                    className="form-select w-100  m-1"
                    onChange={handleInput}
                    name="center"
                    id="center"
                  >
                    <option value="">Select</option>
                    {(values.appointment.toString() === "checkup") &&
                      (centers.map((item,index)=>(
                        <option key={index} value={item.centername}>{item.centername}</option>
                      )))
                    }
                    {(values.appointment.toString() === "tests") &&
                      (labs.map((item,index)=>(
                        <option key={index} value={item.labname}>{item.labname}</option>
                      )))
                    }
                  </select>
                </div>
              </div>
              <div className="d-lg-flex mt-4">
                <div className="col-md-6">
                  <label className="fw-bold" htmlFor="date">Date</label>
                  <div className="input-group w-100 m-1">
                    <input
                      type="date"
                      id="date"
                      className="form-control"
                      placeholder="Select Date"
                      onChange={handleInput}
                      name="date"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="fw-bold" htmlFor="timing">Time</label>
                  <select
                    className="form-select w-100  m-1"
                    name="timing"
                    id="timing"
                    onChange={handleInput}
                  >
                    <option>Select Time</option>
                    {(values.appointment.toString() === "checkup") ? (
                    centers.map((item, index) => {
                      if (item.centername === selectedcenter) {
                        const starttime = findIdByTime(item.fromtiming);
                        const endtime = findIdByTime(item.totiming)
                        const timeOptions = Time.flatMap((item1, index1) => {
                          if (item1.id >= starttime && item1.id <= endtime) {
                            return (
                              <option value={item1.time} key={index1}>
                                {item1.time}
                              </option>
                            );
                          }
                          return [];
                        });

                        return timeOptions;
                      }
                      return null;
                    })
                  ) : (
                    labs.map((item, index) => {
                      if (item.labname === selectedcenter) {
                        const starttime = findIdByTime(item.fromtiming);
                        const endtime = findIdByTime(item.totiming)
                        const timeOptions = Time.flatMap((item1, index1) => {
                          if (item1.id >= starttime && item1.id <= endtime) {
                            return (
                              <option value={item1.time} key={index1}>
                                {item1.time}
                              </option>
                            );
                          }
                          return [];
                        });

                        return timeOptions;
                      }
                      return null;
                    })
                  )}
                  </select>
                </div>
              </div>

            </form>
            <button
                className="btn bodybutton text-white float-end mt-3"
                // type="submit"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Submit
              </button>
          </div>
        </div>
      </div>

      {/* modal */}
      <div
        className="modal"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5>View</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p><b>Patient Name : </b>{values.patient}</p>
              <p><b>Appointment Type : </b>{values.appointment}</p>
              <p><b>Appointment Center : </b>{values.center}</p>
              <p><b>Appointment Date : </b>{values.date}</p>
              <p><b>Appointment Time : </b>{values.timing}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Confirm
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Booknewappointment;
