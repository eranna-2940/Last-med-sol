import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Table, Modal, Form, Nav, Tab } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";

function AppointmentManagement() {
  const [patients, setPatients] = useState([]);
  const [centers, setCenters] = useState([]);
  const [labs, setLabs] = useState([]);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);

  // Fetch data on component mount
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/addappointment`)
      .then((res) => {
        // Set state for each category (patients, centers, labs)
        setPatients(res.data.data1);  // data1: Patients
        setCenters(res.data.data2);   // data2: Centers
        setLabs(res.data.data3);      // data3: Labs
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      <div className="d-flex">
        <div className="col-2 p-0">
          <Menu />
        </div>

        <div className="col-sm-12 col-md-12 col-lg-10 p-0">
          <div className="container mt-4">
            <h3>Appointment Management</h3>
            {/* <Button variant="primary" onClick={() => setShowAppointmentModal(true)}>
              Add Appointment
            </Button> */}

            {/* Tab Navigation */}
            <Tab.Container id="appointments-tab" defaultActiveKey="patients">
              <Nav variant="tabs" className="mt-4">
                <Nav.Item>
                  <Nav.Link eventKey="patients">Patients</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="centers">Centers</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="labs">Labs</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                {/* Patients Table */}
                <Tab.Pane eventKey="patients">
                  <h4 className="mt-4">Patients</h4>
                  <Table striped bordered hover className="mt-4">
                    <thead>
                      <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      {patients.map((patient, index) => (
                        <tr key={index}>
                          <td>{patient.firstname}</td>
                          <td>{patient.lastname}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Tab.Pane>

                {/* Centers Table */}
                <Tab.Pane eventKey="centers">
                  <h4 className="mt-4">Centers</h4>
                  <Table striped bordered hover className="mt-4">
                    <thead>
                      <tr>
                        <th>Center Name</th>
                        <th>From Timing</th>
                        <th>To Timing</th>
                      </tr>
                    </thead>
                    <tbody>
                      {centers.map((center, index) => (
                        <tr key={index}>
                          <td>{center.centername}</td>
                          <td>{center.fromtiming}</td>
                          <td>{center.totiming}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Tab.Pane>

                {/* Labs Table */}
                <Tab.Pane eventKey="labs">
                  <h4 className="mt-4">Labs</h4>
                  <Table striped bordered hover className="mt-4">
                    <thead>
                      <tr>
                        <th>Lab Name</th>
                        <th>From Timing</th>
                        <th>To Timing</th>
                      </tr>
                    </thead>
                    <tbody>
                      {labs.map((lab, index) => (
                        <tr key={index}>
                          <td>{lab.labname}</td>
                          <td>{lab.fromtiming}</td>
                          <td>{lab.totiming}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>

            {/* Appointment Modal */}
            <Modal show={showAppointmentModal} onHide={() => setShowAppointmentModal(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Add Appointment</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  {/* Form fields for adding new appointments */}
                  {/* You can add patient, center, and lab selections here */}
                </Form>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppointmentManagement;
