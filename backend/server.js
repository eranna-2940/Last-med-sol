const express = require("express");
const mysql = require("mysql");
const db = require("./db");
const paypal = require('paypal-rest-sdk');
const {
  createDatabaseQuery,
  useDatabaseQuery,
  createAdminTableQuery,
  createSuperadminTableQuery,
  createDoctorsTableQuery,
  createPatientsTableQuery,
  createLabagentsTableQuery,
  createCentersTableQuery,
  createLabsTableQuery,
  createAppointmentsTableQuery,
  createPackagesTableQuery,
  createMailboxTableQuery,
  createReviewSystem2Query,
  createReviewSystem3Query,
  createPhysicalExam2Query,
  createPhysicalExam1Query,
  createAssementTableQuery,
  createHistory1TableQuery,
  createHistory2TableQuery,
  createMedicationsTableQuery,
  createReviewSystem1TableQuery,
  createLocationTableQuery,
  createSpecializationsTableQuery,
  insertAdminTableQuery,
  insertSuperadminTableQuery,
  adminLoginQuery,
  getAdminQuery,
  updateAdminQuery,
  doctorLoginQuery,
  insertDoctorQuery,
  getDoctorQuery,
  updateDoctorQuery,
  deleteDoctorQuery,
  patientLoginQuery,
  insertPatientQuery,
  addPatientQuery,
  getPatientQuery,
  patientForgotPasswordQuery,
  patientChangePasswordQuery,
  deletePatientQuery,
  labagentLoginQuery,
  insertLabagentQuery,
  getLabagentQuery,
  updateLabagentQuery,
  deleteLabagentQuery,
  addCenterQuery,
  getCenterQuery,
  updateCenterQuery,
  deleteCenterQuery,
  addLabQuery,
  getLabQuery,
  updateLabQuery,
  addAppointmentQuery,
  addAppointmentWithPatient,
  addAppointmentWithCenter,
  addAppointmentWithLab,
  getAppointmentQuery,
  addSpecializationQuery,
  getSpecializationQuery,
  getCountForDashboardQuery,
  addPackageQuery,
  getPackageQuery,
  updatePackageQuery,
  deletePackageQuery,
  addMailboxQuery,
  getMailboxQuery,
  updateMailboxQuery,
  superAdminLoginQuery,
  getSuperAdminQuery,
  updateSuperAdminQuery,
  addHistory1Query,
  addHistory2Query,
  addMedicationQuery,
  addAssessmentQuery,
  addPhysicalExam1Query,
  addPhysicalExam2Query,
  addReviewSystem1Query,
  addReviewSystem2Query,
  addReviewSystem3Query,
  addLocationQuery,
  getLocationQuery,
  updateLocationQuery,
  deleteLocationQuery,
  createCartPackagesTableQuery,
  insertFrontTableQuery,
  createFrontTableQuery,
  createDoctorsAvailbleTableQuery,
} = require("./queries");
var bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors("*"));
app.use(express.json());
var nodemailer = require("nodemailer");

var savedOTPS = {};

var smtpTransport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  service: "Gmail",
  auth: {
    type: "OAuth2",
    user: process.env.REACT_APP_USER, // Your gmail address.
    clientId: process.env.REACT_APP_CLIENTID,
    clientSecret: process.env.REACT_APP_CLIENTSECRET,
    refreshToken: process.env.REACT_APP_REFRESH_TOKEN,
  },
});

app.post("/sendotp", (req, res) => {
  let email = req.body.email;
  let digits = "0123456789";
  let limit = 4;
  var otp = "";
  for (i = 0; i < limit; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }

  var mailOptions = {
    from: process.env.REACT_APP_FROMMAIL,
    to: `${email}`,
    subject: "Verification mail to register for Prevmedsol",
    generateTextFromHTML: true,
    html: `<b>Hello user, Please use this otp ${otp} for verification</b>`,
  };

  smtpTransport.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error);
      // response.send("couldn't send")
    } else {
      savedOTPS[email] = otp;
      setTimeout(() => {
        delete savedOTPS.email;
      }, 60000);
      // console.log(savedOTPS);
      return res.json(response);
    }
    smtpTransport.close();
  });
});

