import React, { Component } from "react";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import { WithRouter } from '../Common/WithRouter';
import '../../css/AddStore.css';

import Header from "../Common/Header";
import SideNav from "../Common/SideNav";    
import Footer from "../Common/Footer";

import ApiServices from '../Common/ApiServices';
import CommonMethods from '../Common/CommonMethods';

class AddStore extends Component {
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
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "Password Cannot be empty";
    }
    
    //Confirm Password
    if (!fields["confirmPassword"]) {
      formIsValid = false;
      errors["confirmPassword"] = "Confirm Password Cannot be empty";
    }
    
    //Shopify Store Url
    if (!fields["shopifyStoreUrl"]) {
      formIsValid = false;
      errors["shopifyStoreUrl"] = "Shopify Store Url Cannot be empty";
    } else {
      errors["shopifyStoreUrl"] = "";
    }

    //Shopify Api Access Token
    if (!fields["shopifyApiAccessToken"]) {
      formIsValid = false;
      errors["shopifyApiAccessToken"] = "Shopify Api Access Token Cannot be empty";
    } else {
      errors["shopifyApiAccessToken"] = "";
    }

    //Shopify Api Key
    if (!fields["shopifyApiKey"]) {
      formIsValid = false;
      errors["shopifyApiKey"] = "Shopify Api Key Cannot be empty";
    } else {
      errors["shopifyApiKey"] = "";
    }

    //Shopify Api Secret Key
    if (!fields["shopifyApiSecretKey"]) {
      formIsValid = false;
      errors["shopifyApiSecretKey"] = "Shopify Api Secret Key Cannot be empty";
    } else {
      errors["shopifyApiSecretKey"] = "";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  // Email Validating
  emailInputHandler = (e) =>{
    if (!CommonMethods.emailValidator(e.target.value)) {
      this.state.errors["email"] = "Please give valid email";
    } else {
      this.state.errors["email"] = "";
    }
  }   

  // Phone Masking  
  phoneInputHandler = e => {
    if(!CommonMethods.phoneMasking(e)){
      this.state.errors["phone"] = "Please Give Only Numbers";
    } else {
      this.state.errors["phone"] = "";
    }
  }
  
  
  //Password Validating
  passwordInputHandler = e =>{    
    if (!CommonMethods.passwordValidator(e.target.value)) {
      this.state.errors["password"] = "Please give valid password";
    } else {
      this.state.errors["password"] = "";
    }
  }

  //Confirm Password Validating
  confirmPasswordInputHandler = e =>{
    var pass = this.state.fields['password'];
    let cpass = e.target.value;
    if (!CommonMethods.passwordValidator(cpass)) {
      this.state.errors["confirmPassword"] = "Please give valid password";
    } else {
      if (cpass != pass) {
        this.state.errors["confirmPassword"] = "Confirm Password & Password doesn't match.";
      } else {
        this.state.errors["confirmPassword"] = "";
      }
    } 
  }

  submitForm = event => {
    event.preventDefault();
    if(this.formValidate()) {   
      let { storeName, email, phone, password, shopifyStoreUrl, shopifyApiAccessToken, shopifyApiKey, shopifyApiSecretKey } = this.state.fields;
      const formData = {
          "collection" : "stores",
          "data": {
                  "storeName": storeName,
                  "email": email,
                  "phone": phone,
                  "password": password,
                  "shopifyStoreUrl": shopifyStoreUrl,
                  "shopifyApiAccessToken": shopifyApiAccessToken,
                  "shopifyApiKey": shopifyApiKey,
                  "shopifyApiSecretKey": shopifyApiSecretKey
          },
          "meta" : {
              "duplicate" : ['storeName'],
              "multiInsert": false
          }
      };   
      ApiServices.AddRecord(formData).then(response => {    
          if(response.status == 200 && response.data.status){
              swal("Thank you!", "Store added successfully!!!", "success").then((value) => {
                  if(value){
                      this.props.navigate('/stores');
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
                                  placeholder="Store Name" onChange={this.handleFormFieldsChange} onInput={this.snvalidate} />
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
export default WithRouter(AddStore);