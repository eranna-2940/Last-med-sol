import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Adminaccount from "./Admincomponents/components/settings/Adminaccount";
import Adminprofile from "./Admincomponents/components/settings/Adminprofile";
import AddSpecialization from "./Admincomponents/components/users/AddSpecialization";
import AddDoctor from "./Admincomponents/components/users/AddDoctor";
import Addpatient from "./Admincomponents/components/users/AddPatient";
import DashboardPage from "./Admincomponents/components/Dashboard";
import Addlab from "./Admincomponents/components/centers/AddLab";
import Addcenter from "./Admincomponents/components/centers/AddCenter";
import Addappointment from "./Admincomponents/components/appointments/AddAppointment";
import Addlabagent from "./Admincomponents/components/users/AddLabagent";
import Editcenter from "./Admincomponents/components/centers/Editcenter";
import Editlab from "./Admincomponents/components/centers/Editlab";
import Managecenters from "./Admincomponents/components/centers/ManageCenters";
import Managelabs from "./Admincomponents/components/centers/Managelabs";
import Addlocation from "./Admincomponents/components/locations/Addlocation";
import Editstate from "./Admincomponents/components/locations/Editstate";
import Editcity from "./Admincomponents/components/locations/Editcity";
import Managestate from "./Admincomponents/components/locations/ManageState";
import Managecity from "./Admincomponents/components/locations/ManageCity";
import Managelocation from "./Admincomponents/components/locations/Managelocation";
import EditPackages from "./Admincomponents/components/packages/Editpackages";
import Managepackage from "./Admincomponents/components/packages/ManagePackage";
import Addpackage from "./Admincomponents/components/packages/Addpackage";
import Patientappointment from "./Admincomponents/components/appointments/PatientAppointment";
import Patientpreviousappointment from "./Admincomponents/components/appointments/PatientPreviousAppointment";
import Labappointment from "./Admincomponents/components/appointments/LabAppointment";
import Labpreviousappointment from "./Admincomponents/components/appointments/LabPreviousAppointments";
import Register from "./Admincomponents/components/loginpages/Register";
import Adminpage from "./Admincomponents/components/loginpages/Adminpage";
import Frontoffice from "./Admincomponents/components/loginpages/Frontoffice";
import Doctor from "./Admincomponents/components/loginpages/Doctor";
import Patient from "./Admincomponents/components/loginpages/Patient";
import Lab from "./Admincomponents/components/loginpages/Lab";
import Superadminpage from "./Admincomponents/components/loginpages/Superadminpage";
import Doctors from "./Admincomponents/components/accounts/Doctors";
import Editdoctor from "./Admincomponents/components/accounts/Editdoctor";
import Patients from "./Admincomponents/components/accounts/Patients";
import Editpatient from "./Admincomponents/components/accounts/Editpatient";
import Labagents from "./Admincomponents/components/accounts/Labagents";
import Editlabagent from "./Admincomponents/components/accounts/Editlabagent";
import Sitemanagers from "./Admincomponents/components/accounts/Sitemanagers";
import Invoice from "./Admincomponents/components/payments/Invoice";
import Viewpayments from "./Admincomponents/components/payments/Viewpayments";
import Home from "./Admincomponents/components/Home";
import Plans from "./Admincomponents/components/plans";

import Viewmyappointment from "./Patientcomponents/components/appointments/Viewmyappointment";
import Viewmypreviousappointment from "./Patientcomponents/components/appointments/Viewmypreviousappointments";
import Booknewappointment from "./Patientcomponents/components/appointments/Booknewappointment";
import Composemessage from "./Patientcomponents/components/messages/Composemessage";
import Inbox from "./Patientcomponents/components/messages/Inbox";
import Sentmessage from "./Patientcomponents/components/messages/Sentmessage";
import Myaccount from "./Patientcomponents/components/settings/Myaccount";
import Myprofile from "./Patientcomponents/components/settings/Myprofile";
import Pinvoice from "./Patientcomponents/components/billing/Invoice";
import Emailverification from "./Admincomponents/components/loginpages/Emailverification";
import Forgotpassword from "./Admincomponents/components/loginpages/Forgotpassword";