app.post("/verify", (req, res) => {
  let otprecived = req.body.otp;
  let email = req.body.email;
  if (savedOTPS[email] == otprecived) {
    res.send("Verfied");
  } else {
    res.status(500).send("Invalid OTP");
  }
});

// Create database and tables
db.query(createDatabaseQuery, (err) => {
  if (err) throw err;

  db.query(useDatabaseQuery, (err) => {
    if (err) throw err;
    db.query(createAdminTableQuery, (err) => {
      if (err) throw err;
      db.query(insertAdminTableQuery, (err) => {
        if (err) throw err;
        db.query(createSuperadminTableQuery, (err) => {
          if (err) throw err;
          db.query(insertSuperadminTableQuery, (err) => {
            if (err) throw err;
            db.query(createDoctorsTableQuery, (err) => {
              if (err) throw err;

              db.query(createPatientsTableQuery, (err) => {
                if (err) throw err;

                db.query(createLabagentsTableQuery, (err) => {
                  if (err) throw err;

                  db.query(createCentersTableQuery, (err) => {
                    if (err) throw err;

                    db.query(createLabsTableQuery, (err) => {
                      if (err) throw err;

                      db.query(createAppointmentsTableQuery, (err) => {
                        if (err) throw err;

                        db.query(createPackagesTableQuery, (err) => {
                          if (err) throw err;

                          db.query(createMailboxTableQuery, (err) => {
                            if (err) throw err;

                            db.query(createPhysicalExam1Query, (err) => {
                              if (err) throw err;

                              db.query(createPhysicalExam2Query, (err) => {
                                if (err) throw err;

                                db.query(createAssementTableQuery, (err) => {
                                  if (err) throw err;

                                  db.query(createReviewSystem2Query, (err) => {
                                    if (err) throw err;

                                    db.query(
                                      createReviewSystem3Query,
                                      (err) => {
                                        if (err) throw err;

                                        db.query(
                                          createHistory1TableQuery,
                                          (err) => {
                                            if (err) throw err;

                                            db.query(
                                              createHistory2TableQuery,
                                              (err) => {
                                                if (err) throw err;

                                                db.query(
                                                  createMedicationsTableQuery,
                                                  (err) => {
                                                    if (err) throw err;

                                                    db.query(
                                                      createReviewSystem1TableQuery,
                                                      (err) => {
                                                        if (err) throw err;

                                                        db.query(
                                                          createLocationTableQuery,
                                                          (err) => {
                                                            if (err) throw err;
    
                                                            db.query(
                                                              createSpecializationsTableQuery,
                                                              (err) => {
                                                                if (err) throw err;
                                                              db.query(
                                                                createCartPackagesTableQuery,
                                                                (err)=>{
                                                                  if(err) throw err;
                                                                      db.query (
                                                                        createFrontTableQuery,
                                                                        (err)=>{
                                                                          if(err) throw err;
                                                                          db.query (
                                                                            insertFrontTableQuery,
                                                                            (err)=>{
                                                                              if(err) throw err;

                                                                              db.query (
                                                                                createDoctorsAvailbleTableQuery,
                                                                                (err)=>{
                                                                                  if(err) throw err;
                                                                                  console.log(
                                                                                    "Database and tables created successfully"
                                                                                  );
                                                                                }
                                                                              )
                                                                        
                                                                        }
                                                                      )
                                                                     
                                                                    }
                                                                  )
                                                                  
                                                                }
                                                              )
                                                               
                                                              }
                                                            );
                                                          }
                                                        );
                                                      }
                                                    );
                                                  }
                                                );
                                              }
                                            );
                                          }
                                        );
                                      }
                                    );
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});

// checking admin
app.post("/admin", (req, res) => {
  const sql = adminLoginQuery
  db.query(sql, [req.body.username, req.body.password], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.json("Fail");
    }
  });
});

// retrieving admin
app.get("/admin", (req, res) => {
  const sql = getAdminQuery;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.json("Fail");
    }
  });
});

app.post("/adminprofile", (req, res) => {
  const email = req.body.email;
  const newData = req.body;
  const sql = updateAdminQuery;

  db.query(sql, [newData, email], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    console.log("Data updated successfully");
    return res.json(data);
  });
});


// Queries related to doctor starts
//doctor login check
app.post("/doctor", (req, res) => {
  const sql = doctorLoginQuery;
  db.query(sql, [req.body.username, req.body.password], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.json("Fail");
    }
  });
});

// add Doctor sql
app.post("/adddoctor", (req, res) => {
  const sql = insertDoctorQuery;
  const values = [
    req.body.firstname,
    req.body.lastname,
    req.body.gender,
    req.body.phone,
    req.body.email,
    req.body.password,
    req.body.hospital,
    req.body.specialization,
    req.body.address,
    req.body.country,
    req.body.state,
    req.body.city,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }
    console.log("data added successfully");
    return res.json(data);
  });
});

// retrieving doctors
app.get("/doctors", (req, res) => {
  const sql = getDoctorQuery;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.json("Fail");
    }
  });
});

app.post("/doctors", (req, res) => {
  const email = req.body.email;
  const newData = req.body;
  const sql = updateDoctorQuery;

  db.query(sql, [newData, email], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    console.log("Data updated successfully");
    return res.json(data);
  });
});

app.delete("/doctors", (req, res) => {
  const email = req.body.email;
  const sql = deleteDoctorQuery;

  db.query(sql, [email], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    console.log("Data deleted successfully");
    return res.json(data);
  });
});


app.post('/doctor_availability', (req, res) => {
  const { doctor_id, day_of_week, start_time, end_time, is_available,doctorName } = req.body;

  const query = `
    INSERT INTO doctor_availability (doctor_id, day_of_week, start_time, end_time, is_available,doctorName)
    VALUES (?, ?, ?, ?, ?,?)
  `;

  db.query(query, [doctor_id, day_of_week, start_time, end_time, is_available,doctorName], (err, result) => {
    if (err) {
      console.error('Error inserting doctor availability:', err);
      return res.status(500).json({ error: 'Failed to add availability' });
    }
    res.status(200).json({ message: 'Availability added successfully', result });
  });
});

app.get("/doctor_availability", (req, res) => {
  const sql = "select * from doctor_availability";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.json("Fail");
    }
  });
});

app.put('/appointments/:id', async (req, res) => {
  const appointmentId = req.params.id;
  const { status } = req.body;

  // Validate status (optional)
  if (!['Confirmed', 'Pending', 'Completed', 'Cancelled'].includes(status)) {
    return res.status(400).send('Invalid status');
  }

  try {
    // Update the appointment status in the database
    const result = await db.query('UPDATE appointments SET status = ? WHERE appointment_id = ?', [status, appointmentId]);

    if (result.affectedRows > 0) {
      res.status(200).send('Appointment status updated');
    } else {
      res.status(404).send('Appointment not found');
    }
  } catch (error) {
    console.error('Error updating appointment status:', error);
    res.status(500).send('Server error');
  }
});



// Queries related to doctor ends

// Queries related to patient starts
//patient login check
app.post("/patient", (req, res) => {
  const sql = patientLoginQuery;
  db.query(sql, [req.body.username, req.body.password], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.json("Fail");
    }
  });
});

// add user(register) sql
app.post("/register", (req, res) => {
  const sql = insertPatientQuery;
  const values = [
    req.body.firstname,
    req.body.middlename,
    req.body.lastname,
    req.body.email,
    req.body.password,
    req.body.phone,
    req.body.gender,
    req.body.dob,
    req.body.bloodgroup,
    req.body.country,
    req.body.state,
    req.body.city,
    req.body.street1,
    req.body.street2,
    req.body.zipcode,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }
    console.log("data added successfully");
    return res.json(data);
  });
});

// add patient sql
app.post("/addpatient", (req, res) => {
  const sql = addPatientQuery;
  const values = [
    req.body.firstname,
    req.body.lastname,
    req.body.gender,
    req.body.bloodgroup,
    req.body.dob,
    req.body.phone,
    req.body.email,
    req.body.password,
    req.body.address,
    req.body.state,
    req.body.city,
    req.body.status,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }
    console.log("data added successfully");
    return res.json(data);
  });
});

// retrieving patients
app.get("/patients", (req, res) => {
  const sql = getPatientQuery;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.json("Fail");
    }
  });
});

app.post("/patients", (req, res) => {
  const email = req.body.email;
  if (req.body.frompage === "forgotpassword") {
    const sql = patientForgotPasswordQuery;
    var password = req.body.password;
    db.query(sql, [password, email], (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      console.log("Data updated successfully");
      return res.json(data);
    });
  } else {
    const sql = patientChangePasswordQuery;
    var newData = req.body;
    db.query(sql, [newData, email], (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      console.log("Data updated successfully");
      return res.json(data);
    });
  }

});

app.delete("/patients", (req, res) => {
  const email = req.body.email;
  const sql = deletePatientQuery;

  db.query(sql, [email], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    console.log("Data deleted successfully");
    return res.json(data);
  });
});

// Queries related to patient ends

// Queries related to lab agent starts
//lab agent login check
app.post("/lab", (req, res) => {
  const sql = labagentLoginQuery;
  db.query(sql, [req.body.username, req.body.password], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.json("Fail");
    }
  });
});

// add lab agent sql
app.post("/addlabagent", (req, res) => {
  const sql = insertLabagentQuery;
  const values = [
    req.body.firstname,
    req.body.lastname,
    req.body.gender,
    req.body.phone,
    req.body.email,
    req.body.password,
    req.body.labname,
    req.body.address,
    req.body.state,
    req.body.city,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }
    console.log("data added successfully");
    return res.json(data);
  });
});

// retrieving labagents
app.get("/labagents", (req, res) => {
  const sql = getLabagentQuery;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.json("Fail");
    }
  });
});

