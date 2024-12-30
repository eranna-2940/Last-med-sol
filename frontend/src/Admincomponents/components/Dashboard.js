import React, { useState,useEffect } from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from './Navbar';

function DashboardPage() {
  const [patients, setPatients] = useState(0);
  const [doctors, setDoctors] = useState(0);
  const [labs, setLabs] = useState(0);
  const [appointments, setAppointments] = useState(0);

  useEffect(()=>{
    axios
    .get(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/dashboardPage`)
    .then((res) => {
      setDoctors(res.data[0][0].rowcount)
      setPatients(res.data[1][0].rowcount)
      setLabs(res.data[2][0].rowcount)
      setAppointments(res.data[3][0].rowcount)
    })
    .catch((err) => console.log(err));
  },[]);


  return (
    <>
    <Navbar/>
    <div className="d-flex">
      <div className="col-2 p-0">
        <Menu/>
      </div>

      <div className="col-sm-12 col-md-12 col-lg-10 p-0">
        <nav className="d-flex bg-light border border-bottom-info p-2">
          <i className="bi bi-house-fill"></i>&nbsp;<Link to='/dashboardPage' className="text-decoration-none">Home&nbsp;</Link>&gt; Dashboard
        </nav>
        {/* dashboard */}
        <h4 className="mt-2 ms-2 ">Dashboard</h4>
        <hr></hr>
        <div className="right-panel d-flex flex-wrap justify-content-center mb-5">
          <Link to="/doctors" className="text-decoration-none">
          <div>
            <div
              className="card m-2"
              style={{ width: "250px", height: "150px" }}
            >
              <div className="card-body">
                <h1 className="text-center">{doctors}</h1>
              </div>
              <div className="card-footer" style={{ background: "#5ab5cf" }}>
                <h3 style={{ color: "white", textAlign: "center" }}>
                  {" "}
                  <i className="fa fa-user-md"></i>&nbsp;Doctors
                </h3>
              </div>
            </div>
          </div>
          </Link>

          <Link to="/patients" className="text-decoration-none">
          <div>
            <div
              className="card m-2"
              style={{ width: "250px", height: "150px" }}
            >
              <div className="card-body">
                <h1 className="text-center">{patients}</h1>
              </div>
              <div className="card-footer" style={{ background: "#95c077" }}>
                <h3 style={{ color: "white", textAlign: "center" }}>
                  {" "}
                  <i className="fa fa-user"></i>&nbsp;Patients
                </h3>
              </div>
            </div>
          </div>
          </Link>
          <Link to="/managelabs" className="text-decoration-none">
          <div>
            <div
              className="card m-2"
              style={{ width: "250px", height: "150px" }}
            >
              <div className="card-body">
                <h1 className="text-center">{labs}</h1>
              </div>
              <div
                className="card-footer p-2"
                style={{ background: "#f1cf42" }}
              >
                <h3 style={{ color: "white", textAlign: "center" }}>
                  {" "}
                  <i className="fa fa-flask"></i>&nbsp;Labs
                </h3>
              </div>
            </div>
          </div>
          </Link>
         <Link to="/patientupcomingappointment" className="text-decoration-none">
         <div>
            <div
              className="card m-2"
              style={{ width: "250px", height: "150px" }}
            >
              <div className="card-body">
                <h1 className="text-center">{appointments}</h1>
              </div>
              <div className="card-footer" style={{ background: "#cd706c" }}>
                <h3 style={{ color: "white", textAlign: "center" }}>
                  {" "}
                  <i className="fa fa-calendar"></i>&nbsp;Appointments
                </h3>
              </div>
            </div>
          </div>
         </Link>
          <div>
            <div
              className="card m-2"
              style={{ width: "250px", height: "150px" }}
            >
              <div className="card-body">
                <h1 className="text-center">0</h1>
              </div>
              <div className="card-footer" style={{ background: "#3ac2ad" }}>
                <h3 style={{ color: "white", textAlign: "center" }}>
                  {" "}
                  <i className="bi bi-pencil-square"></i>&nbsp;Re-Sechedule
                </h3>
              </div>
            </div>
          </div>
          <div>
            <div
              className="card m-2"
              style={{ width: "250px", height: "150px" }}
            >
              <div className="card-body">
                <h1 className="text-center">0</h1>
              </div>
              <div className="card-footer" style={{ background: "#B73766" }}>
                <h3 style={{ color: "white", textAlign: "center" }}>
                  {" "}
                  <i className="bi bi-x"></i>&nbsp;Cancelled
                </h3>
              </div>
            </div>
          </div>
          <div>
            <div
              className="card m-2"
              style={{ width: "250px", height: "150px" }}
            >
              <div className="card-body">
                <h1 className="text-center">0</h1>
              </div>
              <div className="card-footer" style={{ background: "#6480b2" }}>
                <h3 style={{ color: "white", textAlign: "center" }}>
                  {" "}
                  <i className="bi bi-cash"></i>&nbsp;Payments
                </h3>
              </div>
            </div>
          </div>
          <div>
            <div
              className="card m-2"
              style={{ width: "250px", height: "150px" }}
            >
              <div className="card-body">
                <h1 className="text-center">0</h1>
              </div>
              <div className="card-footer" style={{ background: "#95c077" }}>
                <h3 style={{ color: "white", textAlign: "center" }}>
                  {" "}
                  <i className="bi bi-pencil-square"></i>&nbsp;Invoice
                </h3>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <footer className="page-footer font-small bg-blue m-4">
            <div className="footer-copyright text-center">
                <span className='text-primary fs-6'>PrevMed Sol&nbsp;</span>Copyrights © 2023
            </div>
        </footer>
      </div>
      {/* dashboard ends */}
    </div>
    </>
  );
}

export default DashboardPage;
