import React from "react";

function LoanSolution() {
  return (
    <section id="loan-soln" className="py-5">
      <div className="container py-5">
        <div className="row gy-4 border border-danger border-4 rounded">
          <div className="col-12 col-md-5 text-center">
            <h1 className="display-2">Loan Solutions</h1>
            <img
              src={`${process.env.PUBLIC_URL}/images/loanSolution.png`}
              className="img-fluid my-5"
              alt="Loan Solutions"
            />
          </div>
          <div className="col-12 col-md-7 d-flex align-items-center">
            <div className="row g-3">
              <div className="col-md-6 col-12">
                <div className="card loan-card">
                  <i className="bi bi-person-fill-check icon"></i>
                  <p className="h5 my-2">PERSONAL LOAN</p>
                  <p>
                    Flexible and convenient loans to cover your personal
                    financial needs.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="card loan-card">
                  <i className="bi bi-house-check-fill icon"></i>
                  <p className="h5 my-2">HOUSING LOAN</p>
                  <p>
                    Make homeownership a reality with our reliable housing loans
                    at lower interest rates.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="card loan-card">
                  <i className="bi bi-briefcase-fill icon"></i>
                  <p className="h5 my-2">BUSINESS LOAN</p>
                  <p>
                    Empower your business with accessible financing solutions
                    designed to help you achieve your growth potential.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="card loan-card">
                  <i className="bi bi-bar-chart-fill icon"></i>
                  <p className="h5 my-2">LOAN AGAINST PROPERTY</p>
                  <p>
                    Unlock the value of your property with loans against
                    property for your personal or business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-3 py-3 bottom-div">
            <div className="col-md-6 col-12">
              <div className="card loan-card">
                <i className="bi bi-shield-check icon"></i>
                <p className="h5 my-2">LOAN AGAINST SECURITIES</p>
                <p>
                  Leverage your investments to secure a loan without liquidating
                  your assets.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="card loan-card">
                <i className="bi bi-car-front icon"></i>
                <p className="h5 my-2">AUTO LOAN</p>
                <p>
                  Drive your dream car with our competitive auto loan options.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="card loan-card">
                <i className="bi bi-book-fill icon"></i>
                <p className="h5 my-2">EDUCATION LOAN</p>
                <p>
                  Invest in your future with our education loans designed to
                  cover tuition and other educational expenses.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="card loan-card">
                <i className="bi bi-sliders icon"></i>
                <p className="h5 my-2">EQUIPMENT LOAN</p>
                <p>
                  Equip your business with the necessary tools and machinery
                  through our equipment loan solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoanSolution;