app.post("/labagents", (req, res) => {
  const email = req.body.email;
  const newData = req.body;
  const sql = updateLabagentQuery;

  db.query(sql, [newData, email], (err, data) => {
    if (err) {
      return res.json(err);
    }
    console.log("Data updated successfully");
    return res.json(data);
  });
});

app.delete("/labagents", (req, res) => {
  const email = req.body.email;
  const sql = deleteLabagentQuery;

  db.query(sql, [email], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    console.log("Data deleted successfully");
    return res.json(data);
  });
});

// checking front
app.post("/front", (req, res) => {
  const sql = "SELECT * FROM frontoffice WHERE `email` = ? AND `password` = ?";
  db.query(sql, [req.body.username, req.body.password], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.json("Fail");
    }
  });
});


// Queries related to lab agent ends

//frontoffice login check
// app.post('/doctor', (req, res) => {
//     const sql = "SELECT * FROM doctors WHERE `email` = ? AND `password` = ?";
//     db.query(sql, [req.body.username, req.body.password], (err, data) => {
//         if (err) {
//             return res.json("Error");
//         }
//         if (data.length > 0) {
//             return res.json("Success");
//         } else {
//             return res.json("Fail");
//         }
//     })
// })

// Queries related to centers starts
// add center sql
app.post("/addcenter", (req, res) => {
  const sql = addCenterQuery;
  const values = [
    req.body.centername,
    req.body.phone,
    req.body.email,
    req.body.password,
    req.body.fromtiming,
    req.body.totiming,
    req.body.address,
    req.body.state,
    req.body.city,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }
    console.log("data added successfully");
    return res.json(data);
  });
});

