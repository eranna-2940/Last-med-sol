import React, { useEffect, useState } from "react";
import Menu from "../Menu";
import { Link, useParams} from "react-router-dom";
import axios from "axios";
import Navbar from '../Navbar';

const Editcity = () => {
  const {id} = useParams();
  const [values, setValues] = useState({
    location_id:"",
    city: "",
  });

  useEffect(()=> {
    axios
    .get(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/location`)
    .then((res) => {
      res.data.map((item) => {
        console.log(item)
        if(item.location_id === parseInt(id)){
        return setValues((oldArray) => ({
          ...oldArray,
          location_id: (item.location_id === null) ? ("") : (item.location_id),
          city: (item.location_city === null) ? ("") : (item.city),
          }));
        }
        return null
      });
    })
    .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    // console.log(values);
    event.preventDefault();
       axios
      .post(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/locations`, values)
      .then((res) => {
        if (res.data === "Error") {
          alert(
            "Error while updating State. Please try again filling all the fields"
          );
        } else {
          alert("location City Updated successfully");
          window.location.reload(false);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
    <Navbar/>
    <div className="d-flex">
      <div className="col-2 p-0">
        <Menu />
      </div>

      <div className="col-sm-12 col-md-12 col-lg-10 p-0">
        <nav className="d-flex bg-light border border-bottom-info p-2">
        <i className="bi bi-house-fill"></i>
          <Link to="/dashboardPage" className="text-decoration-none">
            &nbsp;Home&nbsp;
          </Link>
          &gt;&nbsp; <Link to="/managestate" className="text-decoration-none">Location</Link>&nbsp; &gt; Add Location
        </nav>
        <h4 className="mt-2 ms-2">Edit City</h4>
        <hr className="ms-4 me-4" />
        <div className="">
          <div className="col-xs-12">
            <form
              className="form-horizontal mb-4"
              action=""
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="form-group d-md-flex">
                  <label className="col-sm-4 text-md-end text-primary" htmlFor="location_city">
                    {" "}
                    Location City
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      placeholder="City Name"
                      className="col-xs-10 col-sm-5 form-control"
                      id="city"
                      name="city"
                      onChange={handleInput}
                      defaultValue={values.city}
                      pattern="[A-Z][a-z]*\s*\w*"
                      title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                      required
                    />
                  </div>
                </div>
            
                <div className="text-center">
                  <div className="col-md-offset-3">
                    <button
                      className="btn btn-success"
                      type="submit"
                      id="btn-save"
                      name="btn-save"
                    >
                      <i className="bi bi-save2-fill"></i>&nbsp; Save
                    </button>
                    &nbsp; &nbsp;
                    <Link to="/managecity">
                  <button className="btn btn-danger" type="reset">
                    <i className="bi bi-trash-fill"></i>&nbsp; Cancel
                  </button>
                  </Link>
                  </div>
                </div>
            </form>
          </div>
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
    </>
  );
};

export default Editcity;
