import React, { useState, useEffect } from 'react';
import { Table, Button, Form, Modal } from 'react-bootstrap';
import axios from 'axios';
import Navbar from '../Navbar';
import Menu from '../Menu';

function AdminDoctorAvailability() {
  const [doctorList, setDoctorList] = useState([]);
  const [selectedDoctorId, setSelectedDoctorId] = useState(null);
  const [newDay, setNewDay] = useState('');
  const [newStartTime, setNewStartTime] = useState('');
  const [newEndTime, setNewEndTime] = useState('');
  const [showModal, setShowModal] = useState(false);

  // Fetch list of doctors
  const fetchDoctors = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/doctors`);  // Adjust the API endpoint
      setDoctorList(response.data);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  // Handle adding new availability
  const handleAddAvailability = async () => {
    if (!selectedDoctorId || !newDay || !newStartTime || !newEndTime) {
      alert('Please fill in all the fields');
      return;
    }
    const selectedDoctor = doctorList.find(doctor => doctor.doctor_id === selectedDoctorId);
    const doctorName = selectedDoctor ? `${selectedDoctor.firstname} ${selectedDoctor.lastname}` : '';
    try {
      await axios.post(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/doctor_availability`, {
        doctor_id: selectedDoctorId,
        day_of_week: newDay,
        start_time: newStartTime,
        end_time: newEndTime,
        is_available: true,
        doctorName:doctorName
      });

      // Clear the modal fields after submission
      setNewDay('');
      setNewStartTime('');
      setNewEndTime('');
      setShowModal(false); // Close the modal
      alert('Availability added successfully!');
      window.location.reload(false)
    } catch (error) {
      console.error('Error adding availability:', error);
      alert('Failed to add availability.');
    }
  };

  // Load doctor list when component mounts
  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <>
      <Navbar />
      <div className="d-flex ">
        <div className="col-2 p-0">
          <Menu />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-10 p-0">
          <div className="container mt-4">
            <h3>Manage Doctor Availability</h3>

            {/* Select doctor to manage availability */}
            <Form.Group>
              <Form.Label>Select Doctor</Form.Label>
              <Form.Control
                as="select"
                value={selectedDoctorId || ''}
                onChange={(e) => setSelectedDoctorId(e.target.value)}
              >
                <option value="">Select a doctor</option>
                {doctorList.map((doctor) => (
                  <option key={doctor.doctor_id} value={doctor.doctor_id}>
                    {doctor.firstname} {doctor.lastname}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            {/* Button to open modal for adding availability */}
            {selectedDoctorId && (
              <Button variant="primary" onClick={() => setShowModal(true)}>
                Add Availability
              </Button>
            )}

            {/* Modal for adding availability */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Add Doctor Availability</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group>
                    <Form.Label>Day of the Week</Form.Label>
                    <Form.Control
                      type="text"
                      value={newDay}
                      onChange={(e) => setNewDay(e.target.value)}
                      placeholder="e.g. Monday"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Start Time</Form.Label>
                    <Form.Control
                      type="time"
                      value={newStartTime}
                      onChange={(e) => setNewStartTime(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>End Time</Form.Label>
                    <Form.Control
                      type="time"
                      value={newEndTime}
                      onChange={(e) => setNewEndTime(e.target.value)}
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleAddAvailability}>
                  Add Availability
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDoctorAvailability;