// retrieving centers
app.get("/managecenters", (req, res) => {
  const sql = getCenterQuery;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.json("Fail");
    }
  });
});

app.post("/managecenters", (req, res) => {
  const email = req.body.email;
  const newData = req.body;
  const sql = updateCenterQuery;

  // console.log(email);

  db.query(sql, [newData, email], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    console.log("Data updated successfully");
    return res.json(data);
  });
});

app.delete("/managecenters", (req, res) => {
  const email = req.body.email;
  const sql = deleteCenterQuery;

  db.query(sql, [email], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    console.log("Data deleted successfully");
    return res.json(data);
  });
});

// Queries related to centers ends

// Queries related to labs starts
// add lab sql
app.post("/addlab", (req, res) => {
  const sql = addLabQuery;
  const values = [
    req.body.labname,
    req.body.address,
    req.body.state,
    req.body.city,
    req.body.fromtiming,
    req.body.totiming,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }
    console.log("data added successfully");
    return res.json(data);
  });
});

// retrieving labs
app.get("/managelabs", (req, res) => {
  const sql = getLabQuery;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.json("Fail");
    }
  });
});

app.post("/managelabs", (req, res) => {
  const email = req.body.email;
  const newData = req.body;
  const sql = updateLabQuery;

  db.query(sql, [newData, email], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    console.log("Data updated successfully");
    return res.json(data);
  });
});
// Queries related to labs ends

