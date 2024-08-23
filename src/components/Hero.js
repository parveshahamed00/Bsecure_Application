import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import VisionMission from "./VisionMission";
import About from "./About";
import Offers from "./Offers";
import Services from "./Services";
import Process from "./Process";
import Achievements from "./Achievements";
import Partners from "./Partners";
import ContactForm from "./ContactForm";
import { toast } from "react-toastify";

function Hero() {
  const today = new Date();

  const shortDate = today.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [occupation, setOccupation] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleOccupationChange = (e) => {
    setOccupation(e.target.value);
    setSelectedProduct(""); // Reset selected product when occupation changes
  };

  const handleProductChange = (e) => {
    setSelectedProduct(e.target.value);
  };

  const getFilteredProducts = () => {
    const allProducts = [
      { label: "Personal Loan", value: "Personal Loan" },
      { label: "Business Loan", value: "Business Loan" },
      { label: "Housing Loan", value: "Housing Loan" },
      { label: "Loan Against Property", value: "Loan Against Property" },
      { label: "Loan Against Security", value: "Loan Against Security" },
      { label: "Auto Loan", value: "Auto Loan" },
      { label: "Education Loan", value: "Education Loan" },
      { label: "Equipment Loan", value: "Equipment Loan" },
      { label: "Credit Loan", value: "Credit Loan" },
      { label: "Life Insurance", value: "Life Insurance" },
      { label: "Health Insurance", value: "Health Insurance" },
      { label: "Property Insurance", value: "Property Insurance" },
      { label: "Others", value: "Others" },
    ];

    if (occupation === "Salaried" || occupation === "Professional") {
      // Exclude Business Loan for Salaried and Professional
      return allProducts.filter((product) => product.value !== "Business Loan");
    } else if (occupation === "Self Employed") {
      // Exclude Personal Loan for Self Employed
      return allProducts.filter((product) => product.value !== "Personal Loan");
    }

    return allProducts; // Return all products by default
  };

  async function formSubmit(e) {
    const form = document.querySelector(".applicationForm");
    e.preventDefault();
    const formdata = new FormData(form);
    // console.log("button clicked",formdata);
    formdata.forEach((value, key) => {
      console.log(key + ": " + value);
    });
    try {
      
      const response= await fetch(
        "https://script.google.com/macros/s/AKfycbzh_9-DPtdKxSGxXoK3w03-JZMndPj5XoZojeL5mXO7FZG2y-YT1Y7GvNgW-rZH59QtKw/exec",
        {
          mode: "no-cors",
          method: "POST",
          body: formdata,
        }
      ).then((response) => {
        console.log("form Stored to sheet");
        toast.success("Form Submitted Successfuly !");
        handleClose();
      }).catch((error) => {
        console.error("Error:", error);
        toast.error("Form submission failed! Please try again.");

      });
    } catch (error) {
      toast.error("Form submission failed! Please try again.");

    }
    //  code to store form data from FORM to SHEET
    
  
    
    // console.log("clicked")
   
  }

  return (
    <div>
      <section id="hero">
        <div className="hero-txt-container p-lg-5 p-3 ">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <h1 className=" display-6  fw-bolder display-lg-6 lh-base text-center">
                  BSECURE CREDIT AND INVESTMENT ADVISORY SERVICES
                </h1>
                <p className="text-light p-3  text-center lh-base mb-5">
                  " EMPOWERING YOUR FINANCIAL FUTURE "
                </p>
              </div>
              <div className="carousel-item">
                <h1 className=" display-6 fw-bolder display-lg-3 lh-base text-center ">
                  {""} WE BRING THE BANKS TO YOU {""}
                </h1>

                <p className="text-light p-3 text-center lh-base w-75 mb-5 mx-auto">
                  <br />
                  WE ARE THE DIRECT SELLING PARTNER OF VARIOUS PRODUCTS FOR MORE
                  THAN 100 BANKS & NBFCs
                </p>
              </div>
              <div className="carousel-item">
                <h1 className=" display-6  display-lg-3 fw-bolder lh-base text-center">
                  OUR EXPERTISE AT YOUR SERVICE
                </h1>
                <p className="text-light p-3 text-center lh-base  mb-5">
                  " LOAN ASSISTANCE | DEBT MANAGEMENT INSURANCE CONSULTING "
                </p>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {/* <button type="button" className="btn btn btn-danger btn-lg mt-4">
        Get a Free Consultant
      </button> */}
        {/* model */}

        <Button
          variant="primary"
          onClick={handleShow}
          className="btn btn btn-danger btn-lg mt-4"
        >
          Get a Free Consultant
        </Button>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <div className="text-center  application-bg">
            <img
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              className="App-logo img-fluid pt-3 pb-3 "
              alt="logo"
              width={200}
            />
          </div>
          <Modal.Header
            closeButton
            closeVariant="white"
            data-bs-theme="light"
            className="enquiry-background "
          >
            <Modal.Title>Enquiry Form</Modal.Title>
          </Modal.Header>

          <Form className="applicationForm pt-3" onSubmit={formSubmit}>
            <Modal.Body>
            <Form.Control
                          type="hidden"
                          name="Date"
                          value={shortDate}
                        
                        />
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className=" mt-3  lable-color">
                  Customer Name
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  name="Name"
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className=" mt-3 lable-color">
                  Email address
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  name="Email"
                  className="mb-3"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formPhoneNumber" className="mb-3">
                <Form.Label className=" mt-3 lable-color">
                  Phone Number
                </Form.Label>
                <Form.Control
                  name="Phone"
                  type="tel"
                  placeholder="Enter 10 digit phone number"
                  pattern="^[0-9]{10}$"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="mt-3 lable-color">
                  Address Pincode
                </Form.Label>
                <Form.Control
                  type="text" // Use "text" to enforce pattern validation.
                  required
                  name="Pincode"
                  placeholder="e.g., 627657"
                  pattern="^[0-9]{6}$"
                  title="Pincode must be exactly 6 digits." // Tooltip message for invalid input.
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="mt-3 lable-color">Occupation</Form.Label>
                <select
                  className="form-select"
                  name="Occupation" // Added name attribute
                  aria-label="Select Occupation"
                  value={occupation}
                  onChange={handleOccupationChange}
                >
                  <option value="" disabled>
                    Select occupation
                  </option>
                  <option value="Salaried">Salaried</option>
                  <option value="Professional">Professional</option>
                  <option value="Self Employed">Self Employed</option>
                  <option value="Others">Others</option>
                </select>
              </Form.Group>

              {occupation && (
                <Form.Group className="mb-3">
                  <Form.Label className="lable-color mt-3">
                    Products Enquiry
                  </Form.Label>
                  <select
                    className="form-select"
                    name="ProductsEnquiry" // Added name attribute
                    aria-label="Select product"
                    value={selectedProduct}
                    onChange={handleProductChange}
                  >
                    <option value="" disabled>
                      Select product
                    </option>

                    {/* Loan Products Group */}
                    <optgroup label="Loan Products">
                      {getFilteredProducts()
                        .filter((product) => product.value.includes("Loan"))
                        .map((product) => (
                          <option key={product.value} value={product.value}>
                            {product.label}
                          </option>
                        ))}
                    </optgroup>

                    {/* Insurance Products Group */}
                    <optgroup label="Insurance Products">
                      {getFilteredProducts()
                        .filter((product) =>
                          product.value.includes("Insurance")
                        )
                        .map((product) => (
                          <option key={product.value} value={product.value}>
                            {product.label}
                          </option>
                        ))}
                    </optgroup>

                    {/* Others Option */}
                    <option value="Others">Others</option>
                  </select>
                </Form.Group>
              )}

              {selectedProduct && selectedProduct.includes("Loan") && (
                <>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="mt-3 lable-color">
                      Loan Amount
                    </Form.Label>
                    <Form.Control
                      type="number"
                      name="LoanAmount" // Added name attribute
                      placeholder="e.g., 100000"
                      min="100000"
                      title="Minimum Loan amount must be 100000."
                      required
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="mt-3 lable-color">
                      Do You have CIBIL Issues?
                    </Form.Label>
                    <div className="input-group mb-3">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="CibilIssues" // Added name attribute
                          id="inlineRadioyes"
                          value="Yes"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineRadioyes"
                        >
                          Yes
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="CibilIssues" // Added name attribute
                          id="inlineRadiono"
                          value="No"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineRadiono"
                        >
                          No
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="CibilIssues" // Added name attribute
                          id="inlineRadiomaybe"
                          value="Maybe"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineRadiomaybe"
                        >
                          Maybe
                        </label>
                      </div>
                    </div>
                  </Form.Group>
                </>
              )}
              <Form.Group className="mb-3">
                <Form.Label className="mt-3 lable-color">
                  Preferred Callback Language
                </Form.Label>
                <select
                  className="form-select"
                  name="Language" // Added name attribute
                >
                  <option value="" disabled>
                    Select Language
                  </option>
                  <option value="Tamil">Tamil</option>
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Telugu">Telugu</option>
                  <option value="Malayalam">Malayalam</option>
                  <option value="Others">Others</option>
                </select>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="mt-3 lable-color ">
                  Preferred Callback Time
                </Form.Label>
                <div className="input-group mb-3">
                  <div className="form-check form-check-inline custom-radio">
                    <input
                      className="form-check-input visually-hidden"
                      type="radio"
                      name="Callback_Time"
                      id="inlineRadio1"
                      value="9-10"
                      required
                    />
                    <label
                      className="form-check-label custom-label"
                      htmlFor="inlineRadio1"
                    >
                      9 am - 10 am
                    </label>
                  </div>
                  <div className="form-check form-check-inline custom-radio">
                    <input
                      className="form-check-input visually-hidden"
                      type="radio"
                      name="Callback_Time"
                      id="inlineRadio2"
                      value="10-11"
                      required
                    />
                    <label
                      className="form-check-label custom-label"
                      htmlFor="inlineRadio2"
                    >
                      10 am - 11 am
                    </label>
                  </div>
                  <div className="form-check form-check-inline custom-radio">
                    <input
                      className="form-check-input visually-hidden"
                      type="radio"
                      name="Callback_Time"
                      id="inlineRadio3"
                      value="11-12"
                      required
                    />
                    <label
                      className="form-check-label custom-label"
                      htmlFor="inlineRadio3"
                    >
                      11 am - 12 pm
                    </label>
                  </div>
                  <div className="form-check form-check-inline custom-radio">
                    <input
                      className="form-check-input visually-hidden"
                      type="radio"
                      name="Callback_Time"
                      id="inlineRadio4"
                      value="3-4"
                      required
                    />
                    <label
                      className="form-check-label custom-label"
                      htmlFor="inlineRadio4"
                    >
                      3 pm - 4 pm
                    </label>
                  </div>
                  <div className="form-check form-check-inline custom-radio">
                    <input
                      className="form-check-input visually-hidden"
                      type="radio"
                      name="Callback_Time"
                      id="inlineRadio5"
                      value="5-6"
                      required
                    />
                    <label
                      className="form-check-label custom-label"
                      htmlFor="inlineRadio5"
                    >
                      5 pm - 6 pm
                    </label>
                  </div>
                  <div className="form-check form-check-inline custom-radio">
                    <input
                      className="form-check-input visually-hidden"
                      type="radio"
                      name="Callback_Time"
                      id="inlineRadio6"
                      value="6-7"
                      required
                    />
                    <label
                      className="form-check-label custom-label"
                      htmlFor="inlineRadio6"
                    >
                      6 pm - 7 pm
                    </label>
                  </div>
                </div>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
              <button class="btn btn-success" type="submit">
                Submit
              </button>
            </Modal.Footer>
          </Form>
        </Modal>
      </section>
      <div>
        <VisionMission></VisionMission>
        <About />
        <Offers />
        <Services />
        <Process />
        <Achievements />
        <Partners />
        <ContactForm />
      </div>
    </div>
  );
}

export default Hero;
