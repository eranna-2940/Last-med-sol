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
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <div>
                <i className="bi bi-calendar2-week-fill"></i>
                <span> PatientManagment</span>
              </div>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse "
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body p-0 ">
              <ul className="list-group ">
                <Link to='/patientmanagement' className="text-decoration-none text-dark"><li className="list-group-item">Patient Management</li></Link>
                <Link to='/appointmentmanagement' className="text-decoration-none text-dark"><li className="list-group-item">Appointment Management</li></Link>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <div>
              <i className="bi bi-envelope-fill"></i>
                <span> Scheduling</span>
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
                <Link to='/appointmentscheduling' className="text-decoration-none text-dark"><li className="list-group-item">AppointmentScheduling</li></Link>
              </ul>
            </div>
          </div>
        </div>

        {/* <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <div>
              <i className="bi bi-gear-fill"></i>
                <span> Settings</span>
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
                <Link to='/doctorprofile' className="text-decoration-none text-dark"><li className="list-group-item">My Profile</li></Link>
                <Link to='/doctoraccount' className="text-decoration-none text-dark"><li className="list-group-item">My Account</li></Link>
              </ul>
            </div>
          </div>
        </div> */}

      </div>
    </div>
  );
}
