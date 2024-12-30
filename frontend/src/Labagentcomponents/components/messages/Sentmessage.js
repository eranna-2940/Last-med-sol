import React,{useState,useEffect} from "react";
import Menu from "../Menu";
import Navbar from "../Navbar";
import axios from "axios";
import { useData } from "../../../Admincomponents/components/Datacontext";
import { Link } from "react-router-dom";

const LabagentSentmessage = () => {
  const [info1, setInfo1] = useState([]);
  const [msgdiv , setMsgdiv] = useState(false);
  const [clickedindex, setClickedindex] = useState(0);
  const { labagent } = useData();
  
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/patientsentdata`)
      .then((res) => {
        res.data.map((item) => {
          if (labagent.email === item.fromemail) {
            return setInfo1((prev) => [...prev, item]);
          }
          return null;
        });
      })
      .catch((err) => console.log(err));
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  const handleRowClick = (indexclicked) => {
    info1.map((item,index)=>{
      if(index===indexclicked){
        setMsgdiv(true);
        setClickedindex(index);
      }
      return null;
    })   
  };

  return (
    <>
      <Navbar />
      <div className="d-flex">
        <div className="col-2 p-0">
          <Menu />
        </div>

        <div className="col-10 ">
           
            <div className="d-flex justify-content-between">
              <h4 className="mt-4">Sent Messages</h4>
                <div className="input-group w-25 mt-4">
                <input type="text" className="form-control" name="search_by_name" id="search_by_name" placeholder="Search"/>
                <span>
                <button type="submit" className='form-control'><i className="fa fa-search"></i></button>
                </span>
                </div>
            </div>
            <hr/>
            <div className="d-flex"> 
              <div className="col-md-6">
              <table
                  id="dynamic-table"
                  className="table table-striped table-bordered table-hover dataTable no-footer"
                  role="grid"
                  aria-describedby="dynamic-table_info"
                >
                  <thead>
                    <tr role="row">
                      <th
                        className="sorting"
                        tabIndex="0"
                        aria-controls="dynamic-table"
                        rowSpan="1"
                        colSpan="1"
                      >
                        Subject
                      </th>
                      <th
                        className="sorting"
                        tabIndex="0"
                        aria-controls="dynamic-table"
                        rowSpan="1"
                        colSpan="1"
                      >
                        To
                      </th>
                      <th
                        className="sorting"
                        tabIndex="0"
                        aria-controls="dynamic-table"
                        rowSpan="1"
                        colSpan="1"
                      >
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {info1.length > 0 ? (
                      info1.map((item, index) => {
                            return (
                              <tr key={index} onClick={() => handleRowClick(index)} style={{cursor:"pointer"}}>
                                <td>
                                  {item.subject}
                                </td>
                                <td>{item.toemail}</td>
                                <td>{item.date.slice(0,10)} &nbsp;&nbsp;{item.time}</td>
                              </tr>
                            );
                      })
                    ) : (
                      <tr>
                        <td colSpan={3}>No messages sent</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              <div className="col-md-6 bg-light" id="messagesdiv">
              {msgdiv && 
              (
               info1.map((item, index) => {
                if((index) === (clickedindex)){
                  return (
                    <div key={index}>
                      <p><b>Subject:</b> {item.subject}</p>
                      <p><b>To : </b><Link to="/labagentmessage" state={{email : item.toemail}}>{item.toemail}</Link></p>
                      <p><b>Date:</b>{new Date(item.date).toLocaleDateString('en-GB')} <span className="ps-2">{item.time}</span></p>
                      <p><b>Message:</b> {item.message}</p>
                    </div>
                  )
                }
                return null;
               })
              )}
              </div>

            </div>
        </div>
      </div>
    </>
  );
};

export default LabagentSentmessage;