import Doctorappointment from "./Doctorcomponents/components/appointments/Viewmyappointment";
import Doctorpreviousappointment from "./Doctorcomponents/components/appointments/Viewmypreviousappointments";
import Doctormessage from "./Doctorcomponents/components/messages/Composemessage";
import Doctorinbox from "./Doctorcomponents/components/messages/Inbox";
import DoctorSentmessage from "./Doctorcomponents/components/messages/Sentmessage";
import Doctoraccount from "./Doctorcomponents/components/settings/Myaccount";
import Doctorprofile from "./Doctorcomponents/components/settings/Myprofile";

import Labagentappointment from "./Labagentcomponents/components/appointments/Viewmyappointment";
import Labagentpreviousappointment from "./Labagentcomponents/components/appointments/Viewmypreviousappointments";
import Labagentmessage from "./Labagentcomponents/components/messages/Composemessage";
import Labagentinbox from "./Labagentcomponents/components/messages/Inbox";
import LabagentSentmessage from "./Labagentcomponents/components/messages/Sentmessage";
import Labagentaccount from "./Labagentcomponents/components/settings/Myaccount";
import Labagentprofile from "./Labagentcomponents/components/settings/Myprofile";

import Superadmindashboard from "./Superadmincomponents/components/dashboard/Superadmindashboard";
import History1 from "./Superadmincomponents/components/dashboard/History1";
import History2 from "./Superadmincomponents/components/dashboard/History2";
import Medications from "./Superadmincomponents/components/dashboard/Medications";
import Reviewsystem1 from "./Superadmincomponents/components/dashboard/Reviewsystem1";
import Reviewsystem2 from "./Superadmincomponents/components/dashboard/Reviewsystem2";
import Reviewsystem3 from "./Superadmincomponents/components/dashboard/Reviewsystem3";
import PhysicalExam1 from "./Superadmincomponents/components/dashboard/Physicalexam1";
import PhysicalExam2 from "./Superadmincomponents/components/dashboard/Physicalexam2";
import Assessments from "./Superadmincomponents/components/dashboard/Assessments";
import Superadminmessage from "./Superadmincomponents/components/messages/Composemessage";
import Superadmininbox from "./Superadmincomponents/components/messages/Inbox";
import SuperadminSentmessage from "./Superadmincomponents/components/messages/Sentmessage";
import Superadminaccount from "./Superadmincomponents/components/settings/Myaccount";
import Superadminprofile from "./Superadmincomponents/components/settings/Myprofile";

import Scrolltotop from "./Admincomponents/components/Scrolltotop";
import Notfound from "./Notfound";
import AdminProtectedRoute from "./Admincomponents/components/ProtectedRoute";
import PatientProtectedRoute from "./Patientcomponents/components/ProtectedRoute";
import DoctorProtectedRoute from "./Doctorcomponents/components/ProtectedRoute";
import LabagentProtectedRoute from "./Labagentcomponents/components/ProtectedRoute";
import SuperadminProtectedRoute from "./Superadmincomponents/components/ProtectedRoute";
import Packages from "./Patientcomponents/components/appointments/packages";
import Patientmanagment from "./Frontofficecomponents/PatientManagment/Patientmanagment";
import AppointmentManagement from "./Frontofficecomponents/PatientManagment/Appointmentmanagement";
import Appointmentscheduling from "./Frontofficecomponents/AppointmentScheduling/Appointmentscheduling";
import AdminDoctorAvailability from "./Admincomponents/components/accounts/Doctorsavaliability";

