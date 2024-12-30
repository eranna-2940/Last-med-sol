import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menumain">
      <div
        className="accordion accordion-flush"
        id="accordionFlushExample"
      >
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <Link
              className="accordion-button dashboardh2 p-2 collapsed text-decoration-none text-white"
              to='/dashboardPage'
            >
              <div>
                <i className="bi bi-speedometer"></i>
                <span> Dashboard</span>
              </div>
            </Link>
          </h2>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed p-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <div>
                <i className="bi bi-buildings-fill"></i>
                <span> Centers</span>
              </div>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body p-0">
              <ul className="list-group">
                <Link to='/addcenter' className="text-decoration-none text-dark"><li className="list-group-item">Add Center</li></Link>
                <Link to='/addlab' className="text-decoration-none text-dark"><li className="list-group-item">Add Lab</li></Link>
                <Link to='/managecenters' className="text-decoration-none text-dark"><li className="list-group-item">Manage Centers</li></Link>
                <Link to='/managelabs' className="text-decoration-none text-dark"><li className="list-group-item">Manage Labs</li></Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed p-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <div>
                <i className="bi bi-person-fill"></i>
                <span> Users</span>
              </div>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body p-0">
              <ul className="list-group">
                <Link to='/addspecialization' className="text-decoration-none text-dark"><li className="list-group-item">Add Specialization</li></Link>
                <Link to='/adddoctor' className="text-decoration-none text-dark"><li className="list-group-item">Add Doctor</li></Link>
                <Link to='/addpatient' className="text-decoration-none text-dark"><li className="list-group-item">Add Patient</li></Link>
                <Link to='/addlabagent' className="text-decoration-none text-dark"><li className="list-group-item">Add Lab Agent</li></Link>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingFour">
            <button
              className="accordion-button collapsed p-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              <div>
                <i className="bi bi-calendar2-week-fill"></i>
                <span> Appointments</span>
              </div>
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFour"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body p-0">
              <ul className="list-group">
                <Link to='/addappointment' className="text-decoration-none text-dark"><li className="list-group-item">Add Appointment</li></Link>
                <Link to='/patientupcomingappointment' className="text-decoration-none text-dark"><li className="list-group-item">Patient Appointment</li></Link>
                <Link to='/labupcomingappointment' className="text-decoration-none text-dark"><li className="list-group-item">Lab Appointment</li></Link>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingFive">
            <button
              className="accordion-button collapsed p-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive"
              aria-expanded="false"
              aria-controls="flush-collapseFive"
            >
              <div>
                <i className="bi bi-geo-alt-fill"></i>
                <span> Locations</span>
              </div>
            </button>
          </h2>
          <div
            id="flush-collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFive"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body p-0">
              <ul className="list-group">
                <Link to='/addlocation' className="text-decoration-none text-dark"><li className="list-group-item">Add location</li></Link>
                <Link to='/managestate' className="text-decoration-none text-dark"><li className="list-group-item">Manage State</li></Link>
                <Link to='/managecity' className="text-decoration-none text-dark"><li className="list-group-item">Manage City</li></Link>
                <Link to='/managelocation' className="text-decoration-none text-dark"><li className="list-group-item">Manage Location</li></Link>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingSix">
            <button
              className="accordion-button collapsed p-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSix"
              aria-expanded="false"
              aria-controls="flush-collapseSix"
            >
              <div>
                <i className="bi bi-currency-exchange"></i>
                <span> packages</span>
              </div>
            </button>
          </h2>
          <div
            id="flush-collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingSix"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body p-0">
              <ul className="list-group">
                <Link to='/managepackage' className="text-decoration-none text-dark"><li className="list-group-item">Manage Package</li></Link>
                <Link to='/addpackage' className="text-decoration-none text-dark"><li className="list-group-item">Add Package</li></Link>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingSeven">
            <button
              className="accordion-button collapsed p-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSeven"
              aria-expanded="false"
              aria-controls="flush-collapseSeven"
            >
              <div>
                <i className="bi bi-credit-card-2-back-fill"></i>
                <span> Payments</span>
              </div>
            </button>
          </h2>
          <div
            id="flush-collapseSeven"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingSeven"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body p-0">
              <ul className="list-group">
                <Link to='/viewpayments' className="text-decoration-none text-dark"><li className="list-group-item">View Payments</li></Link>
                <Link to='/invoice' className="text-decoration-none text-dark"><li className="list-group-item">Invoice</li></Link>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingEight">
            <button
              className="accordion-button collapsed p-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseEight"
              aria-expanded="false"
              aria-controls="flush-collapseEight"
            >
              <div>
                <i className="bi bi-people-fill"></i>
                <span> Accounts</span>
              </div>
            </button>
          </h2>
          <div
            id="flush-collapseEight"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingEight"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body p-0">
              <ul className="list-group">
                <Link to='/sitemanagers' className="text-decoration-none text-dark"><li className="list-group-item">Site Managers</li></Link>
                <Link to='/patients' className="text-decoration-none text-dark"><li className="list-group-item">Patients</li></Link>
                <Link to='/doctors' className="text-decoration-none text-dark"><li className="list-group-item">Doctors</li></Link>
                <Link to='/labagents' className="text-decoration-none text-dark"><li className="list-group-item">Lab Agents</li></Link>
                <Link to='/doctorsavailbility' className="text-decoration-none text-dark"><li className="list-group-item">Doctors Availability</li></Link>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