// Queries related to appointment
// add appointment sql
app.post("/addappointment", (req, res) => {
  const sql = addAppointmentQuery;
  const values = [
    req.body.patient,
    req.body.appointment,
    req.body.center,
    req.body.date,
    req.body.timing,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }
    console.log("data added successfully");
    return res.json(data);
  });
});

// retrieving add appointment details
app.get("/addappointment", (req, res) => {
  const sql1 = addAppointmentWithPatient;
  const sql2 = addAppointmentWithCenter;
  const sql3 = addAppointmentWithLab;

  const result = { data1: [], data2: [], data3: [] };

  db.query(sql1, (err, dbdata) => {
    if (err) {
      return res.json("Error");
    } else {
      result.data1 = dbdata;
    }

    db.query(sql2, (err, dbdata1) => {
      if (err) {
        return res.json("Error");
      } else {
        result.data2 = dbdata1;
      }
      db.query(sql3, (err, dbdata2) => {
        if (err) {
          return res.json("Error");
        } else {
          result.data3 = dbdata2;
        }
        return res.json(result);
      });
    });
  });
});

// retrieving patient appointments
app.get("/patientappointment", (req, res) => {
  const sql1 = getPatientQuery;
  const sql2 = getAppointmentQuery;

  const result = { data1: [], data2: [] };

  db.query(sql1, (err, dbdata) => {
    if (err) {
      return res.json("Error");
    } else {
      result.data1 = dbdata;
    }

    db.query(sql2, (err, dbdata1) => {
      if (err) {
        return res.json("Error");
      } else {
        result.data2 = dbdata1;
      }
      return res.json(result);
    });
  });
});
// Queries related to appointment

// Queries related to specialization

app.post("/addspecialization", (req,res) => {
  const sql = addSpecializationQuery;
  const values = [
    req.body.specialization,
    req.body.description,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }
    console.log("data added successfully");
    return res.json(data);
  });
});

app.get("/specialization", (req, res) => {
  const sql = getSpecializationQuery;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.json("Fail");
    }
  });
});
app.get("/patientappointments", (req, res) => {
  const sql = getAppointmentQuery;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.json("Fail");
    }
  });
});

// Queries related to specialization

// retrieving data for dashboard
app.get("/dashboardPage", (req, res) => {
  const result = [];

  const sql = getCountForDashboardQuery;

  db.query(sql + "doctors", (err, dbdata1) => {
    if (err) {
      return res.json("Error");
    } else {
      result.push(dbdata1);
    }

    db.query(sql + "patients", (err, dbdata2) => {
      if (err) {
        return res.json("Error");
      } else {
        result.push(dbdata2);
      }

      db.query(sql + "labs", (err, dbdata3) => {
        if (err) {
          return res.json("Error");
        } else {
          result.push(dbdata3);
        }

        db.query(sql + "appointments", (err, dbdata4) => {
          if (err) {
            return res.json("Error");
          } else {
            result.push(dbdata4);
          }
          return res.json(result);
        });
      });
    });
  });
});

// Queries related to packages starts
// add package sql
app.post("/addpackage", (req, res) => {
  const sql = addPackageQuery;
  const values = [
    req.body.packagename,
    req.body.description,
    req.body.amount,
    req.body.imageurl,
    req.body.service1,
    req.body.service2,
    req.body.service3,
    req.body.service4,
    req.body.service5,
    req.body.service6,
    req.body.service7,
    req.body.service8,
    req.body.service9,
    req.body.service10,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }
    console.log("data added successfully");
    return res.json(data);
  });
});

