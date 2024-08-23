import React from "react";
import LoanSolution from "./LoanSolution";
function Services() {
  return (
    <div>
      
    <section id="services" className="pb-5">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#F92D55"
          fill-opacity="1"
          d="M0,64L48,96C96,128,192,192,288,197.3C384,203,480,149,576,117.3C672,85,768,75,864,85.3C960,96,1056,128,1152,165.3C1248,203,1344,245,1392,266.7L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <div className="container  ">
        <h1 className="text-center display-4 py-5">Our Services</h1>
        <div className="row">
          <div className="col-12 col-md-5  order-2 my-auto">
            <img
              src={`${process.env.PUBLIC_URL}/images/service.png`}
              class="img-fluid"
              alt="img"
            />
          </div>
          <div className="col col-md-7 order-1">
            <div>
              <h1 className="display-3">Our Journey in Financial services</h1>
              <h2 className="py-3 ">
                Explore our services: housing, personal, business loans, loans
                against property, life, health insurance.
              </h2>
              <p>
                Our Journey in Financial Services Discover how we became leaders
                in providing financial advisory and loan agency services. At
                BSECURE ADVISORY SERVICES, we specialize in finding unique
                financial solutions for individuals and businesses. Our
                expertise and experience enable us to craft tailored financial
                products and services that align with your core financial
                objectives.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container cards">
        <div className="row mt-5 gy-4">
          <div className="col-12 col-md-3">
            <i class="bi bi-bar-chart-steps"></i>
            <h4 className="my-3">Loan Development</h4>
            <p>
            Our team specializes in developing loan strategies tailored to your financial goals and aspirations.
            </p>
          </div>
          <div className="col-12 col-md-3">
            <i class="bi bi-bounding-box-circles"></i>
            <h4 className="my-3">Data-Driven Advice</h4>
            <p>
            Leverage our data-driven advice to make informed financial decisions and optimize your financial portfolio.
            </p>
          </div>
          <div className="col-12 col-md-3">
            <i class="bi bi-bank2"></i>
            <h4 className="my-3">Financial Planning</h4>
            <p>
            We provide expert operational and financial planning to help you achieve sustainable financial growth.
            </p>
          </div>
          <div className="col-12 col-md-3">
            <i class="bi bi-currency-exchange"></i>
            <h4 className="my-3">Project Financing</h4>
            <p>
            Let us guide you through the process of securing project financing with our expert financial advisory services.
            </p>
          </div>
        </div>
      </div> */}
      
    </section>
    <div>
      <LoanSolution></LoanSolution>

      </div>
    </div>
  );
}

export default Services;
