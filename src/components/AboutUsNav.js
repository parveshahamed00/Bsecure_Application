import React from "react";
import VisionMission from "./VisionMission";
import WhyWe from "./WhyWe";
import CoreValues from "../CoreValues";

const AboutUsNav = () => {
  return (
    <div className="container mt-5">
      <section className="about-us p-4" style={{ backgroundColor: "#f7f8fa" }}>
        <h1 className="text-center mb-4" style={{ color: "#0055aa" }}>
          About Us
        </h1>
        <p className="lh-lg">
          At Bsecure Advisory Services, our mission is driven by a deep
          understanding of the struggles faced by individuals with modest
          incomes and low credit scores. We know that while high-income
          individuals can often secure loans with favorable terms from
          well-known banks, those in the middle class or facing financial
          difficulties frequently encounter rejection and barriers. This
          disparity leaves many feeling lost and disheartened. The frustration
          is further compounded by unethical agents who exploit the desperation
          of these individuals, charging exorbitant fees or making false
          promises. These agents prey on the vulnerability of those in need,
          creating additional stress and mistrust in an already challenging
          situation. Our journey began from a place of empathy and a commitment
          to making a difference.
          <br />
          <br></br>
          We’ve seen firsthand the impact of these predatory practices and felt
          compelled to offer a better path. Unlike bank employees who are bound
          by sales targets and limited to promoting their institution's
          products, we offer a refreshing alternative. Our role is to be a
          beacon of hope and guidance, not tied to any one bank, but dedicated
          to finding the best financial solutions across a broad spectrum of
          institutions. As an authorized Direct Selling Agent (DSA), Bsecure
          Advisory Services is proud to partner with over 100 banks and
          Non-Banking Financial Companies (NBFCs). This extensive network allows
          us to provide unbiased advice and access to competitive loan options
          that are truly tailored to your needs.
          <br></br>
          <br />
          We stand by our promise of integrity and transparency, ensuring that
          our clients receive the most suitable offers without any hidden costs
          or brand bias. Our commitment extends beyond just finding the right
          loan; we provide ongoing support for any bank's products, ensuring
          that you have a trusted ally throughout your financial journey. We are
          here to offer not just services, but reassurance and a sense of
          security, helping you navigate through the complexities with
          confidence and peace of mind. At the heart of Bsecure Advisory
          Services is a genuine desire to uplift and empower those who need it
          most. We are here to turn hope into reality, and to guide you towards
          financial solutions that truly make a difference.
        </p>
      </section>
      <VisionMission />
      <section>
       <CoreValues/>
      </section>
      <br></br>
      <section>
        <WhyWe />
      </section>
      <section>
        <div className="container management-team-section mt-5">
          <h2 className="text-center mb-4 sections-title">
            Our Management Team
          </h2>
          <div className="row">
            <div className="col-md-6 team-member">
              <div className="team-member-card">
                <div className="image-container">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/avathar.png`}
                    alt="CEO"
                    className="team-image"
                  />
                </div>
                <h4 className="member-name">Solomon Arputha Kumar</h4>
                <p className="member-title">CEO and Founder</p>
                <p className="member-description">
                  Solomon Arputha Kumar holds a Bachelor of Engineering and a
                  Master’s degree in Business Administration...
                </p>
              </div>
            </div>

            <div className="col-md-6 team-member">
              <div className="team-member-card">
                <div className="image-container">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/avathar.png`}
                    alt="Executive Director"
                    className="team-image"
                  />
                </div>
                <h4 className="member-name">Gowtham Lingam Sankar</h4>
                <p className="member-title">Executive Director</p>
                <p className="member-description">
                  Gowtham Lingam Sankar brings invaluable experience from his
                  three years working in Dubai...
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-center mt-5 sub-section-title">
            Staff We Celebrate
          </h3>

          <div className="row">
            <div className="col-md-6 team-member">
              <div className="team-member-card">
                <div className="image-container">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/avathar.png`}
                    alt="Branch Manager"
                    className="team-image"
                  />
                </div>
                <h4 className="member-name">Selvaraja M</h4>
                <p className="member-title">Branch Manager, Thisayanvilai</p>
                <p className="member-description">
                  Selvaraja's loyalty, hard work, and commitment have been the
                  backbone of our company's success...
                </p>
              </div>
            </div>

            <div className="col-md-6 team-member">
              <div className="team-member-card">
                <div className="image-container">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/girl-avathar.png`}
                    alt="Operations Manager"
                    className="team-image"
                  />
                </div>
                <h4 className="member-name">Keerthiga K</h4>
                <p className="member-title">Senior Operations Manager</p>
                <p className="member-description">
                  Keerthiga's full commitment and hard work have significantly
                  contributed to the company's growth...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsNav;