// retrieving packages
app.get("/packages", (req, res) => {
  const sql = getPackageQuery;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.json("Fail");
    }
  });
});


// Example backend endpoint (Node.js + Express)
app.post('/addcart', (req, res) => {
  const { product } = req.body;
  const { patient_token } = product;

  // Example SQL query for adding to cart
  const query = `
    INSERT INTO cart (patient_id, package_id, packagename, packagedescription, amount, imageurl,service1,service2,service3,service4,service5,service6,service7,service8,service9,service10)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `; 

  db.query(query, [
    patient_token, 
    product.package_id,
    product.packagename,
    product.packagedescription,
    product.amount,
    product.imageurl,
    product.service1,
    product.service2,
    product.service3,
    product.service4,
    product.service5,
    product.service6,
    product.service7,
    product.service8,
    product.service9,
    product.service10
  ], (err, result) => {
    if (err) {
      console.error("Error adding to cart:", err);
      res.status(500).send("Error adding to cart");
    } else {
      res.send("Cart item added successfully");
    }
  });
});

app.get("/addcart", (req, res) => {
  const sql = "select * from cart";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.json("Fail");
    }
  });
});

app.post("/managepackages", (req, res) => {
  const packagename = req.body.packagename;
  const newData = req.body;
  const sql = updatePackageQuery;

  db.query(sql, [newData, packagename], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    console.log("Data updated successfully");
    return res.json(data);
  });
});

app.delete("/managepackages", (req, res) => {
  const packagename = req.body.packagename;
  const sql = deletePackageQuery;

  db.query(sql, [packagename], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    console.log("Data deleted successfully");
    return res.json(data);
  });
});

// Queries related to packages ends

// send email related sql
app.post("/patientsentdata", (req, res) => {
  const sql = addMailboxQuery;
  const values = [
    req.body.fromemail,
    req.body.toemail,
    req.body.subject,
    req.body.message,
    req.body.date,
    req.body.time,
    req.body.status,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }
    console.log("patientsent data added successfully");
    return res.json(data);
  });
});

// retrieving patientsenddata
app.get("/patientsentdata", (req, res) => {
  const sql = getMailboxQuery;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.json("Fail");
    }
  });
});

// Update patientsenddata
app.post("/inbox", (req, res) => {
  const toemail = req.body.toemail;
  const status = req.body.status;
  const sql = updateMailboxQuery;

  db.query(sql, [status, toemail], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    console.log("Data updated successfully");
    return res.json(data);
  });
});

// Queries related to superadmin starts

// checking superadmin
app.post("/superadmin", (req, res) => {
  const sql = superAdminLoginQuery;
  db.query(sql, [req.body.password], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.json("Fail");
    }
  });
});

// retrieving superadmin
app.get("/superadmin", (req, res) => {
  const sql = getSuperAdminQuery;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.json("Fail");
    }
  });
});

app.post("/superadminprofile", (req, res) => {
  const email = req.body.email;
  const newData = req.body;
  const sql = updateSuperAdminQuery;

  db.query(sql, [newData, email], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    console.log("Data updated successfully");
    return res.json(data);
  });
});

app.post("/history1", (req, res) => {
  const sql = addHistory1Query;

  db.query(sql, [Object.values(req.body)], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }
    console.log("Data updated successfully");
    return res.json(data);
  });
  // console.log(Object.values(req.body));
});

app.post("/history2", (req, res) => {
  const sql = addHistory2Query;

  db.query(sql, [Object.values(req.body)], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }
    console.log("Data updated successfully");
    return res.json(data);
  });
  // console.log(Object.values(req.body));
});

app.post("/medication", (req, res) => {
  const sql = addMedicationQuery;

  db.query(sql, [Object.values(req.body)], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }
    console.log("Data updated successfully");
    return res.json(data);
  });
});

app.post("/addassessment", (req, res) => {
  const sql = addAssessmentQuery;

  db.query(sql, [Object.values(req.body)], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }
    console.log("data added successfully");
    return res.json(data);
  });
});

app.post("/physicalexam1", (req, res) => {
  const sql = addPhysicalExam1Query;

  db.query(sql, [Object.values(req.body.accordionContents)], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }
    console.log("Data added successfully");
    return res.json(data);
  });
});

