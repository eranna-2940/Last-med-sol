import React, { useState, useEffect } from "react";
import Menu from "../Menu";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar";
import Csvclipboard from "../Csvclipboard";
import Searchbar from "../Searchbar";
import Pagination from "../Pagination";

const Managelabs = () => {
  const [labs, setLabs] = useState([]);
  const [modaldata, setModaldata] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewRowIndex, setViewRowIndex] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/managelabs`)
      .then((res) => {
        res.data.map((item) => {
          return setLabs((oldArray) => [...oldArray, item]);
        });
      })
      .catch((err) => console.log(err));
  }, []);

  // console.log(labs);
  useEffect(() => {
    setCurrentPage(1);
    setViewRowIndex(null);
  }, [pageSize]);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const tableData = labs.slice(startIndex, endIndex);

  const handleClick = (index) => {
    setModaldata([labs[index]]);
    setViewRowIndex(index);
  };

  const handleDelete = (index) => {
    const emailToDelete = labs[index].labname;
    const addressToDelete = labs[index].address;

    axios
      .delete(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/managelabs`, {
        data: { email: emailToDelete, address: addressToDelete },
      })
      .then((res) => {
        console.log(res);
        window.location.reload(false);
        // Update your UI as needed, e.g., remove the deleted row from the table
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  const handleChecked = (e) => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    if (e.currentTarget.checked) {
      for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = true;
      }
    } else {
      for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="d-flex ">
        <div className="col-2 p-0">
          <Menu />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-10 p-0">
          <nav className="d-flex bg-light border border-bottom-info p-2">
          <i className="bi bi-house-fill"></i>
            <Link to="/dashboardPage" className="text-decoration-none">
              &nbsp;Home&nbsp;
            </Link>
            &gt; Centers &gt; Manage Labs
          </nav>
          <h4 className="mt-2 ms-2">Manage Labs</h4>
          <hr className="ms-4 me-4" />
          <div className="ms-4 me-4 d-flex justify-content-between">
            <Csvclipboard />

            <button
              style={{ width: "80px", height: "40px" }}
              className="btn m-0"
            >
              <Link to="/addlab" className="text-decoration-none text-dark">
                <i className="fa fa-edit"></i> Add
              </Link>
            </button>
          </div>
          <div className="ps-2 pe-2 ps-lg-4 pe-lg-4 pb-4">
            <div
              className="table-header p-2 text-white fs-6"
              style={{ background: "#134E5E", width: "100%" }}
            >
              Results for "Latest Registered Domains"
            </div>
            <Searchbar pageSize={pageSize} setPageSize={setPageSize} />
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
                      className="center sorting_disabled"
                      rowSpan="1"
                      colSpan="1"
                    >
                      <label className="pos-rel">
                        <input
                          type="checkbox"
                          name="allcheckbox"
                          className="ace"
                          onChange={handleChecked}
                        />
                        <span className="lbl"></span>
                      </label>
                    </th>
                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="dynamic-table"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="ID: activate to sort column ascending"
                    >
                      ID
                    </th>
                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="dynamic-table"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Name: activate to sort column ascending"
                    >
                      Name
                    </th>
                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="dynamic-table"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Address:activate to sort column ascending"
                    >
                      Address
                    </th>
                    <th
                      className="hidden-480 sorting"
                      tabIndex="0"
                      aria-controls="dynamic-table"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="City: activate to sort column ascending"
                    >
                      City
                    </th>
                    <th
                      className="hidden-480 sorting"
                      tabIndex="0"
                      aria-controls="dynamic-table"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Timings: activate to sort column ascending"
                    >
                      Timings
                    </th>
                    <th
                      className="hidden-480 sorting_disabled"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Status"
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((item, index) => (
                    <tr role="row" className="odd" key={startIndex + index + 1}>
                      <td className="center">
                        <label className="pos-rel">
                          <input
                            type="checkbox"
                            name="solocheckbox"
                            className="ace"
                          />
                          <span className="lbl"></span>
                        </label>
                      </td>
                      <td>{item.lab_id}</td>
                      <td>{item.labname}</td>

                      <td>{item.address}</td>

                      <td className="hidden-480">{item.city}</td>
                      <td className="hidden-480">
                        {item.fromtiming} - {item.totiming}
                      </td>

                      <td>
                        <div className="hidden-sm hidden-xs action-buttons d-flex justify-content-around">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                            id={index}
                            onClick={() => handleClick(startIndex + index)}
                          >
                            View
                          </button>

                          <Link
                            to={"/editlab/" + item.lab_id}
                            className="text-decoration-none text-white"
                          >
                            <button className="btn text-success border-0">
                              <i className="bi bi-pencil-fill"></i>
                            </button>
                          </Link>
                          <button
                            className="btn text-danger border-0"
                            onClick={() => handleDelete(startIndex + index)}
                          >
                            <i className="bi bi-trash-fill"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  <tr id="noresults"></tr>
                </tbody>
              </table>
            </div>

            <Pagination
              stateData={labs}
              pageSize={pageSize}
              setViewRowIndex={setViewRowIndex}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
          <hr></hr>
          <footer className="page-footer font-small bg-blue m-4">
            <div className="footer-copyright text-center">
              <span className="text-primary fs-6">PrevMed Sol&nbsp;</span>
              Copyrights © 2023
            </div>
          </footer>
        </div>
      </div>
      {/* modal */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5>View</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {viewRowIndex !== null &&
                modaldata.map((item, index) => (
                  <div key={index} className="text-center">
                    <p className="">
                      <span>Name :</span>
                      <span> {item.labname}</span>
                    </p>
                    <p className="">
                      <span>Address :</span>
                      <span> {item.address}</span>
                    </p>
                    <p className="">
                      <span>Timing :</span>
                      <span>
                        {" "}
                        {item.fromtiming}-{item.totiming}
                      </span>
                    </p>
                    <p className="">
                      <span>City :</span>
                      <span> {item.city}</span>
                    </p>
                  </div>
                ))}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Managelabs;
