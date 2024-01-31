import React, { useState } from "react";
import Logo from '../../assets/img/logo.svg';
import Footer from "./footer";
import Header from "./header";
import { FaEuroSign, FaSignInAlt } from "react-icons/fa";

function SubsriptionPage(){
    const [activeTab, setActiveTab] = useState("Zoom");

    const openLink = (animName) => {
      setActiveTab(animName);
    }
  
    return(
        
                <>

                <Header></Header>
                <section className="special spad tabs-section" data-scrollax-parent="true">
    
    <div className="content tabcontainer1">
      <div>
        <div className="w3-sidebar w3-bar-block  w3-card">
          <button className={`w3-bar-item w3-button tablink ${activeTab === 'Zoom' ? 'w3-red' : ''}`} onClick={() => openLink('Zoom')}><i className="fa fa-globe" aria-hidden="true"></i> User Subscription</button>
          <button className={`w3-bar-item w3-button tablink ${activeTab === 'Zoom2' ? 'w3-red' : ''}`} onClick={() => openLink('Zoom2')}><i className="fa fa-globe" aria-hidden="true"></i> Hotel Subscription</button>
          <button className={`w3-bar-item w3-button tablink ${activeTab === 'Zoom3' ? 'w3-red' : ''}`} onClick={() => openLink('Zoom3')}><i className="fa fa-globe" aria-hidden="true"></i> Blog Subscription</button>
        </div>
        <div className="zoom-content">
          <div id="Zoom" className={`w3-container city w3-animate-zoom p-5 ${activeTab === 'Zoom' ? '' : 'hidden'}`}>
          <section>
                <div >
              <div className="container">
                 
                  <div className="row">
                      <div className="col-md-6 col-sm-6">
                          <div className="pricingTable">
                              <div className="pricingTable-header">
                                  <span className="heading">
                                      <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 512 512"><path d="M0 32C0 14.3 14.3 0 32 0H480c17.7 0 32 14.3 32 32s-14.3 32-32 32V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H304V464c0-26.5-21.5-48-48-48s-48 21.5-48 48v48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64C14.3 64 0 49.7 0 32zm96 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zM240 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16h440zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zM112 192c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H112zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16h440c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H368zM328 384c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8H328z"/></svg>
                                  </span>
                              </div>
                              <div className="pricing-plans">
                                  <span className="price-value"><i className="fa fa-eur" aria-hidden="true"><FaEuroSign/></i><span>199</span></span>
                                  <span className="subtitle">Duration : 12 Months</span>
                                  <h4>Current Subcription : basic</h4>
                              </div>
                              <div className="pricingContent">
                                  
                              </div>
        
                              <div className="pricingTable-sign-up">
                                  <a href="#" className="btn btn-block btn-default">Cancel Subscription </a>  
                              </div>
                          </div>
                      </div>
        
                      <div className="col-md-6 col-sm-6">
                          <div className="pricingTable">
                              <div className="pricingTable-header">
                                  <span className="heading">
                                     <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 512 512"><path d="M0 32C0 14.3 14.3 0 32 0H480c17.7 0 32 14.3 32 32s-14.3 32-32 32V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H304V464c0-26.5-21.5-48-48-48s-48 21.5-48 48v48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64C14.3 64 0 49.7 0 32zm96 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zM240 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16h440zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zM112 192c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H112zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16h440c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H368zM328 384c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8H328z"/></svg>
                                  </span>
                              </div>
                              <div className="pricing-plans">
                                  <span className="price-value"><i  aria-hidden="true"><FaEuroSign/></i><span>399</span></span>
                                  <span className="subtitle">Duration : 12 Months</span>
                                  <h4>Package : Hotel Profile</h4>
                              </div>
                              <div className="pricingContent">
                                  
                              </div>
        
                              <div className="pricingTable-sign-up">
                                  <a href="#" className="btn btn-block btn-default">Pay With Card </a> 
                              </div>
                          </div>
                      </div>

                     
                  </div>
              </div>
          </div>
           </section>
          </div>
          <div id="Zoom2" className={`w3-container city w3-animate-zoom p-5 ${activeTab === 'Zoom2' ? '' : 'hidden'}`}>
          <section>
                <div>
              <div className="container">
              
                  <div className="row">
                      <div className="col-md-6 col-sm-6">
                          <div className="pricingTable">
                              <div className="pricingTable-header">
                                  <span className="heading">
                                      <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 512 512"><path d="M0 32C0 14.3 14.3 0 32 0H480c17.7 0 32 14.3 32 32s-14.3 32-32 32V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H304V464c0-26.5-21.5-48-48-48s-48 21.5-48 48v48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64C14.3 64 0 49.7 0 32zm96 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zM240 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16h440zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zM112 192c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H112zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16h440c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H368zM328 384c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8H328z"/></svg>
                                  </span>
                              </div>
                              <div className="pricing-plans">
                                  <span className="price-value"><i className="fa fa-eur" aria-hidden="true"><FaEuroSign/></i><span>199</span></span>
                                  <span className="subtitle">Duration : 12 Months</span>
                                  <h4>Package : Hotel Profile</h4>
                              </div>
                              <div className="pricingContent">
                                  
                              </div>
        
                              <div className="pricingTable-sign-up">
                                  <a href="#" className="btn btn-block btn-default">Pay With Card </a>  
                              </div>
                          </div>
                      </div>
        
                      <div className="col-md-6 col-sm-6">
                          <div className="pricingTable">
                              <div className="pricingTable-header">
                                  <span className="heading">
                                     <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 512 512"><path d="M0 32C0 14.3 14.3 0 32 0H480c17.7 0 32 14.3 32 32s-14.3 32-32 32V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H304V464c0-26.5-21.5-48-48-48s-48 21.5-48 48v48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64C14.3 64 0 49.7 0 32zm96 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zM240 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16h440zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zM112 192c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H112zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16h440c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H368zM328 384c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8H328z"/></svg>
                                  </span>
                              </div>
                              <div className="pricing-plans">
                                  <span className="price-value"><i  aria-hidden="true"><FaEuroSign/></i><span>399</span></span>
                                  <span className="subtitle">Duration : 12 Months</span>
                                  <h4>Package : Hotel Profile</h4>
                              </div>
                              <div className="pricingContent">
                                  
                              </div>
        
                              <div className="pricingTable-sign-up">
                                  <a href="#" className="btn btn-block btn-default">Pay With Card </a> 
                              </div>
                          </div>
                      </div>

                     
                  </div>
              </div>
          </div>
           </section>
          </div>
          <div id="Zoom3" className={`w3-container city w3-animate-zoom p-5 ${activeTab === 'Zoom3' ? '' : 'hidden'}`}>

          <section>
                <div >
              <div className="container">
                 
        
                  <div className="row">
                      <div className="col-md-6 col-sm-6">
                          <div className="pricingTable">
                              <div className="pricingTable-header">
                                  <span className="heading">
                                      <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 512 512"><path d="M0 32C0 14.3 14.3 0 32 0H480c17.7 0 32 14.3 32 32s-14.3 32-32 32V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H304V464c0-26.5-21.5-48-48-48s-48 21.5-48 48v48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64C14.3 64 0 49.7 0 32zm96 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zM240 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16h440zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zM112 192c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H112zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16h440c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H368zM328 384c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8H328z"/></svg>
                                  </span>
                              </div>
                              <div className="pricing-plans">
                                  <span className="price-value"><i className="fa fa-eur" aria-hidden="true"><FaEuroSign/></i><span>199</span></span>
                                  <span className="subtitle">Duration : 12 Months</span>
                                  <h4>Package : Blog Profile</h4>
                              </div>
                              <div className="pricingContent">
                                  
                              </div>
        
                              <div className="pricingTable-sign-up">
                                  <a href="#" className="btn btn-block btn-default">Pay With Card</a>  
                              </div>
                          </div>
                      </div>
        
                      <div className="col-md-6 col-sm-6">
                          <div className="pricingTable">
                              <div className="pricingTable-header">
                                  <span className="heading">
                                     <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 512 512"><path d="M0 32C0 14.3 14.3 0 32 0H480c17.7 0 32 14.3 32 32s-14.3 32-32 32V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H304V464c0-26.5-21.5-48-48-48s-48 21.5-48 48v48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64C14.3 64 0 49.7 0 32zm96 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zM240 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16h440zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zM112 192c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H112zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16h440c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H368zM328 384c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8H328z"/></svg>
                                  </span>
                              </div>
                              <div className="pricing-plans">
                                  <span className="price-value"><i  aria-hidden="true"><FaEuroSign/></i><span>399</span></span>
                                  <span className="subtitle">Duration : 12 Months</span>
                                  <h4>Package : Blog Profile</h4>
                              </div>
                              <div className="pricingContent">
                                  
                              </div>
        
                              <div className="pricingTable-sign-up">
                                  <a href="#" className="btn btn-block btn-default">Pay With Card </a> 
                              </div>
                          </div>
                      </div>

                     
                  </div>
              </div>
          </div>
           </section>          </div>
        </div>
      </div>
    </div>
   
  </section>






      
           <Footer/>
           </>   
    )
}
export default SubsriptionPage