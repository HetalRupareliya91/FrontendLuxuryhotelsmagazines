import React from "react";
import Header from "./header";
import Footer from "./footer";

function Profile() {
    return(
        <>
<Header/>
 <div className="container">
 <div className="main-body">
    <div className="row">
       <div className="col-lg-4 p-0 mt-3">
          <div className="card">
             <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                   <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Admin" className="rounded-circle p-1" width="110"/>
                   <div className="   ">
                      <h4>John Doe</h4>
                      
                   </div>
                </div>
                <hr className="m-0"/>
                <ul className="list-group list-group-flush">
                   <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap px-2">
                      <h6 className="m-0">Current Subcription</h6>
                     <b><span className="text-dark"><i className="fa fa-eur" aria-hidden="true"></i>199</span></b>
                   </li>
                   <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap px-2">
                      <h6 className="m-0">Expiry Date</h6>
                      <b><span className="text-dark">31/12/2024</span></b>
                   </li>
                   
                </ul>
                <div className="row ">
                   <div className="col-lg-6 mt-3"><button className="btn btn-block btn-default w-100">Cancel Subcription</button></div>
                   <div className="col-lg-6 mt-3"><button className="btn btn-block btn-default w-100">Update Subcription</button></div>
                </div>
             </div>
          </div>
       </div>
       <div className="col-lg-8 p-0 mt-3">
          <div className="card">
             <div className="card-body">
                <div className="row mb-3">
                   <div className="col-sm-3">
                      <h6 className="mb-0">Full Name</h6>
                   </div>
                   <div className="col-sm-9 text-secondary">
                      <input type="text" className="form-control" value="John Doe"/>
                   </div>
                </div>
                <div className="row mb-3">
                   <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                   </div>
                   <div className="col-sm-9 text-secondary">
                      <input type="text" className="form-control" value="john@example.com"/>
                   </div>
                </div>
                <div className="row mb-3">
                   <div className="col-sm-3">
                      <h6 className="mb-0">Paaword</h6>
                   </div>
                   <div className="col-sm-9 text-secondary">
                      <input type="password" className="form-control" value="(239) 816-9029"/>
                   </div>
                </div>
                <div className="row mb-3">
                   <div className="col-sm-3">
                      <h6 className="mb-0">Confirm Password</h6>
                   </div>
                   <div className="col-sm-9 text-secondary">
                      <input type="password" className="form-control" value="(320) 380-4539"/>
                   </div>
                </div>
                
                <div className="row">
                   <div className="col-sm-3"></div>
                   <div className="col-sm-9 text-secondary">
                      <input type="button" className="btn btn-block btn-default" value="Save Changes"/>
                   </div>
                </div>
             </div>
          </div>
   
       </div>
    </div>
 </div>
</div>
<Footer/>
</>
 
    );
}
export default Profile