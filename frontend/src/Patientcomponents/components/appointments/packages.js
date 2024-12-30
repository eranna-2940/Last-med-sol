import React, { useState, useEffect } from "react";
import Menu from "../Menu";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import Navbar from "../Navbar";

function Packages() {
  const [plans, setPlans] = useState([]);
  const [modalData, setModalData] = useState(null); // To store data for modal

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/addcart`)
      .then((res) => {
        if (res.data !== "Fail" && res.data !== "Error") {
            const result = res.data.filter((item)=>{
                    return item.patient_id.toString() === localStorage.getItem("patient-token")
            })
            setPlans(result)
        }
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleViewClick = (item) => {
    setModalData(item);
  };

  

  return (
    <>
      <Navbar />
      <div className="d-flex">
        <div className="col-2 p-0">
          <Menu />
        </div>

        <div className="col-sm-12 col-md-12 col-lg-10 p-0">
          <h5 className="mt-4 mb-2 ms-2">Plans</h5>
          <hr className="ms-4 me-4" />

          <div className="mt-4 ps-2 pe-2 pb-4">
            <div className="table-responsive">
              <table
                id="dynamic-table"
                className="table table-striped table-bordered table-hover dataTable no-footer"
                role="grid"
                aria-describedby="dynamic-table_info"
              >
                <thead>
                  <tr role="row">
                    <th
                      className="sorting pt-2 pb-2"
                      tabIndex="0"
                      aria-controls="dynamic-table"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Appointment ID: activate to sort column ascending"
                    >
                      ID
                    </th>
                    <th
                      className="sorting pt-2 pb-2"
                      tabIndex="0"
                      aria-controls="dynamic-table"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Patient Name: activate to sort column ascending"
                    >
                      PlanName
                    </th>
                    <th
                      className="sorting pt-2 pb-2"
                      tabIndex="0"
                      aria-controls="dynamic-table"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Phone:activate to sort column ascending"
                    >
                      PackageDescription
                    </th>
                    <th
                      className="hidden-480 sorting pt-2 pb-2"
                      tabIndex="0"
                      aria-controls="dynamic-table"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Gender: activate to sort column ascending"
                    >
                      Amount
                    </th>
                    <th
                      className="hidden-480 sorting pt-2 pb-2"
                      tabIndex="0"
                      aria-controls="dynamic-table"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Gender: activate to sort column ascending"
                    >
                      Image
                    </th>
                    <th
                      className="hidden-480 sorting pt-2 pb-2"
                      tabIndex="0"
                      aria-controls="dynamic-table"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Gender: activate to sort column ascending"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="border border-grey">
                  {plans.length > 0 ? (
                    plans.map((item, index) => (
                      <tr key={index}>
                        <td>{item.cart_id}</td>
                        <td>{item.packagename}</td>
                        <td>{item.packagedescription}</td>
                        <td>{item.amount}</td>
                        <td>
                          <img src={item.imageurl} alt={item.packagename} width="50" />
                        </td>
                        <td>
                          <button
                            className="btn btn-secondary"
                            data-bs-toggle="modal" data-bs-target="#myModal"
                            onClick={() => handleViewClick(item)} // Open modal on click
                          >
                            View
                          </button>
                          <button className="btn btn-danger ms-3">Delete</button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5}>No records available</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for displaying services */}
        <div className="modal" id="myModal">
        <div className="modal-dialog modal-md">
          <div className="modal-content">

              <div className="modal-header">
                <button
                  type="button"
                   className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {modalData && modalData ? (
                  <div>
                    <h6>Additional Services:</h6>
                    <ul>
                      {[...Array(10).keys()].map((i) => {
                        const service = modalData[`service${i + 1}`];
                        return (
                          <li key={i}>
                            {service ? service : <button disabled>No Service {i + 1}</button>}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ) : (
                  <p>Loading...</p>
                )}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                    data-bs-dismiss="modal" aria-label="Close"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Packages;