function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isSuperadminLoggedIn, setIsSuperadminLoggedIn] = useState(false);
  const [isDoctorLoggedIn, setIsDoctorLoggedIn] = useState(false);
  const [isPatientLoggedIn, setIsPatientLoggedIn] = useState(false);
  const [isLabagentLoggedIn, setIsLabagentLoggedIn] = useState(false);
  const [isFrontLoggedIn, setIsFrontLoggedIn]= useState(false)
  const checkAdminToken = () => {
    const adminToken = localStorage.getItem("admin-token");
    if (!adminToken || adminToken === "undefined") {
      setIsAdminLoggedIn(false);
    }
    setIsAdminLoggedIn(true);
  };

  const checkFrontToken = () =>{
    const frontToken = localStorage.getItem("Front-token");
    if(!frontToken || frontToken === "undefined"){
      setIsFrontLoggedIn(false)
    }
    setIsFrontLoggedIn(true);
  }

  const checkSuperadminToken = () => {
    const superadminToken = localStorage.getItem("superadmin-token");
    if (!superadminToken || superadminToken === "undefined") {
      setIsSuperadminLoggedIn(false);
    }
    setIsSuperadminLoggedIn(true);
  };

  const checkDoctorToken = () => {
    const doctorToken = localStorage.getItem("doctor-token");
    if (!doctorToken || doctorToken === "undefined") {
      setIsDoctorLoggedIn(false);
    }
    setIsDoctorLoggedIn(true);
  };

  const checkPatientToken = () => {
    const patientToken = localStorage.getItem("patient-token");
    if (!patientToken || patientToken === "undefined") {
      setIsPatientLoggedIn(false);
    }
    setIsPatientLoggedIn(true);
  };

  const checkLabagentToken = () => {
    const labagentToken = localStorage.getItem("labagent-token");
    if (!labagentToken || labagentToken === "undefined") {
      setIsLabagentLoggedIn(false);
    }
    setIsLabagentLoggedIn(true);
  };

  useEffect(() => {
    checkAdminToken();
  }, [isAdminLoggedIn]);

  useEffect(() => {
    checkSuperadminToken();
  }, [isSuperadminLoggedIn]);

  useEffect(() => {
    checkDoctorToken();
  }, [isDoctorLoggedIn]);

  useEffect(() => {
    checkPatientToken();
  }, [isPatientLoggedIn]);

  useEffect(() => {
    checkLabagentToken();
  }, [isLabagentLoggedIn]);

  return (
    <div className="App">
      <BrowserRouter>
        <Scrolltotop />
        <Routes>
          {/* Admin components routes */}
          <Route path="/" element={<Home />}></Route>
          <Route path="plans" element={<Plans />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route
            path="emailverification"
            element={<Emailverification />}
          ></Route>
          <Route path="forgotpassword" element={<Forgotpassword />}></Route>
          <Route path="adminpage" element={<Adminpage />}></Route>
          <Route path="frontoffice" element={<Frontoffice />}></Route>
          <Route path="doctor" element={<Doctor />}></Route>
          <Route path="patient" element={<Patient />}></Route>
          <Route path="lab" element={<Lab />}></Route>
          <Route path="superadminpage" element={<Superadminpage />}></Route>
          <Route
            path="dashboardPage"
            element={
              <AdminProtectedRoute>
                {isAdminLoggedIn && <DashboardPage />}
              </AdminProtectedRoute>
            }
          ></Route>
          <Route
            path="adminprofile"
            element={
              <AdminProtectedRoute>
                {isAdminLoggedIn && <Adminprofile />}
              </AdminProtectedRoute>
            }
          ></Route>
          <Route
            path="adminaccount"
            element={
              <AdminProtectedRoute>
                {isAdminLoggedIn && <Adminaccount />}
              </AdminProtectedRoute>
            }
          ></Route>
          <Route
            path="addspecialization"
            element={
              <AdminProtectedRoute>
                {isAdminLoggedIn && <AddSpecialization />}
              </AdminProtectedRoute>
            }
          ></Route>
          <Route
            path="adddoctor"
            element={
              <AdminProtectedRoute>
                {isAdminLoggedIn && <AddDoctor />}
              </AdminProtectedRoute>
            }
          ></Route>
          <Route
            path="addpatient"
            element={
              <AdminProtectedRoute>
                {isAdminLoggedIn && <Addpatient />}
              </AdminProtectedRoute>
            }
          ></Route>
          <Route
            path="addlabagent"
            element={
              <AdminProtectedRoute>
                {isAdminLoggedIn && <Addlabagent />}
              </AdminProtectedRoute>
            }
          ></Route>
          <Route
            path="addlab"
            element={
              <AdminProtectedRoute>
                {isAdminLoggedIn && <Addlab />}
              </AdminProtectedRoute>
            }
          ></Route>
          <Route
            path="addcenter"
            element={
              <AdminProtectedRoute>
                {isAdminLoggedIn && <Addcenter />}
              </AdminProtectedRoute>
            }
          ></Route>
          <Route path="editcenter">
            <Route
              path=":id"
              element={
                <AdminProtectedRoute>
                  {isAdminLoggedIn && <Editcenter />}
                </AdminProtectedRoute>
              }
            ></Route>
          </Route>
          <Route
            path="managecenters"
            element={
              <AdminProtectedRoute>
                {isAdminLoggedIn && <Managecenters />}
              </AdminProtectedRoute>
            }
          ></Route>
          <Route path="editlab">
            <Route
              path=":id"
              element={
                <AdminProtectedRoute>
                  {isAdminLoggedIn && <Editlab />}
                </AdminProtectedRoute>
              }
            ></Route>
          </Route>
          <Route
            path="managelabs"
            element={
              <AdminProtectedRoute>
                {isAdminLoggedIn && <Managelabs />}
              </AdminProtectedRoute>
            }
          ></Route>
          <Route
            path="addappointment"
            element={
              <AdminProtectedRoute>
                {isAdminLoggedIn && <Addappointment />}
              </AdminProtectedRoute>
            }
          ></Route>
          <Route
            path="patientupcomingappointment"
            element={
              <AdminProtectedRoute>
                {isAdminLoggedIn && <Patientappointment />}
              </AdminProtectedRoute>
            }
          ></Route>
          <Route
            path="patientpreviousappointment"
            element={
              <AdminProtectedRoute>
                {isAdminLoggedIn && <Patientpreviousappointment />}
              </AdminProtectedRoute>
            }
          ></Route>
          <Route
            path="labupcomingappointment"
            element={
              <AdminProtectedRoute>
                {isAdminLoggedIn && <Labappointment />}
              </AdminProtectedRoute>
            }
          ></Route>
          <Route
            path="labpreviousappointment"
            element={
              <AdminProtectedRoute>
                {isAdminLoggedIn && <Labpreviousappointment />}
              </AdminProtectedRoute>
            }
          ></Route>
          <Route
            path="addlocation"
            element={
              <AdminProtectedRoute>
                {isAdminLoggedIn && <Addlocation />}
              </AdminProtectedRoute>
            }
          ></Route>
          <Route path="editstate">
            <Route
              path=":id"
              element={
                <AdminProtectedRoute>
                  {isAdminLoggedIn && <Editstate />}
                </AdminProtectedRoute>
              }
            ></Route>
          </Route>
          <Route path="editcity">
            <Route
              path=":id"
              element={
                <AdminProtectedRoute>
                  {isAdminLoggedIn && <Editcity />}
                </AdminProtectedRoute>
              }
            ></Route>
          </Route>
          <Route
            path="managestate"
            element={
              <AdminProtectedRoute>
                {isAdminLoggedIn && <Managestate />}
              </AdminProtectedRoute>
            }
          ></Route>
          <Route
            path="managecity"
            element={
              <AdminProtectedRoute>
                {isAdminLoggedIn && <Managecity />}
              </AdminProtectedRoute>
            }
          ></Route>
          <Route
            path="managelocation"
            element={
              <AdminProtectedRoute>
                {isAdminLoggedIn && <Managelocation />}
              </AdminProtectedRoute>
            }
          ></Route>
          <Route path="editpackage">
            <Route
              path=":id"
              element={
                <AdminProtectedRoute>
                  {isAdminLoggedIn && <EditPackages />}
                </AdminProtectedRoute>
              }
            ></Route>
          </Route>
          <Route
            path="managepackage"
            element={
              <AdminProtectedRoute>
                {isAdminLoggedIn && <Managepackage />}
              </AdminProtectedRoute>
            }
          ></Route>
          <Route
            path="addpackage"
            element={
              <AdminProtectedRoute>
                {isAdminLoggedIn && <Addpackage />}
              </AdminProtectedRoute>
            }
          ></Route>
          <Route
            path="doctors"
            element={
              <AdminProtectedRoute>
                {isAdminLoggedIn && <Doctors />}
              </AdminProtectedRoute>
            }
          ></Route>
          <Route path="editdoctor">
            <Route
              path=":id"
              element={
                <AdminProtectedRoute>
                  {isAdminLoggedIn && <Editdoctor />}
                </AdminProtectedRoute>
              }
            ></Route>
          </Route>
          <Route
            path="patients"
            element={
              <AdminProtectedRoute>
                {isAdminLoggedIn && <Patients />}
              </AdminProtectedRoute>
            }
          ></Route>
          <Route path="editpatient">
            <Route
              path=":id"
              element={
                <AdminProtectedRoute>
                  {isAdminLoggedIn && <Editpatient />}
                </AdminProtectedRoute>
              }
            ></Route>
          </Route>
          <Route
            path="labagents"
            element={
              <AdminProtectedRoute>
                {isAdminLoggedIn && <Labagents />}
              </AdminProtectedRoute>
            }
          ></Route>
          <Route path="editlabagent">
            <Route
              path=":id"
              element={
                <AdminProtectedRoute>
                  {isAdminLoggedIn && <Editlabagent />}
                </AdminProtectedRoute>
              }
            ></Route>
          </Route>
          <Route
            path="sitemanagers"
            element={
              <AdminProtectedRoute>
                {isAdminLoggedIn && <Sitemanagers />}
              </AdminProtectedRoute>
            }
          ></Route>
          <Route
            path="invoice"
            element={
              <AdminProtectedRoute>
                {isAdminLoggedIn && <Invoice />}
              </AdminProtectedRoute>
            }
          ></Route>
          <Route
            path="viewpayments"
            element={
              <AdminProtectedRoute>
                {isAdminLoggedIn && <Viewpayments />}
              </AdminProtectedRoute>
            }
          ></Route>

          {/* Patient components routes */}
          <Route
            path="upcomingappointments"
            element={
              <PatientProtectedRoute>
                {isPatientLoggedIn && <Viewmyappointment />}
              </PatientProtectedRoute>
            }
          ></Route>
          <Route
            path="previousappointments"
            element={
              <PatientProtectedRoute>
                {isPatientLoggedIn && <Viewmypreviousappointment />}
              </PatientProtectedRoute>
            }
          ></Route>
          <Route
            path="booknewappointment"
            element={
              <PatientProtectedRoute>
                {isPatientLoggedIn && <Booknewappointment />}
              </PatientProtectedRoute>
            }
          ></Route>
          <Route
            path="composemessage"
            element={
              <PatientProtectedRoute>
                {isPatientLoggedIn && <Composemessage />}
              </PatientProtectedRoute>
            }
          ></Route>
          <Route
            path="inbox"
            element={
              <PatientProtectedRoute>
                {isPatientLoggedIn && <Inbox />}
              </PatientProtectedRoute>
            }
          ></Route>
          <Route
            path="sentmessage"
            element={
              <PatientProtectedRoute>
                {isPatientLoggedIn && <Sentmessage />}
              </PatientProtectedRoute>
            }
          ></Route>
          <Route
            path="changepassword"
            element={
              <PatientProtectedRoute>
                {isPatientLoggedIn && <Myaccount />}
              </PatientProtectedRoute>
            }
          ></Route>
          <Route
            path="editprofile"
            element={
              <PatientProtectedRoute>
                {isPatientLoggedIn && <Myprofile />}
              </PatientProtectedRoute>
            }
          ></Route>
          <Route
            path="patientinvoice"
            element={
              <PatientProtectedRoute>
                {isPatientLoggedIn && <Pinvoice />}
              </PatientProtectedRoute>
            }
          ></Route>
            <Route
            path="packages"
            element={
              <PatientProtectedRoute>
                {isPatientLoggedIn && <Packages />}
              </PatientProtectedRoute>
            }
          ></Route>

          {/* Doctor components routes */}
          <Route
            path="doctorappointments"
            element={
              <DoctorProtectedRoute>
                {isDoctorLoggedIn && <Doctorappointment />}
              </DoctorProtectedRoute>
            }
          ></Route>
          <Route
            path="doctorpreviousappointments"
            element={
              <DoctorProtectedRoute>
                {isDoctorLoggedIn && <Doctorpreviousappointment />}
              </DoctorProtectedRoute>
            }
          ></Route>
          <Route
            path="doctormessage"
            element={
              <DoctorProtectedRoute>
                {isDoctorLoggedIn && <Doctormessage />}
              </DoctorProtectedRoute>
            }
          ></Route>
          <Route
            path="doctorinbox"
            element={
              <DoctorProtectedRoute>
                {isDoctorLoggedIn && <Doctorinbox />}
              </DoctorProtectedRoute>
            }
          ></Route>
          <Route
            path="doctorsentmessage"
            element={
              <DoctorProtectedRoute>
                {isDoctorLoggedIn && <DoctorSentmessage />}
              </DoctorProtectedRoute>
            }
          ></Route>
          <Route
            path="doctoraccount"
            element={
              <DoctorProtectedRoute>
                {isDoctorLoggedIn && <Doctoraccount />}
              </DoctorProtectedRoute>
            }
          ></Route>
          <Route
            path="doctorprofile"
            element={
              <DoctorProtectedRoute>
                {isDoctorLoggedIn && <Doctorprofile />}
              </DoctorProtectedRoute>
            }
          ></Route>

          {/* Labagent components routes */}
          <Route
            path="labagentappointments"
            element={
              <LabagentProtectedRoute>
                {isLabagentLoggedIn && <Labagentappointment />}
              </LabagentProtectedRoute>
            }
          ></Route>
          <Route
            path="labagentpreviousappointments"
            element={
              <LabagentProtectedRoute>
                {isLabagentLoggedIn && <Labagentpreviousappointment />}
              </LabagentProtectedRoute>
            }
          ></Route>
          <Route
            path="labagentmessage"
            element={
              <LabagentProtectedRoute>
                {isLabagentLoggedIn && <Labagentmessage />}
              </LabagentProtectedRoute>
            }
          ></Route>
          <Route
            path="labagentinbox"
            element={
              <LabagentProtectedRoute>
                {isLabagentLoggedIn && <Labagentinbox />}
              </LabagentProtectedRoute>
            }
          ></Route>
          <Route
            path="labagentsentmessage"
            element={
              <LabagentProtectedRoute>
                {isLabagentLoggedIn && <LabagentSentmessage />}
              </LabagentProtectedRoute>
            }
          ></Route>
          <Route
            path="labagentaccount"
            element={
              <LabagentProtectedRoute>
                {isLabagentLoggedIn && <Labagentaccount />}
              </LabagentProtectedRoute>
            }
          ></Route>
          <Route
            path="labagentprofile"
            element={
              <LabagentProtectedRoute>
                {isLabagentLoggedIn && <Labagentprofile />}
              </LabagentProtectedRoute>
            }
          ></Route>

          {/* Superadmin components routes */}
          <Route
            path="superadmindashboard"
            element={
              <SuperadminProtectedRoute>
                {isSuperadminLoggedIn && <Superadmindashboard />}
              </SuperadminProtectedRoute>
            }
          ></Route>
          <Route path="/viewemr">
            <Route
              path="history1/:id"
              element={
                <SuperadminProtectedRoute>
                  {isSuperadminLoggedIn && <History1 />}
                </SuperadminProtectedRoute>
              }
            ></Route>
            <Route
              path="history2/:id"
              element={
                <SuperadminProtectedRoute>
                  {isSuperadminLoggedIn && <History2 />}
                </SuperadminProtectedRoute>
              }
            ></Route>
            <Route
              path="medications/:id"
              element={
                <SuperadminProtectedRoute>
                  {isSuperadminLoggedIn && <Medications />}
                </SuperadminProtectedRoute>
              }
            ></Route>
            <Route
              path="reviewsystem1/:id"
              element={
                <SuperadminProtectedRoute>
                  {isSuperadminLoggedIn && <Reviewsystem1 />}
                </SuperadminProtectedRoute>
              }
            ></Route>
            <Route
              path="reviewsystem2/:id"
              element={
                <SuperadminProtectedRoute>
                  {isSuperadminLoggedIn && <Reviewsystem2 />}
                </SuperadminProtectedRoute>
              }
            ></Route>
            <Route
              path="reviewsystem3/:id"
              element={
                <SuperadminProtectedRoute>
                  {isSuperadminLoggedIn && <Reviewsystem3 />}
                </SuperadminProtectedRoute>
              }
            ></Route>
            <Route
              path="physicalexam1/:id"
              element={
                <SuperadminProtectedRoute>
                  {isSuperadminLoggedIn && <PhysicalExam1 />}
                </SuperadminProtectedRoute>
              }
            ></Route>
            <Route
              path="physicalexam2/:id"
              element={
                <SuperadminProtectedRoute>
                  {isSuperadminLoggedIn && <PhysicalExam2 />}
                </SuperadminProtectedRoute>
              }
            ></Route>
            <Route
              path="assessments/:id"
              element={
                <SuperadminProtectedRoute>
                  {isSuperadminLoggedIn && <Assessments />}
                </SuperadminProtectedRoute>
              }
            ></Route>
          </Route>
          <Route
            path="superadminmessage"
            element={
              <SuperadminProtectedRoute>
                {isSuperadminLoggedIn && <Superadminmessage />}
              </SuperadminProtectedRoute>
            }
          ></Route>
          <Route
            path="superadmininbox"
            element={
              <SuperadminProtectedRoute>
                {isSuperadminLoggedIn && <Superadmininbox />}
              </SuperadminProtectedRoute>
            }
          ></Route>
          <Route
            path="superadminsentmessage"
            element={
              <SuperadminProtectedRoute>
                {isSuperadminLoggedIn && <SuperadminSentmessage />}
              </SuperadminProtectedRoute>
            }
          ></Route>
          <Route
            path="superadminaccount"
            element={
              <SuperadminProtectedRoute>
                {isSuperadminLoggedIn && <Superadminaccount />}
              </SuperadminProtectedRoute>
            }
          ></Route>
          <Route
            path="superadminprofile"
            element={
              <SuperadminProtectedRoute>
                {isSuperadminLoggedIn && <Superadminprofile />}
              </SuperadminProtectedRoute>
            }
          ></Route>

           <Route path="patientmanagement" element={<Patientmanagment />}></Route>
           <Route path="appointmentmanagement" element={<AppointmentManagement />}></Route>
           <Route path="appointmentscheduling" element={<Appointmentscheduling />}></Route>
           <Route path="doctorsavailbility" element={<AdminDoctorAvailability/>}></Route>
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;