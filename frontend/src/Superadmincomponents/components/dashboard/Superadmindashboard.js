import React, { useState, useEffect } from "react";
import Menu from "../Menu";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar";
import Searchbar from "../../../Admincomponents/components/Searchbar";
import Pagination from "../../../Admincomponents/components/Pagination";

const Superadmindashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [viewRowIndex, setViewRowIndex] = useState(null);
  const [lastAddedAppointment, setLastAddedAppointment] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/patientappointment`)
      .then((res) => {
        setAppointments(res.data.data2);
        // Set the last added appointment
        if (res.data.data2.length > 0) {
          setLastAddedAppointment(res.data.data2[res.data.data2.length - 1]);
        }
      })
      .catch((err) => console.log(err));
  }, []);


  useEffect(() => {
    setCurrentPage(1);
    setViewRowIndex(null);
  }, [pageSize]);


  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const tableData = appointments.slice(startIndex, endIndex);

  return (
    <>
      <Navbar />
      <div className="d-flex ">
        <div className="col-2 p-0">
          <Menu />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-10 p-0">
          <div className="p-2 m-lg-3 m-2 shadow rounded">
            <div className="col-xs-12">
              <span className="secondHeading"><strong>New EMR</strong></span>
            </div>
            <hr/>
            <div className="">
              <div className="bg-light" style={{ padding: "10px 10px 0 10px" }}>
                <div className="row">
                  <div className="col-xs-12">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead className="">
                        <tr className="bodybutton">
                          <th className="bodybutton text-white">
                            Appointment ID
                          </th>
                          <th className="bodybutton text-white">
                            Appointment Date
                          </th>
                          <th className="bodybutton text-white">Name</th>
                          <th className="bodybutton text-white">
                            Appointment Time
                          </th>
                          <th className="bodybutton text-white">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                      {lastAddedAppointment && (
                              <tr>
                                <td>{lastAddedAppointment.appointment_id}</td>
                                <td>{new Date(lastAddedAppointment.date).toLocaleDateString('en-GB')}</td>
                                <td>{lastAddedAppointment.patient}</td>
                                <td>{lastAddedAppointment.time}</td>
                                <td>
                                  <Link
                                    to={"/viewemr/history1/" + lastAddedAppointment.appointment_id}
                                    className="text-decoration-none text-white"
                                  >
                                    <button className="btn btn-secondary" style={{width:'100px'}}>View EMR</button>
                                  </Link>
                                </td>
                              </tr>
                       )}
                      </tbody>
                    </table>
                  </div>
                    <div
                      className="d-flex justify-content-between p-2"
                      style={{ background: "#EFF3F8", width: "100%" }}
                    >
                      <div className=" d-flex">
                        <label className="">Showing 1 to 1 of 1 entries</label>
                      </div>
                      <div>
                        <nav>
                          <ul className="pagination">
                            <li>
                              <button className="page-link" disabled>
                                Previous
                              </button>
                            </li>

                            <li>
                              <button className="page-link" disabled>
                                Next
                              </button>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="p-2 m-lg-3 m-2 shadow rounded"
          >
            <div className="table-header fs-5"><strong>History</strong></div>
            <hr/>
            <div className="">
            <Searchbar pageSize={pageSize} setPageSize={setPageSize}/>
              <div className="bg-light" style={{ padding: "10px 10px 0 10px" }}>
                <div className="row">
                  <div className="col-xs-12">
                  <div className="table-responsive">
                    <table
                      id="dynamic-table"
                      className="table table-bordered"
                    >
                      <thead>
                        <tr role="row">
                          <th
                            className="bodybutton text-white"
                            tabIndex="0"
                            aria-controls="dynamic-table"
                            rowSpan="1"
                            colSpan="1"
                            aria-label="Name: activate to sort column ascending"
                          >
                            Appointment ID
                          </th>
                          <th
                            className="bodybutton text-white"
                            tabIndex="0"
                            aria-controls="dynamic-table"
                            rowSpan="1"
                            colSpan="1"
                            aria-label="Timings: activate to sort column ascending"
                          >
                            Appointment Date
                          </th>
                          <th
                            className="bodybutton text-white"
                            tabIndex="0"
                            aria-controls="dynamic-table"
                            rowSpan="1"
                            colSpan="1"
                            aria-label="Address:activate to sort column ascending"
                          >
                            Patient Name
                          </th>
                          
                          <th
                            className="bodybutton text-white"
                            rowSpan="1"
                            colSpan="1"
                            aria-label="Status"
                          >
                            Appointment Time
                          </th>
                          <th
                            className="bodybutton text-white"
                            rowSpan="1"
                            colSpan="1"
                            aria-label="Status"
                          >
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableData.map((item, index) => (
                          <tr role="row" className="odd" key={index}>
                            <td>{item.appointment_id}</td>
                            <td>{new Date(item.date).toLocaleDateString('en-GB')}</td>
                            <td>{item.patient}</td>
                          
                            <td>{item.time}</td>
                            <td>
                                <Link
                                  to={"/viewemr/history1/"+item.appointment_id}
                                  className="text-decoration-none text-white"
                                >
                                  <button className="btn btn-secondary" style={{width:'100px'}}>View EMR</button>
                                </Link>
                            </td>
                          </tr>
                        ))}
                        <tr id="noresults"></tr>
                      </tbody>
                    </table>
                  </div>
              <Pagination stateData={appointments} setViewRowIndex={setViewRowIndex} pageSize={pageSize} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                  </div>
                </div>
              </div>
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

export default Superadmindashboard;