app.post("/physicalexam2", (req, res) => {
  const sql = addPhysicalExam2Query;

  db.query(sql, [Object.values(req.body.accordionContents)], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }

    console.log("Data added successfully");
    return res.json(data);
  });
});

app.post("/reviewsystem1", (req, res) => {
  const sql = addReviewSystem1Query;

  db.query(sql, [Object.values(req.body.accordionContents)], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }

    console.log("Data added successfully");
    return res.json(data);
  });
});

app.post("/reviewsystem2", (req, res) => {
  const sql = addReviewSystem2Query;

  db.query(sql, [Object.values(req.body.accordionContents)], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }

    console.log("Data added successfully");
    return res.json(data);
  });
});

app.post("/reviewsystem3", (req, res) => {
  const sql = addReviewSystem3Query;

  db.query(sql, [Object.values(req.body.accordionContents)], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }

    console.log("Data added successfully");
    return res.json(data);
  });
});

// Queries related to superadmin ends

// Queries related to locations

app.post("/location", (req,res) => {
  const sql = addLocationQuery;
  const values = [req.body.location_state, req.body.location_city];
  db.query(sql, [values], (err,data) => {
    if (err){
      console.log(err);
      return res.json("Error");
    }
    console.log("Data added successfully");
    return res.json(data);
  })
});

app.get("/location", (req, res) => {
  const sql = getLocationQuery;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.json("Fail");
    }
  });
});

app.post("/locations", (req, res) => {
  const state = req.body.location_id;
  const newData = req.body;
  const sql = updateLocationQuery;

  db.query(sql, [newData, state], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    console.log("Data updated successfully");
    return res.json(data);
  });
});

app.delete("/location", (req, res) => {
  const location_id = req.body.id;
  const sql = deleteLocationQuery;

  db.query(sql, [location_id], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    console.log("Data deleted successfully");
    return res.json(data);
  });
});

// Queries related to locations


// Replace these with your PayPal Sandbox API credentials
paypal.configure({
  mode: 'sandbox',
  client_id: process.env.REACT_APP_PAYPAL_CLIENTID,
  client_secret: process.env.REACT_APP_PAYPAL_CLIENTSECRET,
});


app.post('/createPayment', (req, res) => {
  const cartItems = req.body.cartItems;
  const items = cartItems.map(item => ({
      plan: item.planName,
      amount: item.amount,
      currency: 'USD',
  }));
  // console.log(items)
  const create_payment_json = {
      intent: 'sale',
      payer: {
          payment_method: 'paypal',
      },

      redirect_urls: {
          return_url: `${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/success`,
          cancel_url: `${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/cancel`,
      },
      transactions: [{
          item_list: {
            plan: items[0].planName,
          },
          amount: {
              currency: 'USD',
              total: (cartItems.reduce((sum, item) => sum + item.amount, 0)).toFixed(2),
          },
          description: 'Purchase from Shopping Cart.',
      }],
  };

  paypal.payment.create(create_payment_json, (error, payment) => {
      if (error) {
          console.error('Error creating payment:', error.response ? error.response.details : error.message);
          res.status(500).json({ error: 'Error creating payment' });
      } else {
          for (let i = 0; i < payment.links.length; i++) {
              if (payment.links[i].rel === 'approval_url') {
                  res.json({ redirectUrl: payment.links[i].href });
                  return;
              }
          }
          res.status(500).json({ error: 'Approval URL not found' });
      }
  });
});

app.get('/success', (req, res) => {
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;

  const execute_payment_json = {
      payer_id: payerId,
  };

  paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
      if (error) {
          console.error('Error executing payment:', error.response ? error.response.details : error.message);
          res.status(500).send('Error executing payment');
      } else {
          // console.log(JSON.stringify(payment));
          // res.send('Payment success!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
          res.redirect(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_FRONTEND_PORT}/register`);
      }
  });
});

app.get('/cancel', (req, res) => {
  res.send('Payment canceled.');
});

app.listen(process.env.REACT_APP_BACKEND_PORT || 8080, () => {
  console.log("listening");
});
