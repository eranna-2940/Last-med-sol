import React, { useState, useEffect } from "react";
import { Tab, Tabs, Table, Button, Form, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import axios from "axios";

function Appointmentscheduling() {
  const [appointments, setAppointments] = useState([]);
  const [doctorAvailability, setDoctorAvailability] = useState([]);
  const [notifications, setNotifications] = useState([]);
  // const [showAvailabilityModal, setShowAvailabilityModal] = useState(false);
  // const [newDoctorId, setNewDoctorId] = useState("");  // Doctor ID for availability
  // const [newDay, setNewDay] = useState("");            // Day for availability
  // const [newStartTime, setNewStartTime] = useState("");  // Start time for availability
  // const [newEndTime, setNewEndTime] = useState("");    // End time for availability
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [previousAppointments, setPreviousAppointments] = useState([]);
  const [temporaryStatuses, setTemporaryStatuses] = useState({}); // Store temporary statuses here

  // const [doctorList, setDoctorList] = useState([]);

  // Fetch appointments from backend
    useEffect(()=>{
      axios.get(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/patientappointments`).then((res)=>{
         if(res.data !== "Error" && "Fail"){
          const currentDate = new Date();
          const upcoming = [];
          const previous = [];
    
          res.data.forEach((appointment) => {
            const appointmentDate = new Date(`${appointment.date}T${appointment.time}`);
            
            // Compare current date with appointment date
            if (appointmentDate >= currentDate) {
              upcoming.push(appointment); // Upcoming appointment
            } else {
              previous.push(appointment); // Previous appointment
            }
          });
          setAppointments(res.data);
          setUpcomingAppointments(upcoming);
          setPreviousAppointments(previous);
         }
      }).catch((err)=>{
        console.log('err fetch',err)
      })
      axios.get(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/doctor_availability`).then((res)=>{
        if(res.data !== "Error" && res.data !== "Fail"){
          setDoctorAvailability(res.data);
        }
      }).catch((err)=>{
        console.error("Error fetching doctor availability:", err);
      })
      // axios.get(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/doctors`).then((res)=>{
      //   if(res.data !== "Error" && res.data !== "Fail"){
      //     setDoctorList(res.data);
      //   }
      // }).catch((err)=>{
      //   console.error("Error fetching doctor availability:", err);
      // })
    },[])
   
    const handleStatusChange = (appointment_id, newStatus) => {
      setTemporaryStatuses((prev) => ({
        ...prev,
        [appointment_id]: newStatus, // Track the new status temporarily
      }));
    };
  
    // Handle saving the status changes
    const handleSave = (appointment_id) => {
      const newStatus = temporaryStatuses[appointment_id]; // Get the temporary status
  
      if (newStatus) {
        // Update the local appointments state with the new status
        setAppointments((prevAppointments) =>
          prevAppointments.map((appointment) =>
            appointment.appointment_id === appointment_id
              ? { ...appointment, status: newStatus }
              : appointment
          )
        );
  
        // Optionally, send the updated status to the backend
        axios
          .put(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/appointments/${appointment_id}`, {
            status: newStatus,
          })
          .then((response) => {
            console.log("Status updated successfully:", response);
            window.location.reload(false)
          })
          .catch((error) => {
            console.error("Error updating status:", error);
          });
      }
    };
 

  // Handle adding new doctor availability
  // const handleAddDoctorAvailability = async () => {
  //   try {
  //     const response = await axios.post(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/doctor_availability`, {
  //       doctor_id: newDoctorId,
  //       day_of_week: newDay,
  //       start_time: newStartTime,
  //       end_time: newEndTime,
  //       is_available: true,
  //     });

  //     setShowAvailabilityModal(false); // Close the modal
  //   } catch (error) {
  //     console.error("Error adding doctor availability:", error);
  //   }
  // };


  return (
    <>
      <Navbar />
      <div className="d-flex">
        <div className="col-2 p-0">
          <Menu />
        </div>

        <div className="col-sm-12 col-md-12 col-lg-10 p-0">
          <div className="container mt-5">
            <h3>Appointment Management</h3>

            <Tabs defaultActiveKey="calendar" id="appointment-tabs">
              {/* Appointment Calendar Tab */}
              <Tab eventKey="calendar" title="Appointment Calendar">
                <div className="mt-4">
                  <Tabs defaultActiveKey="upcoming" id="upcoming-previous-tabs">
                    {/* Upcoming Appointments Tab */}
                    <Tab eventKey="upcoming" title="Upcoming Appointments">
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>Patient Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {upcomingAppointments.map((appointment) => (
                            <tr key={appointment.id}>
                              <td>{appointment.patient}</td>
                              <td>{appointment.date}</td>
                              <td>{appointment.time}</td>
                              <td>{appointment.status}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </Tab>

                    {/* Previous Appointments Tab */}
                    <Tab eventKey="previous" title="Previous Appointments">
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>Patient Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {previousAppointments.map((appointment) => (
                            <tr key={appointment.id}>
                              <td>{appointment.patient}</td>
                              <td>{appointment.date}</td>
                              <td>{appointment.time}</td>
                              <td>{appointment.status}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </Tab>
                  </Tabs>
                </div>
              </Tab>

              {/* Appointment Status Tab */}
              <Tab eventKey="status" title="Appointment Status">
                <div className="mt-4">
                  <h5>Manage Appointment Status</h5>
                  <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Patient Name</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appointment) => (
                    <tr key={appointment.appointment_id}>
                      <td>{appointment.patient}</td>
                      <td>
                        <Form.Control
                          as="select"
                          value={temporaryStatuses[appointment.appointment_id] || appointment.status} // Bind to temporary or original status
                          onChange={(e) => handleStatusChange(appointment.appointment_id, e.target.value)} // Update temporary status
                        >
                          <option value="Confirmed">Confirmed</option>
                          <option value="Pending">Pending</option>
                          <option value="Completed">Completed</option>
                          <option value="Cancelled">Cancelled</option>
                        </Form.Control>
                      </td>
                      <td>
                        <Button variant="success" onClick={() => handleSave(appointment.appointment_id)}>
                          Save
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
                </div>
              </Tab>

              {/* Doctor Availability Tab */}
              <Tab eventKey="availability" title="Doctor Availability">
                <div className="mt-4">
                  <h5>Manage Doctor Availability</h5>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Doctor</th>
                        <th>Available Hours</th>
                      </tr>
                    </thead>
                    <tbody>
                      {doctorAvailability.map((availability, index) => (
                        <tr key={index}>
                          <td>{availability.doctor_name}</td>
                          <td>{availability.start_time} - {availability.end_time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  {/* <Button onClick={() => setShowAvailabilityModal(true)}>Add New Availability</Button> */}
                </div>

                {/* Modal for adding Doctor Availability */}
                {/* <Modal show={showAvailabilityModal} onHide={() => setShowAvailabilityModal(false)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Add Doctor Availability</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group>
                        <Form.Label>Doctor</Form.Label>
                        <Form.Control
                          as="select"
                          value={newDoctorId}
                          onChange={(e) => setNewDoctorId(e.target.value)}
                        >
                          <option value="">Select Doctor</option>
                        
                          {doctorList.map((doctor) => (
                        <option value={doctor.doctor_id}>{doctor.firstname} {doctor.lastname}</option>
                           ))} 
                        </Form.Control>
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Day of the Week</Form.Label>
                        <Form.Control
                          type="text"
                          value={newDay}
                          onChange={(e) => setNewDay(e.target.value)}
                          placeholder="Enter day of the week (e.g. Monday)"
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
                    <Button variant="secondary" onClick={() => setShowAvailabilityModal(false)}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleAddDoctorAvailability}>
                      Add Availability
                    </Button>
                  </Modal.Footer>
                </Modal> */}
              </Tab>

              {/* Appointment Notifications Tab */}
              <Tab eventKey="notifications" title="Appointment Notifications">
                <div className="mt-4">
                  <h5>Appointment Notifications</h5>
                  <ul>
                    {notifications.map((notification, index) => (
                      <li key={index}>
                        {notification.message} (Sent at: {notification.time})
                      </li>
                    ))}
                  </ul>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}

export default Appointmentscheduling;
