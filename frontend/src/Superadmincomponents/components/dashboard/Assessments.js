import React, { useState } from "react";
import Navbar from "../Navbar";
import Menu from "../Menu";
import Subnavbar from "./Subnavbar";
import axios from 'axios'
import { useParams } from "react-router-dom";

const Assessments = () => {
  const {id} = useParams();
  const [data,setData] = useState({
    appointment_id: id,
    assement:'',
    plans:''
  })

  const handlechange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }

const handlesave = (e) => {
  e.preventDefault();
  axios
    .post(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/addassessment`, data)
    .then((res) => {
      if(res.data === "Error"){
        alert('Error while adding lab. Please try again filling all the fields');
      }
      else{
        alert("Assement values added successfully");
        window.location.reload(false);
      }
    })
    .catch((err) => console.log(err));
  // }
};






 
  return (
    <>
      <Navbar />
      <div className="d-flex">
        <div className="col-2 p-0">
          <Menu />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-10 p-0">
        <Subnavbar />
          <p className="text-dark ml-2">Please fill the form carefully</p>
         
           <div>
            <form action="" method="post">
              <div className="rs1_accordion">
                
                <div className="accordion  accordion-flush mb-4"id="accordionFlush1">
              
              <div className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded" id="assessmentHeading1">
                <h2 className="accordion-header" id="flush-headOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-dropOne"
                    aria-expanded="false"
                    aria-controls="flush-dropOne"
                  >
                    <div>
                      <span className="fs-5">Assessment</span>
                    </div>

                  </button>
                </h2>

              <div id="flush-dropOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="flush-headOne"
                  data-bs-parent="#accordionFlush1"
>
                <div className="accordion-body d-flex p-4">
                  <div className="col-12">
                    <div className="eachAccordInputBlock">
                    <textarea
                            cols="30"
                            rows="5"
                            class="form-control"
                            name="assement"
                            value={data.assement}
                            onChange={handlechange}
                          ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div className="accordion  accordion-flush mb-4"id="accordionFlush2">
              
              <div className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded" id="assessmentHeading1">
                <h2 className="accordion-header" id="flush-headOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-droptwo"
                    aria-expanded="false"
                    aria-controls="flush-droptwo"
                  >
                    <div>
                      <span className="fs-5">Plans</span>
                    </div>

                  </button>
                </h2>
              <div id="flush-droptwo"
                  className="accordion-collapse collapse show"
                  aria-labelledby="flush-headOne"
                  data-bs-parent="#accordionFlush2"
>
                <div className="accordion-body d-flex p-4">
                  <div className="col-12">
                    <div className="eachAccordInputBlock">
                    <textarea
                            cols="30"
                            rows="5"
                            class="form-control"
                            name="plans"
                            value={data.plans}
                            onChange={handlechange}
                          ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
                
              </div>
              <button className='btn btn-success ml-4' onClick={handlesave}> Verified by Super Admin</button>
            </form>
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

export default Assessments;
