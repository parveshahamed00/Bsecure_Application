import React from "react";

function VisionMission() {
  return (
    <section id="vm" className="p-5">
      <div className="row  gy-4 vm-row  ">
        <div className="col col-12 col-md-6 ">
          <h1 className="text-center mb-4">Our Vision</h1>
          <p className="lh-lg  fs-5 ">
            At bsecure, we envision a future where every individual and business
            can confidently achieve their financial dreams with our
            unparalleled, premium advisory services. We strive to be the beacon
            of trust and the foremost choice in credit and investment guidance,
            relentlessly reaching more people and setting the standard for
            excellence in advisory services. Our passion is to ignite financial
            empowerment, driving success and prosperity for all."
          </p>
        </div>
        <div className="col col-12 col-md-6">
          <h1 className="text-center mb-4">Our Mission</h1>
          <div class="accordion accordion-flush " id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  <i className="bi bi-house-check-fill"></i> HOUSING LOAN
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  At bsecure, our mission is to make homeownership accessible
                  for people from all walks of life through reliable housing
                  loans at lower interest rates. With free consultations and a
                  quick, transparent, and simple loan process, we aim to
                  facilitate 3,000 housing loans annually, empowering clients to
                  confidently achieve their dream homes.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  <i className="bi bi-person-fill-check"></i> PERSONAL LOAN
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  At Bsecure, our mission is to confidently disburse 600 crores
                  annually in personal loans, solidifying our position as the
                  foremost advisor in the personal loan sector. We strive to be
                  the number one choice for personal loans among corporate and
                  government staff, delivering swift and superior financial
                  solutions. With a relentless focus on excellence and
                  market-leading deals, we empower our clients to achieve their
                  financial aspirations with unwavering confidence and trust in
                  our expertise.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  <i className="bi bi-briefcase-fill"></i>
                  BUSINESS LOAN
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  At bsecure, our mission is to empower businesses of all sizes
                  to achieve their growth potential through reliable and
                  accessible business loan solutions at competitive rates. With
                  free consultations and a quick, transparent, and
                  straightforward application process, we aim to facilitate
                  2,000 business loans annually, helping entrepreneurs and
                  companies confidently drive their success.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  <i className="bi bi-bar-chart-fill"></i> LOAN AGAINST PROPERTY
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  At Bsecure Advisory Services, our mission is to provide a
                  lifeline to individuals and businesses struggling with
                  multiple high-interest loans through our loan against property
                  solutions. We aim to help clients consolidate their debts into
                  one manageable loan with lower interest rates, longer tenors,
                  and smaller EMIs. Our goal is to save them from potential
                  financial distress and CIBIL score issues, offering a clear
                  path out of debt. By reducing the EMI burden and lowering
                  interest rates, we strive to support and assist 3,000 clients
                  annually in achieving financial stability and peace of mind.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionMission;
