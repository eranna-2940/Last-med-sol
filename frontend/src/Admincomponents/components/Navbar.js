import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Menu from "./Menu";

export default function Navbar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("admin-token");
    navigate("/adminpage");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top  bg-success d-flex justify-content-between">
        <div className="d-flex">
          <button
            className="navbar-toggler bg-light ms-1"
            type="button"
            data-bs-toggle="collapse"
            style={{ padding: "2px 2px", height: "35px" }}
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
          >
            <span className="navbar-toggler-icon fs-6"></span>
          </button>

          <div className="navbar-brand text-white">
            <i className="bi bi-heart-pulse-fill ms-2"></i>
            <b> Prev</b>Medsol
          </div>
        </div>

        {/* <div className="btn-group">
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle me-1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Welcome, Admin
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <button className="dropdown-item" type="button">
                <i className="bi bi-person-fill-gear"></i>{" "}
                <Link
                  to="/adminprofile"
                  className="text-decoration-none text-dark"
                >
                  Profile
                </Link>
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                <i className="bi bi-eye-fill"></i>{" "}
                <Link
                  to="/adminaccount"
                  className="text-decoration-none text-dark"
                >
                  Change Password
                </Link>
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button" onClick={logout}>
                <i className="bi bi-power"></i>{" "}Logout
              </button>
            </li>
          </ul>
        </div> */}

        <div className="button-group ">
          <button
            type="button"
            className="btn btn-secondary me-2 rounded-circle d-flex align-items-center"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="text-white">
              <i className="bi bi-person-fill fs-6"></i>
            </span>
          </button>

          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <button className="dropdown-item" type="button">
                <i className="bi bi-person-fill"></i>&nbsp; welcome, Admin
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                <i className="bi bi-person-fill-gear"></i>{" "}
                <Link
                  to="/adminprofile"
                  className="text-decoration-none text-dark"
                >
                  Profile
                </Link>
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                <i className="bi bi-eye-fill"></i>{" "}
                <Link
                  to="/adminaccount"
                  className="text-decoration-none text-dark"
                >
                  Change Password
                </Link>
              </button>
            </li>
            <li>
              <button className="btn" type="button" onClick={logout}>
                <i className="bi bi-box-arrow-right"></i> Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <div
        className=" sidemenu11 collapse navbar-collapse text-light"
        id="navbarSupportedContent"
      >
        <Menu />{" "}
      </div>
    </>
  );
}
