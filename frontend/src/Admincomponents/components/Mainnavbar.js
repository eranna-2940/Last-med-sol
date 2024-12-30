import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useData } from './Datacontext';
import cart from '../images/medical-cart.png'
import axios from  'axios';

export default function Mainnavbar() {
  const {cartItems,removeFromCart ,setGuest_plans,guest_plans } = useData();

  useEffect(()=>{
    const updateGuestProduct = () => {
      const products = JSON.parse(sessionStorage.getItem("guest_plans")) || [];
      setGuest_plans(products);
    };
    updateGuestProduct();
    window.addEventListener("storage", updateGuestProduct);
    return () => {
      window.removeEventListener("storage", updateGuestProduct);
    };
  },[setGuest_plans])

  const createPayment = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/createPayment`, { cartItems });
      window.location.href = response.data.redirectUrl;
    } catch (error) {
      console.error('Error creating payment:', error.response ? error.response.data : error.message);
    }
  };
  return (
    <>

<nav className="navbar navbar-expand-md sticky-top  bg-success d-flex justify-content-between">
   <div className="navbar-brand text-white">
          <i className="bi bi-heart-pulse-fill ms-3"></i>
          <b> Prev</b>Medsol
    </div>
    
    <button className="navbar-toggler bg-light m-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-light d-md-flex justify-content-end" id="navbarSupportedContent">
     
              <NavLink className="nav-link  p-2 pt-md-0 pb-md-0 pe-2 ps-4 me-md-2" to="/">
                  Home
              </NavLink>
            
              <NavLink className="nav-link p-2 pt-md-0 pb-md-0  pe-2 ps-4 me-md-2" to="/plans">
                  Plans
              </NavLink>
           
              <NavLink className="nav-link p-2 pt-md-0 pb-md-0  pe-2 ps-4 me-md-2" to="/register">
                      Register
              </NavLink>
              <div className="btn-group p-2 pt-md-0 pb-md-0  pe-2 ps-3 me-md-2">
                        <button
                          type="button"
                          className="btn border-0 text-white dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Login
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark">
                          <li>
                            <button className="dropdown-item" type="button">
                              <Link className="nav-link" to="/adminpage">
                                Admin Login
                              </Link>
                            </button>
                          </li>
    
                          <li>
                            <button className="dropdown-item" type="button">
                              <Link className="nav-link" to="/superadminpage">
                                Superadmin Login
                              </Link>
                            </button>
                          </li>
                          <li>
                            <button className="dropdown-item" type="button">
                              <Link className="nav-link" to="/frontoffice">
                                Front office Login
                              </Link>
                            </button>
                          </li>
                          <li>
                            <button className="dropdown-item" type="button">
                              <Link className="nav-link" to="/doctor">
                                Doctor Login
                              </Link>
                            </button>
                          </li>
                          <li>
                            <button className="dropdown-item" type="button">
                              <Link className="nav-link" to="/patient">
                                Patient Login
                              </Link>
                            </button>
                          </li>
                          <li>
                            <button className="dropdown-item" type="button">
                              <Link className="nav-link" to="/lab">
                                Lab Login
                              </Link>
                            </button>
                          </li>
                        </ul>
              </div>
              <div>
              <button className="btn cartBtn text-white p-2 pt-md-0 pb-md-0 pe-2 ps-4 me-md-4"  data-bs-toggle="modal" data-bs-target="#myModal"><img src={cart} width="30px" alt="cart"/> {guest_plans.length}</button>
              </div>
    </div> 
</nav>


    {/* modal */}
    <div className="modal" id="myModal">
          <div className="modal-dialog modal-md">
            <div className="modal-content">

              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>

              <div className="modal-body" id='showmod'></div>
              <div className='text-center m-2'>
              <h2>Your Cart </h2>
              <hr/>
            <div className="card-header">
           </div>
            {guest_plans.map((item,index) => (

            <div
              className="card  m-3" style={{background:'beige',color:'black'}} key={index}>
                
              <div className="card-body ">
                <p className="fs-4"> {item.packagename} : &#8377; {item.amount.toLocaleString()} {item.month}</p>
              </div>
              <div
                className="card-footer">
                <button type="button" className="btn btn-success m-2" data-bs-dismiss="modal" onClick={createPayment}>Add</button>
                <button type="button" className="btn btn-danger" onClick={() => removeFromCart(item.cart_id)}>Remove</button>

              </div>
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
}
