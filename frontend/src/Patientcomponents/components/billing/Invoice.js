import React from "react";
import Menu from "../Menu";
import Navbar from "../Navbar"


const Pinvoice = () => {
  return (
    <>
    <Navbar/>
    <div className="d-flex ">
      <div className="col-2 p-0">
        <Menu />
      </div>
      <div className="col-sm-12 col-md-12 col-lg-10 p-0">
       <div className="m-lg-5 m-2">

       <div className="d-flex justify-content-between">
            <div>
               <h4 className="text-primary"><i className="bi bi-receipt"></i> Customer Invoice</h4>
            </div>
            <div>
                <span>Invoice:&nbsp;<span className="text-danger">#121212</span></span><br/>
                <span>Date:&nbsp;<span className="text-primary">06/11/2023</span></span>

            </div>
        </div>
        <hr/>
        <div className="d-flex">
            <div className="w-50">
                <h6 className="bg-primary p-2 text-white text-center">Company Info</h6>
                <div>
                            <ul className="list-unstyled lh-lg">
                              <li>
                                <i className=" fa fa-caret-right"></i>&nbsp;
                                Street, City
                              </li>

                              <li>
                                <i className="fa fa-caret-right"></i>&nbsp;
                                Zip Code
                              </li>

                              <li>
                                <i className=" fa fa-caret-right"></i>&nbsp;
                                State, Country
                              </li>

                              <li>
                                <i className="fa fa-caret-right"></i>&nbsp;
                                Phone:
                                <b className="text-danger"> 111-111-111</b>
                              </li>

                              <li>
                                <i className="fa fa-caret-right"></i>&nbsp;
                                Paymant Info
                              </li>
                            </ul>
                          </div>
            </div>
            <div className="w-50">
            <h6 className="bg-success p-2 text-white text-center">Customer Info</h6>
            <div>
                            <ul className="list-unstyled lh-lg">
                              <li>
                                <i className="fa fa-caret-right"></i>&nbsp;
                                Street, City
                              </li>

                              <li>
                                <i className="fa fa-caret-right"></i>&nbsp;
                                Zip Code
                              </li>

                              <li>
                                <i className="fa fa-caret-right"></i>&nbsp;
                                State, Country
                              </li>

                              <li>
                                <i className=" fa fa-caret-right"></i>&nbsp;
                                Contact Info
                              </li>
                            </ul>
                          </div>
            </div>
        </div>
        <div>
          <div className="table-responsive">
          <table className="table table-striped table-bordered">
				 <thead>
						<tr>
							<th className="center">#</th>
							<th>Product</th>
							<th className="hidden-xs">Description</th>
							<th className="hidden-480">Discount</th>
							<th>Total</th>
						</tr>
				</thead>

				<tbody>
						<tr>
							<td className="center">1</td>
							<td>
								<a href="https://www.google.com/">google.com</a>
							</td>
							<td className="hidden-xs">
								1 year domain registration
							</td>
							<td className="hidden-480"> --- </td>
							<td>$10</td>
						</tr>

						<tr>
							<td className="center">2</td>
							<td>
								<a href="https://www.google.com/">yahoo.com</a>
							</td>
							<td className="hidden-xs">
								5 year domain registration
							</td>
							<td className="hidden-480"> 5% </td>
							<td>$45</td>
						</tr>

						<tr>
						    <td className="center">3</td>
							<td>Hosting</td>
							<td className="hidden-xs"> 1 year basic hosting </td>
							<td className="hidden-480"> 10% </td>
							<td>$90</td>
						</tr>

						<tr>
							<td className="center">4</td>
							<td>Design</td>
							<td className="hidden-xs"> Theme customization </td>
							<td className="hidden-480"> 50% </td>
							<td>$250</td>
						</tr>
				</tbody>
			</table>
          </div>

		</div>
        <hr/>
        <div className="d-flex justify-content-between">
            <p>Extra Infomrmation</p>
            <p className="fs-4">Total Amount:&nbsp;<span className="text-danger">$395</span></p>
        </div>
        <div className="bg-light p-3 m-2 border">
				Thank you for choosing Ace Company products.
				We believe you will be satisfied by our services.
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

export default Pinvoice;