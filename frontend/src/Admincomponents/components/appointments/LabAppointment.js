import React, { useState, useEffect } from "react";
import Menu from "../Menu";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import axios from "axios";
import Searchbar from "../Searchbar";
import Pagination from "../Pagination";

const Labappointment = () => {
  const [info1, setInfo1] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [viewRowIndex, setViewRowIndex] = useState(null);
  const [appointments, setAppointments] = useState([]); // State to store upcoming appointments
  let date = new Date().toLocaleDateString("sv");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/patientappointment`)
      .then((res) => {
        // Extract upcoming appointments and set them in a separate state
        const upcomingLabAppointments = res.data.data2.filter(
          (item) => item.appointment === "tests" && item.date > date
        );
        setAppointments(upcomingLabAppointments);

        // Extract patient information
        res.data.data2.map((item1) => {
          res.data.data1.map((item2) => {
            if (item2.firstname + " " + item2.lastname === item1.patient) {
              return setInfo1((prev) => [...prev, item2]);
            }
            return null;
          });
          return null;
        });

      })
      .catch((err) => console.log(err));
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  useEffect(() => {
    setCurrentPage(1);
    setViewRowIndex(null);
  }, [pageSize]);

  const handleChecked = (e) => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    if (e.currentTarget.checked) {
      for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = true;
      }
    } else {
      for (let i = 0; i < checkboxes.length; i++) {
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
        <div className="col-sm-12 col-md-12 col-lg-10 p-0">
          <nav className="d-flex bg-light border border-bottom-info p-2">
          <i className="bi bi-house-fill"></i>
            <Link to="/dashboardPage" className="text-decoration-none">
              &nbsp;Home&nbsp;
            </Link>
            &gt; Appointment &gt; Lab-Appointment
          </nav>
          <h4 className="mt-2 ms-2">Lab Appointment</h4>
          <hr className="ms-4 me-4" />
          <Link to="/labupcomingappointment"><button className="btn btn-secondary text-white ms-4 m-1">Upcoming</button></Link>
          <Link to="/labpreviousappointment"><button className="btn btn-light">Previous</button></Link>
          <div className="">
            <div style={{ display: "block", width: "100%" }}>
                  <div className="ps-2 pe-2 ps-lg-4 pe-lg-4 pb-4 mt-3">
                    <div
                      className="table-header p-2 text-white fs-6"
                      style={{ background: "#134E5E", width: "100%" }}
                    >
                      Results for "Lab Appointments"
                    </div>
                    <Searchbar pageSize={pageSize} setPageSize={setPageSize} />
                   
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
                            className="center sorting_disabled"
                            rowSpan="1"
                            colSpan="1"
                          >
                            <label className="pos-rel">
                              <input type="checkbox" name="allcheckboxes2" className="ace" onChange={handleChecked}/>
                              <span className="lbl"></span>
                            </label>
                          </th>
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
                            Phone
                          </th>
                          <th
                            className="hidden-480 sorting"
                            tabIndex="0"
                            aria-controls="dynamic-table"
                            rowSpan="1"
                            colSpan="1"
                            aria-label="Gender: activate to sort column ascending"
                          >
                            Gender
                          </th>
                          <th
                            className="hidden-480 sorting"
                            tabIndex="0"
                            aria-controls="dynamic-table"
                            rowSpan="1"
                            colSpan="1"
                            aria-label="Appointment Date: activate to sort column ascending"
                          >
                            Appointment Date
                          </th>
                          <th
                            className="hidden-480 sorting_disabled"
                            rowSpan="1"
                            colSpan="1"
                            aria-label="Status"
                          >
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>

                      {appointments
                              .slice((currentPage - 1) * pageSize, currentPage * pageSize)
                              .map((item, index) => {
                                const labInfo = info1.find((info) => info.firstname + " " + info.lastname === item.patient);

                                if (labInfo) {
                                  return (
                                    <tr key={index}>
                                      <td>
                                        <label className="pos-rel">
                                          <input type="checkbox" name="solocheckbox" className="ace" />
                                          <span className="lbl"></span>
                                        </label>
                                      </td>
                                      <td>{item.appointment_id}</td>
                                      <td>{item.patient}</td>
                                      <td>{labInfo.phone}</td>
                                      <td>{labInfo.gender}</td>
                                      <td>{new Date(item.date).toLocaleDateString('en-GB')}</td>
                                      <td>{labInfo.status}</td>
                                    </tr>
                                  );
                                } else {
                                  return null; // Handle cases where patient information is not found
                                }
                              })}
                            <tr id="noresults"></tr>
                      </tbody>
                    </table>
                    </div>
                    <Pagination
                    stateData={appointments}
                    setViewRowIndex={setViewRowIndex}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                  </div>                
            </div>
          </div>

          <hr></hr>
          <footer className="page-footer font-small bg-blue m-4 pb-5">
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

export default Labappointment;
