import React, { Component } from "react";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import '../../css/AddStore.css';
// import ReactTooltip from "react-tooltip";
// import { Parser } from "html-to-react";

import Header from "../Common/Header";
import SideNav from "../Common/SideNav";    
import Footer from "../Common/Footer";

export default class AddStore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {},
    };
  }

  handleFormFieldsChange = event => {
    let fields = this.state.fields;
    fields[event.target.name] = event.target.value;
    this.setState({ fields });
  }

  formValidate(){
    //console.log(1)
    //return true;
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields["storeName"]) {
      formIsValid = false;
      errors["storeName"] = "Store Name Cannot be empty";
    } else {
      errors["storeName"] = "";
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Email Cannot be empty";
    }

    //Phone
    if (!fields["phone"]) {
      formIsValid = false;
      errors["phone"] = "Phone Cannot be empty";
    }

    //Password
    if(this.passwordInputHandler){
      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "Password Cannot be empty";
      }
    } 
    
    //Confirm Password
    if(this.confirmPasswordInputHandler){
      if (!fields["confirmPassword"]) {
        formIsValid = false;
        errors["confirmPassword"] = "Confirm Password Cannot be empty";
      }
    }
    
    //Shopify Store Url
    if (!fields["shopifyStoreUrl"]) {
      formIsValid = false;
      errors["shopifyStoreUrl"] = "Shopify Store Url Cannot be empty";
    }

    //Shopify Api Access Token
    if (!fields["shopifyApiAccessToken"]) {
      formIsValid = false;
      errors["shopifyApiAccessToken"] = "Shopify Api Access Token Cannot be empty";
    }

    //Shopify Api Key
    if (!fields["shopifyApiKey"]) {
      formIsValid = false;
      errors["shopifyApiKey"] = "Shopify Api Key Cannot be empty";
    }

    //Shopify Api Secret Key
    if (!fields["shopifyApiSecretKey"]) {
      formIsValid = false;
      errors["shopifyApiSecretKey"] = "Shopify Api Secret Key Cannot be empty";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  // Email Validating
  emailInputHandler = e =>{
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!regex.test(this.state.fields["email"])) {
      this.state.errors["email"] = "Please give valid email";
    } else {
      this.state.errors["email"] = "";
    }
  }

  // Phone Masking  
  mask = (value) => {
    let output = [];
      for(let i = 0; i < value.length; i++) {

          if(i === 3){
            output.push(" ");
          }
          if(i === 6){
            output.push(" ");
          }
            output.push(value[i]);

        }
      return output.join("");
  };
  unmask = (value) => {
    let output = value.replace(new RegExp(/[^\d]/, 'g'), '');
    return output;
  };
  phoneInputHandler = (e) => {
    let oldValue;
    let el = e.target,
            newValue = el.value
    ;
    newValue = this.unmask(newValue);
    let regex = new RegExp(/^\d{0,10}$/g);
    if(newValue.match(regex)) {
        newValue = this.mask(newValue);
        el.value = newValue;
    } else {
        el.value = oldValue;
    }
  };
  
  //Password Validating
  passwordInputHandler = e =>{
    let val = false;
    var pass = e.target.value;
    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,16})");
    if (!strongRegex.test(pass)) {
      val = false;
      this.state.errors["password"] = "Please give valid password";
    } else {
      val = true;
      this.state.errors["password"] = "";
    }
    return val;
  }

  //Password Validating
  confirmPasswordInputHandler = e =>{
    let val = false;
    var pass = this.state.fields['password'];
    let cpass = e.target.value; 
    if (cpass != pass) {
      val = false;
      this.state.errors["confirmPassword"] = "Confirm Password & Password doesn't match.";
    } else {
      val = true;
      this.state.errors["confirmPassword"] = "";
    }
    return val;
  }


  submitForm = e => {
    e.preventDefault();
    //window.location.href = "/abc"
    //console.log(11)
    if(this.formValidate()) {
      //console.log(1)
      swal("Thank you!", "Your store added successfully!!!", "success");
      // this.setState = {fields : {}};
      
    } else {
      //alert("Form has errors.");
    }
  }

  handlepassword = e => {
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

  render() {
    return (
      <>
        {sessionStorage.getItem("userToken") ? (
          <div>
            <Header />
            <SideNav />
            <main id="content" role="main" className="main">
              <div className="content container-fluid">
                <div className="page-header">
                  <div className="row align-items-center">
                    <div className="col-sm mb-2 mb-sm-0">
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb breadcrumb-no-gutter">
                          <li className="breadcrumb-item">
                            <Link className="breadcrumb-link" to="/stores">
                              Stores
                            </Link>
                          </li>
                          <li
                            className="breadcrumb-item active"
                            aria-current="page"
                          >
                            Add Store
                          </li>
                        </ol>
                      </nav>

                      <h1 className="page-header-title">Add Store</h1>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 mb-3 mb-lg-0">
                    <div className="card mb-3 mb-lg-5">
                      <div className="card-header">
                        <h4 className="card-header-title">
                          Add Store Information
                        </h4>
                      </div>

                      <div className="card-body">
                        <form method="post" onSubmit={this.submitForm}>
                          <div className="row">

                            <div className="col-sm-6">
                              <div className="mb-4">
                                <label htmlFor="storeName" className="form-label"> Store Name <span className="mandatory-field">*</span> </label>
                                <input type="text" className="form-control" name="storeName" id="storeName"
                                  placeholder="Store Name" onChange={this.handleFormFieldsChange} />
                                <span className="mandatory-field">{this.state.errors["storeName"]}</span>
                              </div>
                            </div>

                            <div className="col-sm-6">
                              <div className="mb-4">
                                <label htmlFor="email" className="form-label"> Email ID <span className="mandatory-field">*</span></label>
                                <input type="text" className="form-control" name="email" id="email"
                                  placeholder="Email ID" onChange={this.handleFormFieldsChange} onInput={this.emailInputHandler} />
                                <span className="mandatory-field">{this.state.errors["email"]}</span>
                              </div>
                            </div>


                            <div className="col-sm-6">
                              <div className="mb-4">
                                <label htmlFor="phone" className="form-label"> Phone No. <span className="mandatory-field">*</span></label>
                                <div className="input-group">
                                  <input type="text" className="form-control" name="phone" id="phone" placeholder="Phone No." onChange={this.handleFormFieldsChange} onInput={this.phoneInputHandler} maxLength={12}/>
                                </div>
                                <span className="mandatory-field">{this.state.errors["phone"]}</span>
                              </div>
                            </div>

                            <div className="col-sm-6">
                              <div className="mb-4">
                                <label htmlFor="password" className="form-label"> Password <span className="mandatory-field">*</span> </label>
                                <div className="input-group input-group-merge">

                                <input type="password" className="form-control passwoprd-field" name="password" id="password" placeholder="Password" onChange={this.handleFormFieldsChange} onInput={this.passwordInputHandler} />
                                <a className="input-group-append input-group-text password-div">
                                    <i className="bi-eye-slash" onClick={this.handlepassword} id="passIcon"></i>
                                </a>
                                <span data-bs-toggle="pass_tooltip" data-bs-placement="top" title={`Password must have \n * Be at least 8 characters \n * Have at least one upper case letter \n * Have at least one lower case letter \n * Have at least one number \n * Have at least one symbol`} className="input-group-text tooltip-custom"><i className="bi bi-info-circle"></i></span>
                                </div>
                                <span className="mandatory-field">{this.state.errors["password"]}</span>
                              </div>
                            </div>

                            <div className="col-sm-6">
                              <div className="mb-4">
                                <label htmlFor="confirmPassword" className="form-label"> Confirm Password <span className="mandatory-field">*</span></label>
                                <div className="input-group input-group-merge">
                                  <input type="password" className="form-control" name="confirmPassword" id="confirmPassword"
                                    placeholder="Confirm Password" onChange={this.handleFormFieldsChange} 
                                    onInput={this.confirmPasswordInputHandler} />
                                  <a className="input-group-append input-group-text">
                                    <i className="bi-eye-slash" onClick={this.handlepassword} id="passIcon1"></i>
                                  </a>
                                </div>
                                <span className="mandatory-field">{this.state.errors["confirmPassword"]}</span>
                              </div>
                            </div>

                            <div className="col-sm-6">
                              <div className="mb-4">
                                <label htmlFor="shopifyStoreUrl" className="form-label"> Shopify Store Url <span className="mandatory-field">*</span></label>
                                <input type="text" className="form-control" name="shopifyStoreUrl" id="shopifyStoreUrl" placeholder="Shopify Store Url" onChange={this.handleFormFieldsChange} />
                                <span className="mandatory-field">{this.state.errors["shopifyStoreUrl"]}</span>
                              </div>
                            </div>

                            <div className="col-sm-6">
                              <div className="mb-4">
                                <label htmlFor="shopifyApiAccessToken" className="form-label"> Shopify Api Access Token <span className="mandatory-field">*</span></label>
                                <input type="text" className="form-control" name="shopifyApiAccessToken" id="shopifyApiAccessToken"
                                  placeholder="Shopify Api Access Token" onChange={this.handleFormFieldsChange} />
                                <span className="mandatory-field">{this.state.errors["shopifyApiAccessToken"]}</span>
                              </div>
                            </div>

                            <div className="col-sm-6">
                              <div className="mb-4">
                                <label htmlFor="shopifyApiKey" className="form-label"> Shopify Api Key <span className="mandatory-field">*</span></label>
                                <input type="text" className="form-control" name="shopifyApiKey" id="shopifyApiKey"
                                  placeholder="Shopify Api Key" onChange={this.handleFormFieldsChange} />
                                <span className="mandatory-field">{this.state.errors["shopifyApiKey"]}</span>
                              </div>
                            </div>

                            <div className="col-sm-6">
                              <div className="mb-4">
                                <label htmlFor="shopifyApiSecretKey" className="form-label"> Shopify Api Secret Key <span className="mandatory-field">*</span></label>
                                <input type="text" className="form-control" name="shopifyApiSecretKey" id="shopifyApiSecretKey"
                                  placeholder="Shopify Api Secret Key" onChange={this.handleFormFieldsChange} />
                                <span className="mandatory-field">{this.state.errors["shopifyApiSecretKey"]}</span>
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
            </main >
      <Footer />
          </div >
        ) : (
      (window.location.href = "/")
    )
  }
      </>
    );
  }
}
