import React, { useState, useEffect } from "react";
import Menu from "../Menu";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar";
import { useData } from "../../../Admincomponents/components/Datacontext";

function Doctorappointment() {
  const { doctor } = useData();
  const [info1, setInfo1] = useState([]);
  const [info2, setInfo2] = useState([]);

  let date = new Date().toLocaleDateString("sv");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/patientappointment`)
      .then((res) => {
        // Extract patient information
        res.data.data2.map((item1) => {
          res.data.data1.map((item2) => {
            if (item2.firstname + " " + item2.lastname === item1.patient) {
              return setInfo1((prev) => [...prev, item2]);
            }
            return null;
          });
          if (item1.center.trim() === doctor.hospital.trim()) {
            return setInfo2((prev) => [...prev, item1]);
          }
          return null;
        });
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <div className="d-flex">
        <div className="col-2 p-0">
          <Menu />
        </div>

        <div className="col-sm-12 col-md-12 col-lg-10 p-0">
          <h5 className="mt-4 mb-2 ms-2">Appointment Details</h5>
          <hr className="ms-4 me-4" />
          <Link to="/doctorappointments">
            <button className="btn btn-secondary text-white ms-lg-4 ms-2 m-1">
              Upcoming
            </button>
          </Link>
          <Link to="/doctorpreviousappointments">
            <button className="btn btn-light">Previous</button>
          </Link>

          <div className="mt-4 ps-2 pe-2 pb-4">
          <div className="table-responsive">
          <table
              id="dynamic-table"
              className="table table-striped table-bordered table-hover dataTable no-footer"
              role="grid"
              aria-describedby="dynamic-table_info"
            >
              <thead>
                <tr role="row">
                  <th
                    className="sorting"
                    tabIndex="0"
                    aria-controls="dynamic-table"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="Appointment ID: activate to sort column ascending"
                  >
                    Appointment ID
                  </th>
                  <th
                    className="sorting"
                    tabIndex="0"
                    aria-controls="dynamic-table"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="Patient Name: activate to sort column ascending"
                  >
                    Patient Name
                  </th>
                  <th
                    className="sorting"
                    tabIndex="0"
                    aria-controls="dynamic-table"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="Phone:activate to sort column ascending"
                  >
                    Phone Number
                  </th>
                  <th
                    className="hidden-480 sorting"
                    tabIndex="0"
                    aria-controls="dynamic-table"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="Gender: activate to sort column ascending"
                  >
                    Appointment Date
                  </th>
                  <th
                    className="hidden-480 sorting"
                    tabIndex="0"
                    aria-controls="dynamic-table"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="Appointment Date: activate to sort column ascending"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {info2.map((item, index) => {
                  const patientInfo = info1.find(
                    (info) =>
                      info.firstname + " " + info.lastname === item.patient
                  );

                  if (patientInfo) {
                    if (item.date > date) {
                      return (
                        <tr key={index}>
                          <td>{item.appointment_id}</td>
                          <td>{item.patient}</td>
                          <td>{patientInfo.phone}</td>
                          <td>
                            {new Date(item.date).toLocaleDateString("en-GB")}
                          </td>
                          <td>{}</td>
                        </tr>
                      );
                    }
                  } else {
                    return null; // Handle cases where patient information is not found
                  }
                  return null;
                })}
                <tr id="noresults"></tr>
              </tbody>
            </table>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Doctorappointment;
