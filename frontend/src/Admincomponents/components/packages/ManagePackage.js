import React, { useState, useEffect } from "react";
import Menu from "../Menu";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from '../Navbar';
import Csvclipboard from "../Csvclipboard"
import Searchbar from "../Searchbar"
import Pagination from '../Pagination'

const Managepackage = () => {
  const [packages, setPackages] = useState([]);
  const [modaldata, setModaldata] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewRowIndex, setViewRowIndex] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/packages`)
      .then((res) => {
        res.data.map((item) => {
          return setPackages((oldArray) => [...oldArray, item]);
        });
      })
      .catch((err) => console.log(err));
  }, []);

  // console.log(packages);

  useEffect(() => {
    setCurrentPage(1);
    setViewRowIndex(null);
  }, [pageSize]);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const tableData = packages.slice(startIndex, endIndex);

  const handleClick = (index) => {
    setModaldata([packages[index]]);
    setViewRowIndex(index);
  };


  // const handleChange = (e) => {
  //   const {name, value} = e.currentTarget;
  //   if(e.currentTarget.type === "checkbox"){
  //     if(e.currentTarget.checked){
  //     console.log(e.currentTarget.value);
  //       setEditedData((prevData)=>({ ...prevData, [name]:value}))
  //     }
  //     else{
  //       setEditedData((prevData)=>({ ...prevData, [name]: ""}));
  //     }
  //   }
  //   else{
  //     setEditedData((prevData)=>({ ...prevData, [name]:value}))
  //   }
  // }

  // console.log(editedData)

  const handleDelete = (index) => {
    const packageToDelete = packages[index].packagename;

    axios.delete(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/managepackages`, { data: { packagename: packageToDelete } })
        .then((res) => {
            console.log(res);
            window.location.reload(false);
            // Update your UI as needed, e.g., remove the deleted row from the table
        })
        .catch(error => {
            console.error('Error deleting data:', error);
        });
  };

  const handleChecked = (e) => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    if(e.currentTarget.checked){
      for(let i=0;i<checkboxes.length;i++){
        checkboxes[i].checked = true;
      }
    }
    else{
      for(let i=0;i<checkboxes.length;i++){
        checkboxes[i].checked = false;
      }
    }
  }

  return (
    <>
    <Navbar/>
    <div className="d-flex ">
      <div className="col-2 p-0">
        <Menu/>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-10 p-0">
        <nav className="d-flex bg-light border border-bottom-info p-2">
        <i className="bi bi-house-fill"></i>
        <Link to='/dashboardPage' className="text-decoration-none">&nbsp;Home&nbsp;</Link>&gt; Packages &gt; Manage Package
        </nav>
        <h4 className="mt-2 ms-2">Manage Package</h4>
        <hr className="ms-4 me-4" />
        <div className="ms-4 me-4 d-flex justify-content-between">
        <Csvclipboard/>
    
        <Link to="/addpackage">
              <button className="btn">
                <i className="fa fa-edit"></i> Add
              </button>
            </Link>
        </div>
        <div className="ps-2 pe-2 ps-lg-4 pe-lg-4 pb-4">
          <div
            className="table-header p-2 text-white fs-6"
            style={{ background: "#134E5E", width: "100%" }}
          >
           Results for "Existing Packages"
          </div>
          <Searchbar pageSize={pageSize} setPageSize={setPageSize}/>
          <div className="table-responsive">
          <table
            id="dynamic-table"
            className="table table-striped table-bordered table-hover dataTable no-footer"
            role="grid"
            aria-describedby="dynamic-table_info"
          >
            <thead>
              <tr role="row">
                <th className="center sorting_disabled" rowSpan="1" colSpan="1">
                  <label className="pos-rel">
                    <input type="checkbox" name="allcheckboxes" className="ace" onChange={handleChecked}/>
                    <span className="lbl"></span>
                  </label>
                </th>
                <th
                  className="sorting"
                  tabIndex="0"
                  aria-controls="dynamic-table"
                  rowSpan="1"
                  colSpan="1"
                  aria-label="Name: activate to sort column ascending"
                >
                  Package Id
                </th>
                <th
                  className="sorting"
                  tabIndex="0"
                  aria-controls="dynamic-table"
                  rowSpan="1"
                  colSpan="1"
                  aria-label="Name: activate to sort column ascending"
                >
                  Package Name
                </th>
                <th
                  className="hidden-480 sorting"
                  tabIndex="0"
                  aria-controls="dynamic-table"
                  rowSpan="1"
                  colSpan="1"
                  aria-label="Timings: activate to sort column ascending"
                >
                  Package Price
                </th>
                <th
                  className="hidden-480 sorting_disabled"
                  rowSpan="1"
                  colSpan="1"
                  aria-label="Status"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr role="row" className="odd" key={startIndex+index+1}>
                  <td className="center">
                    <label className="pos-rel">
                      <input type="checkbox" name="solocheckboxes" className="ace" />
                      <span className="lbl"></span>
                    </label>
                  </td>
                  <td>
                    {item.package_id}
                  </td>
                  <td>
                    {item.packagename}
                  </td>
                  <td>{item.amount}</td>

                  <td>
                    <div className="hidden-sm hidden-xs action-buttons d-flex justify-content-around">
                    
                    <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                          id={index}
                          onClick={()=>handleClick(startIndex+index)}
                        >
                          View
                        </button>
                      

                        <Link
                        to={"/editpackage/"+item.package_id}
                        className="text-decoration-none text-white"
                      >
                      <button
                        className="btn text-success border-0"
                      >
                        <i className="bi bi-pencil-fill"></i>
                      </button>
                      </Link>
                      <button
                        className="btn text-danger  border-0"
                        onClick={()=>handleDelete(startIndex+index)}
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
          <Pagination stateData={packages} pageSize={pageSize} setViewRowIndex={setViewRowIndex} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
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
             <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
         <div className="modal-dialog">
           <div className="modal-content">
             <div className="modal-header">
               <h5>View</h5>
               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
             </div>
             <div className="modal-body">
               {viewRowIndex !== null &&
               modaldata.map((item,index)=>(
                 <div key={index} className="text-center">
                   <p className="">
                     <span>Package Name :</span> 
                     <span> {item.packagename}</span>
                   </p>
                   <p className="">
                     <span>Package Description :</span> 
                     <span> {item.packagedescription}</span>
                   </p>
                   <p className="">
                     <span>Price :</span> 
                     <span> {item.amount}</span>
                   </p>
                   <p className="">
                     <span>Service1 :</span> 
                     <span> {item.service1}</span>
                   </p>
                   <p className="">
                     <span>Service2 :</span> 
                     <span> {item.service2}</span>
                   </p>
                   <p className="">
                     <span>Service3 :</span> 
                     <span> {item.service3}</span>
                   </p>
                   <p className="">
                     <span>Service4 :</span> 
                     <span> {item.service4}</span>
                   </p>
                   <p className="">
                     <span>Service5 :</span> 
                     <span> {item.service5}</span>
                   </p>
                   <p className="">
                     <span>Service6 :</span> 
                     <span> {item.service6}</span>
                   </p>
                   <p className="">
                     <span>Service7 :</span> 
                     <span> {item.service7}</span>
                   </p>
                   <p className="">
                     <span>Service8 :</span> 
                     <span> {item.service8}</span>
                   </p>
                   <p className="">
                     <span>Service9 :</span> 
                     <span> {item.service9}</span>
                   </p>
                   <p className="">
                     <span>Service10 :</span> 
                     <span> {item.service10}</span>
                   </p>
                 </div>
    
               ))}
             </div>
             <div className="modal-footer">
               <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
             </div>
           </div>
         </div>
       </div>
    </>
  );
};

export default Managepackage;
