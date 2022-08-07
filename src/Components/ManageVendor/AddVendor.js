import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import swal from 'sweetalert';

import ApiServices from '../Common/ApiServices';
import CommonMethods from '../Common/CommonMethods';

const AddVendor = () => {

  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleFormFieldsChange = event => {
    fields[event.target.name] = event.target.value;
    setFields(fields);
  }

  function formValidate(){
    let errors = {};
    let formIsValid = true;

    //Vendor Name
    if (!fields["vendorName"]) {
      formIsValid = false;
      errors["vendorName"] = "Vendor Name Cannot be empty";
    } else {
      errors["vendorName"] = "";
    }

    //Vendor Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Email Cannot be empty";
    }  else if (!CommonMethods.emailValidator(fields["email"])) {
      formIsValid = false;
      errors["email"] = "Please enter valid email.";
    }

    //Vendor Phone
    if (!fields["phone"]) {
      formIsValid = false;
      errors["phone"] = "Phone Cannot be empty";
    } else if (fields["phone"].length != 12) {
      formIsValid = false;
      errors["phone"] = "Phone should be 10 digits.";
    }

    //Vendor Password
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "Password Cannot be empty";
    } else if (!CommonMethods.passwordValidator(fields["password"])) {
      formIsValid = false;
      errors["password"] = "Please enter valid password";
    }
    
    //Vendor Confirm Password
    if (!fields["confirmPassword"]) {
      formIsValid = false;
      errors["confirmPassword"] = "Confirm Password Cannot be empty";
    }  else if (!CommonMethods.passwordValidator(fields["confirmPassword"])) {
      formIsValid = false;
      errors["confirmPassword"] = "Please enter valid confirm password";
    }  else if (fields["password"] != fields["confirmPassword"]) {
      formIsValid = false;
      errors["confirmPassword"] = "Password & Confirm Password doesn't match.";
    }

    //console.log(errors);

    setErrors(errors);
    return formIsValid;
  }

  //Vendor Email Validating
  const emailInputHandler = (e) =>{
    if (!CommonMethods.emailValidator(e.target.value)) {
      errors["email"] = "Please enter valid email";
    } else {
      errors["email"] = "";
    }
  }   

  //Vendor Phone Masking  
  const phoneInputHandler = e => {
    if(!CommonMethods.phoneMasking(e)){
      errors["phone"] = "Please enter Only Numbers";
    } else {
      errors["phone"] = "";
    }
  }
  
  
  //Vendor Password Validating
  const passwordInputHandler = e =>{    
    if (!CommonMethods.passwordValidator(e.target.value)) {
      errors["password"] = "Please enter valid password";
    } else {
      errors["password"] = "";
    }
  }

  //Vendor Confirm Password Validating
  const confirmPasswordInputHandler = e =>{
    var pass = fields['password'];
    let cpass = e.target.value;
    if (!CommonMethods.passwordValidator(cpass)) {
      errors["confirmPassword"] = "Please enter valid confirm password";
    } else {
      if (cpass != pass) {
        errors["confirmPassword"] = "Password & Confirm Password doesn't match.";
      } else {
        errors["confirmPassword"] = "";
      }
    } 
  }

  const submitForm = event => {
    event.preventDefault();
    if(formValidate()) {   
      let { vendorName, email, phone, password } = fields;
      // let finalPassword = window.btoa(password);
      // console.log(finalPassword);
      const formData = {
          "collection" : "vendorusers",
          "data": {
                  "vendorName": vendorName,
                  "email": email,
                  "phone": phone,
                  "password": password,
                  "userType": "admin"
          },
          "meta" : {
              "duplicate" : ["email"],
              "isPassword" : true,
              "passwordKey" : "password"
          }
      };   
      ApiServices.AddRecord(formData).then(response => {    
          if(response.status == 200 && response.data.status){
              swal("Thank you!", "Vendor added successfully!!!", "success").then((value) => {
                  if(value){
                      navigate('/vendors');
                  }
              });
          }           
      }).catch(error => {
          console.log(error);
      });; 
    } else {
      console.log("Form Validation Error");
    }  
  }

  const handlepassword = e => {
    if (e.target.id == 'passIcon') {
      let pt = document.getElementById('password');
      let picon = document.getElementById('passIcon');
      if (e.target.className == 'bi-eye-slash') {
        pt.setAttribute('type', 'text');
        picon.classList.remove('bi-eye-slash')
        picon.classList.add('bi-eye')
      } else {
        pt.setAttribute('type', 'password');
        picon.classList.remove('bi-eye');
        picon.classList.add('bi-eye-slash');
      }
    } else {
      let pt = document.getElementById('confirmPassword');
      let picon = document.getElementById('passIcon1');
      if (e.target.className == 'bi-eye-slash') {
        pt.setAttribute('type', 'text');
        picon.classList.remove('bi-eye-slash')
        picon.classList.add('bi-eye')
      } else {
        pt.setAttribute('type', 'password');
        picon.classList.remove('bi-eye');
        picon.classList.add('bi-eye-slash');
      }
    }
  }

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
                          <li
                            className="breadcrumb-item active"
                            aria-current="page"
                          >
                            Add Vendor
                          </li>
                        </ol>
                      </nav>

                      <h1 className="page-header-title">Add Vendor</h1>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 mb-3 mb-lg-0">
                    <div className="card mb-3 mb-lg-5">
                      <div className="card-header">
                        <h4 className="card-header-title">
                          Add Vendor
                        </h4>
                      </div>

                      <div className="card-body">
                        <form method="post" onSubmit={submitForm}>
                          <div className="row">

                            <div className="col-sm-6">
                              <div className="mb-4">
                                <label htmlFor="vendorName" className="form-label"> Vendor Name <span className="mandatory-field">*</span> </label>
                                <input type="text" className="form-control" name="vendorName" id="vendorName"
                                  placeholder="Vendor Name" onChange={handleFormFieldsChange} />
                                <span className="mandatory-field">{errors["vendorName"]}</span>
                              </div>
                            </div>

                            <div className="col-sm-6">
                              <div className="mb-4">
                                <label htmlFor="email" className="form-label"> Email ID <span className="mandatory-field">*</span></label>
                                <input type="text" className="form-control" name="email" id="email"
                                  placeholder="Email ID" onChange={handleFormFieldsChange} onInput={emailInputHandler} />
                                <span className="mandatory-field">{errors["email"]}</span>
                              </div>
                            </div>


                            <div className="col-sm-6">
                              <div className="mb-4">
                                <label htmlFor="phone" className="form-label"> Phone No. <span className="mandatory-field">*</span></label>
                                <div className="input-group">
                                  <input type="text" className="form-control" name="phone" id="phone" placeholder="Phone No." 
                                  onChange={handleFormFieldsChange} onInput={phoneInputHandler} maxLength={12}/>
                                </div>
                                <span className="mandatory-field">{errors["phone"]}</span>
                              </div>
                            </div>

                            <div className="col-sm-6">
                              <div className="mb-4">
                                <label htmlFor="password" className="form-label"> Password <span className="mandatory-field">*</span> </label>
                                <div className="input-group input-group-merge">

                                <input type="password" className="form-control passwoprd-field" name="password" id="password" placeholder="Password" onChange={handleFormFieldsChange} onInput={passwordInputHandler} />
                                <a className="input-group-append input-group-text password-div">
                                    <i className="bi-eye-slash" onClick={handlepassword} id="passIcon"></i>
                                </a>
                                <span data-bs-toggle="pass_tooltip" data-bs-placement="top" 
                                title={`Password must have \n * Be at least 8 characters \n * Have at least one upper case letter \n * Have at least one lower case letter \n * Have at least one number \n * Have at least one symbol`} className="input-group-text tooltip-custom">
                                  <i className="bi bi-info-circle"></i></span>
                                </div>
                                <span className="mandatory-field">{errors["password"]}</span>
                              </div>
                            </div>

                            <div className="col-sm-6">
                              <div className="mb-4">
                                <label htmlFor="confirmPassword" className="form-label"> Confirm Password <span className="mandatory-field">*</span></label>
                                <div className="input-group input-group-merge">
                                  <input type="password" className="form-control" name="confirmPassword" id="confirmPassword"
                                    placeholder="Confirm Password" onChange={handleFormFieldsChange} 
                                    onInput={confirmPasswordInputHandler} />
                                  <a className="input-group-append input-group-text">
                                    <i className="bi-eye-slash" onClick={handlepassword} id="passIcon1"></i>
                                  </a>
                                </div>
                                <span className="mandatory-field">{errors["confirmPassword"]}</span>
                              </div>
                            </div>
                            
                            <div></div>
                            <div className="text-end">
                              <button type="submit" className="btn btn-primary btn-sm">Submit</button>
                            </div>

                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      </>
  )
}

export default AddVendor