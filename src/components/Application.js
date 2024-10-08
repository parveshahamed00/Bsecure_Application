import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { FormGroup } from "react-bootstrap";
const Application = () => {
  const today = new Date();

  const shortDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [maritalStatus, setMaritalStatus] = useState("");
  const [coApplicant, setCoApplicant] = useState("");

  const [spouseName, setSpouseName] = useState("");
  const [spouseDob, setSpouseDob] = useState("");
  const handleSpouseDob = (e) => {
    setSpouseDob(e.target.value);
  };
  const [coDob, setCoDob] = useState("");

  const handleCoDob = (e) => {
    setCoDob(e.target.value);
  };
  // Permanent Address
  const [isPermanentAddress, setIsPermanentAddress] = useState("");
  const handlePermanentAddress = (event) => {
    setIsPermanentAddress(event.target.value);
  };
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };
  const [resident, setResident] = useState("");
  const [rental, setRental] = useState("");
  // -- phoneNO
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [next, setNext] = useState("");
  const [formData, setFormData] = useState({});
  const [isOTPRequested, setIsOTPRequested] = useState(false);
  const [isOTPVerificationVisible, setIsOTPVerificationVisible] =
    useState(false);

  // Use state to manage user details
  const [userDetails, setUserDetails] = useState({
    countryCode: "",
    phoneNo: "",
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    const regex = /^[0-9]{0,10}$/;
    // Check if the input matches the regex
    if (regex.test(value)) {
      setPhoneNumber(value);
      setError("");
    } else {
      setError("Phone number should be 10 digits");
    }
  };
  // -- Alter PhoneNO
  const [alphoneNumber, setalPhoneNumber] = useState("");
  const [alerror, setalError] = useState("");
  const alhandlePhoneNumberChange = (e) => {
    const value = e.target.value;
    const regex = /^[0-9]{0,10}$/;
    // Check if the input matches the regex
    if (regex.test(value)) {
      setalPhoneNumber(value);
      setalError("");
    } else {
      setalError("Phone number should be 10 digits");
    }
  };
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  const handleMaritalStatusChange = (event) => {
    setMaritalStatus(event.target.value);
  };
  const handleCoApplicant = (event) => {
    setCoApplicant(event.target.value);
  };
  const handleResidentChange = (event) => {
    setResident(event.target.value);
  };

  // Submit Logic
  function formSubmit(e) {
    e.preventDefault();
    const form = document.querySelector(".applicationForm");
    let formdata = new FormData(form);
    let updatedFormData = {};

    // Convert FormData to an object and merge with the existing form data
    formdata.forEach((value, key) => {
      updatedFormData[key] = value;
    });

    setFormData((prevData) => ({
      ...prevData,
      ...updatedFormData,
    }));

    const formName = e.target.name;

    // Navigate between sections based on formName and show OTP verification at the end
    if (formName === "form1") {
      setNext("next"); // Navigate to the next section
    } else if (formName === "form2") {
      setNext("next2");
    } else if (formName === "form3") {
      setNext("next3");
    } else if (formName === "form4") {
      // Show OTP verification after final section submission
      setIsOTPVerificationVisible(true);
    }
  }

  // -----

  const handleFormSubmission = async () => {
    const params = new URLSearchParams();
    for (let key in formData) {
      params.append(key, formData[key]);
    }

    try {
      console.log(formData);

      // Make the async fetch request
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxgxRUoRXfLWeqMwCbC9PALTiqJQS1_sYwjJimwlXn-dCf-Rp6rNKRGviCR8uK-HCYEjQ/exec",
        {
          mode: "no-cors", // limited access to response
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: params.toString(),
        }
      );

      // Since no-cors doesn't give us access to detailed response information,
      // we can't check response.ok or the status directly.

      if (response.type === "opaque") {
        // In no-cors, the response type is opaque
        console.log("Form Stored to sheet");
        toast.success("Form submitted!");

        // Hide form after submission
        setShow(false);

        // Reload site after 5 seconds
        setTimeout(() => {
          window.location.reload();
        }, 5000); // 5000 milliseconds = 5 seconds
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Form submission failed! Please try again.");
    }
  };

  const SignInButton = () => {
    const script = document.createElement("script");
    script.src = "https://www.phone.email/sign_in_button_v1.js";
    script.async = true;
    document.body.appendChild(script);

    const phoneEmailListener = (userObj) => {
      const { user_country_code, user_phone_number } = userObj;
      setIsAuthenticated(true);
      setUserDetails({
        countryCode: user_country_code,
        phoneNo: user_phone_number,
      });
    };

    window.phoneEmailListener = phoneEmailListener;

    return () => {
      document.body.removeChild(script);
    };
  };

  useEffect(() => {
    if (isOTPVerificationVisible && !isAuthenticated) {
      SignInButton();
    }
  }, [isOTPVerificationVisible, isAuthenticated]);
  return (
    <>
      <section id="Application-form">
        <a onClick={() => handleShow()}>Application</a>

        <Modal
          size="lg"
          show={show}
          onHide={() => setShow(false)}
          backdrop="static"
          keyboard={false}
        >
          <div className="text-center  application-bg">
            <img
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              className="App-logo img-fluid pt-3 pb-3 "
              alt="logo"
              width={300}
            />
          </div>
          <Modal.Header
            className="application-header-bg text-light"
            closeButton
            closeVariant="white"
          >
            <marquee direction="left" scrollamount="10">
              <Modal.Title className="mx-5">
                <h3 className="fs-2">
                  Note! Please ensure both your current residential and office
                  addresses are accurate. This will help avoid any delays or
                  issues in communication | Office Address: 525, First Floor, Annai Complex, opposite Indian overseas Bank, Thisayanvilai, Tamil Nadu 627657 
                </h3>
              </Modal.Title>
            </marquee>
          </Modal.Header>
          <Modal.Body>
            {!isOTPVerificationVisible ? (
              <div>
                {next === "" && (
                  <div>
                    <Form
                      className="applicationForm pt-3  mx-auto"
                      name="form1"
                      onSubmit={(e) => formSubmit(e)}
                    >
                      <Form.Control
                        type="hidden"
                        name="Date"
                        value={shortDate}
                      />
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className=" mt-3 lable-color">
                          Email address ⭐
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="name@example.com"
                          name="Email"
                          className="mb-3 w-75"
                          required
                        />
                      </Form.Group>
                      <div className="bg-danger">
                        <h3 className="text-light border border-3 text-center p-3 mb-3 mt-3">
                          Applicant Detials
                        </h3>
                      </div>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className=" mt-3  lable-color">
                          FULL NAME (As in Aadhar) ⭐
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Name"
                          name="Name"
                          className="w-75"
                          required
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="mt-3 lable-color">
                          GENDER ⭐
                        </Form.Label>
                        <div class="input-group mb-3">
                          <div class="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="Gender"
                              id="inlineRadio1"
                              value="Female"
                            />
                            <label
                              className="form-check-label"
                              for="inlineRadio1"
                            >
                              Female
                            </label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="Gender"
                              id="inlineRadio2"
                              value="Male"
                            />
                            <label
                              className="form-check-label"
                              for="inlineRadio2"
                            >
                              Male
                            </label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="Gender"
                              id="inlineRadio2"
                              value="Others"
                            />
                            <label
                              className="form-check-label"
                              for="inlineRadio2"
                            >
                              Others
                            </label>
                          </div>
                        </div>
                      </Form.Group>
                      <FormGroup>
                        <Form.Label className="mt-3 lable-color">
                          Date Of Birth ⭐
                        </Form.Label>
                        <div>
                          <input
                            type="date"
                            value={selectedDate}
                            onChange={handleDateChange}
                            name="Date_of_Birth"
                            required
                          />
                        </div>
                        <p>Selected Date: {selectedDate}</p>
                      </FormGroup>
                      <Form.Group controlId="formPhoneNumber" className="mb-3">
                        <Form.Label className="mt-3 lable-color">
                          Phone Number ⭐
                        </Form.Label>
                        <Form.Control
                          name="Phone"
                          type="tel"
                          placeholder="Enter 10 digit phone number"
                          value={phoneNumber}
                          onChange={handlePhoneNumberChange}
                          pattern="^[0-9]{10}$"
                          className="w-75"
                          required
                        />
                        {error && (
                          <Form.Text className="text-danger">{error}</Form.Text>
                        )}
                      </Form.Group>
                      <Form.Group controlId="formPhoneNumber" className="mb-3">
                        <Form.Label className="lable-color mt-3">
                          Alter Phone Number ⭐
                        </Form.Label>
                        <Form.Control
                          name="AlterPhone"
                          type="tel"
                          placeholder="Enter 10 digit phone number"
                          value={alphoneNumber}
                          onChange={alhandlePhoneNumberChange}
                          pattern="^[0-9]{10}$"
                          className="w-75"
                          required
                        />
                        {alerror && (
                          <Form.Text className="text-danger">
                            {alerror}
                          </Form.Text>
                        )}
                      </Form.Group>
                      <Form.Group>
                        <Form.Label className="lable-color">
                          LOAN TYPE ⭐
                        </Form.Label>
                        <select
                          required
                          class="form-select w-75"
                          name="LoanType"
                          aria-label="Default select example"
                        >
                          <option value="" disabled>
                            select product
                          </option>
                          <option value="Personal Loan">Personal Loan</option>
                          <option value="Business Loan">Business Loan</option>
                          <option value="Housing Loan">Housing Loan</option>
                          <option value="Loan Against Property">
                            Loan Against Property
                          </option>
                          <option value="Loan Against Secruity">
                            Loan Against Secruity
                          </option>
                          <option value="Auto Loan">Auto Loan</option>
                          <option value="Education Loan">Education Loan</option>
                          <option value="Equipment Loan">Equipment Loan</option>
                          <option value="Credit Loan">Credit Loan</option>
                          <option value="Others">Others</option>
                        </select>
                      </Form.Group>
                      <Form.Group className="mt-3">
                        <Form.Label className="lable-color">
                          qualification ⭐
                        </Form.Label>
                        <select
                          required
                          class="form-select w-75"
                          name="Qualification"
                          aria-label="Default select example"
                        >
                          <option value="" disabled>
                            select Qualification
                          </option>
                          <option value="Post Graduated">Post Graduated</option>
                          <option value="Graduated">Graduated</option>
                          <option value="Under Graduated">
                            Under Graduated
                          </option>
                          <option value="Diplamo">Diplamo</option>
                          <option value="High School">High School</option>
                          <option value="School">School</option>
                        </select>
                      </Form.Group>
                      <br />
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="lable-color">
                          LOAN AMOUNT NEEDED ⭐
                        </Form.Label>
                        <Form.Control
                          required
                          type="number"
                          name="Loan_Amount_Needed"
                          placeholder="eg. 100000"
                          className="w-75"
                          min="1000"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="lable-color">
                          MOTHER NAME ⭐
                        </Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="name"
                          name="Mother_Name"
                          className="w-75"
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label className="lable-color">
                          MARITAL STATUS ⭐
                        </Form.Label>
                        <select
                          required
                          className="form-select w-75"
                          aria-label="Default select example"
                          onChange={handleMaritalStatusChange}
                          name="Marital_Status"
                        >
                          <option value="" disabled>
                            select status
                          </option>
                          <option value="UnMarried">UnMarried</option>
                          <option value="Married">Married</option>
                          <option value="Divorced">Divorced</option>
                          <option value="Widowed">Widowed</option>
                        </select>
                      </Form.Group>
                      {maritalStatus === "Married" && (
                        <>
                          <Form.Group className="mb-3">
                            <Form.Label className="mt-3 lable-color">
                              SPOUSE NAME (Husband or Wife) ⭐
                            </Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder="Spouse Name"
                              name="Spouse_Name"
                              className="mb-3 w-75"
                            />
                          </Form.Group>

                          <Form.Group className="mb-3">
                            <Form.Label className="mt-3 lable-color">
                              SPOUSE DOB (Husband or Wife) ⭐
                            </Form.Label>
                            <Form.Control
                              required
                              name="Spouse_DOB"
                              type="date"
                              value={spouseDob}
                              onChange={handleSpouseDob}
                              className="w-75"
                            />

                            <p>Selected Date: {spouseDob}</p>
                          </Form.Group>
                        </>
                      )}
                      <Form.Group className="mb-3">
                        <Form.Label className="mt-3 lable-color">
                          NUMBER OF DEPANDANTS ⭐
                        </Form.Label>
                        <Form.Control
                          required
                          type="number"
                          placeholder="eg. 4"
                          name="Number_of_Depandants"
                          className="w-75"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="mt-3 lable-color">
                          RELIGION ⭐
                        </Form.Label>
                        <select
                          required
                          id="religion"
                          class="form-select w-75"
                          name="Religion"
                        >
                          <option value="" disabled selected>
                            select religon
                          </option>

                          <option value="hindu">Hindu</option>
                          <option value="muslim">Muslim</option>
                          <option value="christian">Christian</option>
                          <option value="sikhism">Sikhism</option>
                          <option value="jainism">Jainism</option>
                          <option value="buddhism">Buddhism</option>
                          <option value="other">Other</option>
                        </select>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="categorySelect">
                        <Form.Label className="lable-color">
                          CATEGORY ⭐
                        </Form.Label>
                        <Form.Select
                          required
                          name="Category"
                          aria-label="Select Category"
                          className="w-75"
                        >
                          <option value="" disabled selected>
                            Select Category
                          </option>
                          <option value="General">General</option>
                          <option value="OBC">OBC</option>
                          <option value="SC">SC</option>
                          <option value="ST">ST</option>
                          <option value="Other">Other</option>
                        </Form.Select>
                      </Form.Group>
                      <Form.Group>
                        <Form.Check
                          required
                          type="checkbox"
                          label="I agree that the data provided cannot be edited after submission."
                          id="agreeCheckbox"
                        />
                      </Form.Group>
                      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button class="btn btn-primary" type="submit">
                          Next <i class="bi bi-arrow-right-circle-fill"></i>
                        </button>
                      </div>
                    </Form>
                  </div>
                )}
                {next === "next" && (
                  <div>
                    <Form
                      className="applicationForm pt-3 mx-auto"
                      name="form2"
                      onSubmit={(e) => formSubmit(e)}
                    >
                      <div className="bg-danger">
                        <h3 className="text-light border border-3 text-center p-3 mb-3 mt-3">
                          Bussines / Work Detials
                        </h3>
                      </div>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="lable-color">
                          COMPANY NAME ⭐
                        </Form.Label>
                        <Form.Control
                          required
                          type="text"
                          name="Company_Name"
                          className="w-75"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className=" lable-color">
                          DESIGNATION ⭐
                        </Form.Label>
                        <Form.Control
                          required
                          type="text"
                          name="Designation"
                          className="w-75"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className=" lable-color">
                          PURPOSE OF LOAN ⭐
                        </Form.Label>
                        <select
                          required
                          name="Purpose_of_Loan"
                          className="form-select w-75"
                          aria-label="Default select example"
                        >
                          <option selected>select Purpose</option>
                          <option value="Personal Use">Personal Use</option>
                          <option value="Medical Emergency">
                            Medical Emergency
                          </option>
                          <option value="Marriage">Marriage</option>
                          <option value="Other">Other</option>
                        </select>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="mt-3 lable-color">
                          EXPERINCE IN CURRENT JOB ⭐
                        </Form.Label>
                        <Form.Control
                        required
                          type="number"
                          name="Experince_in_Current_Job"
                          className="w-75"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className=" lable-color">
                          TOTAL JOB EXPERIENCE ⭐
                        </Form.Label>
                        <Form.Control
                        required
                          type="number"
                          name="Total_Job_Experince"
                          className="w-75"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label className=" lable-color">
                          OFFICE ADDRESS ⭐
                        </Form.Label>
                        <Form.Control
                        required
                          as="textarea"
                          rows={2}
                          name="Office_Address"
                          className="w-75"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="mt-3 lable-color">
                          OFFICE LANDMARK ⭐
                        </Form.Label>
                        <Form.Control
                        required
                          type="text"
                          name="Office_Landmark"
                          className="w-75"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className=" lable-color">
                          OFFICE PINCODE ⭐
                        </Form.Label>
                        <Form.Control
                        required
                          type="text"
                          placeholder="6 digit pincode"
                          pattern="^[0-9]{6}$"
                          name="Office_Pincode"
                          className="w-75"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="mt-3 lable-color">
                          OFFICIAL MAIL ID (For Quick and hassle-free employment
                          Verification) ⭐
                        </Form.Label>
                        <Form.Control
                        required
                          type="email"
                          placeholder="name@companyname.com"
                          name="Office_Mail_Id"
                          className="w-75"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label className="mt-3 lable-color">
                          Office / collegue contact number ⭐
                        </Form.Label>
                        <Form.Control
                        required
                          type="tel"
                          name="Office_Collegue_Contact_Number"
                          className="w-75"
                          pattern="^[0-9]{10}$"
                          placeholder="10 digit mobile number"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label className="mt-3 lable-color">
                          is there a co-applicant needed ⭐
                        </Form.Label>
                        <select
                        required
                          className="form-select w-75"
                          aria-label="Default select example"
                          onChange={handleCoApplicant}
                          name="Co_applicant"
                        >
                          <option value="" disabled>
                            select status
                          </option>
                          <option value="No">No</option>
                          <option value="Yes">Yes</option>
                        </select>
                      </Form.Group>
                      {coApplicant === "Yes" && (
                        <div>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label className="mt-3 lable-color">
                              Co-Applicant's Full Name(as in Aadhar) ⭐
                            </Form.Label>
                            <Form.Control
                            required
                              type="text"
                              placeholder="Name"
                              name="CA_Name"
                              className="w-75"
                            />
                          </Form.Group>
                          <FormGroup>
                            <Form.Label className="mt-3 lable-color">
                              Co-Applicant's Date Of Birth ⭐
                            </Form.Label>
                            <div>
                              <input
                              required
                                type="date"
                                value={coDob}
                                onChange={handleCoDob}
                                name="CA_Date_of_Birth"
                              />
                            </div>
                            <p>Selected Date: {coDob}</p>
                          </FormGroup>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label className="mt-3 lable-color">
                              Co-Applicant's \GENDER ⭐
                            </Form.Label>
                            <div class="input-group mb-3">
                              <div class="form-check form-check-inline">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="CA_Gender"
                                  id="inlineRadio1"
                                  value="Female"
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Female
                                </label>
                              </div>
                              <div class="form-check form-check-inline">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="CA_Gender"
                                  id="inlineRadio2"
                                  value="Male"
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Male
                                </label>
                              </div>
                              <div class="form-check form-check-inline">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="CA_Gender"
                                  id="inlineRadio2"
                                  value="Others"
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Others
                                </label>
                              </div>
                            </div>
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                          >
                            <Form.Label className="mt-3 lable-color">
                              Co-Applicant's Office / collegue contact number ⭐
                            </Form.Label>
                            <Form.Control
                            required
                              type="tel"
                              name="CA_Office_Collegue_Contact_Number"
                              className="w-75"
                              pattern="^[0-9]{10}$"
                              placeholder="10 digit mobile number"
                            />
                          </Form.Group>
                          <Form.Group className="mt-3">
                            <Form.Label className="lable-color">
                              qualification ⭐
                            </Form.Label>
                            <select
                            required
                              class="form-select w-75"
                              name="CA_Qualification"
                              aria-label="Default select example"
                            >
                              <option value="" disabled>
                                select Qualification
                              </option>
                              <option value="Post Graduated">
                                Post Graduated
                              </option>
                              <option value="Graduated">Graduated</option>
                              <option value="Under Graduated">
                                Under Graduated
                              </option>
                              <option value="Diplamo">Diplamo</option>
                              <option value="High School">High School</option>
                              <option value="School">School</option>
                            </select>
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label className="mt-3 lable-color">
                              Co-Applicant's Mother Name ⭐
                            </Form.Label>
                            <Form.Control
                            required
                              type="text"
                              placeholder="Name"
                              name="CA_Mother_Name"
                              className="w-75"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label className="mt-3 lable-color">
                              Co-Applicant's Relationship ⭐
                            </Form.Label>
                            <Form.Control
                            required
                              type="text"
                              placeholder="Relationship with Applicant"
                              name="CA_Relationship"
                              className="w-75"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label className="mt-3 lable-color">
                              Co-Applicant's COMPANY NAME ( IF SALARY IS TAKEN
                              INTO ACCOUNT ) ⭐
                            </Form.Label>
                            <Form.Control
                            required
                              type="text"
                              placeholder="Company Name"
                              name="CA_Company_Name"
                              className="w-75"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label className="mt-3 lable-color">
                              Co-Applicant's Designation ⭐
                            </Form.Label>
                            <Form.Control
                            required
                              type="text"
                              placeholder="Co-Applicant's Designation"
                              name="CA_Designation"
                              className="w-75"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label className="mt-3 lable-color">
                              Co-Applicant's EXPERINCE IN CURRENT JOB ⭐
                            </Form.Label>
                            <Form.Control
                            required
                              type="number"
                              name="CA_Experince_in_Current_Job"
                              className="w-75"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label className=" lable-color">
                              Co-Applicant's TOTAL JOB EXPERIENCE ⭐
                            </Form.Label>
                            <Form.Control
                            required
                              type="number"
                              name="CA_Total_Job_Experince"
                              className="w-75"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                          >
                            <Form.Label className=" lable-color">
                              Co-Applicant's OFFICE ADDRESS ⭐
                            </Form.Label>
                            <Form.Control
                            required
                              as="textarea"
                              rows={2}
                              name="CA_Office_Address"
                              className="w-75"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label className="mt-3 lable-color">
                              Co-Applicant's OFFICE LANDMARK ⭐
                            </Form.Label>
                            <Form.Control
                            required
                              type="text"
                              name="CA_Office_Landmark"
                              className="w-75"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label className=" lable-color">
                              Co-Applicant's OFFICE PINCODE ⭐
                            </Form.Label>
                            <Form.Control
                            required
                              type="text"
                              placeholder="6 digit pincode"
                              pattern="^[0-9]{6}$"
                              name="CA_Office_Pincode"
                              className="w-75"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label className=" mt-3 lable-color">
                              Co-Applicant's Email address (For Quick and
                              hassle-free employment Verification))⭐
                            </Form.Label>
                            <Form.Control
                            required
                              type="email"
                              placeholder="name@example.com"
                              name="CA_Email"
                              className="mb-3 w-75"
                            />
                          </Form.Group>
                        </div>
                      )}

                      <Form.Group>
                        <Form.Check
                        required
                          type="checkbox"
                          label="I agree that the data provided cannot be edited after submission."
                          id="agreeCheckbox"
                        />
                      </Form.Group>

                      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button
                          class="btn btn-primary me-md-2"
                          type="button"
                          onClick={() => setNext("")}
                        >
                          <i class="bi bi-arrow-left-circle-fill"></i> Back
                        </button>
                        <button class="btn btn-primary" type="submit">
                          Next <i class="bi bi-arrow-right-circle-fill"></i>
                        </button>
                      </div>
                    </Form>
                  </div>
                )}

                {next === "next2" && (
                  <div>
                    <Form
                      className="applicationForm pt-3 mx-auto"
                      name="form3"
                      onSubmit={(e) => formSubmit(e)}
                    >
                      <div className="bg-danger">
                        <h3 className="text-light border border-3 text-center p-3 mb-3 mt-3">
                          Application Address
                        </h3>
                      </div>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label className="mt-3 lable-color">
                          CURRENT RESIDENCE ⭐
                        </Form.Label>
                        <select
                        required
                          className="form-select w-75"
                          aria-label="Default select example"
                          onChange={handleResidentChange}
                          name="Current_Resident"
                        >
                          <option value="" disabled>
                            select current resident
                          </option>
                          <option value="Owned by  parents / sibilings">
                            Owned by parents / sibilings
                          </option>
                          <option value="Company Provided">
                            Company Provided
                          </option>
                          <option value="Rental">Rental</option>
                          <option value="Owned by Spouse">
                            Owned by Spouse (Husband or Wife)
                          </option>
                          <option value="Owned by me">Owned by me</option>
                        </select>
                      </Form.Group>
                      {resident === "Rental" && (
                        <>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label className="mt-3 lable-color">
                              monthly house rent ⭐
                            </Form.Label>
                            <Form.Control
                            required
                              type="text"
                              name="Monthly_House_Rent"
                              className="w-75"
                            />
                          </Form.Group>
                        </>
                      )}
                      <Form.Group className="mb-3">
                        <Form.Label className="mt-3 lable-color">
                          do you have a own house ⭐
                        </Form.Label>
                        <div class="input-group mb-3">
                          <div class="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="Own_house"
                              id="inlineRadio1"
                              value="Yes"
                            />
                            <label
                              className="form-check-label"
                              for="inlineRadio1"
                            >
                              Yes
                            </label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="Own_house"
                              id="inlineRadio2"
                              value="No"
                            />
                            <label
                              className="form-check-label"
                              for="inlineRadio2"
                            >
                              No
                            </label>
                          </div>
                        </div>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label className="mt-3 lable-color">
                          current residential address ⭐
                        </Form.Label>
                        <Form.Control
                        required
                          as="textarea"
                          rows={2}
                          name="Current_Residential_Address"
                          className="w-75"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className=" lable-color">
                          LANDMARK ⭐
                        </Form.Label>
                        <Form.Control
                        required
                          type="text"
                          name="Landmark"
                          className="w-75"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className=" lable-color">
                          PINCODE ⭐
                        </Form.Label>
                        <Form.Control
                        required
                          type="text"
                          placeholder="6 digit pincode"
                          pattern="^[0-9]{6}$"
                          name="Pincode"
                          className="w-75"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="mt-3 lable-color">
                          Total number of years staying in current address ⭐
                        </Form.Label>
                        <Form.Control
                        required
                          type="number"
                          placeholder="eg: 5"
                          name="Total_number_of_years_staying_in_current_address"
                          className="w-75"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="mt-3 lable-color">
                          total number of years staying in the city ⭐
                        </Form.Label>
                        <Form.Control
                        required
                          type="number"
                          placeholder="eg: 10"
                          name="Total_number_of_years_staying_in_the_city"
                          className="w-75"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label className="mt-3 lable-color">
                          is your permanent address same as current address ⭐
                        </Form.Label>
                        <div class="input-group mb-3">
                          <div class="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="Is_Permanent_address_same_as_Current_address"
                              id="inlineRadio1"
                              value="Yes"
                              onChange={handlePermanentAddress}
                            />
                            <label
                              className="form-check-label"
                              for="inlineRadio1"
                            >
                              Yes
                            </label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              id="inlineRadio2"
                              name="Is_Permanent_address_same_as_Current_address"
                              value="No"
                              onChange={handlePermanentAddress}
                            />
                            <label
                              className="form-check-label"
                              for="inlineRadio2"
                            >
                              No
                            </label>
                          </div>
                        </div>
                      </Form.Group>
                      {isPermanentAddress === "No" && (
                        <div>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                          >
                            <Form.Label className="mt-3 lable-color">
                              Permanent residential address ⭐
                            </Form.Label>
                            <Form.Control
                            required
                              as="textarea"
                              rows={2}
                              name="Permanent_Residential_Address"
                              className="w-75"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label className="lable-color">
                              Permanent Address Landmark⭐
                            </Form.Label>
                            <Form.Control
                            required
                              type="text"
                              placeholder=""
                              name="Permanent_address_Landmark"
                              className="w-75"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label className=" lable-color">
                              Permanent Address PINCODE ⭐
                            </Form.Label>
                            <Form.Control
                            required
                              type="text"
                              placeholder="6 digit pincode"
                              pattern="^[0-9]{6}$"
                              name="Permanent_address_Pincode"
                              className="w-75"
                            />
                          </Form.Group>
                        </div>
                      )}
                      <Form.Group>
                        <Form.Check
                        required
                          type="checkbox"
                          label="I agree that the data provided cannot be edited after submission."
                          id="agreeCheckbox"
                        />
                      </Form.Group>

                      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button
                          class="btn btn-primary me-md-2"
                          type="button"
                          onClick={() => setNext("next")}
                        >
                          <i class="bi bi-arrow-left-circle-fill"></i> Back
                        </button>
                        <button class="btn btn-primary" type="submit">
                          Next <i class="bi bi-arrow-right-circle-fill"></i>
                        </button>
                      </div>
                    </Form>
                  </div>
                )}
                {next === "next3" && (
                  <div>
                    <Form
                      className="applicationForm pt-3 mx-auto"
                      name="form4"
                      onSubmit={(e) => formSubmit(e)}
                    >
                      <div className="bg-danger">
                        <h3 className="text-light border border-3 text-center p-3 mb-3 mt-3">
                          Refernce Detials
                        </h3>
                      </div>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className=" mt-3  lable-color">
                          reference 1 name (can be a friend) ⭐
                        </Form.Label>
                        <Form.Control
                        required
                          type="text"
                          placeholder="name"
                          name="Reference1_name"
                          className="w-75"
                        />
                      </Form.Group>
                      <Form.Group controlId="formPhoneNumber" className="mb-3">
                        <Form.Label className="lable-color mt-3">
                          Reference 1 Phone Number ⭐
                        </Form.Label>
                        <Form.Control
                        required
                          type="tel"
                          placeholder="Enter 10 digit phone number"
                          pattern="^[0-9]{10}$"
                          name="Reference1_Phone_Number"
                          className="w-75"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label className="mt-3 lable-color">
                          Reference 1 ADDRESS ⭐
                        </Form.Label>
                        <Form.Control
                        required
                          as="textarea"
                          rows={2}
                          name="Reference_1_Address"
                          className="w-75"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className=" lable-color">
                          Reference 1 PINCODE ⭐
                        </Form.Label>
                        <Form.Control
                        required
                          type="text"
                          placeholder="6 digit pincode"
                          pattern="^[0-9]{6}$"
                          name="Reference1_Pincode"
                          className="w-75"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className=" mt-3  lable-color">
                          reference 2 name (can be a Relative) ⭐
                        </Form.Label>
                        <Form.Control
                        required
                          type="text"
                          placeholder="name"
                          name="Reference2_name"
                          className="w-75"
                        />
                      </Form.Group>
                      <Form.Group controlId="formPhoneNumber" className="mb-3">
                        <Form.Label className="lable-color mt-3">
                          Reference 2 Phone Number ⭐
                        </Form.Label>
                        <Form.Control
                        required
                          type="tel"
                          placeholder="Enter 10 digit phone number"
                          pattern="^[0-9]{10}$"
                          name="Reference_2_Phone_Number"
                          className="w-75"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label className="mt-3 lable-color">
                          Reference 2 ADDRESS ⭐
                        </Form.Label>
                        <Form.Control
                        required
                          as="textarea"
                          rows={2}
                          name="Reference_2_Address"
                          className="w-75"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className=" lable-color">
                          Reference 2 PINCODE ⭐
                        </Form.Label>
                        <Form.Control
                        required
                          type="text"
                          placeholder="6 digit pincode"
                          name="Reference2_Pincode"
                          className="w-75"
                          pattern="^[0-9]{6}$"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label className="mt-3 lable-color">
                          service branch ⭐
                        </Form.Label>
                        <select
                        required
                          id="district"
                          className="form-select w-75"
                          name="Service_Branch"
                        >
                          <option value="" disabled>
                            select Branch
                          </option>
                          <option value="ariyalur">Ariyalur</option>
                          <option value="chengalpattu">Chengalpattu</option>
                          <option value="chennai">Chennai</option>
                          <option value="coimbatore">Coimbatore</option>
                          <option value="cuddalore">Cuddalore</option>
                          <option value="dharmapuri">Dharmapuri</option>
                          <option value="dindigul">Dindigul</option>
                          <option value="erode">Erode</option>
                          <option value="kallakurichi">Kallakurichi</option>
                          <option value="kancheepuram">Kancheepuram</option>
                          <option value="kanyakumari">Kanyakumari</option>
                          <option value="karur">Karur</option>
                          <option value="krishnagiri">Krishnagiri</option>
                          <option value="madurai">Madurai</option>
                          <option value="nagapattinam">Nagapattinam</option>
                          <option value="namakkal">Namakkal</option>
                          <option value="nilgiris">Nilgiris</option>
                          <option value="perambalur">Perambalur</option>
                          <option value="pudukkottai">Pudukkottai</option>
                          <option value="ramanathapuram">Ramanathapuram</option>
                          <option value="ranipet">Ranipet</option>
                          <option value="salem">Salem</option>
                          <option value="sivaganga">Sivaganga</option>
                          <option value="tenkasi">Tenkasi</option>
                          <option value="thanjavur">Thanjavur</option>
                          <option value="theni">Theni</option>
                          <option value="thiruvallur">Thiruvallur</option>
                          <option value="thiruvarur">Thiruvarur</option>
                          <option value="thoothukudi">Thoothukudi</option>
                          <option value="tiruchirappalli">
                            Tiruchirappalli
                          </option>
                          <option value="tirunelveli">Tirunelveli</option>
                          <option value="tirupathur">Tirupathur</option>
                          <option value="tiruppur">Tiruppur</option>
                          <option value="tiruvannamalai">Tiruvannamalai</option>
                          <option value="vellore">Vellore</option>
                          <option value="viluppuram">Viluppuram</option>
                          <option value="virudhunagar">Virudhunagar</option>
                        </select>
                      </Form.Group>
                      <Form.Group>
                        <Form.Label className="mt-3 lable-color">
                          staff code (optional)
                        </Form.Label>
                        <Form.Control
                        required
                          type="text"
                          name="Staff_Code"
                          className="w-75"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className=" mt-3 lable-color">
                          staff / agent e-mail id (optional)
                        </Form.Label>
                        <Form.Control
                        required
                          type="email"
                          placeholder="solomon@bsecurefin.in"
                          name="Staff_email"
                          className="mb-3 w-75"
                        />
                      </Form.Group>
                      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button
                          class="btn btn-primary me-md-2"
                          type="button"
                          onClick={() => setNext("next2")}
                        >
                          <i class="bi bi-arrow-left-circle-fill"></i> Back
                        </button>
                        <button class="btn btn-primary" type="submit">
                          Submit
                        </button>
                      </div>
                    </Form>
                  </div>
                )}
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "50px 30px",
                }}
              >
                {!isAuthenticated ? (
                  <div
                    style={{
                      textAlign: "center",
                      backgroundColor: "#fff",
                      padding: "30px",
                      borderRadius: "0.5rem",
                    }}
                  >
                    <img
                      className="phe-login-img"
                      width="250px"
                      src={`${process.env.PUBLIC_URL}/images/logo.png`}
                      alt="phone email login demo"
                    />
                    <p className="my-4">Please verify your phone number</p>
                    <div
                      className="pe_signin_button"
                      data-client-id="12003583470397159247"
                    ></div>
                  </div>
                ) : (
                  <div
                    style={{
                      textAlign: "center",
                      backgroundColor: "#fff",
                      padding: "30px",
                      borderRadius: "0.5rem",
                    }}
                  >
                    <h1>OTP Verified!</h1>
                    <h4>
                      You are logged in successfully with <br />
                      {userDetails.countryCode} {userDetails.phoneNo}
                    </h4>
                    <button
                      style={{
                        padding: "10px 20px",
                        backgroundColor: "#4CAF50",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                      }}
                      onClick={handleFormSubmission}
                    >
                      Final Submit
                    </button>
                  </div>
                )}
              </div>
            )}
          </Modal.Body>
        </Modal>
      </section>
    </>
  );
};

export default Application;
