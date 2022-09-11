import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "./Vendor.css";
import ApiServices from "../Common/ApiServices";
import CommonMethods from "../Common/CommonMethods";

const AddVendor = () => {
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});
  const [passShown, setPassShown] = useState(false);
  const [confrmpassShown, setConfrmpassShown] = useState(false);

  const navigate = useNavigate();

  const handleFormFieldsChange = (event) => {
    //console.log(event.target.value);
    fields[event.target.name] = event.target.value;
    setFields(fields);
    //console.log(fields);
  };

  function formValidate() {
    let errors = {};
    let formIsValid = true;

    //Vendor Name
    if (!fields["vendorName"]) {
      formIsValid = false;
      errors["vendorName"] = "Vendor name can not be empty";
    }

    //Vendor Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Email cannot be empty";
    } else if (!CommonMethods.emailValidator(fields["email"])) {
      formIsValid = false;
      errors["email"] = "Please enter valid email.";
    }

    //Vendor Phone
    if (!fields["phone"]) {
      formIsValid = false;
      errors["phone"] = "Phone cannot be empty";
    } else if (fields["phone"].length != 12) {
      formIsValid = false;
      errors["phone"] = "Phone should be 10 digits.";
    }

    //Vendor Password
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "Password cannot be empty";
    } else if (!CommonMethods.passwordValidator(fields["password"])) {
      formIsValid = false;
      errors["password"] = "Please enter valid password";
    }

    //Vendor Confirm Password
    if (!fields["confirmPassword"]) {
      formIsValid = false;
      errors["confirmPassword"] = "Confirm password cannot be empty";
    } else if (!CommonMethods.passwordValidator(fields["confirmPassword"])) {
      formIsValid = false;
      errors["confirmPassword"] = "Please enter valid confirm password";
    } else if (fields["password"] != fields["confirmPassword"]) {
      formIsValid = false;
      errors["confirmPassword"] = "Password & confirm password doesn't match.";
    }

    //Company Name
    if (!fields["companyName"]) {
      formIsValid = false;
      errors["companyName"] = "Company name cannot be empty";
    }

    //Company Phone
    // if (!fields["companyPhone"]) {
    //   formIsValid = false;
    //   errors["companyPhone"] = "Company Phone Cannot be empty";
    // } else if (fields["companyPhone"].length != 12) {
    //   formIsValid = false;
    //   errors["companyPhone"] = "Company Phone should be 10 digits.";
    // }
    // if (fields["companyPhone"].length != 12) {
    //   formIsValid = false;
    //   errors["companyPhone"] = "Company Phone should be 10 digits.";
    // }

    //Company Email
    // if (!fields["companyEmail"]) {
    //   formIsValid = false;
    //   errors["companyEmail"] = "Company Email Cannot be empty";
    // }  else if (!CommonMethods.emailValidator(fields["companyEmail"])) {
    //   formIsValid = false;
    //   errors["companyEmail"] = "Please enter company valid email.";
    // }
    // if (!CommonMethods.emailValidator(fields["companyEmail"])) {
    //   formIsValid = false;
    //   errors["companyEmail"] = "Please enter company valid email.";
    // }

    //Company CIN
    // if (!fields["companyCIN"]) {
    //   formIsValid = false;
    //   errors["companyCIN"] = "Company CIN Cannot be empty";
    // }

    //Company GSTIN
    if (!fields["companyGSTIN"]) {
      formIsValid = false;
      errors["companyGSTIN"] = "Company GSTIN cannot be empty";
    }

    //Company Website URL
    if (!fields["companyWebsiteURL"]) {
      formIsValid = false;
      errors["companyWebsiteURL"] = "Company website URL cannot be empty";
    }

    //Company Address
    // if (!fields["companyAddress"]) {
    //   formIsValid = false;
    //   errors["companyAddress"] = "Company Address Cannot be empty";
    // }

    //Company State
    // let cstate = document.querySelector('#companyState');
    // let stateValue = cstate.options.selectedIndex;
    // if (stateValue === 0) {
    //     formIsValid = false;
    //     errors["companyState"] = 'Please Select Company State';
    // }

    //Company City
    // if (!fields["companyCity"]) {
    //   formIsValid = false;
    //   errors["companyCity"] = "Company City Cannot be empty";
    // }

    //Company Pincode
    if (!fields["companyPincode"]) {
      formIsValid = false;
      errors["companyPincode"] = "Company pincode cannot be empty";
    } else if (fields["companyPincode"].length != 6) {
      formIsValid = false;
      errors["companyPincode"] = "Company pincode should be 6 digits";
    }

    setErrors(errors);
    return formIsValid;
  }

  //Vendor Email Validating
  const emailInputHandler = (e) => {
    if (!CommonMethods.emailValidator(e.target.value)) {
      setErrors({ ...errors, email: "Please enter valid email" });
    } else {
      setErrors({ ...errors, email: "" });
    }
  };

  //Company Email Validating
  const companyEmailInputHandler = (e) => {
    if (!CommonMethods.emailValidator(e.target.value)) {
      setErrors({
        ...errors,
        companyEmail: "Please enter valid company email",
      });
    } else {
      setErrors({ ...errors, companyEmail: "" });
    }
  };

  //Vendor Phone Masking
  const phoneInputHandler = (e) => {
    if (!CommonMethods.phoneMasking(e)) {
      setErrors({ ...errors, phone: "Please enter only Numeric value" });
    } else {
      setErrors({ ...errors, phone: "" });
    }
  };

  //Company Phone Masking
  const companyPhoneInputHandler = (e) => {
    if (!CommonMethods.phoneMasking(e)) {
      setErrors({ ...errors, companyPhone: "Please enter only Numeric value" });
    } else {
      setErrors({ ...errors, companyPhone: "" });
    }
  };

  //Company Pincode Validation
  const companyPincodeInputHandler = (e) => {
    if (!CommonMethods.numberValidation(e)) {
      setErrors({
        ...errors,
        companyPincode: "Please enter only Numeric value (max 6)",
      });
    } else {
      setErrors({ ...errors, companyPincode: "" });
    }
  };

  //Vendor Password Validating
  const passwordInputHandler = (e) => {
    if (!CommonMethods.passwordValidator(e.target.value)) {
      setErrors({ ...errors, password: "Please enter valid password" });
    }  else {
      setErrors({ ...errors, password: "" }); 
    }
  };

  //Vendor Confirm Password Validating
  const confirmPasswordInputHandler = (e) => {
    var pass = fields["password"];
    let cpass = e.target.value;
    if (!CommonMethods.passwordValidator(cpass)) {
      setErrors({
        ...errors,
        confirmPassword: "Please enter valid confirm password",
      });
      document.querySelector('.green-check').style.display = "none"; 
    } else {
      if (cpass != pass) {
        setErrors({
          ...errors,
          confirmPassword: "Password & confirm password doesn't match",
        });
        document.querySelector('.green-check').style.display = "none"; 
      } else {
        setErrors({ ...errors, confirmPassword: "" });
        document.querySelector('.green-check').style.display = "block";
      }
    }
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (formValidate()) {
      console.log("first");
      let {
        vendorName,
        email,
        phone,
        password,
        companyName,
        companyPhone,
        companyEmail,
        companyCIN,
        companyGSTIN,
        companyWebsiteURL,
        companyAddress,
        companyState,
        companyCity,
        companyPincode,
      } = fields;
      const formData = {
        collection: "vendorusers",
        data: {
          vendorName: vendorName,
          email: email,
          phone: phone,
          password: password,
          companyName: companyName,
          companyPhone: companyPhone,
          companyEmail: companyEmail,
          companyCIN: companyCIN,
          companyGSTIN: companyGSTIN,
          companyWebsiteURL: companyWebsiteURL,
          companyAddress: companyAddress,
          companyState: companyState,
          companyCity: companyCity,
          companyPincode: companyPincode,
          userType: "admin",
          isActive: true,
        },
        meta: {
          duplicate: ["email"],
          isPassword: true,
          passwordKey: "password",
        },
      };
      ApiServices.AddRecord(formData)
        .then((response) => {
          if (response.status == 200 && response.data.status == "success") {
            swal("Thank you!", "Vendor added successfully!!!", "success").then(
              (value) => {
                if (value) {
                  navigate("/vendors");
                }
              }
            );
          } else if (
            response.data.status == "failed" &&
            response.data.message == "UNIQUE KEY CONSTRAINT"
          ) {
            swal("Error", "Vendor email ID is already exist!!!", "error").then(
              (value) => {
                if (value) {
                  navigate("/addvendor");
                  errors["email"] = "Vendor email id is already exist";
                }
              }
            );
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("Form validation error");
    }
  };

  const handlepassword = (e) => {
    e.preventDefault();
    setPassShown(!passShown);
  };

  const handleconfirmpassword = (e) => {
    e.preventDefault();
    setConfrmpassShown(!confrmpassShown);
  };

  //State Select Handler
  const stateSelectHandler = (e) => {};

  return (
    <>
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col-sm mb-2 mb-sm-0">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-no-gutter">
                  <li className="breadcrumb-item">
                    <Link className="breadcrumb-link" to="/vendors">
                      Vendors
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Add vendor
                  </li>
                </ol>
              </nav>

              <h1 className="page-header-title">Add vendor</h1>
            </div>
            <div className="col-md-auto">
              <Link className="btn btn-primary" to="/vendors">Back</Link>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 mb-3 mb-lg-0">
            <div className="card mb-3 mb-lg-5">
              <div className="card-header">
                <h4 className="card-header-title">Add vendor</h4>
              </div>
             

              <div className="card-body">
                <form method="post" onSubmit={submitForm}>
                  <div className="row">
                    <span className="personal-info">
                      Vendor personal information
                    </span>
                    <div className="col-sm-6">
                      <div className="mb-4">
                        <label htmlFor="vendorName" className="form-label">
                          {" "}
                          Vendor name <span className="mandatory-field">
                            *
                          </span>{" "}
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="vendorName"
                          id="vendorName"
                          placeholder="Vendor name"
                          onChange={handleFormFieldsChange}
                        />
                        <span className="mandatory-field">
                          {errors["vendorName"]}
                        </span>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="mb-4">
                        <label htmlFor="email" className="form-label">
                          {" "}
                          Email id <span className="mandatory-field">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Email id"
                          onChange={handleFormFieldsChange}
                          onInput={emailInputHandler}
                        />
                        <span className="mandatory-field">
                          {errors["email"]}
                        </span>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="mb-4">
                        <label htmlFor="phone" className="form-label">
                          {" "}
                          Phone no. <span className="mandatory-field">*</span>
                        </label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            name="phone"
                            id="phone"
                            placeholder="Phone no."
                            onChange={handleFormFieldsChange}
                            onInput={phoneInputHandler}
                            maxLength={12}
                          />
                        </div>
                        <span className="mandatory-field">
                          {errors["phone"]}
                        </span>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="mb-4">
                        <label htmlFor="password" className="form-label">
                          {" "}
                          Password <span className="mandatory-field">
                            *
                          </span>{" "}
                        </label>
                        <div className="input-group input-group-merge">
                          <input
                            type={passShown ? "text" : "password"}
                            className="form-control passwoprd-field"
                            name="password"
                            id="password"
                            placeholder="Password"
                            onChange={handleFormFieldsChange}
                            onInput={passwordInputHandler}
                          />
                          <a className="input-group-text password-div">
                            <i
                              className={passShown ? "bi-eye" : "bi-eye-slash"}
                              onClick={handlepassword}
                              id="passIcon"
                            ></i>
                          </a>
                          
                          <span
                            id="password-rule"
                            data-bs-toggle="pass_tooltip"
                            data-bs-placement="top"
                            title={`Password must have \n * Be at least 8 characters \n * Have at least one upper case letter \n * Have at least one lower case letter \n * Have at least one number \n * Have at least one symbol`}
                            className="input-group-text tooltip-custom"
                          >
                            <i className="bi bi-info-circle"></i>
                          </span>
                        </div>
                        <span className="mandatory-field">
                          {errors["password"]}
                        </span>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="mb-4">
                        <label htmlFor="confirmPassword" className="form-label">
                          {" "}
                          Confirm password{" "}
                          <span className="mandatory-field">*</span>
                        </label>
                        <div className="input-group input-group-merge">
                          <input
                            type={confrmpassShown ? "text" : "password"}
                            className="form-control"
                            name="confirmPassword"
                            id="confirmPassword"
                            placeholder="Confirm password"
                            onChange={handleFormFieldsChange}
                            onInput={confirmPasswordInputHandler}
                          />
                          <span className="green-check input-group-append input-group-text password-div">
                            <i className="bi bi-check-circle-fill"></i>
                          </span>
                          <a className="input-group-append input-group-text">
                            <i className={ confrmpassShown ? "bi-eye" : "bi-eye-slash" }
                              onClick={handleconfirmpassword}>
                            </i>
                          </a>
                        </div>
                        <span className="mandatory-field">
                          {errors["confirmPassword"]}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <span className="legal-info">
                      Vendor legal information
                    </span>
                    <div className="col-sm-6">
                      <div className="mb-4">
                        <label htmlFor="companyName" className="form-label">
                          {" "}
                          Company name{" "}
                          <span className="mandatory-field">*</span>{" "}
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="companyName"
                          id="companyName"
                          placeholder="Company name"
                          onChange={handleFormFieldsChange}
                        />
                        <span className="mandatory-field">
                          {errors["companyName"]}
                        </span>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="mb-4">
                        <label htmlFor="companyPhone" className="form-label">
                          {" "}
                          Company phone no.{" "}
                        </label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            name="companyPhone"
                            id="companyPhone"
                            placeholder="Company phone no."
                            onChange={handleFormFieldsChange}
                            onInput={companyPhoneInputHandler}
                            maxLength={12}
                          />
                        </div>
                        <span className="mandatory-field">
                          {errors["companyPhone"]}
                        </span>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="mb-4">
                        <label htmlFor="companyEmail" className="form-label">
                          {" "}
                          Company email id{" "}
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="companyEmail"
                          id="companyEmail"
                          placeholder="Company email id"
                          onChange={handleFormFieldsChange}
                          onInput={companyEmailInputHandler}
                        />
                        <span className="mandatory-field">
                          {errors["companyEmail"]}
                        </span>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="mb-4">
                        <label htmlFor="companyCIN" className="form-label">
                          {" "}
                          Company CIN{" "}
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="companyCIN"
                          id="companyCIN"
                          placeholder="Company CIN"
                          onChange={handleFormFieldsChange}
                        />
                        <span className="mandatory-field">
                          {errors["companyCIN"]}
                        </span>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="mb-4">
                        <label htmlFor="companyGSTIN" className="form-label">
                          {" "}
                          Company GSTIN{" "}
                          <span className="mandatory-field">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="companyGSTIN"
                          id="companyGSTIN"
                          placeholder="Company GSTIN"
                          onChange={handleFormFieldsChange}
                        />
                        <span className="mandatory-field">
                          {errors["companyGSTIN"]}
                        </span>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="mb-4">
                        <label
                          htmlFor="companyWebsiteURL"
                          className="form-label"
                        >
                          {" "}
                          Company website URL{" "}
                          <span className="mandatory-field">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="companyWebsiteURL"
                          id="companyWebsiteURL"
                          placeholder="Company website URL"
                          onChange={handleFormFieldsChange}
                        />
                        <span className="mandatory-field">
                          {errors["companyWebsiteURL"]}
                        </span>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="mb-4">
                        <label htmlFor="companyAddress" className="form-label">
                          {" "}
                          Company address{" "}
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="companyAddress"
                          id="companyAddress"
                          placeholder="Company address"
                          onChange={handleFormFieldsChange}
                        />
                        <span className="mandatory-field">
                          {errors["companyAddress"]}
                        </span>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="mb-4">
                        <label htmlFor="companyPincode" className="form-label">
                          {" "}
                          Company pincode{" "}
                          <span className="mandatory-field">*</span>{" "}
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="companyPincode"
                          id="companyPincode"
                          placeholder="Company pincode"
                          onChange={handleFormFieldsChange}
                          onInput={companyPincodeInputHandler}
                          onMouseOut={stateSelectHandler}
                          maxLength={6}
                        />
                        <span className="mandatory-field">
                          {errors["companyPincode"]}
                        </span>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="mb-4">
                        <label htmlFor="companyState" className="form-label">
                          Select company state
                        </label>
                        <div className="tom-select-custom">
                          <select
                            className="js-select form-select tomselected"
                            name="companyState"
                            id="companyState"
                            onChange={handleFormFieldsChange}
                          >
                            <option value="0">Select company state</option>
                            <option value="Andaman and Nicobar Islands">
                              Andaman and Nicobar Islands
                            </option>
                            <option value="Andhra Pradesh">
                              Andhra Pradesh
                            </option>
                            <option value="Arunachal Pradesh">
                              Arunachal Pradesh
                            </option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Dadra and Nagar Haveli">
                              Dadra and Nagar Haveli
                            </option>
                            <option value="Daman and Diu">Daman and Diu</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">
                              Himachal Pradesh
                            </option>
                            <option value="Jammu and Kashmir">
                              Jammu and Kashmir
                            </option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Lakshadweep">Lakshadweep</option>
                            <option value="Madhya Pradesh">
                              Madhya Pradesh
                            </option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Puducherry">Puducherry</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telengana">Telengana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West Bengal">West Bengal</option>
                          </select>
                        </div>
                        <span className="mandatory-field">
                          {errors["companyState"]}
                        </span>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="mb-4">
                        <label htmlFor="companyCity" className="form-label">
                          {" "}
                          Company city{" "}
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="companyCity"
                          id="companyCity"
                          placeholder="Company city"
                          onChange={handleFormFieldsChange}
                        />
                        <span className="mandatory-field">
                          {errors["companyCity"]}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-end">
                    <button type="submit" className="btn btn-primary btn-sm">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddVendor;
