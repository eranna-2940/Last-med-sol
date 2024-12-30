import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <>
 <div className='d-md-flex flex-wrap justify-content-around bg-dark text-white p-3 footer1'>
  <div className="col-md-4">
    <h5 className='mb-4'>About</h5>
    <p style={{ marginBottom: '10px', textAlign: 'justify' }}>
      The Prevmedsol is designed in a very user-friendly way. The website intends to
      provide a very dynamic and an interactive environment to all the visitors.
    </p>
    <p style={{ marginBottom: '10px', textAlign: 'justify' }}>
      The website provides all the information regarding infrastructure,
      departments, the management structure, and the functioning of the hospital.
    </p>
</div>
        <div className="col-md-3">
          <h5 className='mb-4'>Our Services</h5>
         <div className="d-md-flex">
         <div className='me-3'>
            <span><Link to="/plans" className='text-decoration-none text-light'><i className="bi bi-chevron-double-right"></i> Plans</Link></span> <hr style={{ margin: '5px 0' }}/>
            <span><Link to="/register" className='text-decoration-none text-light'><i className="bi bi-chevron-double-right"></i> Register</Link></span> <hr style={{ margin: '5px 0' }}/>
            <span><Link to="/patient" className='text-decoration-none text-light'><i className="bi bi-chevron-double-right"></i> Patient Login</Link></span> <hr style={{ margin: '5px 0' }}/>
            <span><Link to="/doctor" className='text-decoration-none text-light'><i className="bi bi-chevron-double-right"></i> Doctor Login</Link></span> <hr style={{ margin: '5px 0' }}/>
          </div>
          <div>
          <span><Link to="/superadminpage" className='text-decoration-none text-light'><i className="bi bi-chevron-double-right"></i> Superadmin Login</Link></span>
            <hr style={{ margin: '5px 0' }} />
            <span><Link to="/frontoffice" className='text-decoration-none text-light'><i className="bi bi-chevron-double-right"></i> Front Office Login</Link></span>
            <hr style={{ margin: '5px 0' }} />
            <span><Link to="/lab" className='text-decoration-none text-light'><i className="bi bi-chevron-double-right"></i> Lab Login</Link></span>
            <hr style={{ margin: '5px 0' }} />
                    </div>

         </div>
        </div>
        <div className=" col-md-3 ">
          <h5 className='mb-4'>Get in touch</h5>
          <p><i className="bi bi-geo-alt-fill"></i>&nbsp;:&nbsp;Hi-Tech City, Hyderabad, Telangana, 500081.</p>
          <p ><a href="mailto:{prevmedsol@gmail.com}" className='text-light text-decoration-none'><i className="bi bi-envelope-fill text-light"></i>&nbsp;:&nbsp;prevmedsol@gmail.com</a></p>

        </div>
        <div className="col-md-2">
          <h5 className='mb-4'>Follow Us</h5>
           <div>
            <a href='https://www.facebook.com/' className='text-light'><span style={{cursor:"pointer"}}><i className="bi bi-facebook fs-3 ms-2 me-2"></i></span></a>
            <a href='https://www.instagram.com/accounts/login/' className='text-light'><span style={{cursor:"pointer"}}><i className="bi bi-instagram fs-3 ms-2 me-2"></i></span></a>
            <a href='https://www.linkedin.com/login' className='text-light'><span style={{cursor:"pointer"}}><i className="bi bi-linkedin fs-3 ms-2 me-2"></i></span></a>
           </div>
        </div>

       </div>
      <footer className="main-footer font-small text-light p-2" >
        <div className="footer-copyright text-center">Copyright © 2023
          <span className='text-warning'> Prevmedsol </span>All Rights Reserved. 
          <span className='text-warning'> Terms </span> | <span className='text-warning'> Privacy Policy</span>
        </div>
      </footer>
      </>
  );
};
export default Footer;