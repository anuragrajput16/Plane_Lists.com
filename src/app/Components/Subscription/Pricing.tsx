import React from "react";
import planListLog from "../../../Assets/PricingImages/pricingPlaneList-log.png";
import basic1MonthImg from "../../../Assets/PricingImages/basic1monthIMg.png";
import joinAndSubscribe from "../../../Assets/PricingImages/7dayFreetrialImg.png";
import img1 from "../../../Assets/PricingImages/Add-on.png";
import free from "../../../Assets/PricingImages/Free.png";
import Lorem from "../../../Assets/PricingImages/Lorem.png";
import standard from "../../../Assets/PricingImages/Standard.png";
import inApp from "../../../Assets/PricingImages/inapp.png";
import join from "../../../Assets/PricingImages/join.png";
import premium from "../../../Assets/PricingImages/premium.png";
import seeMore from "../../../Assets/PricingImages/seeMore.png";

import { Link } from "react-router-dom";
export const Pricing = () => {
  return (
    <>
      <div
        id="hs_cos_wrapper_widget_1604099686647"
        className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module"
        style={{}}
        data-hs-cos-general-type="widget"
        data-hs-cos-type="module"
      >
        <span
          id="hs_cos_wrapper_main_flexible_column"
          className="hs_cos_wrapper hs_cos_wrapper_widget_container hs_cos_wrapper_type_widget_container bg-secondary"
          style={{}}
          data-hs-cos-general-type="widget_container"
          data-hs-cos-type="widget_container"
        >
          <div
            id="hs_cos_wrapper_widget_1604340283000"
            className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module"
            style={{ background: "#EDF1D1" }}
            data-hs-cos-general-type="widget"
            data-hs-cos-type="module"
          >
            {/* Label For Modules Data Page */}
            <div className="sr-cards-grid-02 bg-secondary sr-padding-full prototype-no-background widget_1604340283000">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-10 offset-md-1">
                    <div className="cards row">
                      <div className="col-lg-6 col-md-6  "style={{
                          
                            borderRadius: "20px",
                          }}>
                        <div
                          className="card card-1 text-center  rounded"
                          style={{
                            background: "black",
                            color: "white",
                            borderRadius: "20px !important",
                          }}
                        >
                          <div className="card-inner">
                            <div className="text-wrapper">
                              <p>
                                <img
                                  src={planListLog}
                                  alt="PlaneList"
                                  width={330}
                                  srcSet=""
                                  sizes="(max-width: 178px) 100vw, 178px"
                                />
                              </p>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <img
                                  src={basic1MonthImg}
                                  alt="$9.95"
                                  width={220}
                                  sizes="(max-width: 220px) 100vw, 220px"
                                />
                                <br />
                               <div className="pt-3 pb-3"> 10 Download</div> 
                                <br />
                                <Link to="">
                                  <img
                                    src={joinAndSubscribe}
                                    alt="Free 7 Day Trial"
                                    width={252}
                                    sizes="(max-width: 252px) 100vw, 252px"
                                  />
                                </Link>{" "}
                              </div>
                              <div className="col-md-6">
                                <h4 className="pricing-card-head ">
                                  {" "}
                                  MONTHLY&nbsp;
                                </h4>
                                Price is per month.
                                <br />
                                Your account will be
                                <br />
                                charged each month
                                <br />
                                on the day of purchased
                                <br />
                                until cancelled.
                                <br />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-3 col-md-6 ">
                        <div
                          className="card card-2 text-center"
                          style={{
                            background:
                              'url("https://www.propstream.com/hubfs/add%20on.png") no-repeat 0 0 #ffffff',
                          }}
                        >
                          <div className="card-inner">
                            <div className="card-image sr-spacer-bottom-25">
                              {" "}
                              <img
                                src={standard}
                               
                                alt="Superior Inbound Material"
                              />{" "}
                            </div>
                            <h4 className="pricing-card-head">
                            Three Months
                            </h4>
                            <strong className="text-black">Unlimited Downloads</strong>
                            <div className="text-wrapper  ">
                              Price is for One Year. <br />
                               Your account will be charged  <br />
                               yearly from the date of  <br />
                               purchased until cancelled. <br />
                       
                              <div className="btn-wrapper btn-outline-primary-wrapper sr-spacer-top-25">
                                {" "}
                                <Link to="" className="cta_button">
                                JOIN AND SUBSCRIBE
                                </Link>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 ">
                        <div
                          className="card card-2 text-center"
                          style={{
                            background:
                              'url("https://www.propstream.com/hubfs/add%20on.png") no-repeat 0 0 #ffffff',
                          }}
                        >
                          <div className="card-inner">
                            <div className="card-image sr-spacer-bottom-25">
                              {" "}
                              <img
                                src={premium}
                                alt="Superior Inbound Material"
                              />{" "}
                            </div>
                            <h4 className="pricing-card-head">One Year</h4>
                                <strong className="text-black">Unlimited Downloads</strong>
                            <div className="text-wrapper  ">
                              Full Access to PropStream
                              <br />
                              Managed Permissions &amp; Access Levels
                              <br />
                              Up to 5 Team Members/Account
                              <br />
                              <div className="btn-wrapper btn-outline-primary-wrapper sr-spacer-top-25">
                                {" "}
                                <Link to="" className="cta_button">
                                JOIN AND SUBSCRIBE
                                </Link>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-6 ">
                        <div
                          className="card card-4 text-center"
                          style={{
                            background:
                              'url("https://www.propstream.com/hubfs/in-app-purchase.png") no-repeat 0 0 #ffffff',
                          }}
                        >
                          <div className="card-inner">
                            <h4 className="pricing-card-head">
                            Lorem ipsum 
                            </h4>
                            <div className="row">
                              <div className="col-md-4">
                                <img
                                        src={Lorem}
                                  alt="48c"
                                />
                                  <p>
                                  <br />
                                  
                                  Lorem ipsum
                                </p>
                              </div>
                              <div className="col-md-4">
                                <img
                                  src={Lorem}
                                  alt="12c"
                                />
                                   <p>
                                  <br />
                                  
                                  Lorem ipsum
                                </p>
                              </div>
                              <div className="col-md-4">
                                <img
                                  src={Lorem}
                                  alt="2c"
                                />
                                <p>
                                  <br />
                                  
                                  Lorem ipsum
                                </p>
                              </div>
                            </div>
                            <div className="text-wrapper  ">
                             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam corporis perspiciatis sit? Placeat, sequi? Incidunt, aspernatur facilis voluptatum veritatis ullam quibusdam sequi minima sint similique temporibus quaerat corrupti, molestias tempore? <br />
                              * With a List Automator Subscription
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 ">
                        <div
                          className="card card-2 text-center"
                          style={{
                            background:
                              'url("https://www.propstream.com/hubfs/add%20on.png") no-repeat 0 0 #ffffff',
                          }}
                        >
                          <div className="card-inner">
                            <div className="card-image sr-spacer-bottom-25">
                              {" "}
                              <img
                                src={free}
                                alt="Superior Inbound Material"
                              />{" "}
                            </div>
                            <h4 className="pricing-card-head">Mobile Scout</h4>
                            <div className="text-wrapper  ">
                              "Drive" Feature Access
                              <br />
                              Tag &amp; Share Properties
                              <br />
                              Up to 10 Scouts/Account
                              <br />
                              <div className="btn-wrapper btn-outline-primary-wrapper sr-spacer-top-25">
                                {" "}
                                <Link to=""  className="cta_button">
                                SEE MORE
                                </Link>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>{" "}
      </div>
    </>
  );
};
