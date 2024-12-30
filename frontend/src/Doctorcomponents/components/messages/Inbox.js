import React,{useState,useEffect} from "react";
import Menu from "../Menu";
import Navbar from "../Navbar";
import axios from "axios";
import { useData } from "../../../Admincomponents/components/Datacontext";
import { Link } from "react-router-dom";

const Doctorinbox = () => {
  const [info1, setInfo1] = useState([]);
  const [msgdiv , setMsgdiv] = useState(false);
  const [clickedindex, setClickedindex] = useState(0);
  const { doctor } = useData();
// eslint-disable-next-line no-unused-vars
  const [values, setValues] = useState({
    toemail: doctor.email,
    status: "read"
  });
  
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/patientsentdata`)
      .then((res) => {
        res.data.map((item) => {
          if (doctor.email === item.toemail) {
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
        if(item.status === "unread"){
          axios.post(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/inbox`, values)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err));
          setMsgdiv(true);
          setClickedindex(index);
        }
        else{
          setMsgdiv(true);
          setClickedindex(index);
        }
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
              <h4 className="mt-4">Inbox</h4>
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
                        From
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
                          if(item.status==="unread"){
                            return (
                              <tr key={index} onClick={() => handleRowClick(index)} style={{cursor:"pointer"}}>
                                <td><b>{item.subject}</b></td>
                                <td><b>{item.fromemail}</b></td>
                                <td><b>{item.date} &nbsp;&nbsp;{item.time}</b></td>
                              </tr>
                            );
                          }
                          else{
                            return (
                              <tr key={index} onClick={() => handleRowClick(index)} style={{cursor:"pointer"}}>
                                <td>
                                  {item.subject}
                                </td>
                                <td>{item.fromemail}</td>
                                <td>{item.date.slice(0,10)} &nbsp;&nbsp;{item.time}</td>
                              </tr>
                            );
                          }
                      })
                    ) : (
                      <tr>
                        <td colSpan={3}>No messages for you</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              <div className="col-md-6 bg-light" id="messagesdiv">
              {msgdiv &&
              (info1.map((item, index) => {
                if((index) === (clickedindex)){
                 return( <div key={index}>
                  <p><b>Subject:</b> {item.subject}</p>
                  <p><b>From:</b> {item.fromemail}</p>
                  <p><b>Date:</b>{new Date(item.date).toLocaleDateString('en-GB')} <span className="ps-2">{item.time}</span></p>
                  <p><b>Message:</b> {item.message}</p>
                  <p className="text-end">
                    <Link to='/doctormessage' state={{ email: item.fromemail }}><button className="btn bodybutton text-white">Reply</button></Link>
                  </p>
                  </div>)
                }
              return null;
              }))
              }
              </div>

            </div>
        </div>
      </div>
    </>
  );
};

export default Doctorinbox;