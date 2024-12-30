import React, {useState} from "react";
import Navbar from "../Navbar"
import Menu from "../Menu";
import axios from "axios";
import { useData } from "../../../Admincomponents/components/Datacontext";


const Doctoraccount = () => {
  const { doctor } = useData();
  const [values, setValues] = useState({
    email: doctor.email,
    password: "",
    confirmpassword: "",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

  };

  const handleSave = (e) => {
    e.preventDefault();
    if(values.password === values.confirmpassword){
      axios
      .post(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/doctors`, values)
      .then((res) => {
        console.log(res);
        alert("Password updated successfully");
        window.location.reload(false);
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      })
    }
    else{
      alert("Passwords did not match")
    }

  };
  return (
    <>
    <Navbar/>
    <div className="d-flex">
    <div className="col-2 p-0">
      <Menu/>
    </div>

    <div className="col-sm-12 col-md-12 col-lg-10 p-0">
     
      <div
      className="d-flex justify-content-center"
      style={{ height: "60vh", alignItems: "center" ,paddingBottom:'120px'}}
    >
      <div>
        <div className="text-center">
          <h4 >Change Password</h4>
        </div>
        <form action="" method="post" onSubmit={handleSave}>
          
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="New Password"
              style={{ width: "350px" }}
              onChange={handleInput}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="confirmpassword"
              name="confirmpassword"
              placeholder="Confirm Password"
              style={{ width: "350px" }}
              className="form-control"
              onChange={handleInput}
              required
            />
          </div>
          <div>
            <button
              type="submit"
              name="btn-login"
              className="btn btn-dark"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div> 
    



      <hr></hr>
      <footer className="page-footer font-small bg-blue m-4">
          <div className="footer-copyright text-center">
              <span className='text-primary fs-6'>PrevMed Sol&nbsp;</span>Copyrights © 2023
          </div>
      </footer>
    </div>

  </div>
  </>
  );
};

export default Doctoraccount;
