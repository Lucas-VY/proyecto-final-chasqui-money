import React from "react";
import Sidebar from "../components/Sidebar";
import "../css/DatosPago.css";

const DatosPago = (props) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-xl-2 px-0">
            <Sidebar />
          </div>

          <section className="pricing-section">
            <div className="container">
              <div className="row justify-content-md-center">
                <div className="col-xl-5 col-lg-6 col-md-8">
                  <div className="section-title text-center title-ex1"></div>
                </div>
              </div>
              {/* Pricing Table starts */}
              <div className="row">
                <div className="col-md-6">
                  <div className="price-card ">
                    <h2>Business</h2>
                    <p>For the whole team</p>
                    <p className="price">
                      <span>89</span>/ Month
                    </p>
                    <ul className="pricing-offers">
                      <li>6 Domain Names</li>
                      <li>8 E-Mail Address</li>
                      <li>10GB Disk Space</li>
                      <li>Monthly Bandwidth</li>
                      <li>Powerful Admin Panel</li>
                    </ul>
                    <a href="/" className="btn btn-primary btn-mid">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="col-12 col-md-9 mt-2 mb-3 px-5">
            {/* BODY AQUI */};{/* Etiquetas de cierre global */}
          </div>
        </div>
      </div>
    </>
  );
};

export default DatosPago;
