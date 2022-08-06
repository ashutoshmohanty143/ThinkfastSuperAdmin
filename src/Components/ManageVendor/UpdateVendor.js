import React , { useState, useEffect} from 'react';
import { Link, useLocation } from "react-router-dom";
import swal from 'sweetalert';

import ApiServices from '../Common/ApiServices';
import CommonMethods from '../Common/CommonMethods';

const UpdateVendor = () => {

  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});

  const location = useLocation();

  useEffect(() =>{ 
    const collectionName = "vendorusers";
    const id = location.state.vendor_id;
    // console.log(id);
    ApiServices.GetSingleRecordById(id, collectionName)
        .then((response) => {
          setFields(response.data.data);
        })
        .catch((error) => {
            console.log("error", error);
        });
  }, []);

  // console.log(fields['vendorName']);

  const handleFormFieldsChange = event => {
    let fields = fields; 
    fields[event.target.name] = event.target.value;
    setFields(fields);
    // setFields(event.target.value);
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

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Email Cannot be empty";
    }  else if (!CommonMethods.emailValidator(fields["email"])) {
      formIsValid = false;
      errors["email"] = "Please give valid email.";
    } else if (fields["email"] != this.state.fields['email']){
      formIsValid = false;
      errors["email"] = "Email ID can't be changed.";
    }

    //Phone
    if (!fields["phone"]) {
      formIsValid = false;
      errors["phone"] = "Phone Cannot be empty";
    } else if (fields["phone"].length != 12) {
      formIsValid = false;
      errors["phone"] = "Phone should be 10 digits.";
    }

    setErrors(errors);
    return formIsValid;
  }

  // Email Validating
  const emailInputHandler = (e) =>{
    if (!CommonMethods.emailValidator(e.target.value)) {
      errors["email"] = "Please give valid email";
    } else {
      errors["email"] = "";
    }
  }   

  // Phone Masking  
  const phoneInputHandler = e => {
    if(!CommonMethods.phoneMasking(e)){
      errors["phone"] = "Please Give Only Numbers";
    } else {
      errors["phone"] = "";
    }
  }


  const submitForm = event => {
    event.preventDefault();
    if(formValidate()) {   
      let { vendorName, email, phone } = fields;
      // let finalPassword = window.btoa(password);
      let path = window.location.pathname;
      let id = path.split('/')[2];
      const formData = {
          "collection" : "vendorusers",
          "id": id,
          "data": {
                  "vendorName": vendorName,
                  // "email": email,   
                  "phone": phone
          },
          "meta" : {
            "duplicate" : ["email","phone"],
            "isPassword" : true,
            "passwordKey" : "password"
          }
      };   
      ApiServices.UpdateRecord(formData).then(response => {    
          if(response.status == 200 && response.data.status){
            swal({
                title: "Thank you!",
                text: `Vendor Updated successfully!!!`,
                type: "success",
            }).then((value) => {
                if (value) {
                    this.props.navigate('/vendors');
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

  let { vendorName, email, phone } = fields;

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
                            aria-current="page">
                            Update Vendor
                          </li>
                        </ol>
                      </nav>

                      <h1 className="page-header-title">Update Vendor</h1>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 mb-3 mb-lg-0">
                    <div className="card mb-3 mb-lg-5">
                      <div className="card-header">
                        <h4 className="card-header-title">
                          Update Vendor Information
                        </h4>
                      </div>

                      <div className="card-body">
                        <form method="post" onSubmit={submitForm}>
                          <div className="row">

                            <div className="col-sm-6">
                              <div className="mb-4">
                                <label htmlFor="vendorName" className="form-label"> Vendor Name <span className="mandatory-field">*</span> </label>
                                <input type="text" className="form-control" name="vendorName" id="vendorName"
                                  placeholder="Store Name" onChange={handleFormFieldsChange} 
                                  value={vendorName || ''} />
                                <span className="mandatory-field">{errors["vendorName"]}</span>
                              </div>
                            </div>

                            <div className="col-sm-6">
                              <div className="mb-4">
                                <label htmlFor="email" className="form-label"> Email ID <span className="mandatory-field">*</span></label>
                                <input type="text" className="form-control" name="email" id="email"
                                  placeholder="Email ID" onChange={handleFormFieldsChange} 
                                  onInput={emailInputHandler} value={email || ''}  disabled={true} />
                                <span className="mandatory-field">{errors["email"]}</span>
                              </div>
                            </div>


                            <div className="col-sm-6">
                              <div className="mb-4">
                                <label htmlFor="phone" className="form-label"> Phone No. <span className="mandatory-field">*</span></label>
                                <div className="input-group">
                                  <input type="text" className="form-control" name="phone" id="phone" 
                                  placeholder="Phone No." onChange={handleFormFieldsChange} 
                                  onInput={phoneInputHandler} maxLength={12} value={phone || ''} />
                                </div>
                                <span className="mandatory-field">{errors["phone"]}</span>
                              </div>
                            </div>
                            
                            <div></div>
                            <div className="text-end">
                              <button type="submit" className="btn btn-primary btn-sm">Save Data</button>
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

export default UpdateVendor