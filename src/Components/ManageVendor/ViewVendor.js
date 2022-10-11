import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
//import CommonMethods from "../Common/CommonMethods";
import ApiServices from "../Common/ApiServices";

const ViewWirehouse = () => {
  
  const location = useLocation();

  const [singleFetchRecord, setSingleFetchRecord] = useState([]);

  useEffect(() => {
    
    const collectionName = "vendorusers";
    const id = location.state.v_id;
    ApiServices.GetSingleRecordById(id, collectionName)
      .then((response) => {
        setSingleFetchRecord(response.data.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <>
      <div className="content container-fluid">
          <div className="row align-items-center mb-3">
            <div className="col-md mb-2 mb-md-0">
              <h1 className="page-header-title">Vendor Information</h1>
            </div>
            <div className="col-md-auto">
              <Link className="btn btn-primary" to="/vendors">
                Back
              </Link>
            </div>
          </div>

        <div className="row">
          <div className="col-md-6">
            <ul className="list-group list-group-horizontal m-2">
              <li className="list-group-item w-50">
                <b>Vendor Name</b>
              </li>
              <li className="list-group-item w-50">
                {singleFetchRecord["vendorName"]}
              </li>
            </ul>
            <ul className="list-group list-group-horizontal m-2">
              <li className="list-group-item w-50">
                <b>Email</b>
              </li>
              <li className="list-group-item w-50">
                {singleFetchRecord["email"]}
              </li>
            </ul>
            <ul className="list-group list-group-horizontal m-2">
              <li className="list-group-item w-50">
                <b>Phone</b>
              </li>
              <li className="list-group-item w-50">
                {singleFetchRecord["phone"]}
              </li>
            </ul>
            <ul className="list-group list-group-horizontal m-2">
              <li className="list-group-item w-50">
                <b>Company Name</b>
              </li>
              <li className="list-group-item w-50">
                {singleFetchRecord["companyName"]}
              </li>
            </ul>
          </div>

          <div className="col-md-6">
            
            <ul className="list-group list-group-horizontal m-2">
              <li className="list-group-item w-50">
                <b>Company Phone</b>
              </li>
              <li className="list-group-item w-50">
                {singleFetchRecord["companyPhone"]}
              </li>
            </ul>

            <ul className="list-group list-group-horizontal m-2">
              <li className="list-group-item w-50">
                <b>Company Email</b>
              </li>
              <li className="list-group-item w-50">
                {singleFetchRecord["companyEmail"]}
              </li>
            </ul>

            <ul className="list-group list-group-horizontal m-2">
              <li className="list-group-item w-50">
                <b>Company CIN</b>
              </li>
              <li className="list-group-item w-50">
              {singleFetchRecord["companyCIN"]}
              </li>
            </ul>
            <ul className="list-group list-group-horizontal m-2">
              <li className="list-group-item w-50">
                <b>Company GSTIN</b>
              </li>
              <li className="list-group-item w-50">
              {singleFetchRecord["companyGSTIN"]}
              </li>
            </ul>
          </div>
          
          <div className="col-md-12">
            <ul className="list-group list-group-horizontal m-2">
              <li className="list-group-item w-25">
                <b>Vendor ID</b>
              </li>
              <li className="list-group-item w-75">
                {singleFetchRecord["_id"]}
              </li>
            </ul>
          </div>

          <div className="col-md-12">
            <ul className="list-group list-group-horizontal m-2">
              <li className="list-group-item w-25">
                <b>Company Website URL</b>
              </li>
              <li className="list-group-item w-75">
                {singleFetchRecord["companyWebsiteURL"]}
              </li>
            </ul>
          </div>
          <div className="col-md-12">
            <ul className="list-group list-group-horizontal m-2">
              <li className="list-group-item w-25">
                <b>Company Address</b>
              </li>
              <li className="list-group-item w-75">
                {singleFetchRecord["companyAddress"]}
              </li>
            </ul>
          </div>
          <div className="col-md-12">
            <ul className="list-group list-group-horizontal m-2">
              <li className="list-group-item w-25">
                <b>Company State</b>
              </li>
              <li className="list-group-item w-75">
                {singleFetchRecord["companyState"]}
              </li>
            </ul>
          </div>
          <div className="col-md-12">
            <ul className="list-group list-group-horizontal m-2">
              <li className="list-group-item w-25">
                <b>Company City</b>
              </li>
              <li className="list-group-item w-75">
                {singleFetchRecord["companyCity"]}
              </li>
            </ul>
          </div>
          <div className="col-md-12">
            <ul className="list-group list-group-horizontal m-2">
              <li className="list-group-item w-25">
                <b>Company Pincode</b>
              </li>
              <li className="list-group-item w-75">
                {singleFetchRecord["companyPincode"]}
              </li>
            </ul>
          </div>
          <div className="col-md-12">
            <ul className="list-group list-group-horizontal m-2">
              <li className="list-group-item w-25">
                <b>Company Address</b>
              </li>
              <li className="list-group-item w-75">
                {singleFetchRecord["companyAddress"]}
              </li>
            </ul>
          </div>


        </div>
      </div>
    </>
  );
};

export default ViewWirehouse;
