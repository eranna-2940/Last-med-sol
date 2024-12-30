import Menu from '../components/Menu'
import Navbar from '../../Frontofficecomponents/components/Navbar'
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Table, Form, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function Patientmanagment() {
    const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [newPatient, setNewPatient] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    medicalHistory: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");

  // Fetch patients from the API
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/patients`)
      .then((res) => setPatients(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Handle adding/updating patients
  const handlePatientSubmit = (e) => {
    e.preventDefault();
    if (selectedPatient) {
      // Update existing patient
      axios
        .put(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/patients/${selectedPatient.id}`, newPatient)
        .then(() => {
          setShowModal(false);
          setSelectedPatient(null);
          setNewPatient({ firstName: "", lastName: "", email: "", phone: "", medicalHistory: "" });
          window.location.reload();
        })
        .catch((err) => console.log(err));
    } else {
      // Add new patient
      axios
        .post(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/patients`, newPatient)
        .then(() => {
          setShowModal(false);
          setNewPatient({ firstName: "", lastName: "", email: "", phone: "", medicalHistory: "" });
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  // Handle search/filter
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // Filter patients based on search term
  const filteredPatients = patients.filter((patient) =>
    (patient.firstName && patient.firstName.toLowerCase().includes(search.toLowerCase())) ||
    (patient.lastName && patient.lastName.toLowerCase().includes(search.toLowerCase())) ||
    (patient.email && patient.email.toLowerCase().includes(search.toLowerCase()))
  );
  
  return (

        
          <>
              <Navbar />
              <div className="d-flex">
                <div className="col-2 p-0">
                  <Menu />
                </div>
        
                <div className="col-sm-12 col-md-12 col-lg-10 p-0">
                  <h5 className="mt-4 mb-2 ms-2">Patient Management</h5>
                  <hr className="ms-4 me-4" />
        
                  <Form.Control
        type="text"
        placeholder="Search Patients"
        value={search}
        onChange={handleSearch}
        className="mb-4 w-25  float-end me-5"
      />

      {/* Patient Table */}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Medical History</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredPatients.length > 0 ? (
            filteredPatients.map((patient) => (
              <tr key={patient.patient_id}>
                <td>{patient.patient_id}</td>
                <td>{patient.firstname}</td>
                <td>{patient.lastname}</td>
                <td>{patient.email}</td>
                <td>{patient.phone}</td>
                <td>{patient.medicalHistory}</td>
                <td>
                  <Button
                    variant="info"
                    onClick={() => {
                      setSelectedPatient(patient);
                      setNewPatient({
                        firstName: patient.firstName,
                        lastName: patient.lastName,
                        email: patient.email,
                        phone: patient.phone,
                        medicalHistory: patient.medicalHistory,
                      });
                      setShowModal(true);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => {
                      axios
                        .delete(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/patients/${patient.id}`)
                        .then(() => window.location.reload())
                        .catch((err) => console.log(err));
                    }}
                    className="ms-2"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No patients found.</td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Add/Edit Patient Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedPatient ? "Edit Patient" : "Add Patient"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handlePatientSubmit}>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                value={newPatient.firstName}
                onChange={(e) => setNewPatient({ ...newPatient, firstName: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                value={newPatient.lastName}
                onChange={(e) => setNewPatient({ ...newPatient, lastName: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={newPatient.email}
                onChange={(e) => setNewPatient({ ...newPatient, email: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                value={newPatient.phone}
                onChange={(e) => setNewPatient({ ...newPatient, phone: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group controlId="medicalHistory">
              <Form.Label>Medical History</Form.Label>
              <Form.Control
                type="text"
                value={newPatient.medicalHistory}
                onChange={(e) => setNewPatient({ ...newPatient, medicalHistory: e.target.value })}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              {selectedPatient ? "Update Patient" : "Add Patient"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
                </div>
              </div>
            </>
  )
}

export default Patientmanagment