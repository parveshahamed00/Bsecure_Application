import React from "react";

function Process() {
  return (
    <section id="process" className="">
        
      <h1 className="display-2">Our Process</h1>
      <h4 className="text-center "> The Blueprint for Financial Success

</h4>

      <div className="bg mt-2">
        <div className="container">
          <div className="row p-5">
            <div className="col-md-12">
              <div className="main-timeline">
                <div className="timeline">
                  <a href="#" className="timeline-content">
                    <div className="timeline-icon">
                      <i class="bi bi-search"></i>
                    </div>
                    <h3 className="title">1. Analysis & Customization</h3>
                    <p className="description">
                    We begin by conducting a thorough analysis of your
financial needs and goals. This involves understanding your current financial situation, credit
profile, and specific loan requirements. Based on this analysis, we customize our approach to
best meet your individual needs.

                    </p>
                  </a>
                </div>
                <div className="timeline">
                  <a href="#" className="timeline-content">
                    <div className="timeline-icon">
                      <i class="bi bi-toggles"></i>{" "}
                    </div>
                    <h3 className="title">2. Tailored Strategy</h3>
                    <p className="description">
                    After understanding your needs, we develop a tailored strategy to find
the most suitable loan products for you. We compare various options from over 100 banks
and NBFCs, ensuring that you get the best terms and conditions available in the market.
                    </p>
                  </a>
                </div>
                <div className="timeline">
                  <a href="#" className="timeline-content">
                    <div className="timeline-icon">
                      <i class="bi bi-sort-up"></i>{" "}
                    </div>
                    <h3 className="title">3. Execution Excellence</h3>
                    <p className="description">
                    With the strategy in place, we assist you in every step of the loan
application process. From documentation and form filling to submission and follow-ups, we
ensure a smooth and efficient process, aiming for quick approval and disbursement of funds.
                    </p>
                  </a>
                </div>
                <div className="timeline">
                  <a href="#" className="timeline-content">
                    <div className="timeline-icon">
                      <i class="bi bi-arrows-fullscreen"></i>{" "}
                    </div>
                    <h3 className="title">4. Ongoing Support</h3>
                    <p className="description">
                    Our support doesn't end with the disbursement of your loan. We
provide ongoing assistance to help you manage your loan effectively, including repayment
planning and addressing any issues that may arise. We are committed to being your trusted
partner throughout the entire loan lifecycle.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
